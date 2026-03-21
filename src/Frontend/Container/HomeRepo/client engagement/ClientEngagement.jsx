import React from 'react'

const ClientEngagement = () => {
  return (
    <>
       <div class="clients-impact-sec">
			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-6 col-lg-6 pe-0">
						<div class="card-sec">
							<div class="img-sec">
								<img src="images/clients-impact-left.png" alt=""/>
								<a href="#" class="video-play"><span class="material-symbols-outlined">play_arrow</span></a>
							</div>
						</div>
					</div>
					<div class="col-12 col-sm-12 col-md-6 col-lg-6 ps-0">
						<div class="testimonials">						
							<div class="heading-sec">
								<div>
									<h2 class="all_heading text-white">Clients & Impact</h2>
									<span class="underline-bg"></span>
								</div>														
							</div>
							<div id="clients-impact-slider" class="owl-carousel owl-theme testimonials-box">
								<div class="testimonials-slider">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  </p>
									<hr/>
									<div class="user-sec">
										<div class="img-sec">
											<img src="images/clients-impact-user.png" alt=""/>
										</div>
										<div class="desc-sec">
											<p class="name">Howard Clayton</p>
											<div class="star">
												<span class="material-symbols-outlined">star</span>
												<span class="material-symbols-outlined">star</span>
												<span class="material-symbols-outlined">star</span>
												<span class="material-symbols-outlined">star</span>
												<span class="material-symbols-outlined">star</span>
											</div>
										</div>
									</div>
								</div>
								<div class="testimonials-slider">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  </p>
									<hr/>
									<div class="user-sec">
										<div class="img-sec">
											<img src="images/clients-impact-user.png" alt=""/>
										</div>
										<div class="desc-sec">
											<p class="name">Howard Clayton</p>
											<div class="star">
												<span class="material-symbols-outlined">star</span>
												<span class="material-symbols-outlined">star</span>
												<span class="material-symbols-outlined">star</span>
												<span class="material-symbols-outlined">star</span>
												<span class="material-symbols-outlined">star</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="btn-sec mt-5">
								<a href="#" class="btn quick-btn">View All</a>
								<div class="owl-nav">
									<button type="button" class="owl-prev2"><span class="material-symbols-outlined">arrow_left_alt</span></button>
							
									<button type="button" class="owl-next2"><span class="material-symbols-outlined">arrow_right_alt</span></button>
								</div>
							</div>
						</div>
					</div>					
				</div>
			</div>
		</div>
    </>
  )
}

export default ClientEngagement
