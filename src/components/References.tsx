import React from 'react'
import { Refs, RefTitle, StyledRef } from './styles/StyledRef.styled'

export default function References() {
  return (
    <StyledRef>
        <RefTitle>
            <h2>Referanslarımız</h2>
            <p>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
        </RefTitle>
        <Refs>
            <div className='ref-col'>
              <div className="ref-container">
                <img src="../assets/refs/borusan.png" alt="borusan" />
              </div>
            </div>
            <div className='ref-col'>
              <div className="ref-container">
                <img src="../assets/refs/ibu.png" alt="ibu" />
              </div>
              <div className="ref-container">
                <img src="../assets/refs/bookmyshow.png" alt="bookmyshow" />
              </div>
            </div>
            <div className='ref-col'  id='last-ref'>
              <div className="ref-container">
                <img src="../assets/refs/akbank.png" alt="akbank" />
              </div>
              <div className="ref-container">
                <img src="../assets/refs/akcan.png" alt="akcan" />
              </div>
              <div className="ref-container">
                <p>Tümünü Gör</p>
                <img src="../assets/refs/ArrowRight.png" alt="arrow-right" />
              </div>
            </div>
            <div className='ref-col'>
              <div className="ref-container">
                <img src="../assets/refs/aktas.png" alt="aktas" />
              </div>
              <div className="ref-container">
                <img src="../assets/refs/ola.png" alt="ola" />
              </div>
            </div>
            <div className='ref-col'>
              <div className="ref-container">
                <img src="../assets/refs/amazon.png" alt="amazon" />
              </div>
            </div>
        </Refs>
    </StyledRef>
  )
}
