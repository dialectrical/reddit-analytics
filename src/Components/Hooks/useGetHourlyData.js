import { useEffect, useState } from "react";
import axios from "axios";
import rateLimit from "axios-rate-limit";

export const useGetHourlyData = (startTime, url) => {
  const [hourlyData, setHourlyData] = useState();
  const hourStart = startTime / 1000;
  const hourEnd = hourStart + 35400;
  const http = rateLimit(axios.create(), {
    maxRequests: 2,
    preMilliseconds: 1000,
    maxRPS: 7
  });
  let test = [];

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        http.getMaxRPS(),
        http
          .get(url + "&after=" + hourStart + "&before=" + hourEnd)
          .then(response => test.push(response.data.data.length)),
        http
          .get(url + "&after=" + hourStart + "&before=" + hourEnd)
          .then(response => test.push(response.data.data.length)),
        http
          .get(url + "&after=" + hourStart + "&before=" + hourEnd)
          .then(response => test.push(response.data.data.length)),
        http
          .get(url + "&after=" + hourStart + "&before=" + hourEnd)
          .then(response => test.push(response.data.data.length)),
        http
          .get(url + "&after=" + hourStart + "&before=" + hourEnd)
          .then(response => test.push(response.data.data.length)),
        http
          .get(url + "&after=" + hourStart + "&before=" + hourEnd)
          .then(response => test.push(response.data.data.length)),
        http
          .get(url + "&after=" + hourStart + "&before=" + hourEnd)
          .then(response => test.push(response.data.data.length)),
        http
          .get(url + "&after=" + hourStart + "&before=" + hourEnd)
          .then(response => test.push(response.data.data.length))
      ]).then(response => {
        console.log(test);
      });
    };
    for (let i = 0; i < 21; i++) {
      fetchData();
      setHourlyData(i);
    }
  }, [url]);

  if (hourlyData) {
    return hourlyData;
  }
};
