import React from 'react'
import { FaDev,FaGithubSquare, FaTwitterSquare, FaFacebookSquare, FaInstagramSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <a className='footer--social' href="https://twitter.com/timdehof" target='_blank'>
        <FaTwitterSquare />
      </a>
      <a className='footer--social' href='https://www.facebook.com/tdehof/' target='_blank'>
      <FaFacebookSquare />
      </a>
      <a className='footer--social' href="https://github.com/timDeHof" target="_blank">
        <FaGithubSquare />
      </a>
      <a className='footer--social' href='https://www.instagram.com/ttdehof/' target="_blank">
        <FaInstagramSquare />
      </a>
      <a className='footer--social' href='https://dev.to/timdehof' target="_blank">
        <FaDev />
      </a>
    </div>
  )
}

export default Footer