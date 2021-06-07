// Imports
import asyncHandler from 'express-async-handler'

// Import models
import Item from '../models/model.js'

// MailGun
import mailTo from '../mail.js'

export const getItem = asyncHandler(async (req, res) => {
  const items = await Item.find({})

  if (items) {
    res.json(items)
  } else {
    throw new Error('No Items')
  }
})

export const newItem = asyncHandler(async (req, res) => {
  const item = new Item({
    name: 'Caleb',
  })

  await item.save()
  res.json(item)
})

export const mail = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.query
  mailTo(name, email, subject, message, (err, data) => {
    res.send({
      name,
      email,
      subject,
      message,
      formResponse: err,
    })
  })
})
