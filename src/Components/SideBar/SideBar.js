import React, { useContext } from "react";
import "./SideBar.css";
import { AkjContext } from "../../Context";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from "react-redux";
import { fetchProducts, fetchProductsWithQuery } from "../../Redux/Products/productsAction";


function SideBar() {
    const {sideNavProduct,SetsideNavProduct}=useContext(AkjContext)
    const dispatch=useDispatch()
  return (
    <div className="sideBar">
       <div className="sidebar-title">
        <img src="" alt="products"
        onClick={()=>{dispatch(fetchProducts())}}/>
       <h6> Products</h6>
        </div>

       
       <div className="sidebar-title">
        <img src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="mobile"
        onClick={()=>{dispatch(fetchProductsWithQuery("mobile"))}}/>
            <NavDropdown
             
              title="Mobiles"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("samsung"))}}
              >Samsung</NavDropdown.Item>

              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("iphone"))}}
               >iPhone</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("one plus"))}}
               >One Plus</NavDropdown.Item>

              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("vivo"))}}
              >Vivo</NavDropdown.Item>

              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("oppo"))}}
              >Oppo</NavDropdown.Item>
              
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("poco"))}}
              >Poco</NavDropdown.Item>
              
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("xiaomi"))}}
              >Xiaomi</NavDropdown.Item>

              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("redmi"))}}
              >Redmi</NavDropdown.Item>
              
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("motorola"))}}
              >Motorola</NavDropdown.Item>

              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("realme"))}}
              >Realme</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("infinix"))}}
              >Infinix</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("techno"))}}
              >Techno</NavDropdown.Item>
             
            </NavDropdown>
        

       </div>
       <div className="sidebar-title">
       <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="fashion"
        onClick={()=>{dispatch(fetchProductsWithQuery("fashion"))}}/>
            <NavDropdown
             
              title="Fashion & lifeStyle"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
              <NavDropdown.Item
               onClick={()=>{dispatch(fetchProductsWithQuery("men pants"))}}>Men Pants</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("men jean"))}}>Men Jeans</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("shirt"))}}>Shirt</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("trousers"))}}>Trousers</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("track suit"))}}>Track suit</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("t shirt"))}}>T-Shirt</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("women jeans"))}}>Women Jeans</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("Chudithars"))}}>Chudithars</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("sarees"))}}>Sarees</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("gowns"))}}>Gowns</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("lehanga"))}}>Lehenga</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("Salwars"))}}>Salwars & Patiala</NavDropdown.Item>
            </NavDropdown>
            </div>

       <div className="sidebar-title">
       <img src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt="electronics"
       onClick={()=>{dispatch(fetchProductsWithQuery("electronics"))}}/>
            <NavDropdown
             
              title="Electronics"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
             <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("laptop"))}}>Laptop</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("computer"))}}>Computer</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("headPhones & headsets"))}} >HeadPhones & headsets</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("airpod"))}}>Airpod (TWS)</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("mobile charger"))}}>Mobile Charger</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("soundbar"))}}>SoundBar</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("monitor"))}}>Monitor</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("hard disk"))}}>Hard Disk</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("pendrive"))}}>Pendrive</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("mouse"))}}>Mouse</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("bluetooth speakers"))}}>Bluetooth Speakers</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("keyboard"))}}>Keyboard</NavDropdown.Item>
            </NavDropdown>
       </div>

       <div className="sidebar-title">
       <img src="https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100" alt="appliances"
       onClick={()=>{dispatch(fetchProductsWithQuery("appliances"))}}
       />
            <NavDropdown
             
              title="Appliances"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
             <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("tv"))}}>Tv</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("washing machine"))}}>Washing Machine</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("refrigerator"))}}>Refridgrerator</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("air conditioner"))}}>Air Conditioner</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("water heater"))}}>Water Heater</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("microwave owen"))}}>Microwave Owen</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("irons"))}}>Irons</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("water purifier"))}}>Water Purifier</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("mixie"))}}>Mixie</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("grinder"))}}>Grinder</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("fan"))}}>Fan</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("air cooler"))}} >Air Cooler</NavDropdown.Item>
            </NavDropdown>

       </div>
       <div className="sidebar-title">
       <img src="https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="furniture"
       onClick={()=>{dispatch(fetchProductsWithQuery("furniture"))}}/>
            <NavDropdown
             
              title="Home & Furniture"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("3 seater sofa"))}}>3 Seater Sofa</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("5 seater sofa"))}}>5 Seater Sofa</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("corner sofa"))}}>Corner Sofa</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("bed"))}}>Bed</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("mattress"))}}>Mattress</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("dining table"))}}>Dining Table</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("wooden cot"))}}>Wooden Cot</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("bedsheets"))}}>BedSheets</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("pillows"))}}>Pillows</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("coffee table"))}}>Coffee Table</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("blanket"))}}>Blanket</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("clock"))}}>Clock</NavDropdown.Item>
            </NavDropdown>
       </div>
<div className="sidebar-title">
       <img src="https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100" alt="toys"
       onClick={()=>{dispatch(fetchProductsWithQuery("toys"))}}/>
            <NavDropdown
             
              title="Toys"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("3 seater sofa"))}}>3 Seater Sofa</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("5 seater sofa"))}}>5 Seater Sofa</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("corner sofa"))}}>Corner Sofa</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("bed"))}}>Bed</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("mattress"))}}>Mattress</NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>{dispatch(fetchProductsWithQuery("dining table"))}}>Dining Table</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("wooden cot"))}}>Wooden Cot</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("bedsheets"))}}>BedSheets</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("pillows"))}}>Pillows</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("coffee table"))}}>Coffee Table</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("blanket"))}}>Blanket</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{dispatch(fetchProductsWithQuery("clock"))}}>Clock</NavDropdown.Item>
            </NavDropdown>
       </div>
       <div className="sidebar-title">
       <img src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" alt="grocery"
       onClick={()=>{dispatch(fetchProductsWithQuery("grocery"))}}/>
           <h6> Grocery</h6>
       </div>
    </div>
  )
}

export default SideBar

