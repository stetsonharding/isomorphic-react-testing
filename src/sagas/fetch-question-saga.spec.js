import { handleFetchQuestion } from "./fetch-question-saga";
import fetch from "isomorphic-fetch";
/**
 * This test is an example of two important Jest testing principles,
 * 1) we're mocking the "fetch" module, so that we don't actually make a request every time we run the test
 *  The module, isomorphic fetch, is conveniently mocked automatically be including the file __mocks__/isomorphic-fetch.js adjacent to to the Node.js folder
 * 2) we're using an async function to automatically deal with the fact that our app isn't synchronous
 */

describe("Fetch questions sage", () => {
  beforeAll(() => {
    fetch.__setValue([{ question_id: 42 }]);
  });
  it("Should fetch the questions", async () => {
    const gen = handleFetchQuestion({ question_id: 42 });
    const { value } = await gen.next();
    expect(value).toEqual([{ question_id: 42 }]);
    expect(fetch).toHaveBeenCalledWith("/api/questions/42");
  });
});
