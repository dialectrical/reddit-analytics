import React, { useEffect, useState } from "react";
import axios from "axios";

export const useGetHourlyData = (day, hour, url) => {
  const [hourlyData, setHourlyData] = useState();
  const hourStart = hour + day * 86400;
  const hourEnd = hourStart + 3540;

  console.log(hourStart);
  console.log(hourEnd);

  useEffect(() => {
    axios
      .get(url + "&after=" + hourStart + "&before=" + hourEnd + "&size=500")
      .then(response => {
        setHourlyData(response.data);
      });
  }, []);
  if (hourlyData) {
    console.log(hourlyData);
  }
  return hourlyData;
};
