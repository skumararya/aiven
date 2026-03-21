import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import CalendarEvents from "./CalendarEvents.jsx";
import Spinner from "../../Spinner.jsx";
// import {
//   useGetAboutUsQuery,
//   useGetEventsQuery,
// } from "../../../../redux/api/apiService";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

const WelcomeSection = () => {
  // Fetch both sets of data needed for this section
  // const { data: aboutUsResponse, isLoading: isLoadingAboutUs } =
  //   useGetAboutUsQuery();
  // const { data: eventsResponse, isLoading: isLoadingEvents } =
  //   useGetEventsQuery();
  // const aboutUs = aboutUsResponse?.data;
  // const events = eventsResponse?.data || [];




 

  return (
    <>
     <div class="counter-sec">
			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 col-lg-12">
						<div class="counter-slider">
							<div class="items_custom">
								<a href="#">
									<p class="counter">8200</p>
									<p class="title">Success Stories</p>
								</a>
							</div>
							<div class="items_custom">
								<a href="#">
									<p class="counter">12200</p>
									<p class="title">Expert Mentors</p>
								</a>
							</div>
							<div class="items_custom">
								<a href="#">
									<p class="counter">50000</p>
									<p class="title">Hours  Course</p>
								</a>
							</div>
							<div class="items_custom border-0">
								<a href="#">
									<p class="counter">70000</p>
									<p class="title">Active Student</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

    <div class="about-sec" id="skip_content">
			<div class="container">
				<div class="row gy-3">
					<div class="col-12 col-sm-12 col-md-12 col-lg-6">
						<div class="video-sec">
							<div class="card-sec">
								<div class="img-sec">
									<img src="images/about-video-1.png" alt="" />
								</div>
								<a href="#" class="video-play"><span class="material-symbols-outlined">play_arrow</span></a>
							</div>
							<div class="card-sec">
								<div class="img-sec">
									<img src="images/about-video-2.png" alt="" />
								</div>
								<a href="#" class="video-play"><span class="material-symbols-outlined">play_arrow</span></a>
							</div>
						</div>
					</div>
					<div class="col-12 col-sm-12 col-md-12 col-lg-6">
						<div class="content">
							<div class="heading-sec">
								<div>
									<h2 class="all_heading">Why STEM Infinite</h2>
									<span class="underline-bg"></span>
								</div>								
							</div>
							<p>EduAI is a dynamic education company empowering BCA students and junior  developers with AI-driven online courses in programming, UI/UX design,  and digital skills.</p>
							<p class="sub-title mt-4">Company Mission</p>
							<p>STEM Infinite equips BCA students with AI-enhanced skills in UI/UX, low-code  development, and programming for seamless career transitions.  Through hands-on projects and affordable courses, we turn classroom learning into real-world tech success.</p>
							<div class="d-flex align-items-center"><a href="#" class="btn quick-btn mt-3">Join Us Free</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  );
};

export default WelcomeSection;
