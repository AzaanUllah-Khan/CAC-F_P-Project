import { useDispatch } from "react-redux"
import authService from "../../Appwrite/auth"
import { logout } from "../../Store/authSlice"
const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.Logout()
            .then(() => { dispatch(logout()) })
            .catch(console.log("Error")
            )
    }
    return <button onClick={logoutHandler} className="ml-10 py-1 px-3 rounded-md outline-none border-none bg-gray-600 text-white font-semibold cursor-pointer hover:bg-gray-600/85 transition ease-in-out duration-200">Logout</button>
}

export default LogoutBtn
