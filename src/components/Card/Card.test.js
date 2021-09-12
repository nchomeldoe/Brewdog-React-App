import React from "react";
import Card from "./Card";
import { shallow } from 'enzyme';
import beers from "../../data/beer-examples";

describe("Card tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beers[0];
    component = shallow(<Card beer={testBeer} key={testBeer.id}/>);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});