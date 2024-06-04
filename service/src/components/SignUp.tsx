import { User } from "./users";
import { useRef } from "react";

function checkemail(string:string){
  const end: string | undefined= string.slice(-10);
  return end === '@gmail.com';
};
function checkPassword(string:string){
  const number = /[0-9]/.test(string);
  const upperCase = /[A-Z]/.test(string);
  const symbol = /[!@#$%^&*(),.?":{}|<>]/.test(string);
  return number && upperCase && symbol
};
function clearValue(email: HTMLInputElement, password: HTMLInputElement, firstname: HTMLInputElement, lastName: HTMLInputElement){
    email.value = '';
    password.value = '';
    firstname.value = '';
    lastName.value = '';
}
function clearErr(email: HTMLElement | null, password: HTMLElement | null){
  if(email){
    email.style.display = 'none';
  }
  if(password){
    password.style.display = 'none';
  }
}

    


export default function SignUp(props: {
  showSignUp: string,
  count:number,
  setShowSignUp: (string:string)=>void,
  setCount: (string:number)=>void,
  users:User[],
  user: any
  }  ){

    const firstname = document.getElementById('firstName') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const formInputs = [firstname, lastName, email, password];

    const emailErr: HTMLElement | null= document.getElementById('email-err');
    const passErr: HTMLElement | null = document.getElementById('password-err');



    function handleSignUp(){
        props.setShowSignUp('none');
        props.setCount(props.count + 1);
        props.users[props.count] = new props.user(firstname.value, lastName.value, email.value, password.value);
        props.setShowSignUp('none');
    }
    function handleEmailErr(){  
        if(emailErr){
          emailErr.style.display = 'block'  
        }
    }
    function handlePassErr(){
      if(passErr){
        passErr.style.display = 'block';
      }
    }
    function handleEmptyValues(){
      formInputs.map((e, index) => {
        if(e){
          e?.value === '' ? e.style.border = '2px solid red' : e.style.border = '2px solid black'
        }
      })
    }

  function handleSignClick(){

    handleEmptyValues();
    
    if(email?.value && password?.value && firstname?.value && lastName?.value){
      if(checkemail(email.value) && checkPassword(password.value)){
        handleSignUp();
        clearValue(email, password, firstname, lastName);
        clearErr(emailErr, passErr)
      }
      if(!checkemail(email.value) && email.value !== ''){
        handleEmailErr();
      }
      if(!checkPassword(password.value) && password.value !== ''){
        handlePassErr();
      }
    }
  }

    return (
        <div className="registrationWindow" style={{display : props.showSignUp}}> 
            <div className='sign-up'>
                <div className='head'>
                  <h1>Sign Up</h1>
                  <button 
                  onClick={()=>{
                    props.setShowSignUp('none');
                    clearValue(email, password, firstname, lastName);
                    clearErr(emailErr, passErr)
                  }}
                  >&times;</button>
                </div>
                <hr style={{color: 'black'}}></hr>
                <div className='names'>
                  <input id='firstName' type='text' placeholder='First name'></input>
                  <input id='lastName' type='text' placeholder='Last name'></input>
                </div>
                <div className='registration'>
                  <input id='email' type='text' placeholder='Email'></input>
                  <h5 id="email-err" >Email does not match</h5>
                  <input id='password' type='password' placeholder='password'></input>
                  <h5 id="password-err" >Password must contain at least one uppercase letter, one simbol and one number</h5>
                </div>
                <button 
                id='signUp'
                onClick={handleSignClick}
                >Sign Up</button>
            </div>
          </div>
    )
}