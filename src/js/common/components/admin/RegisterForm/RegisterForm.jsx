import React from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../../../../style/css/style.css';
import { actions as orderAdminActions } from '../../../../redux/modules/orderAdmin';

const FormItem = Form.Item;

class RegisterFormComponent extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const { form, signUp } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        signUp(values);
      }
    });
  };

  render() {
    const { form } = this.props;
    return (
      <Card style={{ width: 350 }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem label="Username">
            {form.getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem label="Password">
            {form.getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <div className="form-actions">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign up
            </Button>
            <span className="ml-3 register-link">
              <Link to="/admin">Login</Link>
            </span>
          </div>
        </Form>
      </Card>
    );
  }
}

const RegisterForm = Form.create({
  name: 'register_form',
})(RegisterFormComponent);

const mapDispatchToProps = {
  ...orderAdminActions,
};

export default connect(
  null,
  mapDispatchToProps
)(RegisterForm);
