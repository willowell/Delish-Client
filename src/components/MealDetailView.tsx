import React from 'react'

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import { MealDetailQuery } from '../gen/graphql'

interface MealDetailViewProps {
  data: MealDetailQuery
}

// ? From https://gist.github.com/takien/4077195
function getYouTubeId (url: string) {
  const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  return undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0]
}

const MealDetailView: React.FC<MealDetailViewProps> = ({ data }) => {
  const ingredients = data?.mealByID?.ingredients?.map((ingredient, i) =>
    <li key={ i }>{ingredient?.name ?? 'ERROR'}: {ingredient?.amount ?? 'ERROR'}</li>
  )

  const instructions = data?.mealByID?.instructions?.map((instruction, i) =>
    <li key={ i }>{instruction ?? 'ERROR'}</li>
  )

  return (
    <Container className='text-container' style={{ paddingBottom: '8rem' }}>
      <h3>{data?.mealByID?.name ?? 'ERROR'}</h3>
      <p className='h3'>☙{data?.mealByID?.category ?? 'ERROR'}, {data?.mealByID?.area ?? 'ERROR'}❧</p>
      <Image src={data?.mealByID?.thumbnail ?? 'ERROR'} rounded fluid/>
      <p className='h3'>Ingredients</p>
      <ul>{ ingredients }</ul>
      <h3>Instructions</h3>
      <ol>{ instructions }</ol>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} >
        <iframe 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
          src={`https://www.youtube.com/embed/${getYouTubeId(data?.mealByID?.youtube ?? '')}`} 
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  )
}

export default MealDetailView
