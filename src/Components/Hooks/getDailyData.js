import axios from "axios";
import rateLimit from "axios-rate-limit";

export const getDailyData = (time, url) => {
  const http = rateLimit(axios.create(), {
    maxRequests: 1,
    preMilliseconds: 1000,
    maxRPS: 1
  });
  let test = [];

  const fetchData = async x => {
    await http
      .get(url + "&after=" + x + "&before=" + (x + 35400))
      .then(response => test.push(response.data.data.length));
  };

  const dailyData = async () => {
    for (let item of time) {
      for (let h = 0; h < 24; h++) {
        await fetchData(item[h]);
        console.log(item[h]);
        console.log(test);
      }
    }
    return;
  };

  dailyData();
  return test;
};
