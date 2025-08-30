import axios from "axios";

export const userService = {
  getUsers: async () => {
    const res = await axios.get("http://localhost:8080/api/v1/user");
    return res.data;
  },
  createUser: async (user) => {
    const res = await axios.post("http://localhost:8080/api/v1/user", user);
    return res.data;
  },
};
