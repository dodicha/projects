export default function signIn(props: {showSignUp: string, setShowSignUp: (string:string)=>void}) {
  function handleClick(){
    props.setShowSignUp('block')
  }

  return (
    <div className="sign">
      <form id="sign-in-form">
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>Log In</button>
        <hr style={{ width: "300px", marginTop: "30px" }}></hr>
      </form>

      <button
       id="create-acc-btn"
       onClick={handleClick}
       >Create new Account</button>
    </div>
  );
}
