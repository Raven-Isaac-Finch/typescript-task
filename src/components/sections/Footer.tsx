import React from 'react'
import { BottomContainer, Section, StyledFooter, TopContainer } from '../styles/StyledFooter.styled'

export default function Footer() {
  return (
    <StyledFooter>
        <TopContainer>
            <Section>
                <h4>Çözüm ve Hizmetler</h4>
                <a href="#!">Yazılım Geliştirme</a>
                <a href="#!">Outsourcing</a>
                <a href="#!">Kalite ve Süreç Yönetimi</a>
                <a href="#!">Danışmanlık</a>
                <a href="#!">IoT Destekli Çözümler</a>
            </Section>
            <Section>
                <h4>Ürünler</h4>
                <a href="#!">Eğitim Yönetim Sistemi</a>
                <a href="#!">İnsan Sermayesi Yönetim Sistemi</a>
                <a href="#!">Müşteri İlişkileri Yönetim Sistemi</a>
                <a href="#!">İçerik Yönetim Sistemi</a>
            </Section>
            <Section>
                <h4>Kurumsal</h4>
                <a href="#!">Hakkımızda</a>
                <a href="#!">Belge ve Yetkinlikler</a>
                <a href="#!">İş Ortakları</a>
            </Section>
            <Section>
                <h4>İletişim</h4>
                <a href="#!">Bilgi İstek Formu</a>
                <a href="#!">Uzman Talep Formu</a>
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
