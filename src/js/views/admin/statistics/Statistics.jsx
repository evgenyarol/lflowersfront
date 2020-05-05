import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

import { actions as adminActions } from '../../../redux/modules/admin';

import PaymentCard from '../../../common/components/admin/TopPriceOrder/TopPriceOrder';
import MainLayout from '../../../common/components/admin/Main';
import { formatDate } from '../../../utils/helpers';

const Statistics = ({
  getTopsProducts,
  getTopsOrders,
  getTopsEmpPerf,
  topsProducts,
  topsOrders,
  topsEmpPerf,
}) => {
  useEffect(() => {
    getTopsProducts();
    getTopsOrders();
    getTopsEmpPerf();
  }, []);

  const columns = [
    {
      title: 'Имя',
      dataIndex: 'employee',
      key: 'employee',
      render: (text, record) => (
        <span>
          {record.employee.length
            ? `${text[0].firstname} ${text[0].lastname}`
            : null}
        </span>
      ),
    },
    {
      title: 'Кол-во заказов',
      dataIndex: 'ordersAssigned',
      key: 'ordersAssigned',
    },
    {
      title: 'Выручка',
      dataIndex: 'revenue',
      key: 'revenue',
      render: (text) => <span>{`$${text}`}</span>,
    },
  ];

  return (
    <MainLayout>
      <h3>Топ 3 блюда</h3>
      <div style={{ display: 'flex' }}>
        {topsProducts.slice(0, 3).map((item) => (
          <div key={item._id} style={{ marginRight: 20 }}>
            <PaymentCard
              name={item.product.title}
              total={item.product.price}
              footer={item.amount}
            />
          </div>
        ))}
      </div>
      <h3 style={{ marginTop: 20 }}>Топ 3 заказа</h3>
      <div style={{ display: 'flex' }}>
        {topsOrders.slice(0, 3).map((item) => (
          <div key={item._id} style={{ marginRight: 20 }}>
            <PaymentCard
              name={item.login}
              created={formatDate(item.createdAt)}
              total={item.total}
              footer={item.phone}
            />
          </div>
        ))}
      </div>
      <h3 style={{ marginTop: 20 }}>Топ работников по эффективности</h3>
      <Table
        pagination={false}
        columns={columns}
        dataSource={topsEmpPerf}
        rowKey="_id"
      />
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  topsProducts: state.admin.topsProducts,
  topsOrders: state.admin.topsOrders,
  topsEmpPerf: state.admin.topsEmpPerf,
});

const mapDispatchToProps = {
  ...adminActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statistics);
