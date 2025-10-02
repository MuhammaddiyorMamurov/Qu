import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Navigate } from 'react-router-dom'
import { mainContext } from '../context/MainContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'
import toast from 'react-hot-toast'
import { changeLanguage } from 'i18next'

const languages = [
    {
    id:1,
    icon:"/united-kingdom.png",
    text:"en"
  },
    {
    id:2,
    icon:"/uzbekistan.png",
    text:"uz"
  },
    {
    id:3,
    icon:"/russia.png",
    text:"ru"
  },
]

function Navbar() {
    const {state: {userInfo} , dispatch} = useContext(mainContext)
    const {t,i18n} = useTranslation()

    console.log(userInfo);
    

    const logout = ()=>{
      
      signOut(auth)
      .then(() => {
        toast.success(t("logout"))
      }).catch((error) => {
        toast.error(t("uncompleted"))
      });
        dispatch({type:"LOGOUT"})
    }
      
    const changeLanguage = (lang)=> {
      toast.success(t("language"))
      i18n.changeLanguage(lang.text)
    }
    


      return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className='container flex justify-between items-center'>
      
        <Link className="btn btn-ghost text-xl" to={"/"}>I18n</Link>

        
       <div className='flex items-center gap-4'> 
       <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">
  <img 
            src={languages.find((lang)=> lang.text === i18n.language).icon} 
            alt={i18n.language}
            width={24}
            height={24}/>
            <span>{i18n.language}</span>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl">
   {languages.map((lang)=>{
    return <li key={lang.id}>
        <button onClick={()=>changeLanguage(lang)}>
        <img 
            src={lang.icon} 
            alt={i18n.language}
            width={24}
            height={24}/>
            <span>{lang.text}</span>
        </button>
    </li>
   })}
  </ul>
</div>
      <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="user avatar"
                    src={userInfo.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <button className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </button>
                </li>
                <li><button>Settings</button></li>
                <li><button onClick={logout}>Logout</button></li>
              </ul>
            </div>
                  </div>
        </div>
  </div>
</div>
  )
}

export default Navbar
