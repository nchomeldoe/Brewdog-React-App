import React from "react";
import CardList from "./CardList";
import Card from "../Card";
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

  it("should render the corerct number of Card components", () => {
    const numberOfRecipes = testBeers.length;
    const numberOfRenderedCards = component.find(Card).length;
    expect(numberOfRenderedCards).toEqual(numberOfRecipes);
  })
});