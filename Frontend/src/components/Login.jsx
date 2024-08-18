import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            // postmen mein ki api mein data bhejdiya url mein yeh information store userinfo variable ke help se  krwadi
            // axios javascript ke help se api use krne mein help krta hai
            .then((res) => {
                // res joh hai woh response hai joh api bhejegi agr jb woh data successfully store hojayega toh
                console.log(res.data)
                if (res.data) {
                    // alert("Login Successfully")
                    toast.success('Login Successfully');
                    // toast host se liya taaki acha ui banke aaye frontend pe messasge ke liye
                    // agr data shi hoga toh signup successful krdenge frontend pe
                    document.getElementById("my_modal_3").close();
                    // login wali window close ho jaye use koye hai 
                    setTimeout(() => {

                        window.location.reload();
                        // page reload ho jaye
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                        //agr signup hogaya toh browser ke local storage mein es data ko store kr lenge
                    }, 1000)
                }



            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    // alert("Error: " + err.response.data.message);
                    toast.error("Error: " + err.response.data.message);
                    setTimeout(() => { }, 2000);
                }
            })
    }
    return (

        <div><dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)} >
                    {/* onsubmit wali cheez react hook form se li */}
                    {/* if there is a button in form, it will close the modal */}
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>

                    <h3 className="font-bold text-lg">Login</h3>
                    <div className="mt-4 space-y-2" >
                        <span>Email</span>
                        <br />
                        {/* algr line ke liye br us kiya hai */}
                        <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("email", { required: true })} />
                        <br />
                        {errors.email && <span className="text-sm text-red-500">This field is required</span>}

                    </div>

                    <div className="mt-4 space-y-2" >
                        <span>Password</span>
                        <br />
                        {/* algr line ke liye br us kiya hai */}
                        <input type="text" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("password", { required: true })} />
                        <br />

                        {errors.password && <span className="text-sm text-red-500">This field is required</span>}

                    </div>

                    {/* button */}
                    <div className="flex justify-around mt-4">
                        {/* flex use kiya taaki ek hi line mein aajayegn login and not registered wali line */}
                        <button className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200">Login</button>
                        <p>Not registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link></p>

                    </div>

                </form>

            </div>
        </dialog></div>
    )
}

export default Login