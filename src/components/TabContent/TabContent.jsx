import React from "react";

export const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <div>{children}</div> : null;
};
