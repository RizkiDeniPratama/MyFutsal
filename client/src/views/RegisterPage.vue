<template>
  <div class="container w-75 my-5 bg-light rounded shadow" id="login-page">
    <div class="row p-40 d-flex align-items-center">
      <div class="col">
        <img
          src="https://cdn.dribbble.com/users/1747793/screenshots/16519645/media/62243fbaf607f456b63b757d75f6d167.jpg?compress=1&resize=1200x900&vertical=top"
          style="width: 100%"
          alt=""
        />
      </div>
      <div class="col">
        <h1 class="text-center"><i class="fa fa-shirt"></i> MyFutsal</h1>
        <form @submit.prevent="handleRegister">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Username</label
            >
            <input type="text" class="form-control" v-model="username" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input type="password" class="form-control" v-model="password" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Phone Number</label
            >
            <input type="number" class="form-control" v-model="phoneNumber" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Address</label
            >
            <input type="text" class="form-control" v-model="address" />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    };
  },
  methods: {
    ...mapActions(useUserStore, ["handleUserRegister"]),
    handleRegister() {
      this.handleUserRegister({
        username: this.username,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address,
      });
    },
  },
};
</script>
