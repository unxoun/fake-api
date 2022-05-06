const api = {
  timeout: 3000,
  getMessage: (timeout = asyncAPI.timeout) => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ status: 200, data: { id: 1, message: "Hello World." } });
      }, timeout);
    });
  },
};
export default api;
