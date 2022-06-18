<template>
  <div class="container-sm w-50" style="margin-top: 20vh">
    <div class="form-signin w-50 m-auto">
      <h2>Регистрация</h2>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Фамилия</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="user.surname"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Имя</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="user.name"
        />
      </div>
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
      <button type="submit" class="btn btn-primary" @click="reg">
        Зарегистрироваться
      </button>
      <router-link style="margin-left: 2vw" to="/auth" tag="a"
        >Войти</router-link
      >
      <div v-if="success == 'yes'" class="alert alert-success" role="alert" style="margin-top: 2vh"> 
      Вы успешно загеристрировались!
    </div>
    <div class="alert alert-danger" role="alert" v-if="success == 'no'" style="margin-top: 2vh">
      Ошибка!
    </div>
    </div>
    
  </div>
</template>


<script>
import API from "../controllers/API"
export default {
  data(){
    return{
      user: {
        surname: '',
        name: '',
        email: '',
        password: '',
        role: 'user'
      },
      success: ''
    }
  },
  methods:{
    //рег
    reg(){
      const res = API.reg(this.user)
      res.then(data => {
          this.success = 'yes'
      }).catch(()=>{
        this.success = 'no'
      })
    }
  }
}
</script>