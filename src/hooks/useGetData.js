import { useEffect, useState } from "react"
import { URL } from "../constants/variables"


function useGetData() {
  const [data, setData] =  useState(null)
  const [error, setError] =  useState(null)
  const [loading, setLoading] =  useState(false)

  const getData = async function(){
    setLoading(true)
    try{
        const response = await fetch(URL)
        if(!response.ok) {
            throw new Error("Error occured:" + response.status)
        }
        const data = await response.json()
        setData(data)
    }catch(error){
        setError(error.message)
    } finally{
        setLoading(false)
    }
  }
  useEffect(()=>{
        getData()
  }, [])
  return {data, error, loading}
}


export default useGetData



