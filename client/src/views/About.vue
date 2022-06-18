<template>
  <div class="container" style="margin-top: 5vh">
    <h1>Привет, {{ user.name + " " + user.surname }}</h1>
    <h3>расскажи о себе</h3>
    <div class="form-signin w-50" style="margin-top: 3vh">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Твой Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="user.email"
        />
      </div>
      <p style="margin-bottom: 1vh">Какие ты знаешь технологии?</p>

      <div class="mb-3 form-check" v-for="(t, i) in tech">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" :value="t.name" v-model="about.techzn"/>
        <label class="form-check-label" for="exampleCheck1">{{ t.name }}</label>
      </div>
      <p style="margin-bottom: 1vh">Какие технологии хочешь узнать?</p>

      <div class="mb-3 form-check" v-for="(t, i) in tech">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" :value="t.name" v-model="about.techst"/>
        <label class="form-check-label" for="exampleCheck1">{{ t.name }}</label>
      </div>
      <p style="margin-bottom: 1vh">Хочешь быть ментором?</p>
      <div class="mb-3 form-check">
        <input type="radio" class="form-check-input" name="flexRadioDefault1" id="exampleCheck1" value="true" v-model="about.mentor"/>
        <label class="form-check-label" for="exampleCheck1">Да</label>
      </div>
      <div class="mb-3 form-check">
        <input type="radio" class="form-check-input" name="flexRadioDefault1" id="exampleCheck1" value="false" v-model="about.mentor"/>
        <label class="form-check-label" for="exampleCheck1">Нет</label>
      </div>
      <p style="margin-bottom: 1vh">Ищешь ментора?</p>
      <div class="mb-3 form-check">
        <input type="radio" class="form-check-input" name="flexRadioDefault" id="exampleCheck1" value="true" v-model="about.sMentor"/>
        <label class="form-check-label" for="exampleCheck1">Да</label>
      </div>
      <div class="mb-3 form-check">
        <input type="radio" class="form-check-input" name="flexRadioDefault" id="exampleCheck1" value="false" v-model="about.sMentor"/>
        <label class="form-check-label" for="exampleCheck1">Нет</label>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">О себе</label>
        <textarea
        v-model="about.description"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary" style="margin-top: 1vh; margin-bottom: 1vh" @click="save">Сохранить</button>
    </div>
  </div>
</template>


<script>
import API from "../controllers/API";
import jwt from "jsonwebtoken";
export default {
  data() {
    return {
      user: {},
      about:{
        techst: [],
        techzn: [],
        mentor: '',
        sMentor: '',
        description: ''
      },
      tech: [],
    };
  },
  beforeMount() {
    let tech = [];
    this.user =
      jwt.decode(localStorage.token.replace("Bearer ", "")) ||
      jwt.decode(this.$cookie.get("token").replace("Bearer ", ""));
    const res = API.gettech();
    res.then((data) => {
      this.tech = data;
    });
  },
  methods: {
    save(){
      API.saveAbout(this.user, this.about)
    }
  },
};
</script>