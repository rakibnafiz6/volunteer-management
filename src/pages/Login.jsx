import React from 'react';
import useAuth from '../hook/useAuth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Login = () => {
    const {signInUser, signInGoogle} = useAuth();

    const handleSignIn = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
            Swal.fire({
                title: 'Success!',
                text: 'User Login Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        })
        .catch(error =>{
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
              })
        })
    }

    const handleGoogle =()=>{
        signInGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogle} className='btn btn-primary mb-2 mx-5'>Login with Google</button>
                    <p className='text-center pb-3'>You have a new user please! <Link to='/register' className='text-red-500'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;