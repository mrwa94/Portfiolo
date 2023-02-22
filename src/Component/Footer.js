import React from 'react'
import image from '../Component/Assets/linkedin.png';
import image2 from '../Component/Assets/instagram.png';
import image3 from '../Component/Assets/behance.png';
const Footer = () => {
  return (
  
  <section className=' text-center   ' id='footer_id'>

<h1  className='fw-lighter footer ' >CONTACT ME</h1>

<div className='box '>

<a   href="https://www.linkedin.com/in/mrwa-alsubhi-279413127/">
     <img  className='   img-contact' src={image} alt= "linkedin"></img></a>
     <a   href="https://www.instagram.com/mrwaff4/">
     <img  className=' img-contact' src={image2} alt= "instagram"></img></a>

     <a href='https://www.behance.net/mrwaphotogr'>
     <img  className=' img-contact' src={image3} alt= "instagram"></img></a>


</div>

</section>



  
 
  )
}

export default Footer