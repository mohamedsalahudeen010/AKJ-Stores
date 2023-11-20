import  { useContext, useState } from "react";
import "./LandingNavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dot from "@iconscout/react-unicons/icons/uil-ellipsis-v";
import Collapse from "react-bootstrap/Collapse";

import { AkjContext } from "../../../Context";
import { useNavigate } from "react-router-dom";

function LandingNavBar() {
  const navigate = useNavigate();
  // openCom,
  const {  setOpenCom, openLand, setOpenLand } =
    useContext(AkjContext);
  const [product, setProduct] = useState(false);
  
  return (
    <div>
      <div className="nav-wrapper-land">
        <div className="nav-left-land">
          <div
            className="nav-name-land"
            onClick={() => {
              navigate("/");
            }}
          >
            AKJ Stores
            </div>

        <ul>
        <li className="nav-left-admin"
        onClick={()=>navigate("/adminLogin")}>Admin</li>
        </ul>

        </div>
        <div className="nav-right-land">
          <div className="nav-right-land-list">
            <ul>
            <li 
            onClick={() => {
              navigate("/");
            }}>
               Home
              </li>
              <li
                className="product-list-land"
                id="product-list"
                onClick={() => navigate("/productsLand")}
              >
                Products
              </li>
             
              <li
                onClick={() => {
                  navigate("/logIn");
                }}
              >
                LogIn
              </li>

              <li
                onClick={() => {
                  navigate("/signUp");
                }}
              >
                SignUp
              </li>

              
            </ul>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            id="check-land"
            name=""
            value=""
            style={{ display: "none" }}
          ></input>
          <label
            htmlFor="check-land"
            className="check-label-land"
            style={
              openLand
                ? { transform: "rotate(90deg)", transition: "all 0.6s" }
                : { transform: "rotate(0deg)", transition: "all 0.6s" }
            }
          >
            <Dot onClick={() => setOpenCom(false, setOpenLand(!openLand))} />
          </label>
        </div>

        <div className="land-dot-list">
          <Collapse in={openLand}>
            <div id="example-collapse-text" className="view-nav-list-land">
              <ul>
              <li>
                  <span onClick={() => {
                    setOpenLand(false);
                    navigate("/")}}>
                   Home
                  </span>
                </li>
                <li>
                  <span onClick={() =>{setOpenLand(false); 
                    navigate("/productsLand")}}>
                    Products
                  </span>
                </li>
               

                <li>
                  <span
                    onClick={() => {
                      setOpenLand(false);
                      navigate("/logIn");
                    }}
                  >
                    Login
                  </span>
                </li>

                <li>
                  <span
                   onClick={() => {
                    setOpenLand(false);
                    navigate("/signUp");
                  }}
                  >SignUp</span>
                </li>
                
              </ul>
            </div>
          </Collapse>
        </div>
      </div>

      {product ? (
        <div className="products" id="products" style={{ marginTop: "8rem" }}>
          <div className="row">
            <div className="col-md-4 interior">
              <h4>Interior Wall Paints</h4>
              <ul>
                <li>Nerolac Impressions HD</li>
                <li>Nerolac Beauty Sheen</li>
                <li>Nerolac Beauty Gold Washable</li>
                <li>Beauty Silver</li>
                <li>Nerolac Pearls Emulsion</li>
                <li>Nerolac Beauty Little Master</li>
                <li>Nerolac Beauty Smooth Finish</li>
              </ul>
            </div>

            <div className="col-md-4 exterior">
              <h4>Exterior Wall Paints</h4>
              <ul>
                <li>Nerolac Excel Top Guard</li>
                <li>Nerolac Excel Total</li>
                <li>Excel Mica Marble Stretch & Sheen</li>
                <li>Nerolac Excel Anti-Peel</li>
                <li>Nerolac Excel Tile Guard</li>
                <li>Nerolac Suraksha Plus</li>
                <li>Suraksha Acrylic Exterior Emulsion</li>
              </ul>
            </div>

            <div className="col-md-4 primers">
              <h4>Primers</h4>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 enamel">
              <h4>Metal Enamal Paints</h4>
              <ul>
                <li></li>
              </ul>
            </div>

            <div className="col-md-4 wood-coating">
              <h4>Wood Coating</h4>
              <ul>
                <li></li>
              </ul>
            </div>
            <div className="col-md-4 waterproofing">
              <h4>Waterproofing</h4>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LandingNavBar;
