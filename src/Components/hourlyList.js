import React from "react";
import { StyledHourlyTable, Styledtd } from "./Styles/StyledTable";

export const hourlyList = data => {
  let list = data[2].map(x => (
    <tr>
      <Styledtd>
        <a href={x.full_link}>{x.title}</a>
      </Styledtd>
    </tr>
  ));

  if (list.length) {
    return (
      <StyledHourlyTable bordered>
        <thead>
          {data[2].length} posts submitted to r/{data[2][0].subreddit} between
          (TIME) on {data[0]}
        </thead>
        <tbody>{list}</tbody>
      </StyledHourlyTable>
    );
  }
};
