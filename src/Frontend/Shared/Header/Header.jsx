import React from "react";
import Menus from "./Menus";
import TopHeader from "./TopHeader";
import { NavLink } from "react-router-dom";
// import { createWorker } from 'tesseract.js';
const Header = () => {

// 	(async () => {
//   const worker = await createWorker('eng');
//   const ret = await worker.recognize('images/help.png');
//   console.log(ret.data.text);
//   await worker.terminate();
// })();

  return (
    <>
      <header class="header_section">
			<div class="container">
				<div class="row cust_row_header">
					<div class="col-12 col-md-6 col-lg-3">
						<div class="logo_box_cust top_logo_s" title="Logo">
							<a href="index.html" title="Government of India">
								<img src="images/logo.svg" alt="Logo" />
								<span class="logo_cust_text">
									<span class="ministry_cust_text">aiven</span>
								</span>
							</a>
						</div>
					</div>
					<div class="col-12 col-md-6 col-lg-9 d-md-block">
						<div class="flex_item_box-inner_login_btn">
							
							<div class="main_menu">
								<nav class="navbar navbar-expand-lg nav_bg_cusotom fixMenuLargeScreen">
									<div class="w-auto">
										<div class="collapse navbar-collapse w-100" id="offcanvasRight2">
											<button type="button" class="btn-close d-none" data-bs-dismiss="offcanvas"
												aria-label="Close"></button>
											<ul class="w-100 navbar-nav me-auto mb-2 mb-lg-0">
												<li class="nav-item">
													{/* <a class="nav-link  home_menu_items active" aria-current="page"
														href="index.html" role="button"></a> */}
														<NavLink className={'nav-link  home_menu_items active'} to={'/'} >Home</NavLink>	
												</li>
												<li class="nav-item">
													{/* <a class="nav-link  home_menu_items" aria-current="page"
														href="aboutus" role="button"></a> */}
													<NavLink className={'nav-link  home_menu_items'} to={'aboutus'} >About Us</NavLink>	
												</li>
												<li class="nav-item">
													<a class="nav-link  home_menu_items" aria-current="page"
														href="#" role="button">Our Services</a>
												</li>
												<li class="nav-item">
													<a class="nav-link  home_menu_items" aria-current="page"
														href="#" role="button">Courses & Programs</a>
												</li>
												<li class="nav-item">
													<a class="nav-link  home_menu_items" aria-current="page"
														href="#" role="button">Events</a>
												</li>
												<li class="nav-item">
													<a class="nav-link  home_menu_items" aria-current="page"
														href="#" role="button">Contact Us</a>
												</li>
												
											</ul>
										</div>
									</div>
								</nav>
							</div>
							
							<a href="#" class="btn quick-btn">Get Started</a>
							<div class="flex_item_box d-block d-lg-none custom_menu_mobile_tab">
								<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
									data-bs-target="#offcanvasRight2" aria-expanded="true">
									<span class="bhashini-skip-translation menu-icon material-symbols-outlined pointer"
										title="More Menu" role="navigation" tabindex="0">menu</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
    </>
  );
};

export default Header;
