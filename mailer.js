// node dependancy
const email = require('emailjs/email')
const details = require('./constant')


try {
  // setup email server smtp
  const server = email.server.connect({
    user: details.username,
    password: details.password,
    host: details.email,
    ssl: true,
    port: 465,
    authentication: ['LOGIN'],
    timeout: 5000
  })

  //
  console.log('Connected to mail server')

  //
  // enter your own username & password of the email provider you want to use
  //
  server.send({
    text: 'Hello World!',
    from: details.username,
    to: details.targetmail,
    subject: 'Email test'
  }, (err, message) => {
    console.log(err || message)
  })

} catch (error) {
  console.log(error)
}
