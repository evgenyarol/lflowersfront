import React, { useEffect } from 'react';
import {
  Icon,
  Select,
  Table,
  Popover,
  message,
  Popconfirm,
  notification,
} from 'antd';
import { connect } from 'react-redux';

import MainLayout from '../../../common/components/admin/Main';
import { actions as orderAdminActions } from '../../../redux/modules/orderAdmin';
import { actions as employeeActions } from '../../../redux/modules/employee';
import { formatDate } from '../../../utils/helpers';

const { Option } = Select;

const OrderDashboard = ({
  getStatuses,
  getOrders,
  orders,
  orderStatuses,
  getEmployees,
  employees,
  deleteOrder,
  assignEmployee,
}) => {
  useEffect(() => {
    getStatuses();
    getOrders();
    getEmployees();
  }, []);

  const confirm = (id) => {
    deleteOrder(id);
    message.success('Order deleted!');
  };

  const columns = [
    {
      title: 'Имя',
      dataIndex: 'login',
      key: 'login',
      render: (text, record) => {
        const content = (
          <div>
            {record.product.length && record.product[0].title ? (
              record.product.map((item) => (
                <p key={item._id}>{`${item.title}: ${item.count}`}</p>
              ))
            ) : (
              <span>No order</span>
            )}
          </div>
        );
        return (
          <Popover content={content} placement="right" title="Order">
            <span>{text}</span>
          </Popover>
        );
      },
    },
    {
      title: 'Сумма',
      dataIndex: 'total',
      key: 'total',
      render: (text) => <span>{`$${text}`}</span>,
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Адрес',
      dataIndex: 'adress',
      key: 'adress',
    },
    {
      title: 'Комментарий',
      dataIndex: 'comment',
      key: 'comment',
    },
    {
      title: 'Создан',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 100,
      render: (text) => (text ? formatDate(text) : text),
    },
    {
      title: 'Действия',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Вы уверены?"
          onConfirm={() => confirm(record._id)}
          okText="Да"
          cancelText="Нет"
        >
          <Icon style={{ fontSize: 20 }} type="delete" />
        </Popconfirm>
      ),
      align: 'center',
    },
  ];

  return (
    <MainLayout>
      <Table
        pagination={false}
        columns={columns}
        dataSource={orders}
        rowKey="_id"
      />
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orderAdmin.orders,
  orderStatuses: state.orderAdmin.orderStatuses,
  employees: state.employee.employees,
});

const mapDispatchToProps = {
  ...orderAdminActions,
  ...employeeActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDashboard);