import NotificationsViewer from "../NotificationsViewer";
import renderer from "react-test-renderer";
import React from "react";
import delay from "redux-saga";

describe(
  ("The notification viewer",
  () => {
    it("should display the correct number of notification", async () => {
      const tree = renderer.create(<NotificationsViewer />);

      await delay();
    });
  })
);
