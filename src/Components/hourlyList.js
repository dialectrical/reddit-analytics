import React from "react";

export const hourlyList = data => {
  let list = data.map(x => <a href={x.full_link}>{x.title}</a>);
  return list;
};
