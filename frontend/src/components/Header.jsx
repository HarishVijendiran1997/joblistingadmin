import React from 'react'
import NavBar from './NavBar'
import FilterBar from './FilterBar'

const Header = () => {
  return (
    <div className='sticky top-0 z-20 w-screen sm:h-[214px] shadow-md bg-[#ffffff] pt-5'>
        <NavBar/>
        <FilterBar/>
    </div>
  )
}

export default Header