import React, { useEffect, useState } from "react";
import { getStory } from "../services/hackerNews-api";
import "../styles/StoryWrapper.css";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((story) => setStory(story));
  }, [storyId]);

  return story && story.url ? (
    <div className="story-wrapper">
      <a href={story.url}>
        <p>
          {story.title} #{storyId}
        </p>
      </a>
      <p>By: {story.by}</p>
      <p>Posted: {story.time}</p>
    </div>
  ) : null;
};
