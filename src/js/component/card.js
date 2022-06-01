import React, {useState, useEffect}from "react";

export default function Card() {

 const [people, setPeople] = useState([]); 
  
  const obtenerPeople = () => {
    fetch("https://www.swapi.tech/api/planets", {
    method: "GET",
    headers: {"Content-type": "aplication/json",
  },
  })
  .then((resp) => {
    console.log("STATUS");
    console.log(resp.status);
    return resp.json();
  })
  .then((data) =>{
    setPeople(data);
    console.log(people)
  })
  .catch((error) => {
    console.log(error);
  });
  

};

useEffect(() => {obtenerPeople();
}, []);
return (
  <div className="card" style={{width: "18rem"}}>
<img src="..." className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Nombre personaje</h5>
  <p className="card-text">gender</p>
  <p className="card-text">hair color</p>
  <p className="card-text">eye color</p>
  <a href="#" className="btn btn-primary">link del personaje</a>
</div>
</div>
);
};

  
