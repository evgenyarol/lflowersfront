import React from 'react';
import { Card } from 'antd';

import './style.css';

class PaymentCard extends React.Component {
  state = {
    name: '',
    created: '',
    total: '',
    footer: '',
  };

  componentWillMount() {
    this.getParams();
  }

  getParams = () => {
    const params = this.props;
    this.setState({
      ...params,
    });
  };

  render() {
    const { name, created, footer, total } = this.state;

    return (
      <Card style={{ width: 220 }}>
        <div style={{ display: 'inline' }} className="paymentCard">
          {total && <span className="sumTop">{`$${total}`}</span>}
          {name && <span className="nameTop">{name}</span>}
          {created && <span className="numberTop">{created}</span>}
          {footer && <div className="footerTop">{footer}</div>}
        </div>
      </Card>
    );
  }
}

export default PaymentCard;
