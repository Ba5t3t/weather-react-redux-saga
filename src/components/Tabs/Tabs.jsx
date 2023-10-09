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
  const [activeTab, setActiveTab] = useState("");

  return (
    <>
      <StyledForecastCard>
        <StyledForecastHeader>
          <TabNavItem
            title='Прогноз на день'
            id='daily'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title='Дополнительная информация'
            id='hourly'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title='Геолокация'
            id='weekly'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
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
