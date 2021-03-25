// function Slider() {
//     return(
//         <div class="container-fliud">
// 		<div class="row">
// 			<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
		
// 			  <ol class="carousel-indicators">
// 			    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
// 			    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
// 			    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
// 			  </ol>

// 			  <div class="carousel-inner carousel-content" role="listbox">
// 				    <div class="item active">
// 				      <img src="images/image 2.jpeg" alt="..." />			      
// 				    </div>

// 				    <div class="item">
// 				      <img src="images/image 12.jpeg" alt="..."/>
// 				    </div>  

// 				     <div class="item">
// 				      <img src="images/image 4.jpeg" alt="..."/>			      
// 				    </div>
// 			  </div>

// 			  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
// 			    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
// 			    <span class="sr-only">Previous</span>
// 			  </a>
// 			  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
// 			    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
// 			    <span class="sr-only">Next</span>
// 			  </a>
// 			</div>
// 		</div>
// 	</div>
//     )
// }

import { Component } from "react";
class Slider extends  Component{
	render(){
		return(
			<div class="container-fliud">
			<div class="row">
				<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
			
				  <ol class="carousel-indicators">
					<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
					<li data-target="#carousel-example-generic" data-slide-to="1"></li>
					<li data-target="#carousel-example-generic" data-slide-to="2"></li>
				  </ol>
	
				  <div class="carousel-inner carousel-content" role="listbox">
						<div class="item active">
						  <img src="images/image 2.jpeg" alt="..." />			      
						</div>
	
						<div class="item">
						  <img src="images/image 12.jpeg" alt="..."/>
						</div>  
	
						 <div class="item">
						  <img src="images/image 4.jpeg" alt="..."/>			      
						</div>
				  </div>
	
				  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				  </a>
				  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
					<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				  </a>
				</div>
			</div>
		</div>	
		)
	}
}
export default Slider;