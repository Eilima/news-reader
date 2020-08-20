import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hackerNews-api";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((ids) => setStoryIds(ids));
  }, []);
  return <p>{storyIds}</p>;
};
