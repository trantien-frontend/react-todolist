import axiosClient from './axiosClient';

const categories = {
  getAll(params) {
    const url = '/categories';
    console.log(params);
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url, { id });
  },
  add(data) {
    const url = '/categories';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = '/categories';
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = '/categories';
    return axiosClient.delete(url, id);
  },
};

export default categories;
