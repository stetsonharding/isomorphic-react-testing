import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer from "react-test-renderer";
import react from "react";

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

describe("The display element", () => {
  it("should not regress", () => {
    const tree = renderer.create(
      <QuestionDetailDisplay
        title="The meaning of life"
        body="43"
        answer_count={0}
        tags={["hitchiking"]}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
