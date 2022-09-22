import React from 'react'
import { Circle } from '../Circle'
import { ContactContainer, StyledContact } from '../styles/StyledContact.styled'

export default function Contact() {
  return (
    <StyledContact>
        <ContactContainer>
            <div>
                <Circle bg='#F84646' top='10px' right='10px'/>
                <img src="../assets/icons/users.png" alt="user" />
            </div>
            <h2>Bize Ulaşın</h2>
            <p>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</p>
            <button>Bize Ulaşın</button>
        </ContactContainer>
    </StyledContact>
  )
}
