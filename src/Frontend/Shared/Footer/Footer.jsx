import React from "react";
import FooterBottom from "./FooterBottom.jsx"; 
import FooterNav from "./FooterNav.jsx";       

const Footer = () => {
  return (
   <>
   <footer>
			<div class="footer-sec">
				<div class="container">
					<div class="row gy-3 footer-top">
						<div class="col-sm-12 col-md-3 col-lg-3 form-sec">
							<div class="heading-sec">
								<div>
									<h2 class="all_heading">Contact Us</h2>
									<span class="underline-bg"></span>
								</div>
							</div>
							<form>
								<div class="form-group">
									<label>Full Name</label>
									<input type="text" class="form-control"  placeholder="Info" />
								</div>
								<div class="form-group">
									<label>Email</label>
									<input type="email" class="form-control" placeholder="Please Enter Email" />
								</div>
								<div class="form-group">
									<label>Your Message</label>
									<textarea class="form-control" placeholder="Please Enter Your Message"></textarea>
								</div>
								<button type="submit" class="btn quick-btn w-100">Submit</button>
							</form>
						</div>
						<div class="col-sm-12 col-md-3 col-lg-3 address-sec">
							<div class="heading-sec">
								<div>
									<h2 class="all_heading">Corporate Office</h2>
									<span class="underline-bg"></span>
								</div>
							</div>
							<p class="address-text"><span class="material-symbols-outlined">location_on</span> 2nd Floor, Shanti Plaza  Circular Road, Lalpur  Ranchi, Jharkhand – 834001  India</p>
							<p class="address-text"><span class="material-symbols-outlined">call</span> +91 620**** 932</p>
							<p class="address-text"><span class="material-symbols-outlined">mark_email_read</span> info.ranchi@digitalaiedu.org</p>
						</div>
						<div class="col-sm-12 col-md-3 col-lg-3 quick-sec">
							<div class="heading-sec">
								<div>
									<h2 class="all_heading">Quick Links</h2>
									<span class="underline-bg"></span>
								</div>
							</div>
							<ul>
								<li><a href="#">Terms & Conditions</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Copyright Policy</a></li>
								<li><a href="#">Copyright Info</a></li>
								<li><a href="#">Help</a></li>
							</ul>
						</div>					
						<div class="col-sm-12 col-md-3 col-lg-3 chat-sec">
							<div class="chat-box">
								<button type="button" class="chat-btn"><span class="material-symbols-outlined">sms</span> How May I Help You</button>
								<button type="button" class="download-btn"><span class="material-symbols-outlined">system_update_alt</span> Download Brochure</button>
							</div>
						</div>						
					</div>
				</div>
				<div class="container">
					<div class="full-border"></div>
				</div>
				<div class="container">
					<div class="row gy-3 footer-bottom">
						<div class="col-sm-12 col-md-8 col-lg-8">
							<p>Copyright © 2026 Stem Infinite. All Rights Reserved.</p>
						</div>
						<div class="col-sm-12 col-md-4 col-lg-4">
							<ul class="social-media-sec">
								<li>
									<a href="#">
										<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
											<path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z">
											</path>
										</svg>
									</a>
								</li>
								<li>
									<a href="#">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v9h4v-9h3l1-4h-4V6a1 1 0 0 1 1-1h3z"></path>
										</svg>
									</a>
								</li>
								<li>
									<a href="#">
										<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
											<path fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"></path>
										</svg>
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/" target="_blank"> 
										<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
											<path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5  1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.21 8.98h4.56V24H.21zM8.98 8.98h4.37v2.05h.06c.61-1.15 2.1-2.37 4.33-2.37 4.63 0 5.48 3.05 5.48 7.02V24h-4.56v-7.44c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24H8.98z"/>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
   </>
  );
};

export default Footer;