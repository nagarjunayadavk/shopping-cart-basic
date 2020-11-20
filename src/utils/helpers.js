export const axiosDefaultHeaders = (axios) => {
  axios.interceptors.request.use((request) => {
    if (localStorage.getItem('token')) {
      request.headers['Authorization'] = "Bearer " + localStorage.getItem('token');
    }
    return request;
  });

  axios.interceptors.response.use((response) => {
    if (response.data['token']) {
      console.log(response.headers);
      localStorage.setItem('token', response.data["token"]);
    }
    return response;
  });
};