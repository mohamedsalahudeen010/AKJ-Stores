
import "./AddProducts.css"
import AdminBase from "../../../../Base/ABase/AdminBase"

import Button from '@mui/material/Button';

import {  TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";
import * as yup from "yup"
import{useFormik} from "formik"

import { useDispatch } from 'react-redux';
import {  addToStock, fetchAddToStock } from '../../../../Redux/Stock/stockAction';


const studentValidationSchema=yup.object({
  name:yup.string().required("please fill the name"),
  prize:yup.string().required("please fill the Prize of the Product"),
  varient: yup.string().required("please fill the varient of the Product"),
  image:yup.string().required("please fill the image of the Product"),
  productGroup:yup.string().required("please fill the Product Group"),
  productSubGroup:yup.string().required("please fill the Product Sub-Group"),
  type:yup.string().required("please fill the type of the Product"),
  brand:yup.string().required("please fill the brand of the Product"),
  stock:yup.string().required("please fill the Number of Stock to be Added"),
  features:yup.string(),
  description:yup.string()
})

function AddProducts() {
  
  const dispatch=useDispatch()
  const{values,handleChange, handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues:{
      name:"",
      prize:"",
      varient:"",
      image:"",
      productGroup:"",
      productSubGroup:"",
      type:"",
      brand:"",
      stock:"",
      features:"",
      description:"",
    },
    validationSchema:studentValidationSchema,
    onSubmit:(newProduct)=>{
      console.log("onSubmit triggered",newProduct)
      dispatch(fetchAddToStock(newProduct));
      addToStock(newProduct)
      navigate("/stock")
    }
  })

const navigate=useNavigate();
    


  


    return(
        <AdminBase>

<div className="containers addProductPage ">

    <div className="input-section">
    <form onSubmit={handleSubmit} className='form-addPage'>

    
       
    <TextField  label={touched.name && errors.name?<p style={{color:"red"}}>{errors.name}</p>:"Enter The Name of the product"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '40ch'}}
     onChange={handleChange}
     value={values.name}
     onBlur={handleBlur}
     name= "name"
    
     />
     

    <TextField  label= {touched.prize && errors.prize?<p style={{color:"red"}}>{errors.prize}</p>:"Enter Prize of the product"}
     id="filled" 
     variant="filled"
     style={{marginLeft:"1rem",
     marginTop:"1rem",
     width: '40ch'}}
     onChange={handleChange}
     value={values.prize}
     onBlur={handleBlur}
     name= "prize"
     
     />
     

    <TextField  
    label={touched.varient && errors.varient?
    <p style={{color:"red"}}>{errors.varient}</p>:"Enter The varient of the product"}
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '40ch'}}
     onChange={handleChange}
     value={values.varient}
     onBlur={handleBlur}
     name= "varient"
      />
      

    <TextField 
     label={touched.image && errors.image?<p style={{color:"red"}}>{errors.image}</p>:
     "Enter The image of the product" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '40ch'}}
    onChange={handleChange}
     value={values.image}
     onBlur={handleBlur}
     name= "image" />
     
     <TextField  
     label={touched.productGroup && errors.productGroup?<p style={{color:"red"}}>{errors.productGroup}</p>:
     "Enter The product Group" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '40ch'}}
    onChange={handleChange}
     value={values.productGroup}
     onBlur={handleBlur}
     name= "productGroup" />

     <TextField  
     label={touched.productSubGroup && errors.productSubGroup?<p style={{color:"red"}}>{errors.productSubGroup}</p>:
     "Enter The product Sub-Group" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '40ch'}}
    onChange={handleChange}
     value={values.productSubGroup}
     onBlur={handleBlur}
     name= "productSubGroup" />

     <TextField  
     label={touched.type && errors.type?<p style={{color:"red"}}>{errors.type}</p>:
     "Enter The type of the product" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '40ch'}}
    onChange={handleChange}
     value={values.type}
     onBlur={handleBlur}
     name= "type" />
     

     <TextField  
     label= {touched.brand && errors.brand?<p style={{color:"red"}}>{errors.brand}</p>:
     "Enter The brand of the product" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '40ch'}}
    onChange={handleChange}
     value={values.brand}
     onBlur={handleBlur}
     name= "brand" />
    

     <TextField  
     label={touched.stock && errors.stock?<p style={{color:"red"}}>{errors.stock}</p>:
     "Enter The stock of the product" }
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '40ch'}}
    onChange={handleChange}
     value={values.stock}
     onBlur={handleBlur}
     name= "stock" />
     

     <TextField  label="Enter The features of the product" 
   id="filled" 
   variant="filled"
   style={{marginLeft:"1rem",
   marginTop:"1rem",
   width: '40ch'}}
    onChange={handleChange}
     value={values.features}
     onBlur={handleBlur}
     name= "features" />

<TextField  label="Enter The Description for the product" 
    id="filled" 
    variant="filled"
    style={{marginLeft:"1rem",
    marginTop:"1rem",
    width: '40ch'}}
    onChange={handleChange}
     value={values.description}
     onBlur={handleBlur}
     name= "description" />
     
  
    <Button
          className="add-btn"
          color="success"
          type="submit"
          variant="contained"
          style={{display:"block",textAlign:"center",
        marginLeft:"25%",width:"50%",
      marginTop:"1rem"}}
         
        >
          Add Product
        </Button>
        </form>
    </div>

       </div> 
        </AdminBase>
    )
}


export default AddProducts
