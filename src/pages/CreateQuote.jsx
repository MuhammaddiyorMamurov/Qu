import React, { useContext } from 'react'
import { URL } from '../constants/variables'
import { useTranslation } from 'react-i18next'
import {MainContext} from '../context/MainContext'
import { Link, useNavigate } from 'react-router-dom'


function CreateQuote() {
    const {state} = useContext(MainContext)
    const navigate = useNavigate()

    const {t,i18n} = useTranslation()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const date = new Date()
        const formData = new FormData(e.target)

        const dataObj = {
            author: formData.get("author"),
            text:{
                uz:formData.get("text-en"),
                en:formData.get("text-uz"),
                ru:formData.get("text-ru"),
            },
            likes:0,
            time:date.toISOString(),
            createdUser: state.userInfo.email

        }
        try{
            const request = await fetch(URL,{
                method:'POST',
                headers: {
                  "Content-Type":"application/json"  
                },
                body: JSON.stringify(dataObj)
            })
            if(!request.ok){
                throw new Error("Something went wrong! Plese try again.")
            
            }
            toast.success("Info loaded")
            navigate("/")
        }catch(error){
            toast.error(error.message)
        }
        e.target.reset()

    }
  return (
    <div className='py-10'>
        <div className="container">
            <Link className='btn inline-flex items-center btn-active mb-10' to={"/"}>{t("back")}</Link>
        </div>
        <div className="container flex items-center justify-center ">
           
               <form onSubmit={handleSubmit} className='w-full max-w-[500px] flex flex-col gap-4'>
             <div className='flex flex-col gap-1.5'>   
                <label htmlFor="text-uz">
                    {t("lanuz")}
                </label>
                <input className='input w-full' type="text" name='text-uz' placeholder='write the quote in uzbek' id='text-uz' required/>
           </div>
           <div className='flex flex-col gap-1.5'>
           <label htmlFor="text-en">
                 {t("lan")}
            </label>
            <input className='input w-full' type="text" name='text-en' placeholder='write the quote in english' id='text-en' required/>
           </div>
            
            <div className='flex flex-col gap-1.5'>
                <label htmlFor="text-ru">
                {t("lanru")}
                </label>
                <input className='input w-full' type="text" name='text-ru' placeholder='write the quote in russian' id='text-ru' required/>
            </div>
            <div className='flex flex-col gap-1.5'>
                <label htmlFor="text-author">
                    {t("author")}
                </label>
                <input className='input w-full' type="text" name='text-author' placeholder='write the author of the quote' id='text-author' required/>
            </div>
            <button className='btn btn-primary'>{t("send")}</button>
            </form> 
        </div>
      
    </div>
  )
}

export default CreateQuote
