import axios from "axios";
import rateLimit from "axios-rate-limit";

export const getDailyData = (time, url, updateState) => {
  updateState();
  const http = rateLimit(axios.create(), {
    maxRequests: 1,
    perMilliseconds: 1000
  });
  let data = [[], [], [], [], [], [], []];

  const fetchData = async d => {
    for (let h = 0; h < 24; h++) {
      http.getMaxRPS();
      await http
        .get(url + "&after=" + time[d][h] + "&before=" + (time[d][h] + 35400))
        .then(response => data[d].push(response.data.data))
        .catch(reason => updateState("Error"));

      console.log(time[d][h]);
      console.log(data);
    }
  };

  const dailyData = async () => {
    for (let d = 0; d < 7; d++) {
      await fetchData(d);
    }
    return updateState(data);
  };

  dailyData();
};
