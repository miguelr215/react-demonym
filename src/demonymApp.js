import React, { Component } from 'react';
import './demonymApp.css';

import Demonym from './demonym.js';
import CountrySelector from './countrySelector.js';

class DemonymApp extends Component {
    render(){
        return(
            <div className='demonym_app'>
                <CountrySelector countries={[{name: 'Barbados'}, {name: 'Bahrain'}]}/>
                <Demonym name='Barbadian' country='Barbados'/>
            </div>
        )
    }
}

export default DemonymApp;