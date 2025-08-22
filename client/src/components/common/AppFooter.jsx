import React from 'react'
import {BackTop} from "antd"
import {Link} from "react-router-dom"

export default function AppFooter() {
  return (
    <div className='fluid-container'>
        <div className='footer'>
            <div className='logo'>
                <i className='fas fa-home fa-2x'>
                </i>
                <Link to='/'>Real Estate</Link>
            </div>
            <ul className='social-links'>
                <li>
                    <a href='http://www.twitter.com'>
                        <i className='fab fa-twitter'></i>
                    </a>
                </li>
                <li>
                    <a href='http://www.linkedin.com'>
                        <i className='fab fa-linkedin-in'></i>
                    </a>
                </li>
                <li>
                    <a href='http://www.instagram.com'>
                        <i className='fab fa-instagram'></i>
                    </a>
                </li>
                <li>
                    <a href='http://www.facebook.com'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                </li>
            </ul>
            <div className="copyright">
                Copyright &copy; Real Estate {new Date().getFullYear()}
            </div>
            <BackTop>
                <div className='goTop'>
                    <i className="fas fas-arrow-circle-up"></i>
                </div>
            </BackTop>
        </div>
    </div>
  )
}
