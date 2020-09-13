import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hackerNews-api";
import { Story } from "../components/Story";
import "../styles/StoriesContainer.css";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getStoryIds().then((ids) => setStoryIds(ids));
  }, []);

  return (
    <React.Fragment id="global-style" classname="stories-container-wrapper">
      <h1>News Stories</h1>
      {storyIds.map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </React.Fragment>
  );
};
