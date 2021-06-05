import React from 'react'

import Nav from './Nav'

import '../css/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <Nav />
      <h1 className='contact__heading'>Contact</h1>
      <span className='contact__sub'>
        Email me with any inquiries or call at 717-826-3754. I would be happy to
        answer any questions you may have!
      </span>
      <form>
        <input type='text' placeholder='Name' id='input-name' />
        <input type='text' placeholder='Email' id='input-email' />
        <input type='text' placeholder='Subject' id='input-subject' />
        <textarea placeholder='Message' id='input-message'></textarea>
        <input type='submit' value='Send Message' />
      </form>

      <footer className='footer_copyright'>
        Hosted by De Stefano Enterprises, LLC, all rights reserved
      </footer>
    </div>
  )
}

export default Contact
