import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Container from 'react-bootstrap/Container'

import ContactForm from '../components/ContactForm'

const Contact: React.FC<RouteComponentProps> = (props) => {
  return (
    <Container>
      <ContactForm />
    </Container>
  )
}

export default Contact
