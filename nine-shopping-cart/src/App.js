import React, {useState} from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import {toast, ToastContainer} from 'react-toastify'
import BuyPage from './components/BuyPage';
import {Container, Rol, Col, Row} from  'reactstrap'
import Cart from './components/Cart';

const App = () => {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAddeed = cartItem.findIndex(function(array){
      return array.id === item.id
    })

    if(isAlreadyAddeed !== -1){
      toast("Already added in cart", {
        type: "error"
      })
    }else{
      setCartItem([...cartItem, item])
    }
    
  }

  const buyNow = () => {
    setCartItem([])

    toast("Purchase complete", {
      type: "success"
    })
  }

  const removeItem = item => {
    setCartItem(cartItem.filter(item => item.id !== item.id))
  }

  return (
    <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md="8">
          <BuyPage addIncart = {addInCart}></BuyPage>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
