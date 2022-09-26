import React from 'react'
import { Circle } from './Circle'

interface Props {
    bg?: string;
    top?: string;
    left?: string;
    right?: string;

    src: string;
    title: string;
    text: string;
}

export const Quality:React.FC <Props> = ({ bg, top, left, right, src, title, text }) => {
  return (
    <div className='detail'>
        <div className='img-container'>
        <Circle bg={ bg } top={ top } right={ right } left={ left }/>
        <img src={ src } alt='' />
        </div>
        <h4>{ title }</h4>
        <p>{ text }</p>
    </div>
  )
}
