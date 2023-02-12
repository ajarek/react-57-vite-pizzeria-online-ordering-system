import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { Form } from '../../hooks/Form/Form'
import './Contact.css'

const Contact = () => {
  const { setSendMessage } = useContext(AppContext)
  const onSubmit = (data) => {
    setSendMessage(true)
  }
  return (
    <div
      className='contact'
      id='post'
    >
      <Form onSubmit={onSubmit} />
    </div>
  )
}

export default Contact
