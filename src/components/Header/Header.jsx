import { useSelector } from "react-redux"
import { useEffect } from "react"
import { Container, Logo, LogoutBtn } from "../index"
import { Link, useNavigate } from "react-router-dom"

function Header() {
  const authStatus = useSelector(state => state.status)
  const nav = useNavigate()

  const naItems = [
    {
      name:"Home",
      slug:"/",
      active: true
    },
    {
      name:"Login",
      slug:"/login",
      active: !authStatus
    },
    {
      name:"Signup",
      slug:"/signup",
      active: !authStatus
    },
    {
      name:"All Posts",
      slug:"/all-posts",
      active: authStatus
    },
    {
      name:"Add Posts",
      slug:"/add-posts",
      active: authStatus
    }
  ]
  return (
    <header className="bg-gray-200/50 px-4 py-1 border-b-2 border-gray-200">
      <Container>
        <nav className="flex items-center">
          <div>
          <Logo width="70px" className="invert-60"/>
          </div>
          <ul className="flex items-center gap-2 ml-auto">
            {
              naItems.map((item)=>(
                item.active ? <li key={item.name}>
                  <button className="inline-block px-2 py-1 rounded-md bg-transparent transition duration-200 ease-in-out hover:bg-gray-300/60"><Link to={item.slug}>{item.name}</Link></button>
                </li> : null
              ))
            }
          </ul>
          {
            authStatus && (<LogoutBtn />)
          }
        </nav>
      </Container>
    </header>
  )
}

export default Header
