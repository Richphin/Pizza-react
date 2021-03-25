import Pizzatype from "./Pizzatype";
import { Component } from "react";

// function Types() {
//     return(
        // <div className="container">
        //     <h3 className="te">Pizza Types</h3>
        //     <div className="row ">
        //         <div className=" col-xs-12 col-sm-6 col-md-3">
        //             <Pizzatype pizzaname="pepperoni pizza" imgsrc="images/pork.jpg"/>
        //         </div>
        //         <div className=" col-xs-12 col-sm-6 col-md-3">
        //             <Pizzatype pizzaname="vegitable pizza" imgsrc="images/veg.jpg"/>
                    
        //         </div>
        //         <div className=" col-xs-12 col-sm-6 col-md-3">
        //             <Pizzatype pizzaname="cheese pizza" imgsrc="images/image 10.jpeg"/>
        //         </div>
        //         <div className="  col-xs-12 col-sm-6 col-md-3">
        //             <Pizzatype pizzaname="Full package" imgsrc="images/pizza-coke.jpg"/>
        //         </div>
        //     </div>
	    // </div>
//     )
// }

class Types extends Component{
    render(){
        return(
            <div className="container">
            <h3 className="text-center">Pizza Types</h3>
            <div className="row ">
                <div className=" col-xs-12 col-sm-6 col-md-3">
                    <Pizzatype pizzaname="pepperoni pizza" imgsrc="images/pork.jpg"/>
                </div>
                <div className=" col-xs-12 col-sm-6 col-md-3">
                    <Pizzatype pizzaname="vegitable pizza" imgsrc="images/veg.jpg"/>
                    
                </div>
                <div className=" col-xs-12 col-sm-6 col-md-3">
                    <Pizzatype pizzaname="cheese pizza" imgsrc="images/image 10.jpeg"/>
                </div>
                <div className="  col-xs-12 col-sm-6 col-md-3">
                    <Pizzatype pizzaname="Full package" imgsrc="images/pizza-coke.jpg"/>
                </div>
            </div>
	    </div>
        )
    }
}
export default Types;