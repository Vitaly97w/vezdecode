import axios from "axios"
export default class API {
  static async login(user) {
    const res = await axios.post("/auth", user);
    return res;
  }

    static async reg(user) {
      const res = await axios.post("/auth/reg", user);
      return res;
    }

    static async gettech() {
      const res = await axios.get("/tech");
      return res.data;
    }
  
  
    static async saveAbout(user,about) {
      const res = await axios.post("/auth/about", {user,about});
      return res.data;
    }

}