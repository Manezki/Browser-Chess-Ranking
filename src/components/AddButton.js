import React from 'react'

const AddButton = ({ onClick, title }) => {

  return (
    <svg width="24" height="24" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="addButton" onClick={onClick}>
      {title && <title>{title}</title>}
      <circle cx="3" cy="3" r="3" fill="#4BB0E7" fillOpacity="0.85"/>
      <path d="M3 1.5V3V4.5M1.5 3H4.5" stroke="white" strokeOpacity="0.85" strokeLinecap="round"/>
    </svg>
  )
}

export default AddButton
