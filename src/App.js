import React, { useState, useEffect } from "react";
import "./App.css";
import reddit_logo from "./img/reddit_logo.png";
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
      <header>
        <img src={reddit_logo} alt="" className="logo" />
        <h2>Last Week's Subreddit Activity</h2>
        <p>See last week's activity, today.</p>
      </header>
      <body>
        <p>
          Enter a subreddit name in the box below and click submit to get
          started. Heatmap squares can be clicked to view a list of posts made
          during that particular timeframe.
        </p>
        {SubredditInput(setSubredditSearch)}
        {SubmitButton(update)}
        {Heatmap(weeklyData, setActiveHourlyData)}
        {activeHourlyData ? hourlyList(activeHourlyData) : <></>}
      </body>
    </div>
  );
};

export default App;
