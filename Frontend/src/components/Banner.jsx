import React from 'react';
import banner from "../../public/marcus1.jpg"

function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                {/* flex by default col rahega medium ke upar row banjayega */}
                {/* my-10 upar niche dono taraf 10 ki margin laga dera hai */}
                <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
                    {/* mt is use to give margin top se dediya hai mtlb border se gap dusre divs ka*/}
                    <div className="space-y-6">
                        {/* yeh upr wala div dono headings wale tag ke bich mein space dene ke liye bana hai */}
                        {/*  medium ya uske upar wala device ke liya width half hojayegi baaki device ke liye width full rahegi*/}
                        <h1 className="text-4xl font-bold">Hello, welcome here to learn something <span className="text-pink-500">new everyday!!!</span></h1>
                        <h1>
                            <p className="text-xl">
                                lorlksdjfa;sdfl a;sdfkljasd;f ajdfjsdfla;ksdjf;ajdfjsdflaasdf;kajsdf;aklsdjf;ads
                                as;djf;asdfja;sdfja;sdfjas;dfjas'dfsa'dfojasdf
                                as;kdfjasdfkja;dfa;sdfkasdf;asdfkja;sdfkjads;fads;jf
                            </p>
                        </h1>
                    </div>

                    <div className="mt-6 space-y-6">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>

                        <button className="btn btn-secondary">Get Started</button>
                    </div>
                </div>
                <div className="order-1 w-full md:w-1/2 mt-16">
                    {/* order image wale div ko upar liyaega mobile devices mein */}
                    <img src={banner} className="" alt="" />
                </div>
            </div>
        </>

    )
}

export default Banner;