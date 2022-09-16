import React from "react";
import {FaArrowUp} from "react-icons/fa"
import { useGlobalContext } from "../../../context";
import {
  MiniContainer,
  MiniIconDiv,
  SpanText,
  Rate,
} from "../../../styles/DashboardElements";

const StatusComp = ({ icon, span, rate }) => {
  const {isOpen } = useGlobalContext()
  return (
    <MiniContainer isOpen={isOpen}>
      <MiniIconDiv isOpen={isOpen}>{icon}</MiniIconDiv>
      <SpanText isOpen={isOpen}>{span}</SpanText>
      {/* needs to be a state , so it can be properly controlled dynamically */}
      <Rate isOpen={isOpen}>{rate} {<FaArrowUp color="green" style={{background:"none"}} /> }</Rate>
    </MiniContainer>
  );
};

export default StatusComp;
