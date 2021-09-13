import React from "react";
import { StyledHourlyTable, Styledtd } from "./Styles/StyledTable";
import { Styleda } from "./Styles/Styleda";

export const hourlyList = data => {
  let startTime = data[1][0];
  let endTime = startTime + 1;
  let list = data[2].map(x => (
    <tr>
      <Styledtd>
        <Styleda href={x.full_link} target="_blank">
          {x.title}
        </Styleda>
      </Styledtd>
    </tr>
  ));

  if (list.length) {
    console.log(list);
    return (
      <StyledHourlyTable bordered>
        <thead
          style={{
            textAlign: "center"
          }}
        >
          {data[2].length} posts submitted to r/{data[2][0].subreddit} between{" "}
          {startTime} and {endTime} on {data[0]}
        </thead>
        <tbody>{list}</tbody>
      </StyledHourlyTable>
    );
  }
};
