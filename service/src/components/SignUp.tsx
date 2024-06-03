import { User } from "./users";
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
function clearValue(email: HTMLInputElement, password: HTMLInputElement, firstname: HTMLInputElement, lastName: HTMLInputElement ){
  email.value = '';
  password.value = '';
  firstname.value = '';
  lastName.value = '';
}

export default function SignUp(props: {
  showSignUp: string,
  count:number,
  setShowSignUp: (string:string)=>void,
  setCount: (string:number)=>void,
  users:User[],
  user: any
  }  ){

    const firstname = document.getElementById('firstName') as HTMLInputElement | null;
    const lastName = document.getElementById('lastName') as HTMLInputElement | null;
    const email = document.getElementById('email') as HTMLInputElement | null;
    const password = document.getElementById('password') as HTMLInputElement | null;

  function handleClick(){
    if(email?.value && password?.value && firstname?.value && lastName?.value){
      if(checkemail(email?.value) && checkPassword(password?.value)){
        props.setShowSignUp('none');
        props.setCount(props.count + 1);
        props.users[props.count] = new props.user(firstname.value, lastName.value, email.value, password.value);
        clearValue(email, password, firstname, lastName);
        props.setShowSignUp('none');
      }
      if(!checkemail(email?.value) && email?.value !== ''){
        const emailErr: HTMLElement | null= document.getElementById('email-err');
        if(emailErr){
          emailErr.style.display = 'block'
        }
      }
      if(!checkPassword(password?.value) && password?.value !== ''){
        const passErr: HTMLElement | null = document.getElementById('password-err');
        if(passErr){
          passErr.style.display = 'block';
        }
      }
    }
  }

    return (
        <div className="registrationWindow" style={{display : props.showSignUp}}> 
            <div className='sign-up'>
                <div className='head'>
                  <h1>Sign Up</h1>
                  <button 
                  onClick={()=>props.setShowSignUp('none')}
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
                onClick={handleClick}
                >Sign Up</button>
            </div>
          </div>
    )
}