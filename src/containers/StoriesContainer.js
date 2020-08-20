import React, { useEffect, useState } from "react";
import { getStoryIds, getStory } from "../services/hackerNews-api";
import { Story } from "../components/Story";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getStoryIds().then((ids) => setStoryIds(ids));
  }, []);

  return storyIds.map((storyId) => <Story storyId={storyId} />);
};
