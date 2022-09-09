import React from 'react';
import { mount } from 'enzyme';

import Todo_Function from './Todo_Function';

var todo_Function;

beforeEach(() => {
    todo_Function = mount(<Todo_Function />);
    //console.log(todo_Function.debug())
});

describe('<Todo_Function />', () => {
    it('rendering one <h2 /> tag', () => {
        const h2_tag = todo_Function.find("h2")

        expect(h2_tag).toHaveLength(1)
        expect(h2_tag.text()).toBe("Functional Component")
    });

    it('rendering todo content', () => {
        const p_tags = todo_Function.find("p")

        expect(p_tags).toHaveLength(4)
        //console.log(JSON.stringify(p_tags.get(0)))
        expect(p_tags.get(0).props.children[1]).toBe(1)
        expect(p_tags.get(1).props.children[1]).toBe("Learn JSF")
        expect(p_tags.get(2).props.children[1]).toContain("article")
        expect(p_tags.get(3).props.children[1]).toBeGreaterThan(0)
    });

    it('simulating increment button event', () => {
        const increment_button = todo_Function.find("button").at(0)

        expect(todo_Function.find("p").get(3).props.children[1]).toBe(5)

        increment_button.simulate('click')
        expect(todo_Function.find("p").get(3).props.children[1]).toBe(6)

        increment_button.simulate('click')
        expect(todo_Function.find("p").get(3).props.children[1]).toBe(7)
    });

    it('simulating decrement button event', () => {
        const decrement_button = todo_Function.find("button").at(1)

        expect(todo_Function.find("p").get(3).props.children[1]).toBe(5)

        decrement_button.simulate('click')
        expect(todo_Function.find("p").get(3).props.children[1]).toBe(4)

        decrement_button.simulate('click')
        expect(todo_Function.find("p").get(3).props.children[1]).toBe(3)
    });
});

