import { React } from "react";
import { act } from "react-dom/test-utils";
import { App } from "../App";
import { storyIds, singularStory } from "../fixtures";
import { getStory, getStoryIds } from "../services/hackerNews-api";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants/index";
import { cleanup, render, waitForElement } from "@testing-library/react";

beforeEach(cleanup);

jest.mock("../hooks/useInfiniteScroll.js");
jest.mock("../services/hackerNews-api.js", () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

test("renders the application", async () => {
  useInfiniteScroll.mockImplementation(() => {
    count: STORY_INCREMENT;
  });
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  await act(async () => {
    const { getByText, queryByTestId } = render(<App />);
    await waitForElement(() => [
      expect(getByText("Chip Challenges at 3/2nm [video]")).toBeTruthy(),
      expect(getByText("Hacker News Stories")).toBeTruthy(),
      expect(queryByTestId("story-by")).toEqual("By: Erick Lima"),
    ]);
  });
});
