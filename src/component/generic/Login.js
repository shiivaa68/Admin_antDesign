import React from 'react'
import {Form,Input,Button,Row,Col,Divider} from 'antd'
import {login} from '../../redux/actions/user'
import {useDispatch,useSelector} from 'react-redux'


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };


  const Login = () => {

   const dispatch = useDispatch();
const loginSubmitLoading = useSelector(state =>state.loginSubmitLoading)

console.log(loginSubmitLoading,'loginSubmitLoading')

    const onFinish = (values) => {
        console.log('Success: login', values);
dispatch(login(values))
        
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed: lofin', errorInfo);
      };
    
 return(

    <Row justify="space-around" align="middle" style={{marginTop: "150px"}}>
      <Col span={8}>
        <Divider>ورود به پنل ادمین</Divider>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="نام‌کاربری"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="رمزعبور"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" loading={loginSubmitLoading}>
              ورود
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
)
  }

  export default Login;