import React from 'react';
import { mount } from 'enzyme';
import LocationSearch from './LocationSearch';


describe('<LocationSearch />', () => {
  const onSubmitMock = jest.fn();
  const component = mount(<LocationSearch onSubmit={onSubmitMock} />);

  test('renders component', () => {
    expect(component.find('form').length).toBe(1);
  });

  test('calls onSubmit prop when text is entered', () => {
    component.find('.textInput').instance().value = "London";
    const form = component.find('form');
    form.simulate('submit');

    expect(onSubmitMock).toHaveBeenCalledWith('London');
  });
})
