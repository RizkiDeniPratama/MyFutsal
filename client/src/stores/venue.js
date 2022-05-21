import { defineStore } from "pinia";
import axios from "axios";

export const useVenueStore = defineStore({
  id: "venue",
  state: () => ({
    access_token: localStorage.getItem("access_token") || "",
    venues: [],
    errEmpty: { status: false, message: "" },
    count: 0,
  }),
  actions: {
    getAll() {
      axios({
        method: "get",
        url: "venues/",
        headers: {
          accessToken: this.access_token,
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.venues = data;
          this.errEmpty.status = false;
          this.errEmpty.name = "";
        })
        .catch((err) => console.log(err));
    },
  },
});
