import React, { useTransition } from 'react'
import { useTranslation }   from "react-i18next"

function Home() {
  const {t} = useTranslation()

  return (
    <div className='container flex flex-col gap-6'>
      <h2 className='flex items-center justify-center text-2xl font-bold'>{t("Welcome")}</h2>
      <p>{t("today")}</p>
      <p>{t("body")}</p>
    </div>
  )
}

export default Home
