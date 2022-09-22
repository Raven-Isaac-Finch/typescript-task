import React from 'react'
import { Container, Img, Nav, StyledHeader } from './styles/StyledHeader.styled'

export default function Header() {
  return (
    <StyledHeader>
        <Img src='../assets/pics/home-picture.png' alt=''/>
        <Nav>
          <img src="../assets/List.png" alt="menu" className='menu-icon'/>
          <ul>
            <li>Çözüm ve Hizmetler</li>
            <li>Ürünler</li>
            <li>Teknolojiler</li>
            <li>İnsan Kaynakları</li>
            <li>Kurumsal</li>
          </ul>
          <button>İletişim</button>
        </Nav>
        <Container>
            <h1 className="home-title">Bilgi Teknolojilerinde 23 Yıllık Tecrübe</h1>
            <p className="home-text">Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
            <div className="input-container">
                <input type="text" placeholder='Mail bültenimize kayıt ol' />
                <button>Kayıt Ol</button>
            </div>
        </Container>
    </StyledHeader>
  )
}
