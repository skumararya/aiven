import React from "react";

const BottomSlider = () => {
 

  return (
    <>
    
<div class="gov-logo-sec">
			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 col-lg-12">
						<ul class="nav nav-pills">
							<li class="nav-item">
								<a class="nav-link" data-bs-toggle="pill" href="#menu-a">Partners & Collaborations</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" data-bs-toggle="pill" href="#menu-b">Geographic Reach Map</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" data-bs-toggle="pill" href="#menu-c">Government & Institutional Associations</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" data-bs-toggle="pill" href="#menu-d">State-wise Projects</a>
							</li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane fade" id="menu-a">
								<div id="gov-logo-slider1" class="owl-carousel owl-theme">
									<a href="#"><img src="images/gov-logo-1.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-2.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-3.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-4.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-5.png" alt=""/></a>
								</div>
							</div>
							<div class="tab-pane fade" id="menu-b">
								<div id="gov-logo-slider2" class="owl-carousel owl-theme">
									<a href="#"><img src="images/gov-logo-1.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-2.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-3.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-4.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-5.png" alt=""/></a>
								</div>
							</div>
							<div class="tab-pane active" id="menu-c">
								<div id="gov-logo-slider3" class="owl-carousel owl-theme">
									<a href="#"><img src="images/gov-logo-1.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-2.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-3.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-4.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-5.png" alt=""/></a>
								</div>
							</div>
							<div class="tab-pane fade" id="menu-d">
								<div id="gov-logo-slider4" class="owl-carousel owl-theme">
									<a href="#"><img src="images/gov-logo-1.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-2.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-3.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-4.png" alt=""/></a>
									<a href="#"><img src="images/gov-logo-5.png" alt=""/></a>
								</div>
							</div>
						</div>						
					</div>					
				</div>
			</div>
		</div>

    <div class="office-locations-sec">
			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-3 col-lg-3 heading-bg">
						<div class="heading-sec">
							<div>
								<h2 class="all_heading text-white m-0">Office Locations</h2>
							</div>						
						</div>
					</div>
					<div class="col-12 col-sm-12 col-md-9 col-lg-9">
						<ul class="location_icon">
							<li><a href="#"><span class="material-symbols-outlined">location_on</span> Ranchi</a></li>
							<li><a href="#"><span class="material-symbols-outlined">location_on</span> Bangalore</a></li>
							<li><a href="#"><span class="material-symbols-outlined">location_on</span> West Bengal</a></li>
							<li><a href="#"><span class="material-symbols-outlined">location_on</span> Chhattisgarh</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    </>
  );
};

export default BottomSlider;
