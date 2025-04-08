import React from 'react'
import NavBar from './NavBar'
import FilterBar from './FilterBar'

const Header = () => {
  return (
    <div className='sm:sticky sm:top-0 sm:z-20 w-screen sm:h-[214px] h-auto shadow-md bg-[#ffffff] pt-5'>
        <NavBar/>
        <FilterBar/>
    </div>
  )
}

export default Header