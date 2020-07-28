import React from 'react'
import ImgLogo from '../../assets/img/Logo.png'
import {
  HeaderContainer,
  Logo,
  Link,
  ButtonLink,
} from './styled'

const Header = () => (
  <HeaderContainer>
    <Link href="/">
      <Logo src={ImgLogo} alt="logo codeflix" height={40} width={168.45}/>
    </Link>
    <ButtonLink href="/">Novo vídeo</ButtonLink>
  </HeaderContainer>
)

export default Header