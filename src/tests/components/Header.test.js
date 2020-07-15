import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from "enzyme";
import { Header } from '../../components/Header';
// import toJson from 'enzyme-to-json';

test('should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header startLogout={()=>{}}/>);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
