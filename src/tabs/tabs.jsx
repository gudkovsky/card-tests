import React, { useState } from "react";

import { Titles, TabButton, TabContent, TabTitle } from "./styled";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Titles>
        {tabs &&
          tabs.length &&
          tabs.map((item, i) => {
            if (i === activeTab) {
              return (
                <TabButton
                  current
                  key={item.title}
                  onClick={() => {
                    setActiveTab(i);
                  }}
                >
                  <TabTitle current>{item.title}</TabTitle>
                </TabButton>
              );
            }
            return (
              <TabButton
                key={item.title}
                onClick={() => {
                  setActiveTab(i);
                }}
              >
                <TabTitle>{item.title}</TabTitle>
              </TabButton>
            );
          })}
      </Titles>

      <TabContent>{tabs[activeTab].content}</TabContent>
    </div>
  );
}
