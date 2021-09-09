import React, { useEffect } from "react";
import { StyledTable } from "./Styles/StyledTable";
import { useGetWeeklyTimetable } from "./Hooks/useGetWeeklyTimetable";
import { getDailyData } from "./Hooks/getDailyData";

export const Heatmap = url => {
  const weeklyTimetable = useGetWeeklyTimetable();
  useEffect(() => {
    const sundayData = getDailyData(weeklyTimetable[3], url);
  }, [url]); //TODO: use async/await to get data for the entire week

  //TODO: use conditional rendering to have a loading wheel

  //TODO: use maps to populate the heatmap
  return (
    <StyledTable bordered>
      <thead>
        <tr>
          <th></th>
          <th>0:00 - 0:59</th>
          <th>1:00 - 1:59</th>
          <th>2:00 - 2:59</th>
          <th>3:00 - 3:59</th>
          <th>4:00 - 4:59</th>
          <th>5:00 - 5:59</th>
          <th>6:00 - 6:59</th>
          <th>7:00 - 7:59</th>
          <th>8:00 - 8:59</th>
          <th>9:00 - 9:59</th>
          <th>10:00 - 10:59</th>
          <th>11:00 - 11:59</th>
          <th>12:00 - 12:59</th>
          <th>13:00 - 13:59</th>
          <th>14:00 - 14:59</th>
          <th>15:00 - 15:59</th>
          <th>16:00 - 16:59</th>
          <th>17:00 - 17:59</th>
          <th>18:00 - 18:59</th>
          <th>19:00 - 19:59</th>
          <th>20:00 - 20:59</th>
          <th>21:00 - 21:59</th>
          <th>22:00 - 22:59</th>
          <th>23:00 - 23:59</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Sunday</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Monday</th>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <th scope="row">Thursday</th>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <th scope="row">Friday</th>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <th scope="row">Saturday</th>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};
