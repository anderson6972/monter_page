import React from 'react';

import './search-box.style.css';

export const SearchBox = ({placerholder, handleChange}) => (
    <input 
        className='search'
        type='search' 
        placeholder= {placerholder}
        onChange = {handleChange} 

    />
)