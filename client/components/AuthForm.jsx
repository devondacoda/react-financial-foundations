import React from 'react';

export default () => (
  <form className="">
    <label htmlFor="email">Email</label>
    <input name="email" type="email" placeholder="enter your email" />
    
    <label htmlFor="password">Password</label>
    <input name="password" type="password" placeholder="enter your password" />

    <input type="submit" value="Sign Up" />
  </form>
)
