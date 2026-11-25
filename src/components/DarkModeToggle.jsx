import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // TODO: Implement dark mode toggle logic
    return (

    <button onClick={() => setDarkMode(!darkMode)}>
      oggle {darkMode ? 'Light Mode' : 'Dark Mode'}
      {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
  )
}

export default DarkModeToggle
