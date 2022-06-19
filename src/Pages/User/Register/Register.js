import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.gitinit';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification : true});
    const [updateProfile, updating, updateError1] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    const handleReg = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleReg}>
                <input type="name" name="name" id='' placeholder='Your Name' required />
                <br />
                <input type="email" name="email" id='' placeholder='Email' required />
                <br />
                <input type="password" name="password" id='' placeholder='Password' required />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}>Login</Link></p>
        </div>
    );
};

export default Register;