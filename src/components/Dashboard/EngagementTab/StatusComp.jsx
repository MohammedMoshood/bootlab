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
      <MiniIconDiv>{icon}</MiniIconDiv>
      <SpanText>{span}</SpanText>
      {/* needs to be a state , so it can be properly controlled dynamically */}
      <Rate>{rate} {<FaArrowUp color="green" size="30" style={{background:"none"}} /> }</Rate>
    </MiniContainer>
  );
};

export default StatusComp;
