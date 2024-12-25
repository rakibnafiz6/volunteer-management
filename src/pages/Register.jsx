import React from 'react';
import useAuth from '../hook/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser, updateUserProfile} = useAuth();
    const navigate = useNavigate();

    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
       
        const regexUpper = /^(?=.*[A-Z]).+$/;
        const regexLower = /^(?=.*[a-z]).+$/;
        const regexpass = /^.{6,}$/;
    
        if(!regexUpper.test(password)){
            Swal.fire({
                title: 'Error!',
                text: "Password must have an uppercase",
                icon: 'error',
                confirmButtonText: 'OK'
              })
            return;
        }
        if(!regexLower.test(password)){
            Swal.fire({
                title: 'Error!',
                text: "Password must have an lowercase",
                icon: 'error',
                confirmButtonText: 'OK'
              })
            return;
        }
        if(!regexpass.test(password)){
            Swal.fire({
                title: 'Error!',
                text: "password Length must be at least 6 character",
                icon: 'error',
                confirmButtonText: 'OK'
              })
            return;
        }

        createUser(email, password)
        .then(result =>{
            // console.log(result.user);
            Swal.fire({
                title: 'Success!',
                text: "Successfully create user",
                icon: 'success',
                confirmButtonText: 'OK'
              })
            navigate('/');
               
            const profile = {
                displayName: name,
                photoURL: photo
            }

            updateUserProfile(profile)
            .then(()=>{
            
                Swal.fire({
                    title: 'Success!',
                    text: 'update profile successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            })
            .catch(error =>{
                // console.log(error.message);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })
            })


        })
        .catch(error =>{
            // console.log(error.message);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
              })
        })

    }

   


    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo-URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="photo-url" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                <p className='text-center pb-3'>Already Have an account please! <Link to='/login' className='text-red-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;