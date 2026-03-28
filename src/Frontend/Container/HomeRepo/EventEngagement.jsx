import React, { useEffect } from "react";

const EventEngagement = () => {

	 useEffect(() => {
    if (window.$) {
      const owl = window.$("#events-engagements-slider");

      owl.owlCarousel({
        items: 2,
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          992: { items: 1 },
          1199: { items: 2 }
        }
      });

      // Prev / Next
      window.$(".owl-prev").click(function () {
        owl.trigger("prev.owl.carousel");
      });

      window.$(".owl-next").click(function () {
        owl.trigger("next.owl.carousel");
      });
    }
  }, []);

  return (
    <>
     
<div className="events-engagements-sec">
			<div className="container">
				<div className="row gy-3">
					<div className="col-12 col-sm-12 col-md-4 col-lg-4 z-index mt-5">
						<div className="heading-sec mt-5">
							<div>
								<h2 className="all_heading text-white">Events &<br/>Engagements</h2>
								<span className="underline-bg"></span>
							</div>
							<p>Creating Spaces to Connect, Learn, and Grow</p>
							<div className="btn-sec mt-3">
								<a href="#" className="btn quick-btn">View All</a>
								<div className="owl-nav">
									<button type="button" className="owl-prev"><span className="material-symbols-outlined">arrow_left_alt</span></button>
								
									<button type="button" className="owl-next"><span className="material-symbols-outlined">arrow_right_alt</span></button>
								</div>
							</div>							
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-8 col-lg-8 z-index">
						<div id="events-engagements-slider" className="owl-carousel owl-theme">
							<div className="slider-first-row">
								<div className="card-sec">
									<div className="img-sec">
										<img src="images/events-engagements-1.png" alt=""/>
									</div>
									<div className="desc-sec">
										<a href="#">Workshops & Bootcamps <span className="material-symbols-outlined">trending_flat</span></a>
									</div>
								</div>
								<div className="card-sec">
									<div className="img-sec">
										<img src="images/events-engagements-2.png" alt=""/>
									</div>
									<div className="desc-sec">
										<a href="#">School & College Events <span className="material-symbols-outlined">trending_flat</span></a>
									</div>
								</div>
							</div>
							<div className="slider-first-row">
								<div className="card-sec">
									<div className="img-sec">
										<img src="images/events-engagements-3.png" alt=""/>
									</div>
									<div className="desc-sec">
										<a href="#">Competitions & Hackathons <span className="material-symbols-outlined">trending_flat</span></a>
									</div>
								</div>
								<div className="card-sec">
									<div className="img-sec">
										<img src="images/events-engagements-4.png" alt=""/>
									</div>
									<div className="desc-sec">
										<a href="#">Government & CSR Programs <span className="material-symbols-outlined">trending_flat</span></a>
									</div>
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

export default EventEngagement
