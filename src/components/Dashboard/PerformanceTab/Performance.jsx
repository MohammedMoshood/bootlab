import React from "react";
import { MenuIcon, PerformanceTab } from "../../../styles/DashboardElements";
import {
  Topbar,
  PerformanceText,
  MenuDiv,
  Midbar,
  Percentdiv,
  PercentText,
  PerformanceList,
} from "../../../styles/DashboardElements";
import { PerformanceData } from "./Data";
import ListItem from "./ListItem";

const Performance = () => {
  return (
    <PerformanceTab>
      <Topbar>
        <PerformanceText>Performance</PerformanceText>
        <MenuDiv>
          <MenuIcon />
        </MenuDiv>
      </Topbar>
      <Midbar>
        <Percentdiv style={{ borderRight: "1px solid grey" }}>
          <PercentText>{"75%"}</PercentText>
        </Percentdiv>

        <Percentdiv>
          <PercentText>{"25%"}</PercentText>
        </Percentdiv>
      </Midbar>
      <PerformanceList>
        {PerformanceData.map((item) => {
          return <ListItem {...item} key={item.id} />;
        })}
      </PerformanceList>
    </PerformanceTab>
  );
};

export default Performance;
