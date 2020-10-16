import React from 'react'

const Blog1 =()=>{
    
    return(
        <>
        <div id="colorlib-page">
		<a href="#"className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
		<aside id="colorlib-aside" role="complementary"className="border js-fullheight">
			<h1 id="colorlib-logo"><a href="/index"><img src='images/logo-1.png' style={{width:"200px"}} /></a></h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul>
					<li><a href="/index">Главная</a></li>
					<li ><a href="/about">О нас</a></li>
					<li><a href="/work">Наши работы</a></li>
					<li className="colorlib-active"><a href="/service">FAQ</a></li>
					
					<li><a href="/contact">Контакты</a></li>
				</ul>
			</nav>

			<div className="colorlib-footer">
				<p><small>&copy; 
                    Copyright &copy;All rights reserved </small> </p>
				<ul>
					<li><a href="#"><i className="icon-facebook2"></i></a></li>
					<li><a href="#"><i className="icon-twitter2"></i></a></li>
					<li><a href="#"><i className="icon-instagram"></i></a></li>
					<li><a href="#"><i className="icon-linkedin2"></i></a></li>
				</ul>
			</div>

		</aside>

		<div id="colorlib-main">
			<div className="colorlib-services">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Services</span>
							<h2 className="colorlib-heading">Here are some of our expertise</h2>
						</div>
					</div>
					<div className="row row-bottom-padded-md">
						<div className="col-md-6">
							<div className="row">
								<div className="col-md-12">
									<div className="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
										<div className="colorlib-icon">
											<i className="flaticon-worker"></i>
										</div>
										<div className="colorlib-text">
											<h3>General Conctructing</h3>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
										</div>
									</div>

									<div className="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
										<div className="colorlib-icon">
											<i className="flaticon-sketch"></i>
										</div>
										<div className="colorlib-text">
											<h3>Pre-Contruction Design</h3>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="row">
								<div className="col-md-12">
									<div className="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
										<div className="colorlib-icon">
											<i className="flaticon-engineering"></i>
										</div>
										<div className="colorlib-text">
											<h3>Building &amp; Modeling</h3>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
										</div>
									</div>

									<div className="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
										<div className="colorlib-icon">
											<i className="flaticon-crane"></i>
										</div>
										<div className="colorlib-text">
											<h3>Construction Management</h3>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<a href="/service"className="services-wrap animate-box" data-animate-effect="fadeInRight">
								<div className="services-img" style={{backgroundImage:" url(images/services-1.jpg)"}}></div>
								<div className="desc">
									<h3>Design &amp; Build</h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="/service"className="services-wrap animate-box" data-animate-effect="fadeInRight">
								<div className="services-img" style={{backgroundImage:" url(images/services-2.jpg)"}}></div>
								<div className="desc">
									<h3>House Remodeling</h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="/services" className="services-wrap animate-box" data-animate-effect="fadeInRight">
								<div className="services-img" style={{backgroundImage:" url(images/services-3.jpg)"}}></div>
								<div className="desc">
									<h3>Construction Management</h3>
								</div>
							</a>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<a href="/service"className="services-wrap animate-box" data-animate-effect="fadeInRight">
								<div className="services-img" style={{backgroundImage: "url(images/services-4.jpg)"}}></div>
								<div className="desc">
									<h3>Painting &amp; Tiling</h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="/service"className="services-wrap animate-box" data-animate-effect="fadeInRight">
								<div className="services-img" styles={{backgroundImage: "url(images/services-5.jpg)"}}></div>
								<div className="desc">
									<h3>Kitchen Remodeling</h3>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div id="get-in-touch" className="colorlib-bg-color">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<h2>Get in Touch!</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<p className="colorlib-lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<p><a href="#" className="btn btn-primary btn-learn">Contact me!</a></p>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>

        </>
    )
}

export default Blog1;