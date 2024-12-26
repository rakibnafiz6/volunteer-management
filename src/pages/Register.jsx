import React, { useEffect } from 'react';
import useAuth from '../hook/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Register-page"
    })

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const regexUpper = /^(?=.*[A-Z]).+$/;
        const regexLower = /^(?=.*[a-z]).+$/;
        const regexpass = /^.{6,}$/;

        if (!regexUpper.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: "Password must have an uppercase",
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return;
        }
        if (!regexLower.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: "Password must have an lowercase",
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return;
        }
        if (!regexpass.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: "password Length must be at least 6 character",
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return;
        }

        createUser(email, password)
            .then(result => {
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
                    .then(() => {

                        Swal.fire({
                            title: 'Success!',
                            text: 'update profile successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                    })
                    .catch(error => {
                        // console.log(error.message);
                        Swal.fire({
                            title: 'Error!',
                            text: error.message,
                            icon: 'error',
                            confirmButtonText: 'OK'
                        })
                    })


            })
            .catch(error => {
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
        <div className="">
            <div className="hero-content lg:flex-row-reverse flex-col-reverse">
                <div className="card bg-base-100 w-full lg:w-2/3 shrink-0 shadow-2xl">
                <h1 className="text-5xl text-teal-400 font-bold text-center pt-4">Create Account</h1>
                    <p className='text-center text-gray-300 font-semibold mt-5 mb-5'>Of use your email for registration</p>
                    <form onSubmit={handleRegister} className="card-body pt-0">
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
                            <button className="btn bg-teal-400 rounded-full">Sign UP</button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-teal-400 h-[590px] w-full">
                    <h1 className="text-4xl text-white font-bold">Welcome Back!</h1>
                    <p className="py-6 text-white font-normal px-2">
                        To keep connected with us please login with your personal info
                    </p>
                    <Link to='/login'><button className='btn bg-teal-400 text-white rounded-full w-52'>Sign IN</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Register;