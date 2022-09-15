import React from "react";
import {
  DashboardMain,
  DashboardContainer,
  UpperDiv,
  LowerDiv,
} from "../../styles/DashboardElements";
import Engagement from "./EngagementTab/EngagementTab";
import Performance from "./PerformanceTab/Performance";
import Activity from "./ActivityTab/Activity";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";

const MenuStyle = { cursor: "pointer" , top:"10px" , position:"absolute" , left:"10px" }

const Dashboard = () =>{
  
  const { isOpen, toggleOpen } = useGlobalContext();
  return (
    <DashboardMain isOpen={isOpen}>
    {!isOpen &&  <FaBars onClick={toggleOpen} style={MenuStyle} size="36"  /> } 
     
      <DashboardContainer isOpen={isOpen}>
        <UpperDiv isOpen={isOpen} >
          <Performance isOpen={isOpen} />
          <Activity isOpen={isOpen} />
        </UpperDiv >
        <LowerDiv isOpen={isOpen}>
          <Engagement isOpen={isOpen} />
        </LowerDiv>
      </DashboardContainer>
    </DashboardMain>
  );
};

export default Dashboard;
