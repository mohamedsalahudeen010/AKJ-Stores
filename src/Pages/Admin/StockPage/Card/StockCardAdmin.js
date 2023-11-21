
import { Modal } from "react-bootstrap";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addToCart } from "../../Action/cartActions";
import "./StockCardAdmin.css"

import { deleteOneItemStock } from "../../../../Redux/Stock/stockAction";


const StockCardAdmin = ( {product} ) => {
  const navigate = useNavigate();
  


  const dispatch = useDispatch();

  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row stock-card-main-admin">



      <Card className="stock-card-admin p-1 ">
        <Card.Title
        className="stock-card-name-admin">{product.name}</Card.Title>
        <Card.Img
          variant="top"
          className="stock-image-admin"
          src={product.image}
          onClick={handleShow}
          
        />
        <Card.Body>
          {/* ======================================================*/}
          <div className="flex-container stock-body">
          <div className="w-100 stock-card-type2-admin">
            {product.type2}
            </div>
          </div>
          <div className="flex-container">
            <div className="w-100 stock-varient-admin">
             <div style={{fontWeight:"bold"}}>Quantity</div> 
              {product.quantity}
            </div>
            <div className="w-100 ">
            <div style={{fontWeight:"bold"}} >Stock</div> 
              {product.stock} Nos
            </div>
          </div>
          {/* <<<<<<<<<<<<<<<<<<<ADD TO CART>>>>>>>>>>>>>>>>> */}
          <div className="flex-container">
            <div className="w-100">
            <button
                className="m-1 stock_btn-delete"
                onClick={() => {
                  dispatch(deleteOneItemStock(product))
                }}
              >
                Delete
              </button>
            </div> 
            <div className="w-100">
              <button
                className="m-1 stock_btn-update"
                onClick={() => {
                  navigate(`/updateProducts/${product._id}`);
                }}
              >
                Update
              </button>
            </div>
         </div>  

        </Card.Body>
      </Card>


{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="flex-container">
              <div className="w-100 ">
                <img
                  className="image-fluid img-model"
                  style={{ height: "20rem", width: "20rem" }}
                  src={product.image}
                  alt="products"
                ></img>
              </div>
            </div>
          </Modal.Body>
          <p style={{ width: "90%", marginLeft: "0.5rem" }}>
            {product.description}
          </p>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default StockCardAdmin;
