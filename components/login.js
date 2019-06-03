import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import React, { Component } from "react";
import Link from 'next/link';
class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        };
    }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleLoginSubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Row type="flex" justify="center" align="middle" style={{minHeight:'100vh'}}>
        <Col span={5} >
        <div style={{textAlign:'center'}}>
        <a  href="/signin"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg></a>
                <h3>Sign in</h3>
                <p className="text-muted"> get started with our service </p>
            </div>
      <Form onSubmit={this.handleSubmit} layout="vertical" hideRequiredMark ={true} className="login-form">
        <Form.Item label="Username">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item label="Password">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Link  href="/password/forgot" >
            <a className="login-form-forgot" style={{float: 'right',fontSize:'12px'}} >Forgot password </a>
          </Link>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%',marginTop:'1rem'}}>
            Log in
          </Button>
          <div style={{textAlign:'center'}}>
            <small className="text-muted">
                <span>Don't have an account yet? </span>
                <Link href="/signup"><a> register now! </a></Link>
            </small>
            
          </div>
          
        </Form.Item>
      </Form>
      </Col>
      </Row>
    );
  }
}

export default Form.create({ name: 'login' })(LoginForm);
