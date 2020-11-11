import React from 'react';
import './search.styles.css'


export const Search= ({placeholder,handleChange}) => (
    <input className = 'search' 
           type='tsearch' 
           placeholder={placeholder}
           onChange={handleChange}
    />

)