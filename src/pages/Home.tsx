import React from 'react';
import { RouteComponentProps } from '@reach/router'
import Container from 'react-bootstrap/Container';

import HomeCarousel from '../components/HomeCarousel'

export default function Home(props: RouteComponentProps) {
    return (
        <Container>
            <HomeCarousel />
        </Container>
    );
}