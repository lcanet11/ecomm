import React from 'react'; 
import Productos from '../Components/Productos';
import firebase from '../Config/firebase'


function Home(){
  console.log(firebase)
  return(
    <>
      <div>
        <Productos />
      </div>
    </>
  )
}

export default Home; 
