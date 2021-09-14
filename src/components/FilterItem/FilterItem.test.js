import React from "react";
import FilterItem from "./FilterItem";
import { shallow } from 'enzyme';

describe("FilterItem tests", () => {
  let component;
  let text;
  let name;
  let mockFn;

  beforeEach(() => {
    text = "test text";
    name = "test name";
    mockFn = jest.fn();
    component = shallow(<FilterItem text={text} name={name} toggleFilter={mockFn}/>);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should call function on change', () => {
    component.find("input").simulate("change");
    expect(mockFn).toHaveBeenCalled();
  })
});