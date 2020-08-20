import React, { useEffect, useState } from "react";
import { getStory } from "../services/hackerNews-api";
import { mapTime } from "../mappers/mapTime";
import "../styles/StoryWrapper.css";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((story) => setStory(story));
  }, [storyId]);

  return story && story.url ? (
    <div className="story-wrapper">
      <a href={story.url}>
        <h1>
          {story.title} #{storyId}
        </h1>
      </a>
      <div className="story-meta">
        <p>By: {story.by}</p>
        <p>Posted: {mapTime(story.time)}</p>
      </div>
    </div>
  ) : null;
};
