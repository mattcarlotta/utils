/* eslint-disable no-use-before-define */
import * as React from "react";
import { configure, mount, ReactWrapper } from "enzyme";
import { JSDOM } from "jsdom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../utils/app";
import waitForAct from "../waitForAct";

configure({ adapter: new Adapter() });

const { document } = new JSDOM(
  "<!DOCTYPE html><body><div id='root'></div></body>"
).window;
global.document = document;
(global as any).window = document.defaultView;

describe("Wait For Act", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("initially displays a loading indicator", () => {
    expect(wrapper.find("#loading").exists()).toBeTruthy();
  });

  it("displays a message after fetching data", async () => {
    await waitForAct(() => {
      wrapper.update();
      expect(wrapper.find("#message").exists()).toBeTruthy();
      expect(wrapper.find("#message").text()).toEqual("hi");
    });
  });
});
