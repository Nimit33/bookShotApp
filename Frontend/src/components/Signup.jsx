import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import Login from './Login';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        // frontend mein jab tu signup wala page ke andar email, name, password
        //dalta hai toh console ke andar data variable ke andar email, name ,password store 
        //ho jata. ab email name password ko aage data.email laga ke access kr rhe hai
        //taaki es information ko fullname,email, password mein store krke database mein bhej ske
        //storage ke liye
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
            // postmen mein ki api mein data bhejdiya url mein yeh information store userinfo variable ke help se  krwadi
            // axios javascript ke help se api use krne mein help krta hai
            .then((res) => {
                // res joh hai woh response hai joh api bhejegi agr jb woh data successfully store hojayega toh
                console.log(res.data)
                if (res.data) {
                    // alert("Signup Successfully")
                    toast.success('Signup Successfully');
                    // agr data shi hoga toh signup successful krdenge frontend pe
                    navigate(from, { replace: true });

                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                //agr signup hogaya toh browser ke local storage mein es data ko store kr lenge


            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    // alert("Error: " + err.response.data.message);
                    toast.error("Error: " + err.response.data.message);

                }
            })

    };
    return (
        <>
            <div><div className="flex h-screen items-center justify-center">
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className="mt-4 space-y-2" >
                                <span>Name</span>
                                <br />
                                {/* algr line ke liye br us kiya hai */}
                                <input type="text" placeholder="Enter your name" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("fullname", { required: true })} />
                                <br />
                                {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}


                            </div>
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
                                <button className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200">Signup</button>
                                <p>Have account? <button className="underline text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()} > Login</button>
                                    <Login /></p>

                            </div>
                        </form>

                    </div>




                </div>
            </div></div >
        </>
    )
}

export default Signup