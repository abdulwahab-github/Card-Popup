import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Post, Put } from "../config/ApiBaseMethods";
import { useLocation, useNavigate } from "react-router-dom";

function Formm() {
  const [show, setShow] = useState(false);
  const [model, setModel] = useState([]);
  const navigate = useNavigate("");
  const location = useLocation("")
  const data = location.state;
  

  const handleClose = (e) => {
if(data?._id){
  try{
  Put("student",data._id,model).then((res)=>{
    console.log(res)
    setShow(false);
navigate("/")
  })}catch(e){
    console.log(e)
    setShow(false);

  }
}else{
    Post("student", model)
      .then((res, req) => {
        console.log(res);
        navigate("/");
    setShow(false);

      })
      .catch((err) => {
        console.log(err);
    setShow(false);

      });

  }};

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       {data?._id ?"Edit The Form":"Fill The Form"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data?._id ?"Edit The Form":"Fill The Form"} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={(e) =>
                  setModel({ ...model, firstName: e.target.value })
                }
                defaultValue={location.state?.firstName || ""}
                type="text"
                placeholder="First Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
              defaultValue={location.state?.lastName || ""}
                onChange={(e) =>
                  setModel({ ...model, lastName: e.target.value })
                }
                type="text"
                placeholder="Father Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
              defaultValue={location.state?.email || ""}

                onChange={(e) => setModel({ ...model, email: e.target.value })}
                type="text"
                placeholder="Email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
              defaultValue={location.state?.password || ""}

                onChange={(e) =>
                  setModel({ ...model, password: e.target.value })
                }
                type="text"
                placeholder="Password"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
              defaultValue={location.state?.contact || ""}

                onChange={(e) =>
                  setModel({ ...model, contact: e.target.value })
                }
                type="text"
                placeholder="Contact"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {data?._id ? "Save Changes" :"Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Formm;
