import { mapStateToProps } from "../QuestionDetail";
// import { describe } from "optimist";
// import { map } from "lodash";

describe("The Question Detail Component", () => {
  describe("The Container Element", () => {
    describe("mapsStateToProps", () => {
      it("should map the state to props correctly", () => {
        const sampleQuestion = {
          question_id: 42,
          body: "Space is big",
        };
        const appState = {
          questions: [sampleQuestion],
        };
        const ownProps = {
          question_id: 42,
        };
        const componentsState = mapStateToProps(appState, ownProps);
        console.log(componentsState);
        expect(componentsState).toEqual(sampleQuestion);
      });
    });
  });
  it("should not regress", () => {});
});
