import React, { useState, useEffect } from "react";
import { SubredditInput } from "./Components/SubredditInput";
import { Heatmap } from "./Components/Heatmap";
import { useGetWeeklyTimetable } from "./Components/Hooks/useGetWeeklyTimetable";
import { getDailyData } from "./Components/Hooks/getDailyData";
import { SubmitButton } from "./Components/SubmitButton";
import { hourlyList } from "./Components/hourlyList";

export const App = () => {
  const [redditData, setRedditData] = useState();
  const [weeklyData, setWeeklyData] = useState();
  const [activeHourlyData, setActiveHourlyData] = useState([[], [], []]);
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
    setWeeklyData();
    setActiveHourlyData();
  };

  return (
    <div className="main">
      {SubredditInput(setSubredditSearch)}
      {SubmitButton(update)}
      {Heatmap(weeklyData, setActiveHourlyData)}
      {activeHourlyData ? hourlyList(activeHourlyData) : <></>}
    </div>
  );
};

export default App;
