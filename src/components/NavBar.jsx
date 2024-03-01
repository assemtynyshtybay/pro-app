import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../hocs/ThemeContext";
import { MdLightMode, MdOutlineNightlight } from "react-icons/md";
import FormC from "./Form";
import styled from "styled-components";
import { FaUser } from "react-icons/fa6";
import { TfiControlForward } from "react-icons/tfi";

const NavBar = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isUserData, setIsUserData] = useState(false);
  const dataRef = useRef();

  return (
    <NavBarContainer>
      <Icon>
        <TfiControlForward size={35} color="orange" />
        <span>elta</span>
      </Icon>
      <NavTabs>
        <Icon onClick={toggleTheme.bind(null)}>
          {isDarkTheme ? (
            <MdLightMode size={30} />
          ) : (
            <MdOutlineNightlight size={30} />
          )}
        </Icon>
        <Icon>
          <FaUser onClick={() => setIsUserData((v) => !v)} size={30} />
        </Icon>
      </NavTabs>
      {isUserData && <FormC useRef={dataRef} />}
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: var(--grey);
  padding: 10px 50px;

  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;

const NavTabs = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 3rem;
  color: var(--text-light);
  cursor: pointer;
  span {
    font-size: 2rem;
  }
`;
