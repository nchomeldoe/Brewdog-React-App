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
});