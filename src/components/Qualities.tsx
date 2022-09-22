import React from 'react'
import { Circle } from './Circle'
import { DetailsContainer, StyledQualities, TitleContainer } from './styles/StyledQualities.styled'

export default function Qualities() {
  return (
    <StyledQualities>
      <TitleContainer>
        <h2>Kalite ve Süreç Yönetimi</h2>
        <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
      </TitleContainer>
      <DetailsContainer>
        <div className='detail'>
          <div className='img-container'>
            <Circle bg='#FF5391' right={"0"}/>
            <img src="./assets/icons/file1.png" alt="file" />
          </div>
          <h4>Döküman Analizi</h4>
          <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
        </div>
        <div className='detail'>
          <div className='img-container'>
            <Circle bg='#7553FF' left={"0"} top={"10px"}/>
            <img src="./assets/icons/Star.png" alt="star" />
          </div>
          <h4>Kabul ve Değerlendirme</h4>
          <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
        </div>
        <div className='detail'>
          <div className='img-container'>
            <Circle bg='#53ACFF' left={"0px"} top={"10px"}/>
            <img src="./assets/icons/ChartBar.png" alt="bar-chart" />
          </div>
          <h4>Akış Diyagramları</h4>
          <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
        </div>
        <div className='detail'>
          <div className='img-container'>
            <Circle bg='#FF5353' right={"0"}/>
            <img src="./assets/icons/ChartPieSlice.png" alt="pie-chart" />
          </div>
          <h4>Paydaş Analizi</h4>
          <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
        </div>
        <div className='detail'>
          <div className='img-container'>
            <Circle bg='#53C1FF' right={"0"} top={"5px"}/>
            <img src="./assets/icons/Crown.png" alt="crown" />
          </div>
          <h4>İş Kuralları Analizi</h4>
          <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
        </div>
        <div className='detail'>
          <div className='img-container'>
            <Circle bg='#FFBA53' right={"0"}/>
            <img src="./assets/icons/FigmaLogo.png" alt="figma-logo" />
          </div>
          <h4>Prototipleme</h4>
          <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
        </div>
      </DetailsContainer>
    </StyledQualities>
  )
}
