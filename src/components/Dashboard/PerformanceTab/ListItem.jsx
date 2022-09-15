import React from 'react'
import {ActionDiv , IconDiv , Check , ListText , ListActionText} from "../../../styles/DashboardElements"

const ListItem = ({iconBg , actiontype ,title}) => {
  return (
    <ActionDiv>
        <IconDiv style={{backgroundColor:`${iconBg}`}}>
            <Check/>
        </IconDiv>
        <ListText>{title}</ListText>
        <ListActionText> {actiontype}</ListActionText>
    </ActionDiv>
  )
}

export default ListItem