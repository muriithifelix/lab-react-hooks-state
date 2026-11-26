import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode((previousMode) => !previousMode)
  }

  return (
    <button onClick={handleToggle}>
      Toggle {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkModeToggle