import React from 'react'
import arts from '../../assets/icons/arts1.png'
import ss from '../../assets/icons/ss.jpg'
import business from '../../assets/icons/business.jpg'
const Categories = () => {
  return (
    <div>
          <div className='categories_grid'>
        <div className='hover07'>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={arts}  /></figure>
            <span>Hover</span>
          </div>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={arts}  /></figure>
            <span>Hover</span>
          </div>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={arts}  /></figure>
            <span>Hover</span>
          </div>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={arts}  /></figure>
            <span>Hover</span>
          </div>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={arts}  /></figure>
            <span>Hover</span>
          </div>
          <div classname='grid_item'>
            <figure><img style={{ width: "50%" }} src={arts}  /></figure>
            <span>Hover</span>
          </div>
              
          </div>

               
        </div>
    </div>
  )
}

export default Categories
