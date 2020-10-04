import React, { ChangeEventHandler, FormEvent, FormEventHandler, useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

interface SearchFormProps {
  targetValue: any
  placeholderValue: string
  handleSubmit: FormEventHandler
  handleChange: ChangeEventHandler
}

const SearchForm: React.FC<SearchFormProps> = ({ targetValue, placeholderValue, handleSubmit, handleChange }: SearchFormProps) => {
  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group controlId="searchForm">
        <Form.Control
          size="lg"
          type="text"
          placeholder={ placeholderValue }
          value={ targetValue }
          onChange={ handleChange }
        />
      </Form.Group>

      <Button variant="primary" type="submit">Let's go!</Button>
    </Form>
  )
}

export default SearchForm
