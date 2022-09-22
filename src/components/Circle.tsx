import React from 'react'
import { StyledCircle } from './styles/StyledCircle.styled'

interface Props {
    bg?: string;
    top?: string;
    left?: string;
    right?: string;
}

export const Circle:React.FC <Props> = ({bg, top, left, right}) => {
  return (
    <StyledCircle bg={ bg } top={ top } left={ left } right={ right }/>
  )
}
