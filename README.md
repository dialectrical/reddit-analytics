# Reddit analytics

Displays a heatmap of posts submitted to a given subreddit along with a list of posts made each hour. Uses [pushshift's api](https://github.com/pushshift/api) to gather data from Reddit and currently takes about 3 to 5 mintues to complete a request in order to reliably avoid exceeding the API's rate limit.

Check out the [demo](https://dialectrical.github.io/reddit-analytics/).

## Screenshots

### Desktop

Users can input a subreddit to generate a heatmap from:

![alt](./assets/screenshot1.png)

Users can also view the posts made each hour:

![alt](./assets/screenshot2.png)

Clicking a link takes users to the corresponding Reddit post!

### Mobile

On mobile, the heatmap is resized and given an overflow scroll bar to keep things tidy:

![alt](./assets/screenshotMobile1.png)

And users can still access hourly post lists:

![alt](./assets/screenshotMobile2.png)
