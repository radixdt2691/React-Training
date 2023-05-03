import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    const {id,fname,lname,dob} = this.props.info
    return (
        <section>
            <h1>Personal Details</h1>
            <p className='id'>ID:- {id}</p>
            <p>First Name:- {fname}</p>
            <p>Last Name:- {lname}</p>
            <p>DOB:- {dob}</p>
        </section>
    )
  }
}
