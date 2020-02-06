import axios from "axios";

const baseURL = "http://51.83.145.18:8080";

class Api {
  async getActivities(category) {
    let junk = [];
    await axios
      .get(`${baseURL}/${category}`)
      .then(function(response) {
        junk = response.data;
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });

    return junk;
  }

  async getTime(category, activity, date) {
    // try {
    //   // const response = await axios.get(`${baseURL}/${category}/${activity}/${date}`);
    //   const response = {
    //     data: { dateTime: { date: 1580835600000, time: "18:00" } }
    //   };
    //   return response;
    // } catch (error) {
    //   console.log(error);
    // }
    await axios
      .get(`${baseURL}/${category}/${activity}/${date}`)
      .then(function(response) {
        //junk = response.data
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  async postTime(category, activity, dateTime) {
    try {
      const response = await axios.post(`${baseURL}/${category}/${activity}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Api();
