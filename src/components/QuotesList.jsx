import React, { useContext, useEffect, useState } from 'react'
import useGetData from "../hooks/useGetData"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { MainContext } from '../context/MainContext';
import { URL } from '../constants/variables';
import toast from 'react-hot-toast';

function QuotesList() {
  const [quotes, setQuotes] = useState([])
  const { state, dispatch } = useContext(MainContext)
  const { data } = useGetData()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (data && data.data) {
      setQuotes(data.data)
    }
  }, [data])

  const handleLiked = async (id) => {
    if (state.likedQuotes.includes(id)) {
      
      try {
        const response = await fetch(URL + "/" + id, {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            likes: quotes.find((q) => q.id === id).likes - 1
          })
        })
        if (!response.ok) throw new Error("Like didn't send")

        await response.json()
        setQuotes(prev =>
          prev.map(quote =>
            quote.id === id ? { ...quote, likes: quote.likes - 1 } : quote
          )
        )
      } catch (error) {
        toast.error(error.message)
      }

      localStorage.setItem("liked-quotes",
        JSON.stringify(state.likedQuotes.filter((numId) => numId !== id)))
      dispatch({
        type: "LIKED",
        payload: state.likedQuotes.filter((numId) => numId !== id)
      })
    } else {
     
      try {
        const response = await fetch(URL + "/" + id, {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            likes: quotes.find((q) => q.id === id).likes + 1
          })
        })
        if (!response.ok) throw new Error("Like didn't send")

        await response.json()
        setQuotes(prev =>
          prev.map(quote =>
            quote.id === id ? { ...quote, likes: quote.likes + 1 } : quote
          )
        )
      } catch (error) {
        toast.error(error.message)
      }

      localStorage.setItem("liked-quotes",
        JSON.stringify([...state.likedQuotes, id]))
      dispatch({
        type: "LIKED",
        payload: [...state.likedQuotes, id]
      })
    }
  }

  return (
    <div className='container'>
      <ul className='flex flex-col gap-6'>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <Link
              className='flex flex-col shadow-md py-6 px-6 border border-primary rounded-md relative'
              to={"/"}
            >
              <div className='flex flex-col mb-6 '>
                <p className='mb-2'>{quote.text[i18n.language.split("-")[0]]}</p>
                <p>{quote.author}</p>
                <button
                  onClick={() => handleLiked(quote.id)}
                  className='btn absolute top-2 right-2'
                >
                  <span>
                    {state.likedQuotes.includes(quote.id)
                      ? <FcLike className='text-xl' />
                      : <FaRegHeart className='text-xl' />}
                  </span>
                  <span>{quote.likes}</span>
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuotesList

