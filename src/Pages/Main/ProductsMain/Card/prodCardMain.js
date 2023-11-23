import { Modal } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch,  } from "react-redux";
import "./ProdCardMain.css"
import { addToCart, fetchAddToCart } from "../../../../Redux/Cart/cartAction";


const ProductCardMain = ( {product} ) => {
  // const history = useHistory();
  const [varient, setVarient] = useState(1);
  
  const [quantity, setQuantity] = useState(1);


  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(
      addToCart(
        product,
        varient,
        quantity
        
      ),
      // dispatch(fetchAddToCart(product,
      //   varient,
      //   quantity))
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>



<Card className="prod-card-main-main">
        <Card.Title
        className="prod-card-name-main">{product.name}</Card.Title>
        <Card.Img
          variant="top"
          className="card-image-main"
          src={product.image}
          onClick={handleShow}
          
        />
        <Card.Body>
          {/* ======================================================*/}
          <div className="flex-container">
          <div className=" prod-card-type2-main">
            {product.varient}
            </div>
          </div>
          <div className="flex-container">
            <div className="w-100 prod-varient-main m-1">
             {product.brand}
             
            </div>
            <div className="w-100 prod-Quantity-main m-1">
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
              <h5 className="prod-price-main">
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
              <button className=" card_btn prod-main-btn" 
              onClick={()=>{addCart()}}>
                
              
                 Add to Cart
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

export default ProductCardMain;
