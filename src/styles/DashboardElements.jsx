import { FaEllipsisV, FaCheck } from "react-icons/fa";
import styled from "styled-components";

export const DashboardMain = styled.main`
  background-color: #f3f1ef;
  height: 100vh;
  width: 100%;
  padding: 40px;
  transition: 0.7s ease;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? "100px" : "0")};
  border-top-left-radius: ${({ isOpen }) => (isOpen ? "100px" : "0")};
`;
export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.7s ease;
  @media screen and (max-width: 2000px) {
  }
`;

export const UpperDiv = styled.div`
  width: 100%;
  transition: 0.7s ease;
  display: flex;
  height: 60%;
  margin: 0 auto;
  padding: 10px;
  @media screen and (max-width: 2000px) {
  }
`;
export const LowerDiv = styled.div`
  width: 100%;
  transition: 0.7s ease;
  height: 40%;
  padding: 10px;
  margin-top: 10px;
  @media screen and (max-width: 2000px) {
  }
`;

//PerformanceTab

export const PerformanceTab = styled.div`
  transition: 0.7s ease;

  flex: 1.1;
  border-radius: 24px;
  background: #0f1322;
  color: #ffffff;
`;

export const Topbar = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  background: transparent;
  margin: 30px;
  justify-content: space-between;
`;
export const PerformanceText = styled.h4`
  font-size: 30px;
  background: transparent;
  text-align: center;
`;
export const MenuDiv = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  border: 1px solid white;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    scale: 1.1;
    background: white;
    color: #0f1322;
  }
`;
export const MenuIcon = styled(FaEllipsisV)`
  background: transparent;
  font-size: 30px;
`;

export const Midbar = styled.div`
  margin: 30px;
  height: 30%;
  background: none;
  display: flex;
`;
export const Percentdiv = styled.div`
  flex: 1;
  margin: 5px;
  display: grid;
  place-items: center;
  background: none;
`;
export const PercentText = styled.h1`
  font-weight: 500;
  font-size: 50px;
  background: none;
`;
export const PerformanceList = styled.div`
height: 100%;
  margin: 30px;
  background: none;
`;
export const ActionDiv = styled.div`
  display: flex;
  padding: 5px 0px;
  margin: 10px;
  height: 10%;
  align-items: center;

  background: none;
`;
export const IconDiv = styled.div`
  width: 50px;
  border-radius: 50px;
  height: 50px;
  display: grid;
  place-items: center;
`;
export const Check = styled(FaCheck)`
  color: white;
  background: none;
  font-size: 32px;
`;
export const ListText = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  word-spacing: 5px;
  background: none;
  margin-left: 20px;
`;
export const ListActionText = styled.p`
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  word-spacing: 5px;
  margin-left: 10px;
  background: none;
  font-weight: 100;
`;

//ActivityTab

export const ActivityTab = styled.div`
  transition: 0.7s ease;
  background-image: linear-gradient(#95cfd9, white);
  flex: 2.2;
  border-radius: 24px;
  margin: 0px 0px 0px 30px;
`;

export const ActivityNav = styled.div`
  background: none;
`;
export const Filter = styled.select`
  padding: 0px 10px;
  height: 80%;
  width: 120px;
  font-size: 17px;
  border: none;
  background-color: #0f1322;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
`;
export const NavList = styled.ul`
  background: none;
`;
export const NavItem = styled.button`
  border: none;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: none;
  height: 100%;
  margin: 20px;
  font-weight: 600;
  font-size: 30px;
  color: #0f1322;
  text-decoration: none;
  transition: 0.3s ease;
  &:hover {
    border-bottom: 10px solid #f74f2a;
    scale: 0.8;
    color: white;
  }
`;

//Engagement Tab

export const EngagementTab = styled.div`
  display: flex;
  border-radius: 24px;
  background-color: #d9baa6;
  justify-content: space-between;
  height: 90%;
  align-items: center;
  padding: 30px;
  width: 100%;
  @media screen and (max-width: 1900px) {
  }
`;

export const EngageDiv = styled.div`
  padding: 5px;
  width: ${({ isOpen }) => (isOpen ? "15%" : "14rem")};
  border-radius: 24px;
  color: #0f1322;
  height: ${({ isOpen }) => (isOpen ? "8rem" : "14rem")};
`;

export const StatusCompDiv = styled.div`
  display: flex;
  width: 65%;
`;

export const EngageText = styled.h5`
  transition: 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size:30px;
  background: none;
  @media screen and (max-width: 1900px) {
    font-size: ${({ isOpen }) => (isOpen ? "20px" : "30px")};
  }

`;

export const EngageP = styled.p`
  background: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: ${({ isOpen }) => (isOpen ? "10px" : "50px")};
  font-size: 18px;
  width: 71%;
  line-height: 1.5;
  word-wrap: break-word;
  @media screen and (max-width: 1900px) {
    font-size: ${({ isOpen }) => (isOpen ? "12px" : "18px")};
  }
`;

export const MiniContainer = styled.div`
  transition: 0.7s ease;
  padding: 30px;
  background: white;
  height: 12rem;
  width: 14rem;
  border-radius: 24px;
  color: #0f1322;
  position: relative;
  margin: ${({ isOpen }) => (isOpen ? "0 30px" : "0 50px")};
  @media screen and (max-width: 1900px) {
    height: ${({ isOpen }) => (isOpen ? "8rem" : "12rem")};
    width: 25%;
    margin: ${({ isOpen }) => (isOpen ? "0 5px" : "0 20px 0 0")};
  }
`;
export const MiniIconDiv = styled.div`
  display: grid;
  transition: 0.7s ease;

  place-items: center;
  color: white;
  background: #f74f2a;
  position: absolute;
  width: 3.5rem;

  height: 3.5rem;
  border-radius: 12px;
  top: ${({ isOpen }) => (isOpen ? "-20px" : "-25px")};
  left: ${({ isOpen }) => (isOpen ? "15px" : "30px")};

  @media screen and (max-width: 1900px) {
  }
`;
export const SpanText = styled.p`
  transition: 0.7s ease;

  background: none;
  padding-top: 20px;
  font-size: 18px;

  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media screen and (max-width: 1900px) {
    font-size: ${({ isOpen }) => (isOpen ? "12px" : "18px")};
  }
`;
export const Rate = styled.p`
  transition: 0.7s ease;

  background: none;
  text-align: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 36px;
  display: flex;
  padding-top: ${({ isOpen }) => (isOpen ? "12px" : "25px")};
  font-weight: 700;
  @media screen and (max-width: 1900px) {
    font-size: ${({ isOpen }) => (isOpen ? "20px" : "36px")};
  }
`;
export const MetricsDiv = styled.div`
  width: 16%;
  padding: 30px;
  background: #95cfd9;
  height: 12rem;
  font-size: 30px;
  border-radius: 24px;
  color: #0f1322;
  /* margin: 60px; */
`;
export const MetricsText = styled.p`
  background: none;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  padding-bottom: 20px; ;
`;
export const MetricsButton = styled.button`
  font-size: 30px;
  border: none;
  background: #0f1322;
  color: #ffffff;
  width: 50px;
  border-radius: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: white;
    color: #0f1322;
  }
`;
