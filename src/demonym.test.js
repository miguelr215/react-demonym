import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Demonym from './demonym.js';

describe('Demonym Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Demonym />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})
