import React from "react";
import Main from "./Main";
import { shallow } from 'enzyme';
import beers from "../../data/beer-examples";

describe("Main tests", () => {
  let component;
  let testBeers;

  beforeEach(() => {
    testBeers = beers;
    component = shallow(<Main beers={testBeers} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});