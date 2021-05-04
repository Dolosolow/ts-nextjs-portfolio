import React from "react";
import { shallow } from "enzyme";

import Header from "components/header";

describe("Header Component", () => {
  const wrapper = shallow(<Header />);

  it("should render without error.", () => {
    expect(wrapper).toBeTruthy();
  });
});
