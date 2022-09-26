import React from 'react'
import { Quality } from '../Quality'
import { DetailsContainer, StyledQualities, TitleContainer } from '../styles/StyledQualities.styled'

export default function Qualities() {
  return (
    <StyledQualities>
      <TitleContainer>
        <h2>Kalite ve Süreç Yönetimi</h2>
        <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
      </TitleContainer>
      <DetailsContainer>
        <Quality 
          bg='#FF5391' 
          right="0" 
          src="./assets/icons/file1.png" 
          title='Döküman Analizi' 
          text='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
        <Quality 
          bg='#7553FF' 
          left="0" 
          top='10px' 
          src="./assets/icons/Star.png" 
          title='Kabul ve Değerlendirme' 
          text='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
        <Quality 
          bg='#53ACFF' 
          left="0" 
          top='10px' 
          src="./assets/icons/ChartBar.png" 
          title='Akış Diyagramları' 
          text='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
        <Quality 
          bg='#FF5353' 
          right="0" 
          src="./assets/icons/ChartPieSlice.png" 
          title='Paydaş Analizi' 
          text='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
        <Quality 
          bg='#53C1FF' 
          right="0" 
          top='5px' 
          src="./assets/icons/Crown.png" 
          title='İş Kuralları Analizi' 
          text='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
        <Quality 
          bg='#FFBA53' 
          right="0" 
          src="./assets/icons/FigmaLogo.png" 
          title='Prototipleme' 
          text='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
      </DetailsContainer>
    </StyledQualities>
  )
}
