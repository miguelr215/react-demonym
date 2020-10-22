import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DemonymApp from './demonymApp.js';

describe('DemonymApp Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DemonymApp />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})