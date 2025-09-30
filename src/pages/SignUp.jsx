import React, { useContext } from 'react'
// import { mainContext } from '../context/MainContext'
import { useTranslation } from 'react-i18next'
import { FcGoogle } from "react-icons/fc";
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import { mainContext } from '../context/MainContext';

function SignUp() {
  const {dispatch}  = useContext(mainContext)

      const {t} = useTranslation()
  
      const handleSubmit = (e) => {
          e.preventDefault()
  
          const formData = new FormData(e.target)
  
          const data = Object.fromEntries(formData)
          
  
          e.target.reset()
      }
      const gsignUp = ()=> {
        const provider = new GoogleAuthProvider;


signInWithPopup(auth, provider)
  .then((result) => {
   
    const user = result.user;
    dispatch({type: "LOGIN", payload:user})
    
  }).catch((error) => {
    
    const errorMessage = error.message;
    
  });
      }
    return (
      <div className='w-full h-full grow flex  justify-center items-center '>
          <div className='w-full max-w-[400px] flex flex-col gap-6 shadow-2xl rounded-2xl py-8 px-8
          '>
              <h2 className='text-2xl text-center font-bold'>{t("signup")}</h2>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                  <input className='input w-full' type="text" name='fullname' placeholder='enter your fullname' autoComplete='off' required/>
                  <input className='input w-full' type="email" name='Email' placeholder='enter your login' autoComplete='off' required/>
                  <input className='input w-full' type="password" name='password' placeholder='enter your password' autoComplete='off' required />
                  <input className='input w-full' type="password" name='password-again' placeholder='repeat your password' autoComplete='off' required />
              </div>
              <button onClick={gsignUp} className='btn btn-neutral' type='button'>
                <FcGoogle/>
                <span>Google</span>
                </button>
              <button className='btn btn-primary'>{t("enter")}</button>
                    </form>
          </div>
      </div>
    )
}

export default SignUp
