import React, { useEffect, useState } from "react";

const MainSliderSection = () => {


  return (
    <>
      <div class="banner-sec">
			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 col-lg-12">
						<div id="demo" class="carousel slide" data-bs-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<div class="row gy-3">
										<div class="col-12 col-sm-12 col-md-7 col-lg-7 banner-details">
											<div class="heading-sec">
												<div>
													<h2 class="all_heading">Getting Quality<br/>Education is now<br/>more Easy</h2>
												</div>							
											</div>
											<p>STEM Infinite is here for you with various courses &<br/>materials from skilled tutors all around the world</p>
											<div class="d-flex align-items-center gap-2">
												<a href="#" class="btn quick-btn">Enquiry</a>
												<a href="#" class="btn quick-btn green-btn">Request Demo</a>
											</div>
										</div>
										<div class="col-12 col-sm-12 col-md-5 col-lg-5">
											<img src="images/banner-1.png" alt="Banner" class="d-block" />													
										</div>
									</div>
								</div>
								<div class="carousel-item">
									<div class="row">
										<div class="col-12 col-sm-12 col-md-7 col-lg-7 banner-details">
											<div class="heading-sec">
												<div>
													<h2 class="all_heading">Getting Quality<br/>Education is now<br/>more </h2>
												</div>							
											</div>
											<p>STEM Infinite is here for you with various courses &<br/>materials from skilled tutors all around the world</p>
											<div class="d-flex align-items-center gap-2">
												<a href="#" class="btn quick-btn">Enquiry</a>
												<a href="#" class="btn quick-btn green-btn">Request Demo</a>
											</div>
										</div>
										<div class="col-12 col-sm-12 col-md-5 col-lg-5">
											<img src="images/banner-1.png" alt="Banner" class="d-block" />													
										</div>
									</div>
								</div>
							</div>				
						</div>
					</div>
				</div>
			</div>			
		</div>
    </>
  );
};

export default MainSliderSection;
