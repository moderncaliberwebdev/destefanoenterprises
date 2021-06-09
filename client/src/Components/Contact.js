import React from 'react'
import axios from 'axios'

import Nav from './Nav'
import Menu from './Menu'

import '../css/Contact.css'

function Contact() {
  const name = document.getElementById('input-name')
  const email = document.getElementById('input-email')
  const subject = document.getElementById('input-subject')
  const themessage = document.getElementById('themessage')
  const message = document.getElementById('input-message')
  const formResponse = document.getElementById('contact__form-res')
  const inputs = [name, email, subject, message]

  const formSubmit = (e) => {
    e.preventDefault()

    if (themessage.value === '') {
      formResponse.textContent = 'Sending...'
      axios
        .get(
          //use /api for dev and take it away for prod
          `/api/email?name=${name.value}&email=${email.value}&subject=${subject.value}&message=${message.value}`
        )
        .then((res) => {
          const data = res.data
          if (data.formResponse) {
            formResponse.textContent = data.formResponse
          } else {
            formResponse.textContent = 'Message Sent'
            inputs.forEach((input) => {
              input.value = ''
            })
          }
        })
    }
  }

  return (
    <div className='contact'>
      <Menu />
      <Nav />
      <h1 className='contact__heading'>Contact</h1>
      <span className='contact__sub'>
        Email me with any inquiries or call at 717-826-3754. I would be happy to
        answer any questions you may have!
      </span>
      <span id='contact__form-res'></span>
      <div className='contact__form'>
        <input type='text' placeholder='Name' id='input-name' name='name' />
        <input type='text' placeholder='Email' id='input-email' name='email' />
        <input
          type='text'
          placeholder='Subject'
          id='input-subject'
          name='subject'
        />
        <input
          type='text'
          placeholder='the message'
          id='themessage'
          name='msg'
        />
        <textarea
          placeholder='Message'
          id='input-message'
          name='message'
        ></textarea>
        <input type='submit' value='Send Message' onClick={formSubmit} />
      </div>

      <footer className='footer_copyright'>
        Hosted by De Stefano Enterprises, LLC, all rights reserved
      </footer>
    </div>
  )
}

export default Contact
