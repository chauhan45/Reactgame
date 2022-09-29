import React,{useState} from "react";
import { Button, Modal } from "react-bootstrap";
import SignUp from "./SignUp";
import { useAuth0 } from "@auth0/auth0-react";

const AddForm = () => {

// Doman  = dev-d69m5gfq.us.auth0.com
// clintId = 3KMjqsy9Y1d3GMjttntiEs7RmfktC0Xx

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { loginWithRedirect } = useAuth0();


  return (
    <>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary"  onClick={() => loginWithRedirect()}>
          lOGIN
        </button>
        <button type="submit" class="btn btn-primary ml-5"  onClick={handleShow}>
          Sign Up
        </button>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>SignUp</Modal.Title>
          <Button variant="secondary" onClick={handleClose} className="fa fa-close">
          </Button>
        </Modal.Header>
        <Modal.Body>
          <SignUp />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddForm;
