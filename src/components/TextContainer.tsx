import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/theme'

const StyledText = styled.div`
    .label {
        font-family: Mogra;
        font-size: 2rem;
        color: ${colors.primary};
        text-align: center;
    }

    .emphasis {
        font-family: Mogra;
        color: ${colors.primary};
    }

    p {
        font-size: 1.2rem;
        text-align: center;
    }
`

export default function TextContainer (props: any): JSX.Element {
    return (
        <StyledText>
            { props.children }
        </StyledText>
    )
}