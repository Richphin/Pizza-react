// function Pizzatype(this.props) {
//     return(
//         <div>
// 				<div className="thumbnail">
// 			      <img src={props.imgsrc} className="img-responsive"/>
// 			      <div className="caption">
// 			        <h3 className="text-center">{props.pizzaname}</h3>
// 			        <p>
// 			        	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
// 						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
// 						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// 						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
// 						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// 			        </p>
// 			      </div>
//     			</div>
// 			</div>
//     )
// }
import { Component } from "react";

class Pizzatype extends Component{
	render(){
		return(
			  <div>
				<div className="thumbnail">
			      <img src={this.props.imgsrc} className="img-responsive"/>
			      <div className="caption">
			        <h3 className="text-center">{this.props.pizzaname}</h3>
			        <p>
			        	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			        </p>
			      </div>
    			</div>
			</div>
		)
	}
}
export default Pizzatype;