import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Container from 'react-bootstrap/Container';

const GET_A_MEAL = gql`
  query GetAMeal {
    mealByName(name: "Baingan Bharta") {
        name
        ingredients {
            name
            amount
        }
        instructions
    }
  }
`;

export default function Home() {
    const { data, loading, error } = useQuery(GET_A_MEAL);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <Container>
            <div>
                <h1>{data.mealByName.name}</h1>
                {
                    data.mealByName.instructions.map((line: any) => (
                            <div key={line.id}>
                                <p>{line}</p>
                            </div>
                        )
                    )
                }
            </div>
        </Container>
    );
}