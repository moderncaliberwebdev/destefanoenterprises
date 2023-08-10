import sgMail from '@sendgrid/mail'
import validator from 'validator'
import dotenv from 'dotenv'

dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const mailTo = (name, email, subject, message, callback) => {
  //validation
  if (!name || !email || !subject || !message) {
    return callback('Please fill in all fields', undefined)
  } else if (!validator.isEmail(email)) {
    return callback('Provide a valid email', undefined)
  } else {
    const msg = {
      to: 'harold@destefanoenterprises.com',
      from: {
        name: 'Destefano Enterprises Contact',
        email: 'cmartin@moderncaliber.com',
      },
      templateId: 'd-4a8893a843a640a4bece96be72b1424e',
      dynamic_template_data: {
        name,
        email,
        subject,
        message,
      },
    }
    //ES8
    const sendSGMail = async () => {
      try {
        await sgMail.send(msg)

        callback(undefined, { sent: true })
      } catch (error) {
        console.error(error)

        if (error.response) {
          console.error(error.response.body)
        }
      }
    }
    sendSGMail()
  }
}

export default mailTo
