import React from 'react'
import './404.css'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <div className="content whole">
                <svg  className='img' viewBox="0 0 960 300">
                    <symbol id="s-text">
                        <text textAnchor="middle" x="50%" y="50%">
                            404
                        </text>
                    </symbol>
                    <g className="g-ants">
                        <use xlinkHref="#s-text" className="text" />
                        <use xlinkHref="#s-text" className="text" />
                        <use xlinkHref="#s-text" className="text" />
                        <use xlinkHref="#s-text" className="text" />
                        <use xlinkHref="#s-text" className="text" />
                    </g>
                </svg>
                <span className='head1'>Page Not Found</span>
                <Link to={'/'}>
                    <div className='back-home'>Back to Home</div>
                </Link>
            </div>

        </>
    )
}

export default NotFound