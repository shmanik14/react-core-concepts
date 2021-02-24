import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {name: 'Photoshop', price: '$88.9'},
    {name: 'Illustrator', price: '$66.9'},
    {name: 'PDF Reader', price: '$18.9'},
    {name: 'Priemer El', price: '$249.9'}
]

  return (
    <div className="App">
      <header className="App-header">
        <p>My First React Paragraph</p>
        <Counter></Counter>
        <Users></Users>
        <ul>{
          products.map(product => <li>{product.name}</li>)
        }</ul>
        {
          products.map(product =>  <Products product={product}></Products>)
        }
        {/* <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products> */}
        <Person name='Sakib Khan' nayika='Apu Biswas'></Person>
        <Person name='Manna' nayika='Mousumi'></Person>
        <Person name='Riyaz' nayika='purnima'></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increse</button>
      <button onClick={() => setCount(count - 1)}>Decrese</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]); 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return(
    <div>
     <h1>Dynamic User: {users.length}</h1>
     <ul>
       {
         users.map(user => <li>{user.name}</li>)
       }
     </ul>
    </div>
  )
}
function Products(props){
  const productStyle = {
    color: 'black',
    backgroundColor: '#F6F6F6',
    padding: '10px',
    border: '2px solid #000',
    borderRadius: '10px',
    float: 'left',
    width: '250px',
    height: 'auto'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>Price: {price}</h1>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  const personStyle = {
    border: '2px solid cyan',
    padding: '10px',
    margin: '10px'
  }
  return (
  <div style={personStyle}>
    <h4>name : {props.name}</h4>
    <p>Hero of {props.nayika}</p>
  </div>
  )
}
export default App;
