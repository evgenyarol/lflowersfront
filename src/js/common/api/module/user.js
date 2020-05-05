import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3131';

export const menuGetData = () => {
  return axios.get(`${API_ENDPOINT}/product`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const postOrder = ({ payload }) => {
  return axios.post(`${API_ENDPOINT}/order`, payload, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminOrderGetData = () => {
  return axios.get(`${API_ENDPOINT}/order`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminOrderStatusesGetData = () => {
  return axios.get(`${API_ENDPOINT}/order/statuses`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminEmployeeStatusesGetData = () => {
  return axios.get(`${API_ENDPOINT}/employee/statuses`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminEmployeeTypesGetData = () => {
  return axios.get(`${API_ENDPOINT}/employee/types`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminOrderAssignEmployee = ({ orderId, employeeId }) => {
  return axios.put(`${API_ENDPOINT}/order/${orderId}/assign/${employeeId}`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminOrderDeleteData = (id) => {
  return axios.delete(`${API_ENDPOINT}/order/${id}`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminEmployeeDeleteData = (id) => {
  return axios.delete(`${API_ENDPOINT}/employee/${id}`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminEmployeeGetData = () => {
  return axios.get(`${API_ENDPOINT}/employee`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminEmployeeCreateData = (payload) => {
  return axios.post(`${API_ENDPOINT}/employee`, payload, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminEmployeeEditData = (payload) => {
  return axios.put(`${API_ENDPOINT}/employee/${payload.id}`, payload.data, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const signUp = (payload) => {
  return axios.post(`${API_ENDPOINT}/register`, payload, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const signIn = (payload) => {
  return axios.post(`${API_ENDPOINT}/login`, payload, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminGraphsEmpCreatedGetData = () => {
  return axios.get(`${API_ENDPOINT}/statistics/graphs/employees/created`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminGraphsOrdCreatedGetData = () => {
  return axios.get(`${API_ENDPOINT}/statistics/graphs/orders/created`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminGraphsRevGetData = () => {
  return axios.get(`${API_ENDPOINT}/statistics/graphs/revenue`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminTopsProducts = () => {
  return axios.get(`${API_ENDPOINT}/statistics/tops/products`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminTopsOrders = () => {
  return axios.get(`${API_ENDPOINT}/statistics/tops/orders`, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const adminTopsEmpPerf = () => {
  return axios.get(`${API_ENDPOINT}/statistics/tops/employees/performance`, {
    headers: {
      Accept: 'application/json',
    },
  });
};
