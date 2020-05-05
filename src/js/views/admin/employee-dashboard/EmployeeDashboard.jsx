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
    if (!employee.lastname || !employee.firstname) {
      e.preventDefault();
      message.error('Введите все поля!');
    } else {
      createEmployee({
        lastname: employee.lastname,
        firstname: employee.firstName
      });
    }

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
          {`${record.firstname} ${record.lastname}`}
        </span>
      ),
    },
    {
      title: 'Тип',
      dataIndex: 'employeeType',
      key: 'employeeType',
      render: (text) => (text ? text.typeName : ''),
    },
    {
      title: 'Создан',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => (text ? formatDate(text) : text),
    },
    {
      title: 'Статус',
      dataIndex: 'employeeStatus',
      key: 'employeeStatus',
      render: (text) => {
        return (
          <Select defaultValue="lucy" style={{ width: 120 }}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
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
        <span style={{ fontSize: 16 }}>Фамилия</span>
        <Input
          value={employee.lastName}
          onChange={handleSurnameChange}
          style={{ marginBottom: 20 }}
        />
        <span style={{ fontSize: 16 }}>Тип</span>
        <Select
          value={employee.employeeType}
          onChange={(value) => {
            handleTypeChange(value);
          }}
          style={{ width: '100%' }}
        >

{employeeTypes.map((item) => (
            <Option key={item._id} value={item._id}>
              {item.typeName}
            </Option>
          ))}
        </Select>
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