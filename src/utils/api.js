import axios from "axios";

const baseURL = "http://51.83.145.18:8080/api/v1";
// const hehe=`${baseURL}/${category}/${activity}`
class Api {
  async getActivities(category) {
    let activities = [];
    await axios
      .get(`${baseURL}/${category}`)
      .then(function(response) {
        activities = response.data;
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });

    return activities;
  }

  async getTime(category, activity, date) {
    let time = []
    await axios
      .get(`${baseURL}/services/${activity}/${date}`, {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origins": "*",
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(function(response) {
        time = response.data
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
      return time
  }

  async postTime(category,  dateTime, studentDocument) {
    await axios
      .post(`${baseURL}/add`, {
        mode: "no-cors",
        headers: {
          "Access-COntrol-Allow-Origins": "*",
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        service: category,
        dateTime: dateTime,
        studentDocument: studentDocument
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    // try {
    //   const response = await axios.post(`${baseURL}/${category}/${activity}`,  {
    //     service: "gym",
    //     dateTime:{
    //       date: 1555555555,
    //       time: "18:00"
    //     },
    //     studentDocument: 515313513551
    //   });
    //   return response;
    // } catch (error) {
    //   console.log(error);
    // }
  }
}

export default new Api();
