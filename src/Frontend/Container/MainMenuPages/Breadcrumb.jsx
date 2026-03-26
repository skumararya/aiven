import React from 'react'

const Breadcrumb = ({title,page}) => {
  return (
    <>
      	<section class="inner_bannr_bg">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-6">
						<div class="heading-sec">
							<div>
								<h2 class="all_heading text-white">{title}</h2>
							</div>														
						</div>
					</div>
					<div class="col-12 col-md-6">
						<div class="bread_crumbs">
							<div class="wrapper">
								<nav aria-label="Breadcrumb">
									<ol class="breadcrumb" aria-label="">
										<li class="breadcrumb-item"><a href="#">{page}</a></li>
										<li class="breadcrumb-item active" aria-current="page">{title}</li>
									</ol>
								</nav>				
							</div>
						</div>							
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Breadcrumb
