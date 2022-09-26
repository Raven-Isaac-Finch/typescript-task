import React from 'react'
import { Reference } from '../Reference'
import { Refs, RefTitle, StyledRef } from '../styles/StyledRef.styled'

export default function References() {
  return (
    <StyledRef>
        <RefTitle>
            <h2>Referanslarımız</h2>
            <p>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
        </RefTitle>
        <Refs>
            <div className='ref-col'>
              <Reference src="../assets/refs/borusan.png" alt="borusan" />
            </div>
            <div className='ref-col'>
              <Reference src="../assets/refs/ibu.png" alt="ibu" />
              <Reference src="../assets/refs/bookmyshow.png"  alt="bookmyshow" />
            </div>
            <div className='ref-col'  id='last-ref'>
              <Reference src="../assets/refs/akbank.png"  alt="akbank" />
              <Reference src="../assets/refs/akcan.png"  alt="akcan" />
              <div className="ref-container">
                <p>Tümünü Gör</p>
                <img src="../assets/refs/ArrowRight.png" alt="arrow-right" />
              </div>
            </div>
            <div className='ref-col'>
              <Reference src="../assets/refs/aktas.png" alt="aktas" />
              <Reference src="../assets/refs/ola.png" alt="ola" />
            </div>
            <div className='ref-col'>
              <Reference src="../assets/refs/amazon.png" alt="amazon" />
            </div>
        </Refs>
    </StyledRef>
  )
}
