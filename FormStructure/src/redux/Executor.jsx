import axios from "axios";

export const PostMethodExecutor = (url,data) => {
    return axios.post(url, data);
  };
