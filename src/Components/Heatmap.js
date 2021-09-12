import React, { useState, useEffect } from "react";
import { StyledTable, Styledtd } from "./Styles/StyledTable";

export const Heatmap = (weeklyData, setActiveHourlyData) => {
  if (!weeklyData) {
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
            <th>10 - 11</th>
            <th>11 - 12</th>
            <th>12 - 13</th>
            <th>13 - 14</th>
            <th>14 - 15</th>
            <th>15 - 16</th>
            <th>16 - 17</th>
            <th>17 - 18</th>
            <th>18 - 19</th>
            <th>19 - 20</th>
            <th>20 - 21</th>
            <th>21 - 22</th>
            <th>22 - 23</th>
            <th>23 - 0</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"Loading..."</td>
          </tr>
        </tbody>
      </StyledTable>
    );
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
          <th>10 - 11</th>
          <th>11 - 12</th>
          <th>12 - 13</th>
          <th>13 - 14</th>
          <th>14 - 15</th>
          <th>15 - 16</th>
          <th>16 - 17</th>
          <th>17 - 18</th>
          <th>18 - 19</th>
          <th>19 - 20</th>
          <th>20 - 21</th>
          <th>21 - 22</th>
          <th>22 - 23</th>
          <th>23 - 0</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Sunday</th>
          {weeklyData[0].map(x => {
            return (
              <Styledtd
                style={{
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData([["Sunday"][1][x]]);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row">Monday</th>
          {weeklyData[1].map(x => {
            return (
              <Styledtd
                style={{
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData(x);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          {weeklyData[2].map(x => {
            return (
              <Styledtd
                style={{
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData(x);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          {weeklyData[3].map(x => {
            return (
              <Styledtd
                style={{
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData(x);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row">Thursday</th>
          {weeklyData[4].map(x => {
            return (
              <Styledtd
                style={{
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData(x);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row">Friday</th>
          {weeklyData[5].map(x => {
            return (
              <Styledtd
                style={{
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData(x);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row">Saturday</th>
          {weeklyData[6].map(x => {
            return (
              <Styledtd
                style={{
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData(x);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
      </tbody>
    </StyledTable>
  );
};
