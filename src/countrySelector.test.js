import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CountrySelector from './countrySelector.js';

describe('Demonym Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CountrySelector />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})