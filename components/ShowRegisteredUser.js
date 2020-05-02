import React from 'react'
import Paragraph from '@tds/core-paragraph'
import Heading from '@tds/core-heading'
import Button from '@tds/core-button'
const ShowRegisteredUser = props =>{
  return(
    <>
    <Heading level='h3'>User Register Succesfully</Heading>
    <Paragraph>FirstName : {props.user.firstName}</Paragraph> 
    <Paragraph>LASTNAME : {props.user.lastName}</Paragraph> 
    <Paragraph>Email : {props.user.email}</Paragraph> 
    <Paragraph>MobileNumber : {props.user.mobileNumber}</Paragraph> 
    <Button onClick={props.registerNewUser}>Edit User</Button>
    </>
  )
}
export default ShowRegisteredUser