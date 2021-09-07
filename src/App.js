import React, { useState, useEffect } from "react";
import axios from "axios";
import { SubredditInput } from "./Components/SubredditInput";
import { Heatmap } from "./Components/Heatmap";
import { DisplayPosts } from "./Components/DisplayPosts";
import { SubmitButton } from "./Components/SubmitButton";
import { useGetWeekStart } from "./Components/Hooks/useGetWeekStart";
import { useGetHourlyData } from "./Components/Hooks/useGetHourlyData";

export const App = () => {
  const [redditData, setRedditData] = useState();
  const [subredditSearch, setSubredditSearch] = useState("fountainpens");
  const baseURL =
    "https://api.pushshift.io/reddit/search/submission/?subreddit=";

  const update = () => {
    axios
      .get(baseURL + subredditSearch + "&after=1630729196")
      .then(response => {
        setRedditData(response.data);
      });
  };

  return (
    <div>
      {SubredditInput(setSubredditSearch)}
      {SubmitButton(update)}
      {Heatmap()}
      {redditData ? DisplayPosts(redditData) : <p>no</p>}
    </div>
  );
};

export default App;
