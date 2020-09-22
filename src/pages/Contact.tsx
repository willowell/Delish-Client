import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Container from 'react-bootstrap/Container'

import ContactForm from '../components/ContactForm'

export default function Contact (props: RouteComponentProps) {
  return (
    <Container>
      <ContactForm />
    </Container>
  )
}
