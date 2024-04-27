import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'

const Login = () => {
    return (
        <div className='formulario'>
            <Form className='p-4 rounded border border-white' id='formLogin'>
                <h1 className='title'>Bem Vindo!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
                <Form.Group className="d-flex justify-content-between" controlId="rememberOfMe">
                    <Form.Check className='mt-2' type="checkbox" label="Lembre de mim" />
                    <div className='espaco'></div>
                    <Button className='mb-3' variant="outline-primary">Esqueceu a senha?</Button>{' '}
                </Form.Group>
                <Button className='col-md-12' variant="primary" type="submit">
                    Login
                </Button>
                <p className='registrar'>Não tem uma conta? <a className='linkRegistrar' href="#">Cadastre-se</a></p>
            </Form>
        </div>
    )
}

export default Login
