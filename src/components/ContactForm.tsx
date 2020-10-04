import React, { FormEvent, useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    alert(`Submitting "${message}" from "${email}"!`)
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group controlId='contactForm.email'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          size='lg'
          type='email'
          placeholder='john.doe@abc.com'
          value={ email }
          onChange={ event => setEmail(event.target.value) }
        />
        <Form.Text className='text-muted'>
                    Your email is safe with us!
        </Form.Text>
      </Form.Group>

      <Form.Group controlId='contactForm.message'>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          placeholder='Your message here'
          value={ message }
          onChange={ event => setMessage(event.target.value) }
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
                Submit
      </Button>
    </Form>
  )
}

export default ContactForm
