import React from "react";
import { Spinner } from "reactstrap";
import { StyledTable, Styledtd } from "./Styles/StyledTable";

export const Heatmap = (weeklyData, setActiveHourlyData) => {
  if (!weeklyData) {
    return (
      <StyledTable bordered>
        <Spinner
          size="sm"
          children=""
          style={{ marginTop: "5vw", width: "7vw", height: "7vw" }}
        />
        {""}
        <p>Loading... This can take a few minutes.</p>
      </StyledTable>
    );
  } else if (weeklyData === "Error") {
    return (
      <StyledTable bordered>
        <h2 className="display-3" style={{ marginTop: "5vw", fontSize: "7vw" }}>
          👾
        </h2>
        <p>
          Uh-oh! There's been an error getting data from the API. Please wait a
          moment and try again. <br />
          Don't worry, last week isn't going anywhere.
        </p>
      </StyledTable>
    );
  }

  return (
    <StyledTable bordered>
      <thead>
        <tr>
          <th></th>
          <th
            style={{
              width: "3vw"
            }}
          >
            0 - 1
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            1 - 2
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            2 - 3
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            3 - 4
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            4 - 5
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            5 - 6
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            6 - 7
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            7 - 8
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            8 - 9
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            9 - 10
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            10 - 11
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            11 - 12
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            12 - 13
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            13 - 14
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            14 - 15
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            15 - 16
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            16 - 17
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            17 - 18
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            18 - 19
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            19 - 20
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            20 - 21
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            21 - 22
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            22 - 23
          </th>
          <th
            style={{
              width: "3vw"
            }}
          >
            23 - 0
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" style={{ height: "3vw" }}>
            Sunday
          </th>
          {weeklyData[0].map(x => {
            console.log(x);
            return (
              <Styledtd
                style={{
                  height: "3vw",
                  width: "3vw",
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData([
                    ["Sunday"],
                    [weeklyData[0].indexOf(x)],
                    x
                  ]);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row" style={{ height: "3vw" }}>
            Monday
          </th>
          {weeklyData[1].map(x => {
            return (
              <Styledtd
                style={{
                  width: "3vw",
                  height: "3vw",
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData([
                    ["Monday"],
                    [weeklyData[1].indexOf(x)],
                    x
                  ]);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row" style={{ height: "3vw" }}>
            Tuesday
          </th>
          {weeklyData[2].map(x => {
            return (
              <Styledtd
                style={{
                  width: "3vw",
                  height: "3vw",
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData([
                    ["Tuesday"],
                    [weeklyData[2].indexOf(x)],
                    x
                  ]);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row" style={{ height: "3vw" }}>
            Wednesday
          </th>
          {weeklyData[3].map(x => {
            return (
              <Styledtd
                style={{
                  height: "3vw",
                  width: "3vw",
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData([
                    ["Wednesday"],
                    [weeklyData[3].indexOf(x)],
                    x
                  ]);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row" style={{ height: "3vw" }}>
            Thursday
          </th>
          {weeklyData[4].map(x => {
            return (
              <Styledtd
                style={{
                  width: "3vw",
                  height: "3vw",
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData([
                    ["Thursday"],
                    [weeklyData[4].indexOf(x)],
                    x
                  ]);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row" style={{ height: "3vw" }}>
            Friday
          </th>
          {weeklyData[5].map(x => {
            return (
              <Styledtd
                style={{
                  width: "3vw",
                  height: "3vw",
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData([
                    ["Friday"],
                    [weeklyData[5].indexOf(x)],
                    x
                  ]);
                }}
              >
                {x.length}
              </Styledtd>
            );
          })}
        </tr>
        <tr>
          <th scope="row" style={{ height: "3vw" }}>
            Saturday
          </th>
          {weeklyData[6].map(x => {
            return (
              <Styledtd
                style={{
                  width: "3vw",
                  height: "3vw",
                  backgroundColor: "hsl(16, 100%, 50%," + x.length / 100
                }}
                onClick={() => {
                  setActiveHourlyData([
                    ["Saturday"],
                    [weeklyData[6].indexOf(x)],
                    x
                  ]);
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
