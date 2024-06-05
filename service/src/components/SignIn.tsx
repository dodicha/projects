import { user, users } from "./users";

  function checkUser(typeEmail: HTMLInputElement, typePassword: HTMLInputElement){
    const respons = users.filter((e)=>{
      if(e.email === typeEmail.value && e.password === typePassword.value){
        return e
      }
    })
    return respons
  }



export default function signIn(props: {showSignUp: string, setShowSignUp: (string:string)=>void}, users : user[]) {

  const email = document.getElementById('sign-in-email') as HTMLInputElement
  const password = document.getElementById('sign-in-password') as HTMLInputElement;

  function handleCreateClick(){
    props.setShowSignUp('block')
  }
  function handleSignClick(){
    const res = document.getElementById('res') as HTMLInputElement;
    res.textContent = `Firstname: ${checkUser(email, password)[0].firstName}, Lastname: ${checkUser(email, password)[0].lastName}`
  }


  return (
    <div className="sign">
      <form id="sign-in-form">
        <input id="sign-in-email" type="email" placeholder="Email"></input>
        <input id="sign-in-password" type="password" placeholder="Password"></input>
        <button 
        onClick={(e)=>{
          e.preventDefault();
          handleSignClick();
        }}
        >Log In</button>
        <h4 id="res"></h4>
        <hr style={{ width: "300px", marginTop: "30px" }}></hr>
      </form>

      <button
       id="create-acc-btn"
       onClick={handleCreateClick}
       >Create new Account</button>
    </div>
  );
}
