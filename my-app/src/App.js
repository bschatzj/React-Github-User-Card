import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
background-color: red;
margin: 0px;
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const Cards = styled.div`
background-color: blue;
margin: 10px;
width: 50%
display:flex;
justify-content: center;
height:100px;
`
const Pic = styled.img`
height:100px;
width: 100px;
`


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user:[],
      friends: []
    };
  };
  componentDidMount(){ 
  axios 
        .get('https://api.github.com/users/bschatzj')
        .then(res => {
          console.log(res)
          this.setState({
            user: res.data
          });
        })
        .catch(err => console.log(err));
      
  axios 
  .get(' https://api.github.com/users/bschatzj/followers')
  .then(res => {
    console.log(res)
    this.setState({
      friends: res.data
    })
  })
  .catch(err => console.log(err));
}


render () {
  return ( 
<Card>
  <Cards>
    <h1>Name: {this.state.user.name}</h1>
    <h3>ID: {this.state.user.id}</h3>
    <Pic src={this.state.user.avatar_url}/>
  </Cards>
    {this.state.friends.map(friends => (
      <Cards>
      <h1>Name: {friends.login}</h1>
      <h3>ID: {friends.id} </h3>
      <Pic src={friends.avatar_url}/>
      </Cards>


    ))}
</Card>
  );
}
}

export default App;
