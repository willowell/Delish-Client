import React from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
    border-top: 1px solid #ccc;
    margin-top: 50px !important;
    padding-top: 20px;
    background-color: white;
    color: black;
    text-align: center;

    a {
        color: #650d88;

        &:hover {
            color: #e80c7a;
        }
    }
`

export default function Footer () {
  return (
    <StyledFooter>
      <p>Copyright &copy; William Howell {new Date().getFullYear()}</p>
      <p>
                Powered by{' '}
        <a
          href='https://www.themealdb.com/api.php'
          target='_blank'
          rel='noopener noreferrer'
          className='Link'
        >
                    TheMealDB
        </a>
      </p>
    </StyledFooter>
  )
}
