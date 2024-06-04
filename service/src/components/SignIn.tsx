import { users } from "./users";

export default function signIn(props: {showSignUp: string, setShowSignUp: (string:string)=>void}) {





  function handleCreateClick(){
    props.setShowSignUp('block')
  }


  function handleLogClick(){
    console.log(users);
  }

  return (
    <div className="sign">
      <form id="sign-in-form">
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button 
        onClick={(e)=>{
          e.preventDefault();
          handleLogClick();
        }}
        >Log In</button>
        <hr style={{ width: "300px", marginTop: "30px" }}></hr>
      </form>

      <button
       id="create-acc-btn"
       onClick={handleCreateClick}
       >Create new Account</button>
    </div>
  );
}
