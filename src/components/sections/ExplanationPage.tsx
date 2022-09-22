import React from 'react'
import { ExplanationsContainer, StyledExplanations } from '../styles/StyledExplanations.styled'

export default function ExplanationPage() {
  return (
    <StyledExplanations>
        <ExplanationsContainer>
            <div>
                <h2 className='exp-title'>Kalite ve Süreç Yönetimi</h2>
                <p className='exp-text'>Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</p>
                <button className='exp-btn'>Keşfet</button>
            </div>
            <div className='first-img'>
                <img src="../assets/pics/illustration.jpg" alt="" />
            </div>
            <div>
                <img src="../assets/pics/illustration2.jpg" alt="" />
            </div>
            <div>
                <h2 className='exp-title'>Test Yönetimi ve Analizi</h2>
                <p className='exp-text'>Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi sunmaktadır.</p>
                <button className='exp-btn'>Keşfet</button>
            </div>
        </ExplanationsContainer>
    </StyledExplanations>
  )
}
