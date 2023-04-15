


import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import useFetch from '../Fetcher/useFetch'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Jewelries = ({cartItem,setCartItems}) => {
    const { data, isLoading, error } = useFetch(
      'https://fakestoreapi.com/products/category/jewelery'
    )
function handleAddToCart(product) {
  const prouctSelected = cartItem.find((singleItem)=>singleItem.id===product.id)
  if (prouctSelected) {
    setCartItems(cartItem.map((oneItem)=>oneItem.id===product.id?{...product,quantity:prouctSelected.quantity+1}:oneItem))
      }
else{
setCartItems([...cartItem,{...product,quantity:1}])

}

    }
const notify =()=>toast('An item has been added')


  return (
    <div>
      <h2 className='details'>
        <span>LUMEVILLE</span>STORE
      </h2>
      {isLoading && <PulseLoader />}
      {error && <h2>{error.message}</h2>}
      <h2>Jewelries</h2>
      <div className='innerdata'>
        {data.map((datum) => {
          const { id, image, rating, price } = datum
          return (
            <div className='innerdatas' key={id}>
                <Link to={`/SingleProduct/${id}`}>
              <img src={image} alt='' className='images' />
              <div id='rp'>
                <h2>Rate {rating.rate}</h2>
                <h3 id='hh'>Price ${price}</h3>
              </div>
              </Link>
              <button id='cart' onClick={()=>{handleAddToCart(datum);notify()}} >🛒 Add to cart</button>
              <ToastContainer />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Jewelries