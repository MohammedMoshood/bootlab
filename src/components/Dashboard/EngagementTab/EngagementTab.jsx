import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { EngagementTab,EngageDiv , EngageText , EngageP , MetricsDiv , MetricsText, MetricsButton , StatusCompDiv} from "../../../styles/DashboardElements";
import { EngagementData } from "./Data";
import StatusComp from "./StatusComp";

const Engagement = () => {
  return (
    <EngagementTab>
      <EngageDiv>
        <EngageText>Engagement</EngageText>
        <EngageP>General statistics of user<b style={{background:"none"}}>engagement</b>
        processes</EngageP>
      </EngageDiv>
      <StatusCompDiv>
      {EngagementData.map((item)=>{
      return <StatusComp {...item} key={item.id}/>
     })}
      </StatusCompDiv>
     
     <MetricsDiv>
      <MetricsText>
        Your New Metrics
      </MetricsText>
      <MetricsButton>
        <FaArrowRight style={{background:"none"}}/>
      </MetricsButton>
     </MetricsDiv>
    </EngagementTab>
  );
};

export default Engagement;
