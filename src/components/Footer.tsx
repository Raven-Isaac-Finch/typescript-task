import React from 'react'
import { BottomContainer, Section, StyledFooter, TopContainer } from './styles/StyledFooter.styled'

export default function Footer() {
  return (
    <StyledFooter>
        <TopContainer>
            <Section>
                <h4>Çözüm ve Hizmetler</h4>
                <a href="#0">Yazılım Geliştirme</a>
                <a href="#0">Outsourcing</a>
                <a href="#0">Kalite ve Süreç Yönetimi</a>
                <a href="#0">Danışmanlık</a>
                <a href="#0">IoT Destekli Çözümler</a>
            </Section>
            <Section>
                <h4>Ürünler</h4>
                <a href="#0">Eğitim Yönetim Sistemi</a>
                <a href="#0">İnsan Sermayesi Yönetim Sistemi</a>
                <a href="#0">Müşteri İlişkileri Yönetim Sistemi</a>
                <a href="#0">İçerik Yönetim Sistemi</a>
            </Section>
            <Section>
                <h4>Kurumsal</h4>
                <a href="#0">Hakkımızda</a>
                <a href="#0">Belge ve Yetkinlikler</a>
                <a href="#0">İş Ortakları</a>
            </Section>
            <Section>
                <h4>İletişim</h4>
                <a href="#0">Bilgi İstek Formu</a>
                <a href="#0">Uzman Talep Formu</a>
            </Section>
        </TopContainer>
        <BottomContainer>
            <p>&copy; Copyright 2010-2021</p>
            <div>
                <img src="../assets/logos/mediumLogo.png" alt="medium" />
                <img src="../assets/logos/linkedinLogo.png" alt="linkedin" />
                <img src="../assets/logos/twitterLogo.png" alt="twitter" />
                <img src="../assets/logos/instagramLogo.png" alt="instagram" />
                <img src="../assets/logos/facebookLogo.png" alt="facebook" />
            </div>
        </BottomContainer>
    </StyledFooter>
  )
}
