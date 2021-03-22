import React from 'react'
import { Form, Input, Button } from 'antd'


export function Text({ label, name, required, initialValue, ...props }) {
    return (
        <div>
       <Form.Item
            wrapperCol={{ span: 5 }}
            labelCol={{ span: 2 }}
            label={label}
             name={name} 
             initialValue={initialValue}
             rules={[{required, message: `${label} الزامی است.`}]}>
             <Input {...props} />
        </Form.Item>
        </div>
 
    )
}

export function TextArea({label, name, initialValue, required}) {
    return (
      <Form.Item
        label={ label }
        wrapperCol={{span: 5}}
        labelCol={ {span: 2} }
        name={ name }
        initialValue={ initialValue }
        rules={ [
          {
            required: required,
            message: `${ label } الزامی است`
          }
        ] }
      >
        <Input.TextArea/>
      </Form.Item>
    )
  }

  export function Submit({label = 'ذخیره', type='primary', size='large'}) {
    return (
      <Form.Item>
        <Button type={ type } size={ size } htmlType="submit">
          { label }
        </Button>
      </Form.Item>
    )
  }