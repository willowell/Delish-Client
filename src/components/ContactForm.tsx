import React, {
  FormEventHandler,
  useEffect,
  useRef,
  useState
} from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// ? Form validation based on the method described here:
// ? https://medium.com/@kitson.broadhurst/simple-form-validation-with-react-hooks-usestate-and-useeffect-57620d808cc8

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState('')

  const [disabled, setDisabled] = useState(true)

  const firstRender = useRef(true)

  useEffect(() => {
    const isEmailValid = (): boolean => {
      if (email === '') {
        setEmailError('Email cannot be empty!')
        return false
      } else {
        setEmailError('')
        return true
      }
    }

    const isMessageValid = (): boolean => {
      if (message === '') {
        setMessageError('Message cannot be empty!')
        return false
      } else {
        setMessageError('')
        return true
      }
    }

    if (firstRender.current) {
      firstRender.current = false
      return
    }

    // ? See https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    // ? for why this function is here rather than outside useEffect()
    // ? Basically, it is because setDisabled(!isFormValid()) makes this
    // ? function a dependency.
    const isFormValid = (): boolean => {
      let isValid = true

      if (!isEmailValid()) {
        isValid = false
      }

      if (!isMessageValid()) {
        isValid = false
      }

      return isValid
    }

    setDisabled(!isFormValid())
  }, [email, message])

  const handleSubmit: FormEventHandler<any> = (event) => {
    event.preventDefault()
    alert(`Submitting "${message}" from "${email}"!`)
  }

  return (
    <Form onSubmit={ handleSubmit } className='py-3'>
      <Form.Group controlId='contactForm.email'>
        <Form.Label as='h3' className='text-center'>Email Address</Form.Label>
        <Form.Control
          size='lg'
          type='email'
          placeholder='john.doe@abc.com'
          value={ email }
          onChange={ event => setEmail(event.target.value) }
          isValid={ emailError !== '' }
          isInvalid={ !(emailError !== '') }
        />
        <Form.Text className='text-muted'>
          { emailError !== '' ? 'Your email is safe with us!' : emailError }
        </Form.Text>
      </Form.Group>

      <Form.Group controlId='contactForm.message'>
        <Form.Label as='h3' className='text-center'>Message</Form.Label>
        <Form.Control
          as='textarea'
          rows={ 3 }
          placeholder='Your message here'
          value={ message }
          onChange={ event => setMessage(event.target.value) }
          isValid={ messageError !== '' }
          isInvalid={ !(messageError !== '') }
        />
        <Form.Text className='text-muted'>
          { messageError !== '' ? 'We\'ll protect your message with our strongest plastic wrap!' : messageError }
        </Form.Text>
      </Form.Group>

      <div className='text-center'>
        <Button variant='primary' size='lg' type='submit' disabled={ disabled }>
          Submit
        </Button>
      </div>
    </Form>
  )
}

export default ContactForm
