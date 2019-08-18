import React from 'react'

import './search-box.styles.css'

const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder='search monsters'
    onChange={props.onSearchChange}
  />
)

export default SearchBox
