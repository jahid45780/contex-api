import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Porviders/AuthProvider";


const Register = () => {

  const {createUser} = useContext(AuthContext)

    const handleRegister= e=>{
        e.preventDefault()
     const email =e.target.email.value;
     const name = e.target.name.value
     const password = e.target.password.value
     console.log(email, name,password)   
 
     // create user firebase 
       createUser(email,password)
     .then(result =>{
      console.log(result.user)
     })
      .catch(error => {
         console.error(error)
      })


    }

    return (
      
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register!</h1>
      <p className="py-6"> A student registration form collects all the necessary information to register students for a course </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
     <form onSubmit={handleRegister} >

     <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name"  className="input input-bordered" />
        </div>

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
          <button className="btn btn-primary">Register</button>
        </div>
</form>

<p> You Have Register? Please <Link to='/login' > <span className=" btn shadow-lg" >Login</span> </Link> </p>

      </div>
    </div>
  </div>
</div>


    );
};

export default Register;