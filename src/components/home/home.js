import React from 'react'
import UncontrolledExample from '../carousel/carousel'
import NavScrollExample from '../navbar/navbar'
import Products from '../products/products'
import TrendingProduct from '../trendingProduct/trendingProduct'

function Home()
{
    return(
        <>
          <NavScrollExample/>
          <UncontrolledExample/>
          <Products/>
          <TrendingProduct/>
        </>
    )
}
export default Home