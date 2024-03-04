// LayoutContext.js
import React, { createContext, useContext, useState } from 'react';

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <LayoutContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
};
