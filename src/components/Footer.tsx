import React from 'react'
import styled from '@emotion/styled'

import { colors } from '../styles/theme'

const StyledFooter = styled.footer`
    border-top: 1px solid #ccc;
    margin-top: 50px !important;
    padding-top: 20px;
    background-color: ${colors.primary.dark};
    color: white;
    text-align: center;

    a {
        color: ${colors.primary.main};

        &:hover {
            color: ${colors.secondary.main};
        }
    }
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>Copyright &copy; William Howell {new Date().getFullYear()}</p>
      <p>
        Powered by{' '}
        <a
          href='https://www.themealdb.com/api.php'
          target='_blank'
          rel='noopener noreferrer'
        >
          TheMealDB
        </a>
      </p>
      <p>
        You can find the code for this website at{' '}
        <a
          href='https://github.com/willowell/'
          target='_blank'
          rel='noopener noreferrer'
        >
          willowell@GitHub
        </a>
      </p>
      <a
        href='https://loading.io/'
        target='_blank'
        rel='noopener noreferrer'
      >
          Loading magnifying glass icon from loading.io
      </a>
    </StyledFooter>
  )
}

export default Footer
