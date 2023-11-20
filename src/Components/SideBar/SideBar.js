import React, { useContext } from "react";
import "./SideBar.css";
import { AkjContext } from "../../Context";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function SideBar() {
    const {sideNavProduct,SetsideNavProduct}=useContext(AkjContext)
  return (
    <div className="sideBar">
       
       <div className="sidebar-title">
        <img src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="mobile"/>
            <NavDropdown
             
              title="Mobiles"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
              <NavDropdown.Item>Samsung</NavDropdown.Item>
              <NavDropdown.Item>iPhone</NavDropdown.Item>
              <NavDropdown.Item >One Plus</NavDropdown.Item>
              <NavDropdown.Item>Vivo</NavDropdown.Item>
              <NavDropdown.Item>Oppo</NavDropdown.Item>
              <NavDropdown.Item >Poco</NavDropdown.Item>
              <NavDropdown.Item>Xiaomi</NavDropdown.Item>
              <NavDropdown.Item>Redmi</NavDropdown.Item>
              <NavDropdown.Item >Motorola</NavDropdown.Item>
              <NavDropdown.Item>Realme</NavDropdown.Item>
              <NavDropdown.Item>Infinix</NavDropdown.Item>
              <NavDropdown.Item >Techno</NavDropdown.Item>
             
            </NavDropdown>
        

       </div>
       <div className="sidebar-title">
       <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="fashion"/>
            <NavDropdown
             
              title="Fashion & lifeStyle"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
              <NavDropdown.Item>Men Pants</NavDropdown.Item>
              <NavDropdown.Item>Men Jeans</NavDropdown.Item>
              <NavDropdown.Item >Shirt</NavDropdown.Item>
              <NavDropdown.Item>Trousers</NavDropdown.Item>
              <NavDropdown.Item>Track suit</NavDropdown.Item>
              <NavDropdown.Item >T-Shirt</NavDropdown.Item>
              <NavDropdown.Item>Women Jeans</NavDropdown.Item>
              <NavDropdown.Item>Chudithars</NavDropdown.Item>
              <NavDropdown.Item >Sarees</NavDropdown.Item>
              <NavDropdown.Item>Gowns</NavDropdown.Item>
              <NavDropdown.Item>Lehenga Choli</NavDropdown.Item>
              <NavDropdown.Item >Salwars & Patiala</NavDropdown.Item>
            </NavDropdown>
            </div>

       <div className="sidebar-title">
       <img src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt="electronics"/>
            <NavDropdown
             
              title="Electronics"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
             <NavDropdown.Item>Laptop</NavDropdown.Item>
              <NavDropdown.Item>Tv</NavDropdown.Item>
              <NavDropdown.Item >HeadPhones & heatsets</NavDropdown.Item>
              <NavDropdown.Item>Airpod (TWS)</NavDropdown.Item>
              <NavDropdown.Item>Mobile Charger</NavDropdown.Item>
              <NavDropdown.Item >SoundBar</NavDropdown.Item>
              <NavDropdown.Item>Monitor</NavDropdown.Item>
              <NavDropdown.Item>Hard Disk</NavDropdown.Item>
              <NavDropdown.Item >Pendrive</NavDropdown.Item>
              <NavDropdown.Item>Mouse</NavDropdown.Item>
              <NavDropdown.Item>Bluetooth Speakers</NavDropdown.Item>
              <NavDropdown.Item >Keyboard</NavDropdown.Item>
            </NavDropdown>
       </div>

       <div className="sidebar-title">
       <img src="https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100" alt="appliances"/>
            <NavDropdown
             
              title="Appliances"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
             <NavDropdown.Item>Tv</NavDropdown.Item>
              <NavDropdown.Item>Washing Machine</NavDropdown.Item>
              <NavDropdown.Item >Refridgrerator</NavDropdown.Item>
              <NavDropdown.Item>Air Conditioner</NavDropdown.Item>
              <NavDropdown.Item>Water Heater</NavDropdown.Item>
              <NavDropdown.Item >Microwave Owen</NavDropdown.Item>
              <NavDropdown.Item>Irons</NavDropdown.Item>
              <NavDropdown.Item>Water Purifier</NavDropdown.Item>
              <NavDropdown.Item >Mixie</NavDropdown.Item>
              <NavDropdown.Item>Grinder</NavDropdown.Item>
              <NavDropdown.Item>Fan</NavDropdown.Item>
              <NavDropdown.Item >Air Cooler</NavDropdown.Item>
            </NavDropdown>

       </div>
       <div className="sidebar-title">
       <img src="https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="furniture"/>
            <NavDropdown
             
              title="Home & Furniture"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
              <NavDropdown.Item>3 Seater Sofa</NavDropdown.Item>
              <NavDropdown.Item>5 Seater Sofa</NavDropdown.Item>
              <NavDropdown.Item >Corner Sofa</NavDropdown.Item>
              <NavDropdown.Item>Bed</NavDropdown.Item>
              <NavDropdown.Item>Mattress</NavDropdown.Item>
              <NavDropdown.Item >Dining Table</NavDropdown.Item>
              <NavDropdown.Item>Wooden Cot</NavDropdown.Item>
              <NavDropdown.Item>BedSheets</NavDropdown.Item>
              <NavDropdown.Item >Pillows</NavDropdown.Item>
              <NavDropdown.Item>Coffe Table</NavDropdown.Item>
              <NavDropdown.Item>Blanket</NavDropdown.Item>
              <NavDropdown.Item >Clock</NavDropdown.Item>
            </NavDropdown>
       </div>

       <div className="sidebar-title">
       <img src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" alt="grocery"/>
            <NavDropdown
             
              title="Grocery"
              menuVariant="light"
              variant="dark"
              id="dropdown-custom-components"
            >
              
            </NavDropdown>
       </div>
    </div>
  )
}

export default SideBar