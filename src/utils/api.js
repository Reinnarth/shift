import axios from "axios";

const baseURL = "http://51.83.145.18:8080/api/v1";
// const hehe=`${baseURL}/${category}/${activity}`
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
      .get(`${baseURL}/services/${activity}/${date}`, {
        mode: "no-cors",
        headers: {
          "Access-COntrol-Allow-Origins": "*",
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
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
    await axios
      .post(`${baseURL}/add`, {
        mode: "no-cors",
        headers: {
          "Access-COntrol-Allow-Origins": "*",
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        service: "gym",
        dateTime: {
          date: 1555555555,
          time: "18:00"
        },
        studentDocument: 515313513551
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
