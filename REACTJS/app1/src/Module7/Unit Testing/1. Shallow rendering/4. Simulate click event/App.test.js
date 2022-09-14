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
    expect(app.find("Todo_Function")).toHaveLength(1)
  });

  it('shallow rendering <Todo_Class /> component', () => {
    expect(app.find("Todo_Class")).toHaveLength(1)
  });
});
