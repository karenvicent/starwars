import React, {useContext, useEffect, useState}from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default function Card(props) {
  const params = useParams();

  const { store, actions } = useContext(Context);
  
return (
  <div className="card" style={{width: "18rem"}}>
<img src={props.url} className="card-img-top" alt="..."/>

<div className="card-body">
      <h5 className="card-title">{props.nombre}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the
            bulk of the card's content.
      </p>
      <Link to={typeCard === "personaje" ? `/people/${props.id}` : `/planet/${props.id}`}/>
            <span className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </span>
  </div>
</div>);
};

  
