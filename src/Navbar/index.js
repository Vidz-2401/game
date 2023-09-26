import React from "react";
import image from "./image.jpg"

const Navbar=() => {
    return(
        <div className="bg-black text-white" >
            {/* <img src={image} alt="logo" className="ob\\"></img> */}
            <ul className="flex justify-end">
                <li className="mx-2">
                    HOME
                </li>
                <li className="mx-2">
                    ABOUT US
                </li>
                <li className="mx-2">
                    OUR SERVICES
                </li>
                <li className="mx-2">
                    INDUSTRIES
                </li>
                <li className="mx-2">
                    CONTACT US
                </li>
            </ul>
        </div>

    )
}

export default Navbar;