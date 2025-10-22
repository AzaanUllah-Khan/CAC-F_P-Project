import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import authService from "./Appwrite/auth"
import { login, logout } from "./Store/authSlice"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import Login from "./Pages/Login.jsx"
import Signup from "./Pages/Signup.jsx"
import { AuthLayout } from './components/index.js'
import Post from './Pages/Post.jsx'
import EditPost from "./Pages/EditPost.jsx"
import AllPosts from "./Pages/AllPosts.jsx"
import AddPost from "./Pages/AddPost.jsx"

const App = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }))
      }
      else {
        dispatch(logout())
      }
    }).finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-100'>
      <div className='w-full block'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<AuthLayout authentication={false}><Login /></AuthLayout>} />
            <Route path='/signup' element={<AuthLayout authentication={false}><Signup /></AuthLayout>} />
            <Route path='/all-posts' element={<AuthLayout authentication><AllPosts /></AuthLayout>} />
            <Route path='/add-posts' element={<AuthLayout authentication><AddPost /></AuthLayout>} />
            <Route path='/edit-post/:slug' element={<AuthLayout authentication><EditPost /></AuthLayout>} />
            <Route path='/post/:slug' element={<Post />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  ) : null
}

export default App
