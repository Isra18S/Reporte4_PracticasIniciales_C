import { Button } from "@mui/material";
import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default  function Dashboard() {

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;
  }

  return (
   <div className="container">
   <div className="sidebar">
   <br/>
   <br/>
   <br/><br/>
   <br/>
   <br/><br/>
   <br/>
   <br/><br/>
   <br/>
   <br/><br/>
   <br/>
   <br/>

      <h1 style={{color:`${getRandomColor()}`}}>Filtros</h1>

   </div>
   <div className="main">
     <h1 style={{color:`${getRandomColor()}`}}>contenido</h1>
     <center>
        <Button variant="outlined" startIcon={<AddCircleIcon />} >
        Crear publicación
        </Button>
      </center>
     {
        [1,2,3,4,5,6,7,8,9,10,
          11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,
          11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,
          11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,
          11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,
          11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,
          11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,
          11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,
          11,12,13,14,15,16,17,18,19,20,
        ].map((item,index)=>{
          return (
            <div key={index} style={{color:`${getRandomColor()}`}}>
             
              <h3>item {index}</h3>
            </div>
          )
        })
      }

   </div>
 </div>
  );
}

