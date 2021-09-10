import axios from "axios";
import rateLimit from "axios-rate-limit";

export const getDailyData = (time, url, updateState) => {
  const http = rateLimit(axios.create(), {
    maxRequests: 1,
    preMilliseconds: 1000,
    maxRPS: 1
  });
  let data = [[], [], [], [], [], [], []];

  const fetchData = async (d, x) => {
    await http
      .get(url + "&after=" + x + "&before=" + (x + 35400))
      .then(response => data[d].push(response.data.data));
  };

  const dailyData = async () => {
    for (let d = 0; d < 7; d++) {
      for (let h = 0; h < 24; h++) {
        await fetchData(d, time[d][h]);
        console.log(time[d][h]);
        console.log(data);
      }
    }
    console.log("done!");
    return updateState(data);
  };

  dailyData();
};
