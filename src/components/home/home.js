import React from 'react'
import UncontrolledExample from '../carousel/carousel'
import NavScrollExample from '../navbar/navbar'
import Products from '../products/products'
import TrendingProduct from '../trendingProduct/trendingProduct'
import {userValue} from './homeSearchLogics'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Home()
{

const typedValue = useSelector(userValue)
const history = useHistory()
if(typedValue == "mens")
{
  history.push("items?q=mens")
}
else if(typedValue == "womens")
{
  history.push("items?q=womens")
}
else if(typedValue == "kids")
{
  history.push("items?q=kids")
}
else if(typedValue == "electronics")
{
  history.push("items?q=electronics")
}

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