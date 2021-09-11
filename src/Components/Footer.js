import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer(props) {
    return (
        <div className="footer-basic" style={{ color: props.mode === 'light' ? '#042743' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#0f6146' }}>
            <footer>
                <div className="social">
                    <Link to="#"><i className="icon ion-social-instagram"></i></Link>
                    <Link to="#"><i className="icon ion-social-snapchat"></i></Link>
                    <Link to="#"><i className="icon ion-social-twitter"></i></Link>
                    <Link to="#"><i className="icon ion-social-facebook"></i></Link></div>
                <ul className="list-inline">
                    <li className="list-inline-item"><Link to="#">Home</Link></li>
                    <li className="list-inline-item"><Link to="#">Services</Link></li>
                    <li className="list-inline-item"><Link to="#">About</Link></li>
                    <li className="list-inline-item"><Link to="#">Terms</Link></li>
                    <li className="list-inline-item"><Link to="#">Privacy Policy</Link></li>
                </ul>
                <p className="copyright">Sudoku-Stack © 2021</p>
            </footer>
        </div>
    )
}
