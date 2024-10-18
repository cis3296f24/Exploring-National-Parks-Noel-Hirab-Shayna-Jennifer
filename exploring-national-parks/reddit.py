import praw
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Set up PRAW with credentials from .env file
reddit = praw.Reddit(
    client_id=os.getenv("REDDIT_CLIENT_ID"),
    client_secret=os.getenv("REDDIT_CLIENT_SECRET"),
    user_agent="python:SoftwareDesignLatest:v1.0",
)

# Example: Get posts from a subreddit
subreddit = reddit.subreddit("Temple")
for post in subreddit.hot(limit=10):
    print(f"Title: {post.title}")