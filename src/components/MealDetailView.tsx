import React from 'react'

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import YouTube from 'react-youtube'

import TextContainer from '../components/TextContainer'
import { MealDetailQuery } from '../gen/graphql'

interface MealDetailViewProps {
  data: MealDetailQuery
}

//? From https://gist.github.com/takien/4077195
function getYouTubeId (url: string) {
  const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  return undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0]
}

const MealDetailView: React.FC<MealDetailViewProps> = ({ data }) => {
  const ingredients = data?.mealByID?.ingredients?.map((ingredient) =>
    <li>{ingredient?.name ?? 'ERROR'}: {ingredient?.amount ?? 'ERROR'}</li>
  )

  const instructions = data?.mealByID?.instructions?.map((instruction) =>
    <li>{instruction ?? 'ERROR'}</li>
  )

  return (
    <Container>
      <TextContainer>
        <h1>{data?.mealByID?.name ?? 'ERROR'}</h1>
        <h2>☙{data?.mealByID?.category ?? 'ERROR'}, {data?.mealByID?.area ?? 'ERROR'}❧</h2>
        <Image src={data?.mealByID?.thumbnail ?? 'ERROR'} />
        <h3>Ingredients</h3>
        <ul>{ ingredients }</ul>
        <h3>Instructions</h3>
        <ol>{ instructions }</ol>
      </TextContainer>
      <YouTube videoId={getYouTubeId(data?.mealByID?.youtube ?? '')} />
    </Container>
  )
}

export default MealDetailView
