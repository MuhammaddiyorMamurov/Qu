import React, { useTransition } from 'react'
import { useTranslation }   from "react-i18next"
import { Link } from 'react-router-dom'
import QuotesList from '../components/QuotesList'

function Home() {
  const {t,i18n} = useTranslation()
  

  return (
    <div className=''>
      <div className="container flex flex-col items-center justify-end py-10">
        <Link className='btn btn-primary ' to={"/create-quote"}>New quote +</Link>
      </div>
        <div className="container">
          <QuotesList/>
          </div>
      
    </div>
  )
}

export default Home
