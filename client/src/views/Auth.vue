<template>
  <div class="container-sm w-50" style="margin-top: 30vh">
    <div class="form-signin w-50 m-auto">
      <h2>Авторизация</h2>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="user.email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Пароль</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="user.password"
        />
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          v-model="rem"
        />
        <label class="form-check-label" for="exampleCheck1"
          >Запомнить меня</label
        >
      </div>
      <button type="submit" class="btn btn-primary" @click="login">
        Войти
      </button>
      <router-link style="margin-left: 2vw" to="/reg" tag="a"
        >Регистрация</router-link
      >
    </div>
   
  </div>
</template>


<script>
import API from "../controllers/API";
import jwt from "jsonwebtoken";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      token: "",
      rem: false,
    };
  },
  beforeMount() {
    delete localStorage.token
  },
  methods: {
    login() {
      this.$cookie
      this.$cookie.delete("role")
      this.$cookie.delete("isFirstAuth")
      this.$cookie.delete("token")
      const res = API.login(this.user)
      res.then((data) => {
        if(data.status == 200){
         
        localStorage.setItem("token", data.data.token);
        let user = jwt.decode(localStorage.token.replace("Bearer ", ""))
        if (this.rem) {
          this.$cookie.set("token", localStorage.token),
            this.$cookie.set("role", user.role),
            this.$cookie.set("isFirstAuth", user.isFirstAuth)
        }
        if (user.isFirstAuth) this.$router.push({ name: "About" })
        else {
          if (user.role == "user") this.$router.push({ name: "User" })
          else if (user.role == "admin") this.$router.push({ name: "Admin" })
        }}
      })
    },
  },
};
</script>