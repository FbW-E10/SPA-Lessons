import React, { Component } from 'react'

export default class Users extends Component {

    constructor(props){
        super(props)
        this.state={
           users: []
        }
        this.myFunc=this.myFunc.bind(this)
    }

// custom method/function
myFunc(){
    this.setState({y: 456})
    console.log('Hi myFunc')
}


//common lifecycle methods
componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => this.setState({users: data}));

    console.log('from componentDidMount')
}


componentDidUpdate(prevProps, prevState, snapShot){
    console.log(prevProps, prevState, snapShot)
    console.log('from componentDidUpdate')
}

componentWillUnmount(){
    console.log('from componentWillUnmount')
}

//uncommon lifecycle methods

shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps, nextState)
    return true
}

static getDerivedStateFromProps(props, state){
   if(props.myProp==='hello') {
       return {
           x: 123
       }
   }

   return null
}

getSnapshotBeforeUpdate(prevProps, prevState) {
    if(prevProps.myProp==='helloqq'){
    return 'from snaaaap'
  }
  return null
}

  render() {
      console.log('from render', this.state)
    return (
        <React.Fragment>
      <div> 
      {this.state.users.map((x,i)=> <div key={i}> <h1> {x.name} </h1> <h3> {x.username} </h3> <p> {x.email} </p> <hr/> </div> )}
      </div>
      <button onClick={this.myFunc}> click me</button>
      </React.Fragment>
    )
  }
}
