import {Form, Button} from 'react-bootstrap';
import './LoginForm.css';

const LoginForm = ({handleSubmit, username, password, labelText}) => {
    return (
        <Form className="login-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control 
                    ref={username} 
                    type="text" 
                    placeholder="username"
                />
                <Form.Control 
                    ref={password} 
                    type="password" 
                    placeholder="password"
                />
            </Form.Group>
            <Button className="login-btn" variant="primary" onClick={handleLogin}>Login</Button>
        </Form>
    )
}

export default LoginForm;
