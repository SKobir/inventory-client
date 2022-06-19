import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.gitinit';
import Social from '../Social/Social';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, {replace: true});
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPass = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');

    }

    return (
        <div className='container w-25 mx-auto'>
            <h1>Please Login</h1>
            <Form onClick={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to MotorCycle Hub? <Link to='/register' className="text-primary pe-auto text-decoration-none" onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password? <Link to='/register' className="text-primary pe-auto text-decoration-none" onClick={resetPass}>Reset Password</Link></p>

            <Social></Social>

        </div>
    );
};

export default Login;