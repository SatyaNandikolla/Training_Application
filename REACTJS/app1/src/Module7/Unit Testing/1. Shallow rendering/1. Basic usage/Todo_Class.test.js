import React from 'react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import Todo_Class from './Todo_Class';


configure({ adapter: new Adapter() });

describe('<Todo_Class />', () => {
    it('rendering one <h2 /> tag', () => {
        const todo_Class = shallow(<Todo_Class/>);
        //console.log(todo_Class.debug())

        expect(todo_Class.find("h2")).toHaveLength(1)
        expect(todo_Class.find("h2").text()).toBe("Class Component")
    });

    it('rendering todo content', () => {
        const todo_Class = shallow(<Todo_Class />);
        //console.log(todo_Class.debug())

        expect(todo_Class.find("p")).toHaveLength(4)
        //console.log(JSON.stringify(todo_Class.find("p").get(0)))
        expect(todo_Class.find("p").get(0).props.children[1]).toBe(1)
        expect(todo_Class.find("p").get(1).props.children[1]).toBe("Learn JSF")
        expect(todo_Class.find("p").get(2).props.children[1]).toContain("article")
        expect(todo_Class.find("p").get(3).props.children[1]).toBeGreaterThan(0)
    });
});
