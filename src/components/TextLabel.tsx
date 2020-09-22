import React from 'react'
import styled from '@emotion/styled'

import { colors } from '../styles/theme'

const StyledLabel = styled.div`
    h1 {
        font-family: Mogra;
        font-size: 3rem;
        color: ${colors.primary.main};
        text-align: center;
    }
`

interface TextLabelProps {
    text: string
}

export default function TextLabel (props: TextLabelProps): JSX.Element {
    return (
        <StyledLabel>
            <h1>{ props.text }</h1>
        </StyledLabel>
    )
}