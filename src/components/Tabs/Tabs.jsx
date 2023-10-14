import React, { useState } from "react";
import {
  StyledForecastCard,
  StyledForecastHeader,
} from "../TodayForecast/StylesTodayForecast";
import { DailyTab } from "../AllTabs/DailyTab";
import { HourlyTab } from "../AllTabs/HourlyTab";
import { TabNavItem } from "../TabNavItem/TabNavItem";
import { TabContent } from "../TabContent/TabContent";
import { WeeklyTab } from "../AllTabs/WeeklyTab";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const tabNavItems = [
    {
      title: 'Прогноз на день',
      id: 'daily'
    },
    {
      title: 'Дополнительная информация',
      id: 'hourly'
    },
    {
      title: 'Геолокация',
      id: 'weekly'
    },
]

  return (
    <>
      <StyledForecastCard>
        <StyledForecastHeader>
          {tabNavItems.map(item => {
            return <TabNavItem
            key={item.id}
            title={item.title}
            id={item.id}
            activeTab={item.id === activeTab}
            setActiveTab={setActiveTab}
            />
          })

          }
          
          
        </StyledForecastHeader>

        <div className='outlet'>
          <TabContent id='daily' activeTab={activeTab}>
            <DailyTab />
          </TabContent>
          <TabContent id='hourly' activeTab={activeTab}>
            <HourlyTab />
          </TabContent>
          <TabContent id='weekly' activeTab={activeTab}>
            <WeeklyTab />
          </TabContent>
        </div>
      </StyledForecastCard>
    </>
  );
};
