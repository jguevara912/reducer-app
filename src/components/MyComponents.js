import React, { useContext } from 'react'
import { StoreContext } from '../store/StoreProvider'
import { types } from '../store/storeReducer'

function MyComponents() {

    const [store, dispatch] = useContext(StoreContext)
    const {user, products} = store
  return (
    <div>
        <h1>MyComponent</h1>
        <h2>User: {user?.name}</h2>
        <button onClick={()=>dispatch({type: types.authLogout})}>
            Logout
        </button>
        <button onClick={()=>dispatch({
            type: types.authLogin,
            payload: {id:1, name:'Jose'} })}>
            Login
        </button>
        <h2>Products</h2>
        <ul>
            {products.map(product =>(
                <li key={product.id}>
                    {product.title}
                </li>
            ))}
            
        </ul>
        <button onClick={()=>dispatch({type: types.productDeleteAll})}>
            Delete all
        </button>
        <button onClick={()=>dispatch({type: types.productChange})}>
            Change
        </button>
    </div>
  )
}

export default MyComponents