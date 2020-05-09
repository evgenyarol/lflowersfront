import React, { useState, useEffect } from 'react';

import {
  Icon,
  Select,
  Table,
  Modal,
  Button,
  Divider,
  Input,
  message,
  Popconfirm,
} from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MainLayout from '../../../common/components/admin/Main';

import { actions as employeeActions } from '../../../redux/modules/employee';
import { actions as orderAdminActions } from '../../../redux/modules/orderAdmin';
import { formatDate } from '../../../utils/helpers';

const { Option } = Select;
const EmployeeDashboard = ({
  employee,
  setName,
  setSurname,
  employees,
  getOrders,
  setType,
  getEmployeeStatuses,
  getEmployeeTypes,
  employeeStatuses,
  employeeTypes,
  getEmployees,
  createEmployee,
  editEmployee,
  editEmployeeTypes,
  deleteEmployee,
  history,
}) => {
  useEffect(() => {
    getEmployeeStatuses();
    getEmployeeTypes();
    getEmployees();
    getOrders();
  }, []);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const showModal = () => {
    setModalIsVisible(true);
  };

  const confirm = (id) => {
    deleteEmployee(id);
    message.success('Работник удален!');
  };

  const handleOk = (e) => {

      createEmployee({
        lastname: employee.lastname,
        firstname: employee.firstName,
        employeeType : employee.employeeType
      });
    

    setModalIsVisible(false);
  };

  const handleCancel = () => {
    setModalIsVisible(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const columns = [
    {
      title: 'Имя',
      dataIndex: 'firstname',
      key: 'firstname',
      width: 200,
      render: (text, record) => (
        <span
          onClick={() =>
            history.push(`/admin/employee/${record._id}`, { employee: record })
          }
          style={{ cursor: 'pointer' }}
        >
          {`${record.firstname}`}
        </span>
      ),
    },
    {
      title: 'Статус',
      dataIndex: 'employeeType',
      key: 'employeeType',
      render: (text, record) => {
        return (
          <Select defaultValue="Свободен" style={{ width: 120 }}>
      <Option value="Свободен">Свободен</Option>
      <Option value="Заказ">Взял заказ</Option>
    </Select>
        );
      },
    
  },
    {
      title: 'Создан',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => (text ? formatDate(text) : text),
    },
    {
      title: 'Заказ',
      dataIndex: 'employeeStatus',
      key: 'employeeStatus',
      render: (text) => {
        return (
          <Select defaultValue="Без заказа" style={{ width: 140 }}>
      <Option value="Без заказа">Без заказа</Option>
      <Option value="Виктория">Линник Илья</Option>
      <Option value="Лада">Неверович Егор</Option>
      <Option value="Илья">Курта Владислав</Option>
      <Option value="Женя">Арол Евгений</Option>
    </Select>
        );
      },
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
      <Button onClick={showModal}>Добавить работника</Button>
      <Divider />
      <Table
        pagination={false}
        columns={columns}
        dataSource={employees}
        rowKey="_id"
      />
      <Modal
        title="Добавление работника"
        visible={modalIsVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <span style={{ fontSize: 16 }}>Имя</span>
        <Input
          value={employee.firstName}
          onChange={handleNameChange}
          style={{ marginBottom: 20 }}
        />
      </Modal>
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  employee: state.employee.employee,
  employeeStatuses: state.employee.employeeStatuses,
  employeeTypes: state.employee.employeeTypes,
  employees: state.employee.employees,
});

const mapDispatchToProps = {
  ...orderAdminActions,
  ...employeeActions,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EmployeeDashboard)
);