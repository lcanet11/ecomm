// import { useState } from 'react';
import { useForm } from "react-hook-form";

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nombre</label>
            <input type='text' {...register("name", { required: true })}></input>
            {errors.name && <span>This field is required</span>}
            {/* <input type='text' name='name' value={form.name} onChange={handleChange}></input> */}
          </div>
          <div>
            <label>Apellido</label>
            <input type='text' {...register("lastname")}></input>
            {errors.apellido && <span>This field is required</span>}
            {/* <input type='text' name='lastname' value={form.lastname} onChange={handleChange}></input> */}
          </div>
          <div>
            <label>Email</label>
            <input type='text' {...register("email", { required: true })}></input>
            {errors.email && <span>This field is required</span>}
            {/* <input type='email' name='email' value={form.email} onChange={handleChange}></input> */}
          </div>
          <div>
            <label>Password</label>
            <input type='text' {...register("password", { required: true, minLength:6,maxLength:12 })}></input>
            {errors.password.type==="required" && <span>This field is required</span>}
            {errors.password.type==="minLength" && <span>Debe colocar al menos 6 caracteres</span>}
            {errors.password.type==="maxLength" && <span>Debe colocar un maximo de 12 caracteres</span>}
            {/* <input type='password' name='password' value={form.password} onChange={handleChange}></input> */}
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </>
  )
}

export default Registro; 
