import React, { useState, useContext, createContext } from 'react';

const ClickContext = createContext();

export const useClick = () => useContext(ClickContext);
function ClickProvider({ children }) {
  const [isSortDrop, setSortDrop] = useState(false);
  const [isStatusDrop, setStatusDrop] = useState(false);
  const [isCategoryDrop, setCategoryDrop] = useState(false);
  const sortDropHandler = (e) => {
    e.stopPropagation();
    setSortDrop((prev) => !prev);
  };
  const statusDropHandler = (e) => {
    e.stopPropagation();
    if (isCategoryDrop) setCategoryDrop(false);
    setStatusDrop((prev) => !prev);
  };
  const cateDropHandler = (e) => {
    e.stopPropagation();
    if (isStatusDrop) setStatusDrop(false);
    setCategoryDrop((prev) => !prev);
  };

  const onLayoutClickHanlder = () => {
    if (isSortDrop) setSortDrop(false);
    if (isStatusDrop) setStatusDrop(false);
    if (isCategoryDrop) setCategoryDrop(false);
  };

  const value = {
    isSortDrop,
    sortDropHandler,
    isStatusDrop,
    statusDropHandler,
    isCategoryDrop,
    cateDropHandler,
    onLayoutClickHanlder,
  };
  return (
    <ClickContext.Provider value={value}>{children}</ClickContext.Provider>
  );
}
export default ClickProvider;
