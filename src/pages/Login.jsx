import React from 'react';
import useAuth from '../hook/useAuth';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { signInUser, signInGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login',location);
    const from = location.state || '/';

    useEffect(() => {
        document.title = "Login-page"
    })

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {

                Swal.fire({
                    title: 'Success!',
                    text: 'User Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(from);
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
    }

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                // console.log(result.user);
                navigate(from);
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex flex-col items-center justify-center text-center bg-teal-400 h-[550px]">
                    <h1 className="text-4xl text-white font-bold">New Here?</h1>
                    <p className="py-6 text-white font-normal px-2">
                    Sign up and growing community dedicated to making a difference. Explore volunteer opportunities, contribute to impactful events.
                    </p>
                    <Link to='/register'><button className='btn rounded-full w-52'>Sign Up</button></Link>
                </div>
                <div className="card bg-base-100 lg:w-2/3 shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center pt-4">Login to your Account</h1>
                    <p className='text-center font-semibold mt-5 mb-5'>Login using social networks</p>
                    <button onClick={handleGoogle} className='btn bg-teal-400 text-white mb-2 mx-5'><FcGoogle />Login with Google</button>
                    <div className="divider">OR</div>
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
                            <button className="btn bg-teal-400 rounded-full">Sign IN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;