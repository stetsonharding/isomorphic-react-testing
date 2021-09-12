import { Satellite } from "@material-ui/icons";
import { questions } from "./questions";

// describe("The questions reducer", () => {
//   it("Should work", () => {
//     console.log("testing questions");
//     const state = ["foo", "bar"];
//     const newState = questions(state, { type: "unrecognized_action" });
//     expect(newState).toEqual(state);
//     expect;
//   });
// });

describe("The questions reducer", () => {
  it("should not modify the state for unrecognized questions", () => {
    console.log("testing questions");
    const state = ["foo", "bar"];
    const newState = questions(state, { type: "unrecognized_action" });
    expect(newState).toEqual(state);
  });

  it("should add new items", () => {
    const state = [{ question_id: "foo", question_id: "barz" }];
    const newQuestion = [{ question_id: "zoo" }];
    const newState = questions(state, {
      type: "FETCHED_QUESTION",
      questions: newQuestion,
    });
  });
});
