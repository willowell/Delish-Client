import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, KeyboardEventHandler, useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useStateWithLocalStorage } from '../lib/hooks'

interface SearchFormProps {
  targetValue: any
  placeholderValue: string
  handleSubmit: FormEventHandler
  handleChange: ChangeEventHandler
  handleKeyPress: KeyboardEventHandler
}

const SearchForm: React.FC<SearchFormProps> = ({ targetValue, placeholderValue, handleSubmit, handleChange, handleKeyPress }: SearchFormProps) => {
  const [lastTerm, setLastTerm] = useStateWithLocalStorage('lastTerm')
  
  const onSubmit: FormEventHandler<any> = (event) => {
    event.preventDefault()
    handleSubmit(event)
  }

  const onChange: ChangeEventHandler<any> = (event) => {
    setLastTerm(event.target.value)
    handleChange(event)
  }

  const onKeyPress: KeyboardEventHandler<any> = (event) => {
    handleKeyPress(event)
  }

  return (
    <Form onSubmit={ onSubmit }>
      <Form.Group controlId='searchForm'>
        <Form.Control
          size='lg'
          type='text'
          placeholder={ placeholderValue }
          value={ lastTerm || targetValue }
          onChange={ onChange }
          onKeyPress={ onKeyPress }
        />
      </Form.Group>

      <Button variant='primary' type='submit'>Let's go!</Button>
    </Form>
  )
}

export default SearchForm
