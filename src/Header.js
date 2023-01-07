import React from 'react'

const Header = ({title}) => {
  return (
    <h1 className="text-4xl font-bold text-emerald-500 text-center my-3">
      {title}
    </h1>
  )
}

Header.defaultProps = {
    title: "Default title"
  }

export default Header