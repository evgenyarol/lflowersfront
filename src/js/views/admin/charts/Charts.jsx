import React, { useEffect } from 'react';
import ChartistGraph from 'react-chartist';
import { connect } from 'react-redux';

import MainLayout from '../../../common/components/admin/Main';
import { actions as adminActions } from '../../../redux/modules/admin';

const Charts = ({
  graphsRev,
  graphsEmpCreated,
  graphsOrdCreated,
  getGraphsEmpCreated,
  getGraphsOrdCreated,
  getGraphsRev,
}) => {
  useEffect(() => {
    getGraphsRev();
    getGraphsEmpCreated();
    getGraphsOrdCreated();
  }, []);

  const overlappingBarOptions = {
    seriesBarDistance: 10,
    high: 10,
  };

  const overlappingResponsiveOptions = [
    [
      '',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc(value) {
            return value[0];
          },
        },
      },
    ],
  ];

  return (
    <MainLayout>
      <h3>Создано заказов</h3>
      <ChartistGraph
        style={{ height: 300, width: 700 }}
        data={graphsOrdCreated}
        options={overlappingBarOptions}
        responsiveOptions={overlappingResponsiveOptions}
        type="Line"
      />
      <h3>Создано работников</h3>
      <ChartistGraph
        style={{ height: 300, width: 700 }}
        data={graphsEmpCreated}
        options={overlappingBarOptions}
        responsiveOptions={overlappingResponsiveOptions}
        type="Line"
      />
      <h3>Выручка по месяцам</h3>
      <ChartistGraph
        style={{ height: 300, width: 700 }}
        data={graphsRev}
        options={{
          seriesBarDistance: 10,
        }}
        responsiveOptions={overlappingResponsiveOptions}
        type="Bar"
      />
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  graphsEmpCreated: state.admin.graphsEmpCreated,
  graphsOrdCreated: state.admin.graphsOrdCreated,
  graphsRev: state.admin.graphsRev,
});

const mapDispatchToProps = {
  ...adminActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Charts);
