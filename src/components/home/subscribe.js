import React from 'react'

const Subscribe = () => {
  return (
      <div className='subscribe'>
          
          <div className='subscribe_box'>

              
              <div>
                <h1 style={{color:"white"}}>Subscribe For Get Update
                    Every New Courses</h1>
                <p style={{color:"white"}}>20k+ students daily learn with EduVibe. Subscribe for new courses.</p>
                            <div>
                    <form style={{ display: 'flex', float:"center", marginLeft:"25px" }}>
                <input className="form-control mr-sm-2" type="search" placeholder="EMAIL" aria-label="Search" />
                <button class="button-49" role="button">Subscribe</button>
                    </form>
                </div>
              </div>
              
              {/* <div><img src={image} /></div> */}
              
          </div>
          
    </div>
  )
}

export default Subscribe
