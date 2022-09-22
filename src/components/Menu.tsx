import React from 'react'

interface Props {
    action: any;
}

export const Menu:React.FC <Props> = ({ action }) => {
  return (
    <div onClick={() => {action()}}>
        <img src="../assets/List.png" alt="menu" className='menu-icon'/>
    </div>
  )
}
