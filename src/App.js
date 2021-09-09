import React, { useState } from "react";
import { SubredditInput } from "./Components/SubredditInput";
import { Heatmap } from "./Components/Heatmap";
import { DisplayPosts } from "./Components/DisplayPosts";
import { SubmitButton } from "./Components/SubmitButton";

export const App = () => {
  const [redditData, setRedditData] = useState();
  const [subredditSearch, setSubredditSearch] = useState("fountainpens");
  const [baseURL, setBaseURL] = useState(
    "https://api.pushshift.io/reddit/search/submission/?subreddit=fountainpens&size=500"
  );

  const update = () => {
    setBaseURL(
      "https://api.pushshift.io/reddit/search/submission/?subreddit=" +
        subredditSearch +
        "&size=500"
    );
  };

  return (
    <div>
      {SubredditInput(setSubredditSearch)}
      {SubmitButton(update)}
      {Heatmap(baseURL)}
      {redditData ? DisplayPosts(redditData) : <></>}
    </div>
  );
};

export default App;
