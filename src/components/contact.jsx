import React from 'react'

const Contact =()=>{
    
    return(
        <>
        <div id="colorlib-page">
		<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"></a>
		<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
			<h1 id="colorlib-logo"><a href="/index"><img src='images/logo-1.png' style={{width:"200px"}} /></a></h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul>
					<li><a href="/index">Главная</a></li>
					<li><a href="/about">О нас</a></li>
					<li><a href="/work">Profiles</a></li>
					<li><a href="/service">FAQ</a></li>
					

					<li className="colorlib-active"><a href="/contact">Контакты</a></li>
				</ul>
			</nav>

			<div className="colorlib-footer">
				<p><small>&copy; Copyright &copy;All rights reserved </small></p>
				<ul>
					<li><a href="#"><i className="icon-facebook2"></i></a></li>
					<li><a href="#"><i className="icon-twitter2"></i></a></li>
					<li><a href="#"><i className="icon-instagram"></i></a></li>
					<li><a href="#"><i className="icon-linkedin2"></i></a></li>
				</ul>
			</div>

		</aside>

		<div id="colorlib-main">

			<div className="colorlib-contact">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Read</span>
							<h2 className="colorlib-heading">Свяжитесь с нами</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5">
							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-globe-outline"></i>
								</div>
								<div className="colorlib-text">
									<p><a href="#">chistoplus@gmail.com</a></p>
								</div>
							</div>

						
							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-map"></i>
								</div>
								<div className="colorlib-text">
									<p>Kyiv</p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-phone"></i>
								</div>
								<div className="colorlib-text">
									<p><a href="tel://">+12402679883</a></p>
								</div>
							</div>
						</div>
						<div className="col-md-7 col-md-push-1">
							<div className="row">
								<div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInLeft">
									<form action="">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Name"/>
										</div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Email"/>
										</div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Subject"/>
										</div>
										<div className="form-group">
											<textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
										</div>
										<div className="form-group">
											<input type="submit" className="btn btn-primary btn-send-message" value="Отправить"/>
										</div>
									</form>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>

			

			<div id="get-in-touch" className="colorlib-bg-color">
				<div className="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<h2>Мы работаем круглосуточно !</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<p><a href="#" className="btn btn-primary btn-learn">Связаться</a></p>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}

export default Contact;