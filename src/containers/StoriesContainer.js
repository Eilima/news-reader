import React, { useEffect, useState, memo } from "react";
import { getStoryIds } from "../services/hackerNews-api";
import { Story } from "../components/Story";
import "../styles/StoriesContainer.css";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();
  useEffect(() => {
    getStoryIds().then((ids) => setStoryIds(ids));
  });

  return (
    <React.Fragment id="global-style" classname="stories-container-wrapper">
      <h1>News Stories</h1>
      {storyIds.slice(0, count).map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </React.Fragment>
  );
};
