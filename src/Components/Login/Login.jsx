import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Porviders/AuthProvider";


const Login = () => {

  const { singInUser,facebookLogin,GoogleLogin } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    singInUser(email, password)
      .then(result => {
        console.log(result.user)
        e.target.reset()
        navigate('/')
      })
      .catch(error => console.error(error))

  }

 const handleGoogleSignIn = ()=>{
  GoogleLogin()
  .then(result =>{
    console.log(result.user)
  })
  .catch(error => console.error(error))
  
 }



const handleFacebookLogin = ()=>{
  facebookLogin()
  .then(result => {
    console.log(result.user)
    
  })
  .catch(error => console.error(error))

}




  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className=" mt-4" > To make sure you’re getting the directions for your account, select from the options below. </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin} >

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" required className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>




            </form>
            <p> New Here? Please <Link to="/register" >  <button className=" shadow-lg btn  text-xl " > Register </button>  </Link> </p>


           <p> <button onClick={handleFacebookLogin} className=" shadow-lg btn btn-ghost  text-xl " > Facebook </button>  </p>    
          

           <p> <button onClick={handleGoogleSignIn}  className=" shadow-lg btn btn-ghost  text-xl " > Google </button>  </p>  
 


          </div>
        </div>
      </div>
    </div>



  );
};

export default Login;