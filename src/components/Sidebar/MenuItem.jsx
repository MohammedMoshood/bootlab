import React from 'react'
import {
  ItemDiv,
  ItemText
  } from "../../styles/SidebarElements";

const MenuItem = ({title , to , icon}) => {
  return (
    <ItemDiv>
        {icon}
        <ItemText>{title}</ItemText>
    </ItemDiv>
  )
}

export default MenuItem