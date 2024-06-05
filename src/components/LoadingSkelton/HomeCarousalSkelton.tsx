import React from "react"

const HomeCarousalSkelton = () => {
    return (
        <div className="relative bg-stone-50  w-full flex-1 border box-border border-neutral-900 ">
            <div className="animate-pulse h-full">
                <div className="animate-pulsed m-5 h-1/2 bg-gray-300"></div>
                <div className="animate-pulsed m-5 h-12 bg-gray-300 rounded-full"></div>
                <div className="animate-pulsed h-4 mx-5 my-2 bg-gray-300 rounded"></div>
                <div className="animate-pulsed h-4 mx-5 my-2 bg-gray-300 rounded"></div>
                <div className="animate-pulsed h-4 mx-5 my-2 bg-gray-300 rounded"></div>
                <div className="animate-pulsed h-4 mx-5 my-2 bg-gray-300 rounded"></div>
                <div className="animate-pulsed h-12 w-1/5 absolute left-5 bottom-5 bg-gray-300 rounded-lg"></div>
            </div>
        </div>
    )
}
export default HomeCarousalSkelton
