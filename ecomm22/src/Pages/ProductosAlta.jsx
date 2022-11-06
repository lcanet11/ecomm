import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
import firebase from '../Config/firebase';

function ProductosAlta() {
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    const onSubmit = async data => {
      console.log(data)
      try{
        const document = await firebase.firestore().collection("productos")
        .add(data)
        console.log(document)
      } catch(e){
        console.log(e);
      }
    }

    return(
        <>
          <div>
          <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" {...register("name", { required: true })} />
            <Form.Text className="text-muted">
                {errors.name && <span>This field is required</span>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" placeholder="Precio" {...register("price", { required: true })} />
            <Form.Text className="text-muted">
                {errors.price && <span>This field is required</span>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="text" placeholder="Descripcion" {...register("description", { required: true })} />
            <Form.Text className="text-muted">
                {errors.description && <span>This field is required</span>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="text" placeholder="Image" {...register("image", { required: true })} />
            <Form.Text className="text-muted">
                {errors.description && <span>This field is required</span>}
            </Form.Text>
          </Form.Group>
       
       
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
          </div>
        </>
      )
}

export default ProductosAlta