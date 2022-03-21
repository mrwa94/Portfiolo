import React from 'react'
import image from './linkedin.png'
import image2 from './instagram.png'
const Footer = () => {
  return (
  
  <section className=' text-center   ' id='footer_id'>

<h1  className='fw-lighter  ' >CONTACT ME</h1>

<div className='box '>

<a   href="https://www.linkedin.com/in/mrwa-alsubhi-279413127/">
     <img  className='   img-contact' src={image} alt= "linkedin"></img></a>
     <a   href="https://www.instagram.com/mrwaff4/">
     <img  className=' img-contact' src={image2} alt= "instagram"></img></a>


</div>

</section>



  
 
  )
}

export default Footer