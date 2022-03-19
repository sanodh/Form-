import React, { Component } from 'react'

export default class form extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="singleItem">
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" className="name" placeHolder="your name..."/>
          </div>

          <div className="singleItem">
            <label htmlFor="lastName">LastName</label>
            <input type="text" name="lastName" className="name" placeHolder="your Last Name..."/>
          </div>

          <div className="singleItem">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="name" placeHolder="Your Email"/>
          </div>

          <div className="textArea">
            <label htmlFor="message">message</label>
            <textarea name="message" id="" cols="30" rows="10" paceHolder="your message..."></textarea>  
          </div> 

          <div className="msg">Mesage Has Been Sent</div>
          <div className="btn">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    )
  }
}
