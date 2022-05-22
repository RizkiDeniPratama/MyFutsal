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

    async handleUserLoginGoogle() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        this.user = googleUser.getBasicProfile().getEmail();
        console.log("getAuthResponse", googleUser.getAuthResponse().id_token);
        let id_token = googleUser.getAuthResponse().id_token;
        const res = await axios({
          method: "POST",
          url: "users/google-login",
          data: {
            id_token,
          },
        });
        console.log(this.baseUrl);
        localStorage.setItem("accessToken", res.data.Token);

        this.router.push({ name: "home" });
      } catch (error) {
        console.error(error);
        return null;
      }
    },

    logout() {
      localStorage.clear();
      this.access_token = null;
      this.router.push({ name: "login" });
    },
  },
});
