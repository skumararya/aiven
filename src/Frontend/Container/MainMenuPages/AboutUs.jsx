import React from "react";
import Breadcrumb from "./Breadcrumb";
// import Spinner from "../Spinner.jsx";
// import { useGetAboutUsQuery } from "../../../redux/api/apiService";


const AboutUs = () => {
  // const { data: aboutUsResponse, isLoading, isError } = useGetAboutUsQuery();
  // const aboutUs = aboutUsResponse?.data;

  return (
    <>
    <Breadcrumb title={"About US"} page={"Home"} />
    <div class="main-content-area">
			<div class="about-sec about-inner-sec">
				<div class="container">
          <div class="row align-items-end">
						<div class="col-12 col-sm-12 col-md-6 col-lg-6">
							<div class="video-sec">
								<div class="card-sec">
									<div class="img-sec">
										<img src="images/about-page-1.png" alt="" />
									</div>
									<div class="title-sec">
										<div class="heading-sec">
											<div>
												<h2 class="all_heading">Discover Our Work—Just One Click Away</h2>
											</div>								
										</div>
										<a href="#" class="video-play"><span class="material-symbols-outlined">play_circle</span> Watch Videos</a>
									</div>									
								</div>
							</div>
						</div>
						<div class="col-12 col-sm-12 col-md-6 col-lg-6">
							<div class="content">
								<div class="heading-sec">
									<div>
										<h2 class="all_heading">Fueling Brands with Ideas</h2>
										<span class="underline-bg"></span>
									</div>								
								</div>
								<p>We help businesses unlock their full the potential through data-driven strategies, creative branding, targeted campaigns. Whether you're looking to refine an your brand identity optimize agency Digital presence, or increase customer engagement, our team of experts is here to guide you every step of the waya.</p>
								<ul class="list-view">
									<li>Scalable Pricing Plans</li>
									<li>Optimized Resource Allocation</li>
								</ul>
								<div class="d-flex align-items-center"><a href="#" class="btn quick-btn mt-3">Join Us</a></div>
							</div>
						</div>
					</div>
        <div class="row vision-mission-sec">
						<div class="col-12 col-sm-12 col-md-4 col-lg-4">
							<div class="vision-mission-box">
								<img src="images/vision-mission-1.png" />
								<div class="heading-sec">
									<div>
										<h2 class="all_heading">Company Mission</h2>
										<span class="underline-bg"></span>
									</div>						
								</div>
								<p>Our mission is simple yet powerful to empower individuals and businesses make informed, confident insurance decisions that protect matters most.</p>
							</div>							
						</div>
						<div class="col-12 col-sm-12 col-md-4 col-lg-4">
							<div class="vision-mission-box">
								<img src="images/vision-mission-2.png" />
								<div class="heading-sec">
									<div>
										<h2 class="all_heading">Get Started Today</h2>
										<span class="underline-bg"></span>
									</div>						
								</div>
								<p>Ready to build the future? Enroll now and access your first course free. One click away from your AI journey.</p>
							</div>							
						</div>
						<div class="col-12 col-sm-12 col-md-4 col-lg-4">
							<div class="vision-mission-box">
								<img src="images/vision-mission-2.png" />
								<div class="heading-sec">
									<div>
										<h2 class="all_heading">Get Started Today</h2>
										<span class="underline-bg"></span>
									</div>						
								</div>
								<p>Ready to build the future? Enroll now and access your first course free. One click away from your AI journey.</p>
							</div>							
						</div>
					</div>
        <div class="choose-faq-sec">
				<div class="choose-faq-bg">
					<div class="container">
						<div class="row">
							<div class="col-12 col-sm-12 col-md-6 col-lg-6">
								<div class="choose-us-sec">
									<div class="heading-sec mb-2">
										<div>
											<h2 class="all_heading">Why Choose Us</h2>
											<span class="underline-bg"></span>
										</div>						
									</div>
									<ul class="list-view">
										<li><b>Industry-Relevant Curriculum:</b> Updated quarterly with emerging tech like generative AI and edge computing.</li>
										<li><b>Proven Outcomes:</b> 95% of alumni secure promotions or new roles within six months.</li>
										<li><b>Global Community:</b> Join forums, live webinars, and peer projects connecting learners across 100+ countries.</li>
									</ul>
								</div>
							</div>
							<div class="col-12 col-sm-12 col-md-6 col-lg-6">
								<div class="faq-sec">
									<div class="heading-sec mb-2">
										<div>
											<h2 class="all_heading">Frequently Asked Questions</h2>
											<span class="underline-bg"></span>
										</div>						
									</div>
									<div id="accordion">
										<div class="card">
										<div class="card-header">
											<a class="btn" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="true">What’s the course duration? <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
										</div>
										<div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
											<div class="card-body">
											<p>Self-paced from 4-12 weeks, with flexible deadlines.</p>
											</div>
										</div>
										</div>
										<div class="card">
										<div class="card-header">
											<a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false">Do I need prior coding experience? <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
										</div>
										<div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
											<div class="card-body">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
											</div>
										</div>
										</div>
										<div class="card">
										<div class="card-header">
											<a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree" aria-expanded="false">What support is available? <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
										</div>
										<div id="collapseThree" class="collapse" data-bs-parent="#accordion">
											<div class="card-body">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
											</div>
										</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


      <div class="our-team-sec">
				<div class="container">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-12 col-lg-12">
							<div class="heading-sec heading-center">
								<div>
									<h2 class="all_heading">Our Team</h2>
									<span class="underline-bg"></span>
								</div>								
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 col-sm-12 col-md-4 col-lg-4">
							<div class="card-sec">
								<div class="img-sec">
									<img src="images/our-team-1.png" alt="" />
								</div>
								<div class="desc-sec">
									<a href="#" class="title">Virgil L. Henderson</a>
									<div class="rating">
										<div class="star-no">CEO & Founder</div>
									</div>
								</div>
							</div>						
						</div>	
						<div class="col-12 col-sm-12 col-md-4 col-lg-4">
							<div class="card-sec">
								<div class="img-sec">
									<img src="images/our-team-1.png" alt="" />
								</div>
								<div class="desc-sec">
									<a href="#" class="title">Joshua S. Webster</a>
									<div class="rating">
										<div class="star-no">Marketing Consultant</div>
									</div>
								</div>
							</div>						
						</div>
						<div class="col-12 col-sm-12 col-md-4 col-lg-4">
							<div class="card-sec">
								<div class="img-sec">
									<img src="images/our-team-2.png" alt="" />
								</div>
								<div class="desc-sec">
									<a href="#" class="title">Herman L. Livengood</a>
									<div class="rating">
										<div class="star-no">Tech Consultant</div>
									</div>
								</div>
							</div>						
						</div>
						<div class="d-flex align-items-center justify-content-center mt-4"><a href="#" class="btn quick-btn">View All</a></div>
					</div>
				</div>
			</div>



          </div>
          </div>
        </div>
    </>
  );
};

export default AboutUs;
