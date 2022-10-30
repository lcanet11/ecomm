// import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';

function Registro(){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  
  // const [form, setForm] = useState({name:'',lastname:'',email:'',password:''});

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(form)
  // }

  // const handleChange = (event) =>{
  //   const target = event.target;
  //   const name = target.name;
  //   const value = target.value; 
  //   console.log(name);
  //   setForm({...form,[name]:value});
  // }

  return(
    <>
      <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" {...register("name", { required: true })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Apellido" {...register("lastName", { required: true })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password", { required: true, minLength:6,maxLength:12 })}/>
        <Form.Text className="text-muted">
          No compartimos su informacion con terceros. 
        </Form.Text>
      
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>


 
        
      </div>
    </>
  )
}

export default Registro; 
