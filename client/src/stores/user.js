import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    access_token: localStorage.getItem("access_token") || "",
    name: "",
    password: "",
  }),
  actions: {
    handleUserRegister({ username, email, password, phoneNumber, address }) {
      axios
        .post("users/register", {
          username,
          email,
          password,
          phoneNumber,
          address,
        })
        .then(({ data }) => {
          console.log("ini dari register", data);
          this.router.push({ name: "login" });
        })
        .catch((err) => console.log(err.req));
    },

    handleUserLogin({ email, password }) {
      axios
        .post("users/login", {
          email,
          password,
        })
        .then(({ data }) => {
          console.log(data);
          localStorage.setItem("access_token", data.access_token);
          this.access_token = data.access_token;
          this.router.push({ name: "home" });
        })
        .catch((err) => console.log(err));
    },

    logout() {
      localStorage.clear();
      this.access_token = null;
      this.router.push({ name: "login" });
    },
  },
});
