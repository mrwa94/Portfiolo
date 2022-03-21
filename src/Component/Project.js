import React from 'react'
import { Card , CardGroup , Image} from 'react-bootstrap'
import img1 from '../food.JPG'
import img2 from '../details.JPG'
import img3 from '../still_life.JPG'
import img4 from '../new_born.JPG'
import img5 from '../portrait.JPG'
import img6 from '../flower.JPG'

const Project = () => {
  return (

     <section className='my-4 py-4 mx-4 px-4 allCard ' id ='id_projects' >
       <h1  className='fw-lighter  text-center ' >PROJECTS</h1>

<CardGroup className='my-4  mx-4   '>
  <Card className='my-3 mx-3  '  >
    <Card.Img className='rounded ' variant="top" src={img1} />
    <Card.Body>
      
      <Card.Text className=' fw-lighter text-center'>
        Food Photography
      </Card.Text >
    </Card.Body>
    
  </Card>
  <Card className='my-3 mx-3 '> 
    <Card.Img className='rounded ' variant="top" src={img2} />
    <Card.Body>
     
      <Card.Text className=' fw-lighter text-center'>
       Fashion Photography
      </Card.Text>
    </Card.Body>
 
  </Card>
  <Card className='my-3 mx-3'>
    <Card.Img className='rounded ' variant="top" src={img3} />
    <Card.Body>
     
      <Card.Text className=' fw-lighter text-center'>
       Still Life Photography
      </Card.Text>
    </Card.Body>
    
  </Card>
 
  
</CardGroup>


<CardGroup className=' my-4  mx-4  '>

 <Card className='my-3 mx-3  '  >
    <Card.Img className='rounded ' variant="top" src={img4} />
    <Card.Body>
     
      <Card.Text className='text-center fw-lighter'>
      New Born Photography
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className='my-3 mx-3 ' >
    <Card.Img className='rounded ' variant="top" src={img5} />
    <Card.Body>
      
      <Card.Text className=' fw-lighter text-center'>
        Portrait Photography
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className='my-3 mx-3' >
    <Card.Img className='rounded ' variant="top" src={img6} />
    <Card.Body>
      
      <Card.Text className=' fw-lighter text-center'>
       Flower Photography
      </Card.Text>
    </Card.Body>
    
  </Card>

</CardGroup>


     </section>
   
  
  )
}

export default Project