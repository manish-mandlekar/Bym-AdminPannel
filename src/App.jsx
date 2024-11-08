import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './Dashboard'

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar isSideMenuOpen={isSideMenuOpen} />
        
        <div className="flex flex-col flex-1 w-full">
          <Header 
            toggleSideMenu={toggleSideMenu}
            toggleTheme={toggleTheme}
            isDark={isDark}
          />
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default App