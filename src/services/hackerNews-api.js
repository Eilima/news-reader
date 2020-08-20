export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
  let response = await fetch(`${newStoriesUrl}`);
  let data = response.json();
  return data;
};

export const getStory = async (storyId) => {
  const response = await fetch(`${storyUrl}${storyId}.json`);
  const data = response.json();
  return data;
};
