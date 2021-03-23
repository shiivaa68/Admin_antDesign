import React from 'react'
import { Form } from 'antd'
import { Text, TextArea, Submit } from '../utils/Fields'

function New () {

  function onFinish(values) {
    console.log(values)
  }

  return <>
    <Form onFinish={onFinish}>
      <Text label="نام" name="name" required={true}/>
      <Text label="نام‌کاربری" name="username" required={true} maxLength={12}/>
      <TextArea label="بیو" name="bio"/>
      <Submit />
    </Form>
  </>
}

export default New