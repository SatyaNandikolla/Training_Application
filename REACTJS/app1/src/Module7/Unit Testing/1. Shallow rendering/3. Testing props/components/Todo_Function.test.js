import React from 'react';
import { shallow } from 'enzyme';

import Todo_Function from './Todo_Function';

var todo_Function;

beforeEach(() => {
    var id = 1, title = "Learn JSF", description = "Finish this article", priority = 5;
    todo_Function = shallow(<Todo_Function id={id} title={title} description={description} priority={priority} />);
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
});

