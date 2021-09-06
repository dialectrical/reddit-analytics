import React from "react";

export const DisplayPosts = data => {
  if (data.data[0].title) {
    const title = data.data.map(x => <p>{x.title}</p>);
    return <div>{title}</div>;
  }
};
