import {NavLink} from "react-router-dom";
export const Error= () =>{
    return (
        <>
        <div id="error-page">

            <div className="flex flex-col justify-center items-center mt-20">
                <h1 className="text-[250px]  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-bounce">404</h1>
                <h4 className="text-5xl">Sorry! Page not found</h4>
               <p>
                Oops! It seems like the page you are trying to access doesn't exist.<br/>
                If you believe there's an issue, feel free to report it, we'll look
                into it.
               </p>
                <div className="mt-10 flex gap-10">
                    <NavLink className="p-4 border-2 border-pink-400 rounded-xl" to="/">Return to home</NavLink>
                    <NavLink className="p-4 border-2 border-pink-400 rounded-xl" to="/contact">Report problem</NavLink>
                </div>
            </div>
        </div>
        </>
    )
}