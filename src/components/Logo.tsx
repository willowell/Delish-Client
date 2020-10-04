import React from 'react'
import styled from '@emotion/styled'

import logo from '../assets/Delish_200x200.png'

const StyledLogo = styled.img`
    width: 60px;
    height: 60px;
`

const Logo: React.FC = () => {
  return (
    <StyledLogo
      src={logo}
      className='d-inline-block align-center'
      alt='Delish logo'
    />
  )
}

export default Logo
