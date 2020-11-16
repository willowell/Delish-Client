import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='bg-dark text-white fixed-bottom'>
      <div className='pt-1 text-center'>
        <p>
          <small>
            &copy; William Howell {new Date().getFullYear()}
            <br/>
            
            Powered by{' '}
            <a
              href='https://www.themealdb.com/api.php'
              target='_blank'
              rel='noopener noreferrer'
            >
              TheMealDB
            </a>
            <br/>
            You can find the code for this website at{' '}
            <a
              href='https://github.com/willowell/'
              target='_blank'
              rel='noopener noreferrer'
            >
              willowell@GitHub
            </a>
            <br/>
            <a
              href='https://loading.io/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Loading magnifying glass icon from loading.io
            </a>
            <br/>
          </small>
        </p>
      </div>
    </footer>
  )
}

export default Footer
