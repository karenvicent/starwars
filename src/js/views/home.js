import React, {useContext, useEffect, useState}from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import Card from "../component/card";

export const Home =() => {
	const {store, actions} = useContext(Context);
	
	return(
	<div>
		<h1 className="display-4">Characters</h1>
		<div className="d-flex">
		{store.personajes.map((element, indice)=> {
			return <Card key={element.uid} typeCard="personaje" nombre={element.name} id={element.uid} url={store.imgCharacters[indice].url} className="col-3"/>})}
			
		</div>
		<h1 className="display-4">Planets</h1>
		<div className="d-flex">
			{store.planetas.map((element, indice)=> {
			return <Card key={element.uid} typeCard="planeta" nombre={element.name} id={element.uid} url={store.imgPlanets[indice].url} className="col-3"/>})}
			
		</div> 
	</div>)
};
