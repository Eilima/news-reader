import React, { useEffect, useState, memo } from "react";
import { getStory } from "../services/hackerNews-api";
import { mapTime } from "../mappers/mapTime";
import "../styles/StoryWrapper.css";

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    console.log("Story ID", storyId);
    getStory(storyId).then((story) => setStory(story));
  }, []);

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
});
