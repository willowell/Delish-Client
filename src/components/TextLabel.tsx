import React from 'react'
import styled from '@emotion/styled'

import { colors } from '../styles/theme'

const StyledLabel = styled.h1`
  font-family: Mogra;
  font-size: 3rem;
  color: ${colors.primary.main};
  text-align: center;
`

interface TextLabelProps {
  text: string
}

const TextLabel: React.FC<TextLabelProps> = (props) =>
  <StyledLabel>
    <h1>{ props.text }</h1>
  </StyledLabel>

export default TextLabel
