import React,{useState} from 'react'
import Input from '@tds/core-input'
import Button from '@tds/core-button'
import Box from '@tds/core-box'
import DisplayHeading from '@tds/core-display-heading'
import FlexGrid from '@tds/core-flex-grid'

import {connect} from 'react-redux'
import RegisterUser from '../redux/actions/RegisterAction'
import ShowRegisteredUser from './ShowRegisteredUser'
const Register = props =>{
const [state,setState]=useState({
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  mobileNumber:''
})
const[registered,setRegistered]=useState(false)

  const onSubmit =()=>{
    props.RegisterUser(state)
    setRegistered(true)
  }

  const handleChange = e =>{
    let name=e.target.name;
    let value=e.target.value;
    setState({
      ...state,
      [name]:value
    })
  }

  const registerNewUser =()=>{
    setRegistered(false)
  }

  return(
    <>
     { registered ? (<ShowRegisteredUser user={props.user} registerNewUser={registerNewUser}/>) : 
     (
       <FlexGrid>
      <FlexGrid.Row>
      <FlexGrid.Col >
       <DisplayHeading>Register</DisplayHeading>
       </FlexGrid.Col>
      </FlexGrid.Row>
      <FlexGrid.Row>
      <FlexGrid.Col xs={10}>
        <Input label='First Name' type='text' name='firstName' onChange={(e)=>handleChange(e)}/>
      </FlexGrid.Col>
      </FlexGrid.Row>
      <FlexGrid.Row>
      <FlexGrid.Col xs={10}>
        <Input label='Last Name' type='text' name='lastName' onChange={(e)=>handleChange(e)}/>
      </FlexGrid.Col>
      </FlexGrid.Row>
      <FlexGrid.Row>
      <FlexGrid.Col xs={10}>
        <Input label='Email' type='text' name='email' onChange={(e)=>handleChange(e)}/>
      </FlexGrid.Col>
      </FlexGrid.Row>
      <FlexGrid.Row>
      <FlexGrid.Col xs={10}>
        <Input label='Password' type='password' name='password' onChange={(e)=>handleChange(e)}/>
      </FlexGrid.Col>
      </FlexGrid.Row>
      <FlexGrid.Row>
      <FlexGrid.Col xs={10}>
        <Input label='Mobile Number' type='tel' name='mobileNumber' onChange={(e)=>handleChange(e)}/>
      </FlexGrid.Col>
      </FlexGrid.Row>
        <div style={{margin:'auto',width:'100%',marginTop:'2em'}}>
        <Button onClick={onSubmit}>Submit</Button>
        </div>
    </FlexGrid>
     )}
    </>
  )
}

const mapStateToProps = state => {
    return {
        user: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        RegisterUser: (data) => dispatch(RegisterUser(data)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register)