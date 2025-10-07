import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Navigate } from 'react-router-dom'
import { MainContext } from '../context/MainContext'
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
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
    const {state: {userInfo} , dispatch} = useContext(MainContext)
    const {t,i18n} = useTranslation()

    
    

    const logout = ()=>{
      
      signOut(auth)
      .then(() => {
        toast.success(t("logout"))
      }).catch((error) => {
        toast.error(t("uncompleted"))
      });
        dispatch({type:"LOGOUT"})
    }

   const changeTheme = ()=> {
      setTheme((prev)=> {
        let newTheme = prev == "light"? "dark" : "light" ;
        localStorage.setItem("theme", newTheme)

         return newTheme
        })
    }
      
    const changeLanguage = (lang)=> {
      i18n.changeLanguage(lang.text)
      toast.success(t("language"))
    }

      return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className='container flex justify-between items-center'>
      
        <Link className="btn btn-ghost text-xl" to={"/"}>
        <img src="/quotes.webp" alt="site logo" width={24} height={24} className='rounded-xl'/>
        QUOTES
        </Link>

        
       <div className='flex items-center gap-4'> 
       <label className="toggle text-base-content">
  <input onChange={changeTheme} type="checkbox" value="dark" defaultChecked={theme == "light" ? false : true} className="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>
       <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">
  <img 
            src={languages.find((lang)=> lang.text === i18n.language.split("-")[0]).icon} 
            alt={i18n.language}
            width={24}
            height={24}/>
            <span>{i18n.language.split("-"[0])}</span>
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
