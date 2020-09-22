import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/theme'

const StyledText = styled.div`
    h1, h2, h3, h4, h5 {
        font-family: Mogra;
        color: ${colors.primary.main};
        text-align: center;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .emphasis-big {
        font-size: 1.5rem;
        font-family: Mogra;
        color: ${colors.primary.main};
    }

    .emphasis {
        font-size: 1.2rem;
        font-family: Mogra;
        color: ${colors.primary.main};
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