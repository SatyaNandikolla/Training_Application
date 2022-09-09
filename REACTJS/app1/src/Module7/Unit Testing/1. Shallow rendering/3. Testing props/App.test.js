import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

var app;

beforeEach(() => {
  app = shallow(<App />);
  //console.log(app.debug())
});

describe('<App />', () => {
  it('shallow rendering <Todo_Function /> component', () => {
    const todo_function = app.find("Todo_Function")
    const propsObj = {"id":1,"title":"Learn JSF","description":"Finish this article","priority":5}

    expect(todo_function).toHaveLength(1)
    expect(todo_function.props()).toMatchObject(propsObj)
  });

  it('shallow rendering <Todo_Class /> component', () => {
    const todo_class = app.find("Todo_Class")
    const propsObj = {"id":1,"title":"Learn JSF","description":"Finish this article","priority":5}
    
    expect(todo_class).toHaveLength(1)
    expect(todo_class.props()).toMatchObject(propsObj)
  });
});
