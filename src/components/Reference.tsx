import React from 'react'

interface Props {
    src: string;
    alt: string;
}

export const Reference:React.FC <Props> = ({ src, alt }) => {
  return (
    <div className="ref-container">
        <img src={ src } alt={ alt } />
    </div>
  )
}
