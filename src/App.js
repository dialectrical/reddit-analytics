import React, { useState, useEffect } from "react";
import { SubredditInput } from "./Components/SubredditInput";
import { Heatmap } from "./Components/Heatmap";
import { useGetWeeklyTimetable } from "./Components/Hooks/useGetWeeklyTimetable";
import { getDailyData } from "./Components/Hooks/getDailyData";
import { DisplayPosts } from "./Components/DisplayPosts";
import { SubmitButton } from "./Components/SubmitButton";

export const App = () => {
  const [redditData, setRedditData] = useState();
  const [weeklyData, setWeeklyData] = useState();
  const [activeHourlyData, setActiveHourlyData] = useState();
  const [subredditSearch, setSubredditSearch] = useState("fountainpens");
  const [baseURL, setBaseURL] = useState(
    "https://api.pushshift.io/reddit/search/submission/?subreddit=fountainpens&size=500"
  );
  const weeklyTimetable = useGetWeeklyTimetable();

  useEffect(() => {
    getDailyData(weeklyTimetable, baseURL, setWeeklyData);
  }, [baseURL]);

  const update = () => {
    setBaseURL(
      "https://api.pushshift.io/reddit/search/submission/?subreddit=" +
        subredditSearch +
        "&size=500"
    );
    setWeeklyData(null);
    setActiveHourlyData(null);
  };

  /* const showHourlyData = event => {
    let list = makeHourlyList(event.currentTarget.value);
    setActiveHourlyData(list);
  }; */

  return (
    <div>
      {SubredditInput(setSubredditSearch)}
      {SubmitButton(update)}
      {Heatmap(baseURL, weeklyData, setWeeklyData)}
      {redditData ? DisplayPosts(redditData) : <></>}
    </div>
  );
};

export default App;
