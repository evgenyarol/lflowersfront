import React from 'react';
import { withRouter } from 'react-router';

import MainLayout from '../../../common/components/admin/Main';

const Employee = ({
  location: {
    state: { employee = {} },
  },
}) => {
  return (
    <MainLayout>
      <h1>{employee ? employee.login : null}</h1>
      <div>
        {employee
          ? Object.keys(employee).map((item) => {
              if (item === 'order') {
                return Object.keys(employee[item]).map((itemKey) => {
                  return (
                    <p
                      key={itemKey}
                    >{`${itemKey}: ${employee[item][itemKey]}`}</p>
                  );
                });
              }
              return null;
            })
          : null}
      </div>
    </MainLayout>
  );
};

export default withRouter(Employee);
