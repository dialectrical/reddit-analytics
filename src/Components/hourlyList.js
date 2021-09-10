import React from "react";

export const hourlyList = data => {
  let list = data.map(x => (
    <div>
      <a href={x.full_lnk}>{x.title}</a>
    </div>
  ));
};
