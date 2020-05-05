import React, { useState, useEffect } from 'react';
import { BackTop, Col, Layout, Row, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';

import '../../../../../style/css/style.css';
import { withRouter } from 'react-router';

const MainLayout = ({ children, match }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');
  useEffect(() => {
    setSelectedMenuItem(match.path);
  }, [match.path]);
  return (
    <Layout style={{ height: '100vh' }}>
      <BackTop />
      <Layout>
        <Layout.Header>
          <Row>
            <Col md={24}>
              <h1 style={{ color: '#fff' }}>L'FLOWERS ADMIN</h1>
            </Col>
          </Row>
        </Layout.Header>
        <Layout>
          <Layout.Sider>
            <Menu selectedKeys={[selectedMenuItem]} mode="inline" theme="dark">
              <Menu.Item key="/admin/orders">
                <Link to="/admin/orders">Заказы</Link>
              </Menu.Item>
              <Menu.Item key="/admin/employees">
                <Link to="/admin/employees">Работники</Link>
              </Menu.Item>
            </Menu>
          </Layout.Sider>
          <Layout.Content>
            <div style={{ padding: 40 }}>{children}</div>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default withRouter(MainLayout);
