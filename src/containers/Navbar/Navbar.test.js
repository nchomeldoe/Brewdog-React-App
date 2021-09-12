import React from "react";
import Navbar from "./Navbar";
import { shallow } from 'enzyme';
import beers from "../../data/beer-examples";

describe("Navbar tests", () => {
  let component;
  let testBeers;
  let mockFn;

  beforeEach(() => {
    testBeers = beers;
    mockFn = jest.fn();
    component = shallow(<Navbar beers={testBeers} toggleAbvFilter={mockFn} toggleClassicFilter={mockFn} togglePhFilter={mockFn} setSearch={mockFn}/>);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});