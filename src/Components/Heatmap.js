import React from "react";
import { Spinner } from "reactstrap";
import { StyledTable, Styledtd, Styledth } from "./Styles/StyledTable";

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
        <p>Loading...</p>
        <p>Due to API rate limits, this process takes about three minutes.</p>
      </StyledTable>
    );
  } else if (weeklyData === "Error") {
    return (
      <StyledTable bordered>
        <h2 className="display-3" style={{ marginTop: "5vw", fontSize: "7vw" }}>
          👾
        </h2>
        <p>
          Uh-oh! There's been an error. Please wait a moment and try again.{" "}
          <br />
          Don't worry, last week isn't going anywhere.
        </p>
      </StyledTable>
    );
  }

  return (
    <div style={{ overflowY: "scroll" }}>
      <StyledTable bordered>
        <thead>
          <tr>
            <th></th>
            <Styledth>0 - 1</Styledth>
            <Styledth>1 - 2</Styledth>
            <Styledth>2 - 3</Styledth>
            <Styledth>3 - 4</Styledth>
            <Styledth>4 - 5</Styledth>
            <Styledth>5 - 6</Styledth>
            <Styledth>6 - 7</Styledth>
            <Styledth>7 - 8</Styledth>
            <Styledth>8 - 9</Styledth>
            <Styledth>9 - 10</Styledth>
            <Styledth>10 - 11</Styledth>
            <Styledth>11 - 12</Styledth>
            <Styledth>12 - 13</Styledth>
            <Styledth>13 - 14</Styledth>
            <Styledth>14 - 15</Styledth>
            <Styledth>15 - 16</Styledth>
            <Styledth>16 - 17</Styledth>
            <Styledth>17 - 18</Styledth>
            <Styledth>18 - 19</Styledth>
            <Styledth>19 - 20</Styledth>
            <Styledth>20 - 21</Styledth>
            <Styledth>21 - 22</Styledth>
            <Styledth>22 - 23</Styledth>
            <Styledth>23 - 0</Styledth>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Styledth>Sunday</Styledth>
            {weeklyData[0].map((x) => {
              console.log(x);
              return (
                <Styledtd
                  style={{
                    backgroundColor: "hsl(16, 100%, 50%," + x.length / 100,
                  }}
                  onClick={() => {
                    setActiveHourlyData([
                      ["Sunday"],
                      [weeklyData[0].indexOf(x)],
                      x,
                    ]);
                  }}
                >
                  {x.length}
                </Styledtd>
              );
            })}
          </tr>
          <tr>
            <Styledth>Monday</Styledth>
            {weeklyData[1].map((x) => {
              return (
                <Styledtd
                  style={{
                    backgroundColor: "hsl(16, 100%, 50%," + x.length / 100,
                  }}
                  onClick={() => {
                    setActiveHourlyData([
                      ["Monday"],
                      [weeklyData[1].indexOf(x)],
                      x,
                    ]);
                  }}
                >
                  {x.length}
                </Styledtd>
              );
            })}
          </tr>
          <tr>
            <Styledth>Tuesday</Styledth>
            {weeklyData[2].map((x) => {
              return (
                <Styledtd
                  style={{
                    backgroundColor: "hsl(16, 100%, 50%," + x.length / 100,
                  }}
                  onClick={() => {
                    setActiveHourlyData([
                      ["Tuesday"],
                      [weeklyData[2].indexOf(x)],
                      x,
                    ]);
                  }}
                >
                  {x.length}
                </Styledtd>
              );
            })}
          </tr>
          <tr>
            <Styledth>Wednesday</Styledth>
            {weeklyData[3].map((x) => {
              return (
                <Styledtd
                  style={{
                    backgroundColor: "hsl(16, 100%, 50%," + x.length / 100,
                  }}
                  onClick={() => {
                    setActiveHourlyData([
                      ["Wednesday"],
                      [weeklyData[3].indexOf(x)],
                      x,
                    ]);
                  }}
                >
                  {x.length}
                </Styledtd>
              );
            })}
          </tr>
          <tr>
            <Styledth>Thursday</Styledth>
            {weeklyData[4].map((x) => {
              return (
                <Styledtd
                  style={{
                    backgroundColor: "hsl(16, 100%, 50%," + x.length / 100,
                  }}
                  onClick={() => {
                    setActiveHourlyData([
                      ["Thursday"],
                      [weeklyData[4].indexOf(x)],
                      x,
                    ]);
                  }}
                >
                  {x.length}
                </Styledtd>
              );
            })}
          </tr>
          <tr>
            <Styledth>Friday</Styledth>
            {weeklyData[5].map((x) => {
              return (
                <Styledtd
                  style={{
                    backgroundColor: "hsl(16, 100%, 50%," + x.length / 100,
                  }}
                  onClick={() => {
                    setActiveHourlyData([
                      ["Friday"],
                      [weeklyData[5].indexOf(x)],
                      x,
                    ]);
                  }}
                >
                  {x.length}
                </Styledtd>
              );
            })}
          </tr>
          <tr>
            <Styledth>Saturday</Styledth>
            {weeklyData[6].map((x) => {
              return (
                <Styledtd
                  style={{
                    backgroundColor: "hsl(16, 100%, 50%," + x.length / 100,
                  }}
                  onClick={() => {
                    setActiveHourlyData([
                      ["Saturday"],
                      [weeklyData[6].indexOf(x)],
                      x,
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
    </div>
  );
};
