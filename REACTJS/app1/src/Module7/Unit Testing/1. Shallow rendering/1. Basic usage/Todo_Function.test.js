import React from 'react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import Todo_Function from './Todo_Function';


configure({ adapter: new Adapter() });

describe('<Todo_Function />', () => {
    it('rendering one <h2 /> tag', () => {
        const todo_Function = shallow(<Todo_Function/>);
        //console.log(todo_Function.debug())

        expect(todo_Function.find("h2")).toHaveLength(1)
        expect(todo_Function.find("h2").text()).toBe("Functional Component")
    });

    it('rendering todo content', () => {
        const todo_Function = shallow(<Todo_Function />);
        //console.log(todo_Function.debug())

        expect(todo_Function.find("p")).toHaveLength(4)
        //console.log(JSON.stringify(todo_Function.find("p").get(0)))
        expect(todo_Function.find("p").get(0).props.children[1]).toBe(1)
        expect(todo_Function.find("p").get(1).props.children[1]).toBe("Learn JSF")
        expect(todo_Function.find("p").get(2).props.children[1]).toContain("article")
        expect(todo_Function.find("p").get(3).props.children[1]).toBeGreaterThan(0)
    });
});

