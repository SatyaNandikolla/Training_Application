import React from 'react';
import { mount } from 'enzyme';

import App from './App';

var app;

beforeEach(() => {
  app = mount(<App />);
  //console.log(app.debug())
});

describe('<App />', () => {
  it('rendering one <h2 /> tag', () => {
    const h2_tags = app.find("h2")

    expect(h2_tags).toHaveLength(2)
    //console.log(h2_tags.get(0))
    expect(h2_tags.get(0).props.children).toBe("Functional Component")
    expect(h2_tags.get(1).props.children).toBe("Class Component")
  });

  it('rendering functional component todo content', () => {
    const p_tags = app.find("p")

    expect(p_tags).toHaveLength(8)
    //console.log(JSON.stringify(p_tags.get(0)))
    expect(p_tags.get(0).props.children[1]).toBe(1)
    expect(p_tags.get(1).props.children[1]).toBe("Learn JSF")
    expect(p_tags.get(2).props.children[1]).toContain("article")
    expect(p_tags.get(3).props.children[1]).toBeGreaterThan(0)
  });

  it('rendering class component todo content', () => {
    const p_tags = app.find("p")

    expect(p_tags).toHaveLength(8)
    //console.log(JSON.stringify(p_tags.get(0)))
    expect(p_tags.get(4).props.children[1]).toBe(1)
    expect(p_tags.get(5).props.children[1]).toBe("Learn JSF")
    expect(p_tags.get(6).props.children[1]).toContain("article")
    expect(p_tags.get(7).props.children[1]).toBeGreaterThan(0)
  });

  it('simulating functional component increment button event', () => {
    const increment_button = app.find("button").at(0)

    expect(app.find("p").get(3).props.children[1]).toBe(5)

    increment_button.simulate('click')
    expect(app.find("p").get(3).props.children[1]).toBe(6)

    increment_button.simulate('click')
    expect(app.find("p").get(3).props.children[1]).toBe(7)
  });

  it('simulating functional component decrement button event', () => {
    const decrement_button = app.find("button").at(1)

    expect(app.find("p").get(3).props.children[1]).toBe(5)

    decrement_button.simulate('click')
    expect(app.find("p").get(3).props.children[1]).toBe(4)

    decrement_button.simulate('click')
    expect(app.find("p").get(3).props.children[1]).toBe(3)
  });

  it('simulating class component increment button event', () => {
    const increment_button = app.find("button").at(2)

    expect(app.find("p").get(7).props.children[1]).toBe(5)

    increment_button.simulate('click')
    expect(app.find("p").get(7).props.children[1]).toBe(6)

    increment_button.simulate('click')
    expect(app.find("p").get(7).props.children[1]).toBe(7)
  });

  it('simulating class component decrement button event', () => {
    const decrement_button = app.find("button").at(3)

    expect(app.find("p").get(7).props.children[1]).toBe(5)

    decrement_button.simulate('click')
    expect(app.find("p").get(7).props.children[1]).toBe(4)

    decrement_button.simulate('click')
    expect(app.find("p").get(7).props.children[1]).toBe(3)
  });
});
