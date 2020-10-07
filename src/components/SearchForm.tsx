import React, { ChangeEventHandler, FormEvent, FormEventHandler, KeyboardEventHandler, useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

interface SearchFormProps {
  targetValue: any
  placeholderValue: string
  handleSubmit: FormEventHandler
  handleChange: ChangeEventHandler
  handleKeyPress: KeyboardEventHandler
}

const SearchForm: React.FC<SearchFormProps> = ({ targetValue, placeholderValue, handleSubmit, handleChange, handleKeyPress }: SearchFormProps) => {
  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group controlId='searchForm'>
        <Form.Control
          size='lg'
          type='text'
          placeholder={ placeholderValue }
          value={ targetValue }
          onChange={ handleChange }
          onKeyPress={ handleKeyPress }
        />
      </Form.Group>

      <Button variant='primary' type='submit'>Let's go!</Button>
    </Form>
  )
}

export default SearchForm
