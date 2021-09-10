import React, { useState, useEffect } from "react";
import { StyledTable } from "./Styles/StyledTable";

export const Heatmap = (url, weeklyData, setState) => {
  if (!weeklyData) {
    return <div>"Loading..."</div>;
  }

  return (
    <StyledTable bordered>
      <thead>
        <tr>
          <th></th>
          <th>0 - 1</th>
          <th>1 - 2</th>
          <th>2 - 3</th>
          <th>3 - 4</th>
          <th>4 - 5</th>
          <th>5 - 6</th>
          <th>6 - 7</th>
          <th>7 - 8</th>
          <th>8 - 9</th>
          <th>9 - 10</th>
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
          {weeklyData[0].map(x => {
            return <td>{x.length}</td>;
          })}
        </tr>
        <tr>
          <th scope="row">Monday</th>
          {weeklyData[1].map(x => {
            return <td>{x.length}</td>;
          })}
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          {weeklyData[2].map(x => {
            return <td>{x.length}</td>;
          })}
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          {weeklyData[3].map(x => {
            return <td>{x.length}</td>;
          })}
        </tr>
        <tr>
          <th scope="row">Thursday</th>
          {weeklyData[4].map(x => {
            return <td>{x.length}</td>;
          })}
        </tr>
        <tr>
          <th scope="row">Friday</th>
          {weeklyData[5].map(x => {
            return <td>{x.length}</td>;
          })}
        </tr>
        <tr>
          <th scope="row">Saturday</th>
          {weeklyData[6].map(x => {
            return <td>{x.length}</td>;
          })}
        </tr>
      </tbody>
    </StyledTable>
  );
};
