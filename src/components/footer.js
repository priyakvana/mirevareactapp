"use strict"
import React from 'react';

class Footer extends React.Component{
    render() {
        return(
            <footer>
<div class="row" style={{'margin-left':15}}>
   
   <div class="col-md-3">
 <h5><b>COMPANY</b></h5>
 <p>Products</p>
 <p>pricing</p>
 <p>About</p>
 <p>Blog</p>
 <p>FAQ</p>
 <p>resources</p>
   </div>
   <div class="col-md-3">
     <h5><b>RESOURCES</b></h5>
     <p>FAQs</p>
 <p>Help Center</p>
 <p>Atm Finder</p>
 <p>Second Chance Banking</p>
     </div>
     <div class="col-md-3">
         <h5><b>CONTACT US</b></h5>
         <p>support@mireva.org</p>
 <p>844-244-6363</p>
       </div>
       <div class="col-md-3">
           <h5><b>FOLLOW US ON</b></h5>
           <i class="fa fa-facebook-official" style={{'font-size':48,'color':'blue'}} ></i>
           &nbsp;&nbsp;
           <i class="fa fa-twitter-square" style={{'font-size':50}}></i>
           &nbsp;&nbsp;
           <i class="fa fa-instagram fa-5x insta" style={{'font-size':50}}></i>
         </div>
 
 </div>
 </footer>
        );
    }
}
export default Footer;