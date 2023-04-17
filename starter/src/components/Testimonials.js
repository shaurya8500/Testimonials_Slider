import React from 'react'
import Card from './card';
export const testimonial = (props) => {
  let reviews = props.reviews;
  return (
    <div>
      {
        <Card review ={reviews[0]}></Card>
      }  
        
    </div>
  )
}
export default Testimonials