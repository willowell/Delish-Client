import React from 'react'
import Container from 'react-bootstrap/Container'

export default function MainLayout(props: any) {
    return (
        <Container>
            { props.children }
        </Container>
    )
}