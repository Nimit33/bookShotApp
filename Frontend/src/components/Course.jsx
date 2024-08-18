import React, { useState } from 'react'
import { useEffect } from 'react';
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom"


function Course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            // async await esliye use krte hai taaki response aane tk ka wait kr rhe woh
            try {
                const res = await axios.get("http://localhost:4001/book")
                console.log(res.data)
                setBook(res.data)

            } catch (error) {
                console.log(error)

            }

        }
        getBook();

    }, [])
    return (
        <>
            <div className="`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white ">
                <div className="mt-28 items-center justify-center text-center"  >
                    <h1 className="text-2xl font-semibold md:text-4xl">
                        We are delighted to have you<span className="text-pink-500"> Here:)</span>
                    </h1>
                    <p>
                        a;lskdfj;asdljfk asdf
                        asdf;lakskdjf;asdflja'sdfja'sdfasdfja;sdfjkasd;fjasd;fkajsdf;askdfja;sdfkja;dsfa'
                        asdfkasd;fkj;dsajfadfj'asdflkaapiewnvonaivnpadfa
                        sdfasdfjasdfasdfaksdjf;asdljfsdf ;;                     sdkfjasd;fkajds;fasdjkf;
                    </p>
                    <Link to="/">
                        {/* back button dabane se homepage pe lejayega */}
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">Back</button>

                    </Link>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {
                        book.map((item) => (<Cards key={item.id} item={item} />
                        ))
                    }

                </div>

            </div>
        </>
    )
}

export default Course