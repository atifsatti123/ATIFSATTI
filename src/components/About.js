import React,{useState,useEffect} from "react";
import {Link } from "react-router-dom";

const About = () => {
const [data,setData] = useState([]);

useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
  .then(response => response.json())
  .then((result) => setData(result));
},[])

return(
   <div>
       {data.map((value,index)=> {
           return (
               <li>
                   ID : {value.id}
                   FIRSTNAME : {value.firstName}
                   LASTNAME : {value.lastName}
                   FULLNAME : {value.fullName}
                   TITLE : {value.title}
                   FAMILY : {value.family}
                   <Link
                   to="/contact">Detail</Link>   
               </li>
           )
       })

       
    }
    
   </div>  
);
}

export default About;