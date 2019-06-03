import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import React, { Component } from "react";
import Router from 'next/router';
import Link from 'next/link';
class ForgotForm extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            username: null
        };
    }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleForgotSubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Row type="flex" justify="center" align="middle" style={{minHeight:'100vh'}}>
        <Col span={5} >
        <div style={{textAlign:'center'}}>
        <Link  href="/login"><a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg></a></Link>
                <h3>Recover your password</h3>
                <p className="text-muted"> receive password reset instructions. </p>
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
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%',marginTop:'1rem'}}>
            Reset password
          </Button>
          <div style={{textAlign:'center'}}>
            <small className="text-muted">
                <span>Don't have an account yet? </span>
                <Link href="/signup"><a>register now!</a></Link>
            </small>
            
          </div>
          
        </Form.Item>
      </Form>
      </Col>
      </Row>
    );
  }
}

export default Form.create({ name: 'forgot' })(ForgotForm);
