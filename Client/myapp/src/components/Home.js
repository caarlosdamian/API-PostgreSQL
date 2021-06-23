import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import ReactModal from "react-modal";
import swal from "sweetalert";

function Home() {
  const [information, setInformation] = useState([]);
  const [name, setname] = useState();
  const [description, setDescription] = useState();
  const [newname, setnewname] = useState();
  const [newdescription, setnewDescription] = useState();
  const [modalAdd, setmodalAdd] = useState(false);
  const [modal_Delete, setModalDelete] = useState(false);
  const [modal_edit, setModalEdit] = useState(false);
  const [nodeSelected, setNodeSelected] = useState({
    id: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    Axios.get("http://localhost:3002/nodes").then((response) => {
      setInformation(response.data);
      console.log(response.data);
    });
  }, []);
  const selectNode = (val, caso) => {
    setNodeSelected(val);
    caso === "Editar" ? setModalEdit(true) : setModalDelete(true);
  };
  const addNode = () => {
    setmodalAdd(false);
    Axios.post("http://localhost:3002/nodes", {
      name: name,
      description: description,
    }).then(
      (res) => {
        Axios.get("http://localhost:3002/nodes").then((response) => {
          setInformation(response.data);
        });
        swal("Nodo Agregado", {
          icon: "success",
        });
      },
      (error) => {
        swal("No Agregado", "Reintentar", {
          icon: "error",
        });
      }
    );
  };
  const updateNode = (id) => {
    setModalEdit(false);
    Axios.put(`http://localhost:3002/node/${id}`, {
      name: newname,
      description: newdescription,
    }).then(
      (res) => {
        Axios.get("http://localhost:3002/nodes").then((response) => {
          setInformation(response.data);
          swal("Nodo Actualizado", {
            icon: "success",
          });
          setnewDescription("");
          setnewname("");
        });
      },
      (error) => {
        swal("No Actualizado", "Reintentar", {
          icon: "error",
        });
      }
    );
  };
  const deleteNode = (id) => {
    setModalDelete(false);
    Axios.delete(`http://localhost:3002/node/${id}`).then(
      (res) => {
        setInformation(
          information.filter((val) => {
            return val.id !== id;
          })
        );
        swal("Producto Eliminado", {
          icon: "success",
        });
      },
      (error) => {
        swal("No Eliminado", "Reintentar", {
          icon: "error",
        });
      }
    );
  };
  return (
    <Card className="contenedor">
      <h1>Dashborad</h1>
      <Button
        variant="outline-primary"
        className="boton"
        size="sm"
        onClick={() => setmodalAdd(true)}
      >
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
                <td>{val.description}</td>
                <td>
                  <Button
                    variant="outline-info"
                    onClick={() => {
                      selectNode(val, "Editar");
                    }}
                  >
                    {" "}
                    Editar
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      selectNode(val, "Eliminar");
                    }}
                  >
                    {" "}
                    Eliminar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ReactModal
        isOpen={modalAdd}
        onRequestClose={() => setmodalAdd(false)}
        className="Modal"
      >
        {
          <Form>
            <Form.Row>
              <Form.Group>
                <h1>Nodo</h1>
                <hr></hr>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(Event) => {
                    setname(Event.target.value);
                  }}
                />
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(Event) => {
                    setDescription(Event.target.value);
                  }}
                />
                <br></br>
                <Button variant="outline-primary" size="sm" onClick={addNode}>
                  Agregar Nodo
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => setmodalAdd(false)}
                >
                  Cancelar
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
        }
      </ReactModal>
      <ReactModal
        isOpen={modal_edit}
        onRequestClose={() => setModalEdit(false)}
        className="Modal"
      >
        {
          <Form>
            <Form.Row>
              <Form.Group>
                <h1>Nodo</h1>
                <hr></hr>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(Event) => {
                    setnewname(Event.target.value);
                  }}
                />
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(Event) => {
                    setnewDescription(Event.target.value);
                  }}
                />
                <br></br>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => {
                    updateNode(nodeSelected.id);
                  }}
                >
                  Editar Nodo
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => setModalEdit(false)}
                >
                  Cancelar
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
        }
      </ReactModal>
      <ReactModal
        isOpen={modal_Delete}
        onRequestClose={() => setModalDelete(false)}
        className="Modal"
      >
        <div>
          <h1>Confirmar</h1>
          <hr></hr>
          <form>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => {
                deleteNode(nodeSelected.id);
              }}
            >
              Confirmar
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => setModalDelete(false)}
            >
              Cancelar
            </Button>
          </form>
        </div>
      </ReactModal>
    </Card>
  );
}

export default Home;
