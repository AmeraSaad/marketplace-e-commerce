import React, { useState,createContext } from 'react'

export const ToggleSidebarContext = createContext();

function ToggleSidebarProvider({children}) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    < ToggleSidebarContext.Provider value={{isSidebarOpen,setIsSidebarOpen,toggleSidebar}}>
      { children }
    </ToggleSidebarContext.Provider>
  )
}

export default ToggleSidebarProvider
