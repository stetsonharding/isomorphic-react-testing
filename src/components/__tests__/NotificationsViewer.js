import NotificationsViewer from "../NotificationsViewer";
import renderer from "react-test-renderer";
import React from "react";
import delay from "redux-saga";

jest.mock("../../services/NotificationsService");

const NotificationsService =
  require("../../services/NotificationsService").default;
describe("The notification viewer", () => {
  beforeAll(() => {
    NotificationsService.__setCount(42);
  });

  it("should display the correct number of notification", async () => {
    const tree = renderer.create(<NotificationsViewer />);

    await delay();
    const instance = tree.root;
    const comp = instance.findByProps({ className: "notifications" });
    const text = comp.children[0];
    expect(text).toEqual("5 Notifications Awaiting");
  });
});
