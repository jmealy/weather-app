import React from 'react';
import { shallow, mount } from 'enzyme';
import LocationSearch from './LocationSearch';


describe('<LocationSearch />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LocationSearch onSubmit={jest.fn()} />);
  });

  test('renders component', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  test('calls onSubmit prop when text is entered', () => {
    const onSubmitMock = jest.fn();
    const component = mount(<LocationSearch onSubmit={onSubmitMock} />);

    component.find('.textInput').instance().value = "London";
    const form = component.find('form');
    form.simulate('submit');

    expect(onSubmitMock).toHaveBeenCalledWith('London');
  });
})
