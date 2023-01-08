import React from 'react'
import UncontrolledExample from '../carousel/carousel'
import NavScrollExample from '../navbar/navbar'
import Products from '../products/products'
import TrendingProduct from '../trendingProduct/trendingProduct'
import {userValue} from './homeSearchLogics'
import {useSelector} from 'react-redux'


function Home()
{

// const typedValue = useSelector(userValue)



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