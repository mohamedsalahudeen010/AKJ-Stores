
import { Modal } from "react-bootstrap";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../Action/cartActions";
import "./ProdCardLand.css"


const ProductCardLand = ( {product} ) => {
  // const history = useHistory();
  const [varient, setVarient] = useState(1);
  
  const [quantity, setQuantity] = useState(1);
  const [cartAlert,setCartAlert]=useState(false)


  // const dispatch = useDispatch();

  // const addCart = () => {
  //   dispatch(
  //     addToCart(
  //       product,
  //       quantity,
  //       pizzaVarient,
  //       sauceVarient,
  //       cheeseVarient,
  //       meatVarient
  //     )
  //   );
  // };

  console.log(product.name)
  console.log(product)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseCart = () => setCartAlert(false);
  const handleShowCart = () => setCartAlert(true);
  return (
    < >
      <Card className="prod-card-land-main">
        <Card.Title
        className="prod-card-name-land">{product.name}</Card.Title>
        <Card.Img
          variant="top"
          className="card-image-land"
          src={product.image}
          onClick={handleShow}
          
        />
        <Card.Body>
          {/* ======================================================*/}
          <div className="flex-container">
          <div className="w-100  prod-card-type2-land">
            {product.type2}
            </div>
          </div>
          <div className="flex-container">
            <div className="w-100 prod-varient-land m-1">
              Varients
              <select
                className="form-control"
                value={varient}
                onChange={(e) => {
                  setVarient(e.target.value);
                }}
              >
                {[1,4,10,20].map((varient) => (
                  <option key={varient} value={varient}>
                    {varient} litre
                  </option>
                ))}
              </select>
            </div>
            <div className="w-100 prod-Quantity-land m-1">
              Quantity
              <select
                className=" form-control "
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
              {[...Array(10).keys()].map((arr, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

         
          {/* <<<<<<<<<<<<<<<<<<<PRICE>>>>>>>>>>>>>>>>> */}
          <div className="flex-container">
            <div className="w-100 m-1">
              <h5 className="prod-price-land">
                Price :{" "}
                {varient *
                  quantity * product.prize}{" "}
                Rs/-
              </h5>
            </div>
          </div>
          {/* <<<<<<<<<<<<<<<<<<<ADD TO CART>>>>>>>>>>>>>>>>> */}
          <div className="flex-container">
            <div className="w-100">
              <button className=" card_btn prod-land-btn" 
              onClick={()=>{setCartAlert(true)}}>
                
              
                 Add to Cart
              </button>
            </div> 
           
         </div>  
        </Card.Body>
      </Card>


      <div>
        <Modal show={cartAlert} onHide={handleCloseCart}>
          <Modal.Header closeButton>
            <Modal.Title>Please LogIn to Continue</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>

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
                  alt="pizza"
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
    </>
  );
};

export default ProductCardLand;
