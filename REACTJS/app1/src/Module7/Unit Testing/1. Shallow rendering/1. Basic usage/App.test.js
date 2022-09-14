import React from 'react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';

import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('shallow rendering <Todo_Function /> component', () => {
    const app = shallow(<App />);
    //console.log(app.debug())

    expect(app.find("Todo_Function")).toHaveLength(1)
  });

  it('shallow rendering <Todo_Class /> component', () => {
    const app = shallow(<App />);
    //console.log(app.debug())

    expect(app.find("Todo_Class")).toHaveLength(1)
  });
});
