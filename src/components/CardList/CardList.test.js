import React from "react";
import CardList from "./CardList";
import { shallow } from 'enzyme';
import beers from "../../data/beer-examples";

describe("CardList tests", () => {
  let component;
  let testBeers;

  beforeEach(() => {
    testBeers = beers;
    component = shallow(<CardList beers={testBeers}/>);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});