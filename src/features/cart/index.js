import React from 'react'
import { connect } from  'react-redux'

const sort = (items) => {
  return items.sort((a, b) => a.id < b.id)
}

function Cart(props) {
  return <table>
    <thead>
      <tr>
        <th>Itens: </th>
        <th>Quantidade: </th>
        <th>Valor: </th>
        <th>Total: </th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        sort(props.cart).map(item => <tr>
          <td key={item.id}>{ item.name } | </td> 
          <td>{ item.quantity }</td>
          <td> | { item.price }</td>
          <td> | { item.price * item.quantity }</td>
          <td>
            <button
              onClick={(e) => props.addToCart(item)}
            >+</button>
            <button
              onClick={(e) => props.removeFromCart(item)}
            >-</button>
          </td>
          <td>
            <button
              onClick={(e) => props.removeAllFromCart(item)}
            >Remove from cart</button>
          </td>
        </tr>)
      }
    </tbody>
  </table>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)