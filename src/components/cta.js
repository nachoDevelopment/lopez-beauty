import React from 'react'
import {Link} from 'gatsby'

function Cta() {

    return (
        <div className="bg-gray-900 flex flex-col justify-center py-10 px-6">
            <h2 className="text-center text-white uppercase mb-6">Get In Touch</h2>
            <Link to="/contact" className="w-max mx-auto">
                <button className="button-3">
                    Enquire Now
                </button>
            </Link>
        </div>
    )
}

export default Cta