import React, { useContext } from 'react'
import { mainContext } from '../context/MainContext'

function Login() {
    const {dispatch}  = useContext(mainContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const data = Object.fromEntries(formData)
        dispatch({type:"LOGIN", payload: data})

        e.target.reset()
    }
  return (
    <div className='w-full h-full grow flex  justify-center items-center '>
        <div className='w-full max-w-[400px] flex flex-col gap-6 shadow-2xl rounded-2xl py-8 px-8
        '>
            <h2 className='text-2xl text-center font-bold'>LOGIN</h2>
                  <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <input className='input w-full' type="text" name='Login' placeholder='enter your login' autoComplete='off' required/>
                <input className='input w-full' type="password" name='password' placeholder='enter your password' autoComplete='off' required />
            </div>
            <button className='btn btn-primary'>Enter</button>
                  </form>
        </div>
    </div>
  )
}

export default Login
