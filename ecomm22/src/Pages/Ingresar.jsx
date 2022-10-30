// import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';

function Ingresar(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return(
    <>
      <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password", { required: true, minLength:6,maxLength:12 })}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
      </Form>
      </div>
    </>
  )
}

export default Ingresar; 
