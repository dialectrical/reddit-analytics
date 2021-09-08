import React, { useEffect, useState } from "react";
import axios from "axios";

export const useGetHourlyData = (startTime, url) => {
  const [hourlyData, setHourlyData] = useState();
  const hourStart = startTime / 1000;
  const hourEnd = hourStart + 35400;

  useEffect(() => {
    axios
      .get(
        url +
          "&after=" +
          hourStart +
          "&before=" +
          hourEnd +
          "&aggs=link_id" +
          "&size=500"
      )
      .then(response => {
        setHourlyData(response.data.data);
        console.log(response.data.data.length);
      });
  }, [url]);
  if (hourlyData) {
    return hourlyData.length;
  }
};
