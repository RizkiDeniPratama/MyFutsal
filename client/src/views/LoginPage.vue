<template>
  <div class="form-bg">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center vh-100">
        <div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-9">
          <div class="form-container">
            <form class="form-horizontal" @submit.prevent="handleLogin">
              <h3 class="title">Hi Guys ✋</h3>
              <span class="description">Login MyFutsal App</span>
              <div class="form-group">
                <input
                  class="form-control"
                  type="email"
                  placeholder="Enter your Username"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  placeholder="Enter your Password"
                  v-model="password"
                />
              </div>
              <button class="btn signin">Login</button>
              <span class="signup"
                >or <a href="#" @click.prevent="toRegister">Sign up</a>
              </span>
              <button
                @click.prevent="handleLoginGoogle"
                class="g-sign-in-button"
              >
                <div class="content-wrapper">
                  <div class="logo-wrapper">
                    <img
                      src="https://developers.google.com/identity/images/g-logo.png"
                    />
                  </div>
                  <span class="text-container">
                    <span>Sign in with Google</span>
                  </span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "owner@mail.com",
      password: "qweqwe",
    };
  },
  methods: {
    ...mapActions(useUserStore, ["handleUserLogin", "handleUserLoginGoogle"]),
    handleLogin() {
      this.handleUserLogin({
        email: this.email,
        password: this.password,
      });
    },
    handleLoginGoogle() {
      this.handleUserLoginGoogle();
    },
    toRegister() {
      this.$router.push({ name: "register" });
    },
  },
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

.g-sign-in-button {
  margin: 10px;
  display: inline-block;
  width: 240px;
  height: 50px;
  background-color: #4285f4;
  color: #fff;
  border-radius: 1px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
}

.g-sign-in-button:hover {
  cursor: pointer;
  -webkit-box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
  box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
}

.g-sign-in-button:active {
  background-color: #3367d6;
  transition: background-color 0.2s;
}

.g-sign-in-button .content-wrapper {
  height: 100%;
  width: 100%;
  border: 1px solid transparent;
}

.g-sign-in-button img {
  width: 18px;
  height: 18px;
}

.g-sign-in-button .logo-wrapper {
  padding: 15px;
  background: #fff;
  width: 48px;
  height: 100%;
  border-radius: 1px;
  display: inline-block;
}

.g-sign-in-button .text-container {
  font-family: Roboto, arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0.21px;
  font-size: 16px;
  line-height: 48px;
  vertical-align: top;
  border: none;
  display: inline-block;
  text-align: center;
  width: 180px;
}
.social-media {
  position: relative;
  width: 100%;
}
.social-media .social-icon {
  display: block;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 16px;
  margin-right: 5px;
  border-radius: 50%;
}
.social-media .social-icon span {
  color: #999999;
}
.social-media .social-icon:hover,
.social-media .social-icon:focus {
  background: #e3b04b;
}
.social-media .social-icon:hover span,
.social-media .social-icon:focus span {
  color: #fff;
}
.form-container {
  font-family: "Mukta", sans-serif;
  padding: 0 20px 20px 0;
}
.form-container .form-horizontal {
  background: repeating-linear-gradient(
    45deg,
    #fff,
    #fff 10px,
    #f9f9f9 10px,
    #f9f9f9 20px
  );
  padding: 70px 40px 40px;
  border-radius: 0;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 20px 20px 0 rgba(0, 0, 0, 0.1);
  position: relative;
}
.form-horizontal .title {
  color: #222;
  font-size: 80px;
  font-weight: 700;
  margin: 0 0 8px 0;
}
.form-horizontal .description {
  color: #222;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 30px 0;
  display: block;
}
.form-horizontal .form-group {
  margin: 0 0 30px;
}
.form-horizontal .form-group:nth-child(3) {
  margin-bottom: 20px;
}
.form-horizontal .form-control {
  color: #446dca;
  font-size: 16px;
  letter-spacing: 1px;
  height: 40px;
  padding: 2px 15px;
  border: 1px solid #e7e7e7;
  border-top-width: 2px;
  border-left-width: 2px;
  box-shadow: none;
  border-radius: 0;
  transition: all 0.3s ease 0s;
}
.form-horizontal .form-control:focus {
  box-shadow: none;
  border-color: #446dca;
}
.form-horizontal .form-control::placeholder {
  color: #222;
  font-size: 15px;
}
.form-horizontal .btn {
  color: #fff;
  background-color: #446dca;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  width: 180px;
  padding: 10px 30px;
  margin: 0 25px 0 0;
  border-radius: 30px;
  border: none;
  display: inline-block;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease 0s;
}
.form-horizontal .btn:hover,
.form-horizontal .btn:focus {
  color: #fff;
  background-color: #222;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  outline: none;
}
.form-horizontal .btn:after {
  content: "";
  height: 70%;
  width: 110%;
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  transform: rotate(-50deg);
  position: absolute;
  right: -105px;
  top: -65px;
  transition: all 0.5s ease 0s;
}
.form-horizontal .btn:hover:after {
  right: -70px;
  top: -30px;
}
.form-horizontal .signup {
  color: #222;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 35px 0;
  vertical-align: text-top;
  display: inline-block;
}
.form-horizontal .signup a {
  color: #446dca;
  text-decoration: underline;
  margin: 0 0 0 25px;
}
.form-horizontal .signup a:hover {
  color: #000;
  transition: all 0.3s ease 0s;
}
.form-horizontal .forgot {
  color: #446dca;
  text-decoration: underline;
  display: block;
}
.form-horizontal .forgot a {
  color: #446dca;
  transition: all 0.3s ease 0s;
}
.form-horizontal .forgot a:hover {
  color: #222;
}
@media only screen and (max-width: 479px) {
  .form-container .form-horizontal {
    padding-left: 20px;
    padding-right: 20px;
  }
  .form-horizontal .title {
    font-size: 55px;
  }
  .form-horizontal .description {
    font-size: 16px;
  }
  .form-horizontal .form-control::placeholder {
    font-size: 14px;
  }
  .form-horizontal .btn {
    display: block;
    margin: 0 auto 20px;
  }
  .form-horizontal .signup {
    text-align: center;
    margin: 0 auto 20px;
    display: block;
  }
  .form-horizontal .forgot {
    text-align: center;
  }
}
</style>
