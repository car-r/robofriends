import React from 'react'
import {
    SearchBoxInput,
} from './SearchBoxElements'

const SearchBox = ({placeholder, handleChange}) => {
    return (
        <div>
            <SearchBoxInput 
                type='search'
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBox
