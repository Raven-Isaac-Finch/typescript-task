import React from 'react'
import { BGImg, Description, Steps, StyledMidStripe } from '../styles/StyledMidStripe.styled'

export default function MidStripe() {
  return (
    <StyledMidStripe>
        <BGImg src='../assets/bgi.png' alt=''/>
        <Description>
            <h2>Test Yönetimiyle Neler Sağlıyoruz?</h2>
            <p>IoT Destekli Çözümler</p>
        </Description>
        <Steps>
            <p>Yazılım Kalitesini Arttırıyoruz</p>
            <img src="../assets/icons/CaretCircleDoubleRight.png" alt="" />
            <p>Olası Hataları Önceden Belirliyoruz</p>
            <img src="../assets/icons/CaretCircleDoubleRight.png" alt="" />            
            <p>Oluşabilecek Riskleri Önlüyoruz</p>
            <img src="../assets/icons/CaretCircleDoubleRight.png" alt="" />
            <p>Zaman ve Maliyetten Tasarruf Sağlıyoruz</p>
        </Steps>
    </StyledMidStripe>
  )
}
