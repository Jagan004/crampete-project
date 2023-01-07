import React from 'react'
import './products.css'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
function Products() {
    return (
        <>
            <div className='row products-sep'>
                <div className='col-lg-3 col-md-6 col-sm-12 pro-1'>
                    <img src='https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&w=1000&q=80' className='img-fluid' />
                    <div>
                    <h1>Mens wear</h1>
                    <button className='btn btn-primary clr'><Link to="/items?q=mens">Explore</Link></button>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 pro-2'>
                    <img src='https://i.pinimg.com/originals/3d/0f/8c/3d0f8cfb85b0938b4a04a745540256f8.png' className='img-fluid'/>
                    <div>
                    <h1>Womens wear</h1>
                    <button className='btn btn-primary clr'><Link to="/items?q=womens">Explore</Link></button>
                    </div>   
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 pro-3'>
                    <img src='http://cdn.shopify.com/s/files/1/0605/0159/0272/products/PNK24-03-20221406.jpg?v=1649322819' className='img-fluid' />
                    
                    <div>
                    <h1>kids wear</h1>
                    <button className='btn btn-primary clr'><Link to="/items?q=kids">Explore</Link></button>
                    </div> 
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 pro-4'>
                    <img src='https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2Jvb2t8ZW58MHx8MHx8&w=1000&q=80' className='img-fluid'/>
                    <div>
                    <h1>Electronics</h1>
                    <button className='btn btn-primary clr'><Link to="/items?q=electronics">Explore</Link></button>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Products