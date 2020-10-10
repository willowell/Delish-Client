import React from 'react'

import placeholder from '../assets/placeholder_1024x1024.png'

const PlaceholderImage: React.FC = () =>
  <img
    src={placeholder}
    className='d-inline-block align-center'
    style={{ width: '100%', height: 'auto' }}
    alt='Delish logo'
  />

export default PlaceholderImage
