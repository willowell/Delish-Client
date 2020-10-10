import React, { FormEvent, useEffect, useRef, useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// ? Form validation based on the method described here:
// ? https://medium.com/@kitson.broadhurst/simple-form-validation-with-react-hooks-usestate-and-useeffect-57620d808cc8

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [emailError, setEmailError] = useState('')

  const firstRender = useRef(true)

  useEffect(() => {
    // ? See https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    // ? for why this function is here rather than outside useEffect()
    // ? Basically, it is because setDisabled(!isFormValid()) makes this
    // ? function a dependency.
    const isFormValid = (): boolean => {
      if (email === '') {
        setEmailError('Email cannot be blank!')
        return false
      } else {
        setEmailError('')
        return true
      }
    }

    if (firstRender.current) {
      firstRender.current = false
      return
    }

    setDisabled(!isFormValid())
  }, [email])

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
          isValid={ !disabled }
          isInvalid={ disabled }
        />
        <Form.Text className='text-muted'>
          { !emailError ? 'Your email is safe with us!' : emailError }
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

      <Button variant='primary' type='submit' disabled={ disabled }>
        Submit
      </Button>
    </Form>
  )
}

export default ContactForm
