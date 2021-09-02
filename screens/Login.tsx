import React from "react";

const Login = () =>{


     
     return (
       <div className='wrapper'>
         <div className='form-wrapper'>
            <h2>Sign Up</h2>
            <form noValidate >
               <div className='fullName'>
                  <label htmlFor="fullName">Full Name</label>
                  <input type='text' name='fullName' />
               </div>
               <div className='email'>
                  <label htmlFor="email">Email</label>
                  <input type='email' name='email'/>
               </div>
               <div className='password'>
                  <label htmlFor="password">Password</label>
                  <input type='password' name='password' />
               </div>              
               <div className='submit'>
                  <button>Register Me</button>
               </div>
          </form>
      </div>
   </div>
  );
 


}

export default Login;