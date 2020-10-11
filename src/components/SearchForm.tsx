import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, KeyboardEventHandler, useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useStateWithLocalStorage } from '../lib/hooks'

interface SearchFormProps {
  targetValue: any
  placeholderValue: string
  handleSubmit: FormEventHandler
  handleChange: ChangeEventHandler
}

const SearchForm: React.FC<SearchFormProps> = 
  ({ targetValue, placeholderValue, handleSubmit, handleChange }: SearchFormProps) => {
  const [lastTerm, setLastTerm] = useStateWithLocalStorage('lastTerm')
  
  const onSubmit: FormEventHandler<any> = (event) => {
    event.preventDefault()
    handleSubmit(event)
  }

  const onChange: ChangeEventHandler<any> = (event) => {
    setLastTerm(event.target.value)
    handleChange(event)
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
        />
      </Form.Group>
    </Form>
  )
}

export default SearchForm
