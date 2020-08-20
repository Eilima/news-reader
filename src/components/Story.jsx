import React, { useEffect, useState } from "react";
import { getStory } from "../services/hackerNews-api";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then((story) => setStory(story));
  }, []);
  return story && story.url ? (
    <div>
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
