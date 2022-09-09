import React from 'react';
import { shallow } from 'enzyme';

import Todo_Class from './Todo_Class';

var todo_Class;

beforeEach(() => {
    todo_Class = shallow(<Todo_Class />);
    //console.log(todo_Class.debug())
});

describe('<Todo_Class />', () => {
    it('rendering one <h2 /> tag', () => {
        const h2_tag = todo_Class.find("h2")

        expect(h2_tag).toHaveLength(1)
        expect(h2_tag.text()).toBe("Class Component")
    });

    it('rendering todo content', () => {
        const p_tags = todo_Class.find("p")

        expect(p_tags).toHaveLength(4)
        //console.log(JSON.stringify(p_tags.get(0)))
        expect(p_tags.get(0).props.children[1]).toBe(1)
        expect(p_tags.get(1).props.children[1]).toBe("Learn JSF")
        expect(p_tags.get(2).props.children[1]).toContain("article")
        expect(p_tags.get(3).props.children[1]).toBeGreaterThan(0)
    });
});
