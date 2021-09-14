import React from "react";
import SearchBox from "./SearchBox";
import { shallow } from 'enzyme';

describe("SearchBox tests", () => {
  let component;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<SearchBox setSearch={mockFn} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should call function on input', () => {
    component.find("input").simulate("input", {target: {value: "User input"}});
    expect(mockFn).toHaveBeenCalled();
  })

  it('should call function with "User input', () => {
    component.find("input").simulate("input", {target: {value: "User input"}});
    expect(mockFn).toHaveBeenCalledWith("User input");
  })
});