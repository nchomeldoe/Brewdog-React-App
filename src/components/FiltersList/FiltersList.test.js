import React from "react";
import FiltersList from "./FiltersList";
import { shallow } from 'enzyme';

describe("FiltersList tests", () => {
  let component;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<FiltersList toggleAbvFilter={mockFn} toggleClassicFilter={mockFn} togglePhFilter={mockFn}/>);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});