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

  it('should render the correct image', () => {
    const beerImage = testBeer.image_url;
    expect(component.find("img").prop("src")).toBe(beerImage);
  })

  it('should render an image with the correct alt attribute', () => {
    const beerName = testBeer.name;
    expect(component.find("img").prop("alt")).toBe(beerName);
  })

  it('should render the correct data', () => {
    const beerData = [testBeer.name, testBeer.tagline, testBeer.abv, testBeer.ph, testBeer.first_brewed, testBeer.description];
    beerData.forEach(item => expect(component.text()).toContain(item));
  })

  it('should render an unordered list of food pairings', () => {
    const beerPairings = testBeer.food_pairing;
    const listItems = component.find("ul");
    listItems.forEach((item, i) => {expect(item.text()).toBe(beerPairings[i])})
  })

});