import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
                // logout krne pr user null hojayega 
            })
            localStorage.removeItem("Users");
            //local storage se user ko remove kr denge
            toast.success("Logout Successfully");

            setTimeout(() => {
                window.location.reload();
                // page reload ho jaye

            }, 3000)
        } catch (error) {
            toast.error("Error: " + error.message)
            setTimeout(() => { }, 2000);

        }
    };
    return (
        <>
            <div className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
                onClick={handleLogout}>
                <button>Logout</button>
            </div>

        </>
    )
}

export default Logout