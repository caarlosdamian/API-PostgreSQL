import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/home.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

function Home() {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/all").then((response) => {
      setInformation(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <Card className="contenedor">
      <h1>Cactus</h1>
      <Button variant="outline-primary" className="boton">
        Agregar
      </Button>
      <br></br>
      <Table className="tabla">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
          {information.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.Description}</td>
                <td>
                  <Button variant="outline-info"> Editar</Button>
                  <Button variant="outline-info"> Eliminar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
}

export default Home;
