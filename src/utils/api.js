import axios from "axios";

const baseURL = "http://localhost5000";

class Api {
  async getTime(category, activity) {
    try {
      // const response = await axios.get(`${baseURL}/${category}/${activity}`);
      const response = {
        data: {dateTime: {date: 1580835600000, time: "18:00"}}
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async postTime(category, activity, dateTime) {
   try{
       const response = await axios.post(`${baseURL}/${category}/${activity}`)
       return response
   }catch(error){
       console.log(error)
   }
  }
}

export default new Api()
