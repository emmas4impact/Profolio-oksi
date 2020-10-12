import React from 'react'

const Home = (props) =>{
    
    return(
        <>
      <div id="colorlib-page">
		<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
		<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
			<h1 id="colorlib-logo">ЧистоПлюс</h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul>
					<li className="colorlib-active"><a href="index.html">Главная</a></li>
			
					<li><a href="about.html">О нас</a></li>
					<li><a href="work.html">Наши работы</a></li>
					<li><a href="services.html">FAQ</a></li>
					
					<li><a href="contact.html">Контакты</a></li>
				</ul>
			</nav>

			<div className="colorlib-footer">
				
				<p><small>Контакты:
			<span>theuniview@gmail.com</span>
			<a href="tel:+12402679883">+12402679883</a></small></p>
				<ul>
					<li><a href="#"><i className="icon-facebook2"></i></a></li>
					<li><a href="#"><i className="icon-twitter2"></i></a></li>
					<li><a href="#"><i className="icon-instagram"></i></a></li>
					<li><a href="#"><i className="icon-linkedin2"></i></a></li>
				</ul>
		
			</div>

		</aside>

		<div id="colorlib-main">
			<aside id="colorlib-hero" className="js-fullheight">
				<div className="flexslider js-fullheight">
					<ul className="slides">
				   	<li style="background-image: url(images/slider-1.jpg);">
				   		<div className="overlay"></div>
				   		<div className="container-fluid">
				   			<div className="row">
					   			<div className="col-md-6 col-md-offset-3 col-md-push-3 col-sm-12 col-xs-12 js-fullheight slider-text">
					   				<div className="slider-text-inner">
					   					<div className="desc">
											<div className="center-pos">
										       <img style="width: 50px; margin-bottom: 10px; background: #fff; border-radius: 50%; padding: 10px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM5NC42NDggMzk0LjY0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzk0LjY0OCAzOTQuNjQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kOyIgZD0iTTM5MS45MDksMTQ1LjAzNg0KCWMtMC45MzgtMi43MzEtNC4yNjMtNC44NTUtNy4wMzktNC44NTVjLTEyLjAyMSwwLTI0LjA0LDAtMzYuMDYxLDBjLTIuNzc1LDAtNi4xMDEsMi4xMjQtNy4wNCw0Ljg1NQ0KCWMtMC45MTgsMi42NzMtMS42MDQsNS4wNTgtMi4wNiw3LjMwMWwtMjQuMDg4LTY2LjY0MWMtMy45NzMtMTAuOTg5LTE0LjQ5NS0xOC4zNzItMjYuMTc5LTE4LjM3MkgxMDUuMjA5DQoJYy0xMS42ODUsMC0yMi4yMDUsNy4zODMtMjYuMTgsMTguMzc0bC0yNC4wODksNjYuNjQ3Yy0wLjQ1Ny0yLjI0NS0xLjE0My00LjYzMy0yLjA2Mi03LjMwOWMtMC45MzgtMi43MzEtNC4yNjQtNC44NTUtNy4wMzktNC44NTUNCgljLTEyLjAyLDAtMjQuMDQsMC0zNi4wNjEsMGMtMi43NzUsMC02LjEwMSwyLjEyNC03LjAzOSw0Ljg1NWMtMy42NTIsMTAuNjMzLTMuNjUsMTYuNzIsMC4wMDEsMjcuMzU0DQoJYzAuOTM4LDIuNzMxLDQuMjY0LDQuODU1LDcuMDM5LDQuODU1YzEyLjAyMSwwLDI0LjA0MSwwLDM2LjA2MSwwYzAuMDM0LDAsMC4wNy0wLjAwOSwwLjEwNS0wLjAxbC0wLjU0NCwxLjUwNw0KCWMtNy4zNTMsMi40NDMtMTIuNjYyLDkuMzY1LTEyLjY2MiwxNy41Mzl2NTUuODA1djQuNTk5djYxLjc1MmMwLDQuOTA5LDMuOTc4LDguODg3LDguODg3LDguODg3aDQ0LjcyNw0KCWM0LjkwOCwwLDguODg3LTMuOTc4LDguODg3LTguODg3di00My4yNjJIMjk5LjQxdjQzLjI2MmMwLDQuOTA5LDMuOTc5LDguODg3LDguODg3LDguODg3aDQ0LjcyN2M0LjkwOSwwLDguODg3LTMuOTc4LDguODg3LTguODg3DQoJdi02MS43NTJ2LTQuNTk5di01NS44MDVjMC04LjE3Mi01LjMwNy0xNS4wOTMtMTIuNjU3LTE3LjUzOGwtMC41NDUtMS41MDhjMC4wMzMsMC4wMDEsMC4wNjgsMC4wMDksMC4xMDEsMC4wMDkNCgljMTIuMDIxLDAsMjQuMDQsMCwzNi4wNjEsMGMyLjc3NiwwLDYuMTAxLTIuMTI0LDcuMDM5LTQuODU1QzM5NS41NjEsMTYxLjc1NiwzOTUuNTU5LDE1NS42NjksMzkxLjkwOSwxNDUuMDM2eiBNMTA4LjYxMiwxMDAuMDI4DQoJaDE3Ny40MDJsMjguMTA4LDc3Ljc2Mkg4MC41MDVMMTA4LjYxMiwxMDAuMDI4eiBNMTEzLjU2LDIzMi41NzFINzYuMTQyYy04LjAyOCwwLTE0LjUzNS02LjUwNy0xNC41MzUtMTQuNTM1DQoJYzAtOC4wMjcsNi41MDYtMTQuNTM1LDE0LjUzNS0xNC41MzVoMzcuNDE4YzguMDI3LDAsMTQuNTM1LDYuNTA3LDE0LjUzNSwxNC41MzVDMTI4LjA5NiwyMjYuMDY0LDEyMS41ODcsMjMyLjU3MSwxMTMuNTYsMjMyLjU3MXoNCgkgTTMxOC41MDUsMjMyLjU3MWgtMzcuNDE4Yy04LjAyNywwLTE0LjUzNS02LjUwNy0xNC41MzUtMTQuNTM1YzAtOC4wMjcsNi41MDgtMTQuNTM1LDE0LjUzNS0xNC41MzVoMzcuNDE4DQoJYzguMDI4LDAsMTQuNTM1LDYuNTA3LDE0LjUzNSwxNC41MzVDMzMzLjA0LDIyNi4wNjQsMzI2LjUzMywyMzIuNTcxLDMxOC41MDUsMjMyLjU3MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" /> 
											   <h2 style="letter-spacing: 5px;">Увезём и привезём бесплатно!</h2>
											</div>  
												<p><a className="btn btn-primary btn-learn">Заказать чистку<i className="icon-arrow-right3"></i></a></p>
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
				   	</li>
				   	<li style="background-image: url(images/slider-2.png);">
				   		<div className="overlay"></div>
				   		<div className="container-fluid">
				   			<div className="row">
					   			<div className="col-md-6 col-md-offset-3 col-md-push-3 col-sm-12 col-xs-12 js-fullheight slider-text">
					   				<div className="slider-text-inner">
					   					<div className="desc">
													<img style="width: 100px; margin-bottom: 20px;" src="images/pay.png">
											   <h2 style="letter-spacing: 5px;">Наличный и
												безналичный расчет</h2>

												<p><a className="btn btn-primary btn-learn">Заказать чистку<i className="icon-arrow-right3"></i></a></p>
                                                </img>
											   </div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
                        
                           
				   	</li>
				   	<li style="background-image: url(images/slider-3.jpg);">
				   		<div className="overlay"></div>
				   		<div className="container-fluid">
				   			<div className="row">
					   			<div className="col-md-6 col-md-offset-3 col-md-push-3 col-sm-12 col-xs-12 js-fullheight slider-text">
					   				<div className="slider-text-inner">
					   					<div className="desc">
											<h2 style="letter-spacing: 5px;">Ежедневно с 8:00 до 22:00 <br></br>
		
												вс: с 18:00 до 22:00</h2>
												<p><a className="btn btn-primary btn-learn">Заказать чистку<i className="icon-arrow-right3"></i></a></p>
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
				   	</li>
				  	</ul>
			  	</div>
			</aside>

			<div className="colorlib-about">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6">
							<div className="about-img animate-box" data-animate-effect="fadeInLeft" style="background-image: url(images/img_bg_2.jpeg);">
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="about-desc">
								<span className="heading-meta">Welcome</span>
								<h2 className="colorlib-heading">Почему мы?</h2>
								<p>Компания ЧистоПлюс с 2020 года занимается профессиональной чисткой ковров в специальном цехе.</p>
							</div>
							<div className="row padding">
								<div className="col-md-4 no-gutters animate-box" data-animate-effect="fadeInLeft">
									<a href="#" className="steps active">
										<p className="icon"><span><i className="icon-check"></i></span></p>
										<h3>1 год опыта</h3>
									</a>
								</div>
								<div className="col-md-4 no-gutters animate-box" data-animate-effect="fadeInLeft">
									<a href="#" className="steps">
										<p className="icon"><span><i className="icon-check"></i></span></p>
										<h3>1065 чистых ковров</h3>
									</a>
								</div>
								<div className="col-md-4 no-gutters animate-box" data-animate-effect="fadeInLeft">
									<a href="#" className="steps">
										<p className="icon"><span><i className="icon-check"></i></span></p>
										<h3>230 довольных клиентов</h3>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="colorlib-services">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">What I do?</span>
							<h2 className="colorlib-heading">Here are some of my expertise</h2>
						</div>
					</div>
					<div className="row">
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
						<div className="col-md-6">
							<div className="row">
								<div className="col-md-6">
									<a href="services.html" className="services-wrap animate-box" data-animate-effect="fadeInRight">
										<div className="services-img" style="background-image: url(images/services-1.jpg)"></div>
										<div className="desc">
											<h3>Design &amp; Build</h3>
										</div>
									</a>
									<a href="services.html" className="services-wrap animate-box" data-animate-effect="fadeInRight">
										<div className="services-img" style="background-image: url(images/services-2.jpg)"></div>
										<div className="desc">
											<h3>House Remodeling</h3>
										</div>
									</a>
									<a href="services.html" className="services-wrap animate-box" data-animate-effect="fadeInRight">
										<div className="services-img" style="background-image: url(images/services-3.jpg)"></div>
										<div className="desc">
											<h3>Construction Management</h3>
										</div>
									</a>
								</div>
								<div className="col-md-6 move-bottom">
									<a href="services.html" className="services-wrap animate-box" data-animate-effect="fadeInRight">
										<div className="services-img" style="background-image: url(images/services-4.jpg)"></div>
										<div className="desc">
											<h3>Painting &amp; Tiling</h3>
										</div>
									</a>
									<a href="services.html" className="services-wrap animate-box" data-animate-effect="fadeInRight">
										<div className="services-img" style="background-image: url(images/services-5.jpg)"></div>
										<div className="desc">
											<h3>Kitchen Remodeling</h3>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div id="colorlib-counter" className="colorlib-counters" style="background-image: url(images/cover_bg_1.jpg);" data-stellar-background-ratio="0.5">
				<div className="overlay"></div>
				<div className="colorlib-narrow-content">
					<div className="row">
					</div>
					<div className="row">
						<div className="col-md-3 text-center animate-box">
							<span className="icon white-circle"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01MTEuOTc2LDQxNi4wNjNjLTAuMDA1LTAuMDc1LTAuMDA0LTAuMTQ5LTAuMDExLTAuMjI0Yy0wLjAyNy0wLjI5Ny0wLjA3LTAuNTg4LTAuMTMxLTAuODczDQoJCQljLTAuMDA2LTAuMDI4LTAuMDE1LTAuMDU2LTAuMDIyLTAuMDg0Yy0wLjA1OS0wLjI2Mi0wLjEzMi0wLjUxOC0wLjIxOC0wLjc2OGMtMC4wMjMtMC4wNjctMC4wNDgtMC4xMzItMC4wNzMtMC4xOTgNCgkJCWMtMC4wODQtMC4yMjctMC4xNzktMC40NDgtMC4yODQtMC42NjNjLTAuMDE4LTAuMDM4LTAuMDMtMC4wNzctMC4wNDktMC4xMTVsLTQwLjExMi03OS4xMThWNzMuNzINCgkJCWMwLTguMDA2LTYuNTEzLTE0LjUxOS0xNC41MTktMTQuNTE5SDU1LjQ0MWMtOC4wMDYsMC0xNC41MTksNi41MTMtMTQuNTE5LDE0LjUxOXYyNjAuMjk4TDAuODExLDQxMy4xMzcNCgkJCWMtMC4wMTksMC4wMzgtMC4wMzEsMC4wNzctMC4wNDksMC4xMTVjLTAuMTA1LDAuMjE1LTAuMTk5LDAuNDM2LTAuMjg0LDAuNjYyYy0wLjAyNSwwLjA2Ni0wLjA1LDAuMTMyLTAuMDczLDAuMTk5DQoJCQljLTAuMDg1LDAuMjUxLTAuMTU5LDAuNTA4LTAuMjE4LDAuNzdjLTAuMDA2LDAuMDI3LTAuMDE1LDAuMDU0LTAuMDIxLDAuMDgxYy0wLjA2MSwwLjI4Ni0wLjEwNCwwLjU3Ny0wLjEzMSwwLjg3NA0KCQkJYy0wLjAwNywwLjA3NC0wLjAwNywwLjE0OS0wLjAxMSwwLjIyM0MwLjAxNCw0MTYuMjE3LDAsNDE2LjM3MSwwLDQxNi41Mjl2MTkuMDI2YzAsOS41MDksNy43MzUsMTcuMjQ0LDE3LjI0NCwxNy4yNDRoNDc3LjUxMg0KCQkJYzkuNTA5LDAsMTcuMjQ0LTcuNzM1LDE3LjI0NC0xNy4yNDR2LTE5LjAyNkM1MTIsNDE2LjM3MSw1MTEuOTg2LDQxNi4yMTcsNTExLjk3Niw0MTYuMDYzeiBNNTUuOTIzLDc0LjIwM2g0MDAuMTU0djI1NC4xMDkNCgkJCUg1NS45MjNWNzQuMjAzeiBNNTMuMDI5LDM0My4zMTFINDU4Ljk3bDMzLjMxOCw2NS43MTdoLTE2NC43OGwtOC4yNzEtMjkuOTg5Yy0xLjY4NC02LjEwNS03LjI4Mi0xMC4zNjktMTMuNjE1LTEwLjM2OWgtOTkuMjQ2DQoJCQljLTYuMzMzLDAtMTEuOTMyLDQuMjY0LTEzLjYxNSwxMC4zNjhsLTguMjcxLDI5Ljk5SDE5LjcxMUw1My4wMjksMzQzLjMxMXogTTMxMS45NDgsNDA5LjAyOUgyMDAuMDUybDYuOTkzLTI1LjM1OGg5Ny45MQ0KCQkJTDMxMS45NDgsNDA5LjAyOXogTTQ5Nyw0MzUuNTU0YzAsMS4yMzctMS4wMDcsMi4yNDQtMi4yNDQsMi4yNDRIMTcuMjQ0Yy0xLjIzNywwLTIuMjQ0LTEuMDA3LTIuMjQ0LTIuMjQ0di0xMS41MjZoNDgyVjQzNS41NTR6Ig0KCQkJLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQzMi41NzcsMjEzLjc1NmMtNC4xNDMsMC03LjUsMy4zNTctNy41LDcuNXY3Ni4wNTVIODYuOTIzdi03Ni4wNTVjMC00LjE0My0zLjM1Ny03LjUtNy41LTcuNQ0KCQkJYy00LjE0MywwLTcuNSwzLjM1Ny03LjUsNy41djc5LjI5NGMwLDYuNDg1LDUuMjc1LDExLjc2MSwxMS43NjEsMTEuNzYxaDM0NC42MzNjNi40ODUsMCwxMS43NjEtNS4yNzUsMTEuNzYxLTExLjc2MXYtNzkuMjk0DQoJCQlDNDQwLjA3NywyMTcuMTE1LDQzNi43MiwyMTMuNzU2LDQzMi41NzcsMjEzLjc1NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQyOC4zMTYsOTAuMjAzSDgzLjY4NGMtNi40ODUsMC0xMS43NjEsNS4yNzUtMTEuNzYxLDExLjc2MXY3OS4yOTRjMCw0LjE0MywzLjM1Nyw3LjUsNy41LDcuNWM0LjE0MywwLDcuNS0zLjM1Nyw3LjUtNy41DQoJCQl2LTc2LjA1NWgzMzguMTU0djc2LjA1NWMwLDQuMTQzLDMuMzU3LDcuNSw3LjUsNy41czcuNS0zLjM1Nyw3LjUtNy41di03OS4yOTRDNDQwLjA3Nyw5NS40NzcsNDM0LjgwMiw5MC4yMDMsNDI4LjMxNiw5MC4yMDN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" /></span>
							
							<span className="colorlib-counter-label">Вы отправляете заявку</span>
						</div>
						<div className="col-md-3 text-center animate-box">
							<span className="icon white-circle"><img style="width: 60px;" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTU1IDIwaC0yYy0xLjY1NCAwLTMgMS4zNDYtMyAzdi4xNzFjLTEuMTY0LjQxMy0yIDEuNTI1LTIgMi44Mjl2MS4xNzFjMCAuODAxLjMxMiAxLjU1NS44NzkgMi4xMjJsMS4wNzEgMS4wNzEtMS4wNzggOS4xNjNjLTIuOTI0LTQuNzItNy42NDQtOC4xMzItMTMuMTA0LTkuMzg1bC0uNDQ3LTEuMzQyYzEuNDU5LS40MDMgMi42NTYtMS40MzQgMy4yNTUtMi44aC40MjRjMi4yMDYgMCA0LTEuNzk0IDQtNHYtNWMxLjEwMyAwIDItLjg5NyAyLTJ2LTJjMC0xLjEwMy0uODk3LTItMi0yaC0uMTc0Yy0uOTU2LTUuNzYtNS44ODMtMTAtMTEuODI2LTEwcy0xMC44NyA0LjI0LTExLjgyNiAxMGgtLjE3NGMtMS4xMDMgMC0yIC44OTctMiAydjJjMCAxLjEwMy44OTcgMiAyIDJ2NWMwIDIuMjA2IDEuNzk0IDQgNCA0aC40MjRjLjYgMS4zNjYgMS43OTcgMi4zOTggMy4yNTUgMi44bC0uNDQ4IDEuMzQzYy0yLjI2MS41MTgtNC40MTYgMS40NzYtNi4zMjEgMi43OWwtMS45Ny02LjExN2MtLjAwNi0uMDMzLS4wMDUtLjA2Ni0uMDEyLS4wOTktLjUwMi0yLjEwNy0zLjQ4My0zLjIwOS02LjgwMy0yLjUwNS0yLjA2MS40MzctMy43ODMgMS40NzYtNC42MDcgMi43NzctLjQ3MS43NDQtLjYyNSAxLjUzNi0uNDQ1IDIuMjkyLjEwMy40MzQuMzE2LjgyMy42MTEgMS4xNjRsNi44NTIgMTAuMjYzYy0xLjAwNSAyLjMxLTEuNTM2IDQuNzU1LTEuNTM2IDcuMjkyIDAgNC4yNjQgMi40NDQgNy45NjEgNiA5Ljc4NnYxLjIxNGMwIDIuMjA2IDEuNzk0IDQgNCA0aDMgMyAxNnYtMTMuMDkzYzEuNDU2IDEuOTI5IDMuNzE4IDMuMDkzIDYuMjAxIDMuMDkzIDQuMyAwIDcuNzk5LTMuNDk5IDcuNzk5LTcuNzk4di0yMi4yMDJjMC0xLjY1NC0xLjM0Ni0zLTMtM3ptLTUgNmMwLS41NTEuNDQ4LTEgMS0xaDF2LTJjMC0uNTUxLjQ0OC0xIDEtMWgyYy41NTIgMCAxIC40NDkgMSAxdjZoLTQuNTg2bC0xLjEyMS0xLjEyMWMtLjE4OS0uMTg5LS4yOTMtLjQ0MS0uMjkzLS43MDh6bS0xNiAzM3YyaC0yLjU1NmMuMzQ0LS41OTEuNTU2LTEuMjY4LjU1Ni0yem0xLTJoLTZ2LTQuNTg2bDEuMTIxLTEuMTIxYy4xODctLjE4Ni40NDQtLjI5My43MDctLjI5M2gxLjE3MmMuNTUyIDAgMSAuNDQ5IDEgMXYxaDJjLjU1MiAwIDEgLjQ0OSAxIDF2MmMwIC41NTEtLjQ0OCAxLTEgMXptLTEuNzIxLTI4IC42IDEuOC0yLjg3OSAzLjU5OS0yLjg4LTMuNi42LTEuOGg0LjU1OXptLTUuMTQ5IDUuMDEzYy0uMDQ0LS4wMDEtLjA4Ni0uMDEzLS4xMy0uMDEzaC02Yy0uMDEgMC0uMDE5LjAwMy0uMDI5LjAwMyAxLjQ0Mi0uODU4IDMuMDEtMS40OTkgNC42NDctMS44OHptLTYuMTMgMS45ODdoMi41MzdjLS4zNDIuNTg5LS41MzcgMS4yNzItLjUzNyAydjFoMnYtMWMwLTEuMTAzLjg5Ny0yIDItMnMyIC44OTcgMiAyLS44OTcgMi0yIDJoLTZjLTEuMTAzIDAtMi0uODk3LTItMnMuODk3LTIgMi0yem0tMiA1LjQ0NGMuNTkxLjM0NCAxLjI2OC41NTYgMiAuNTU2aDZjLjczMiAwIDEuNDA5LS4yMTIgMi0uNTU2djcuNjg2Yy0uNDgyLjEzOS0uOTI5LjM4NC0xLjI5My43NDlsLTEuMTIxIDEuMTIxaC0zLjU4NmMtMS40IDAtMi43NjktLjMzNC00LS45NDV6bTE0IDguMzMxYy0uNTMyLS40NzgtMS4yMy0uNzc1LTItLjc3NXYtMTFjMC0uNDcyLS4wOTctLjkxOS0uMjQ4LTEuMzRsMi4yNDgtMi44MDl6bTUtMjUuNzc1di00YzEuMTAzIDAgMiAuODk3IDIgMnMtLjg5NyAyLTIgMnptMi01LjQ0NGMtLjU5MS0uMzQ0LTEuMjY4LS41NTYtMi0uNTU2di0xaDJ6bS0uMjA0LTcuNTU2aC02Ljc5NnYtNy41NDJjMy40MzUgMS4wNjQgNi4wNyAzLjkxNCA2Ljc5NiA3LjU0MnptLTguNzk2LTcuOTV2Ny45NWgtMnYtNy45NWMuMzI5LS4wMzIuNjYyLS4wNSAxLS4wNXMuNjcxLjAxOCAxIC4wNXptLTQgLjQwOHY3LjU0MmgtNi43OTZjLjcyNi0zLjYyOCAzLjM2MS02LjQ3OCA2Ljc5Ni03LjU0MnptLTkuMDAxIDkuNTQyaDI0LjAwMXYyaC0yNHptNC4wMDEgNHYxYy0uNzMyIDAtMS40MDkuMjEyLTIgLjU1NnYtMS41NTZ6bS0yIDVjMC0xLjEwMy44OTctMiAyLTJ2NGMtMS4xMDMgMC0yLS44OTctMi0yem00IDJ2LTdoMTJ2N2MwIDEuNjU0LTEuMzQ2IDMtMyAzaC02Yy0xLjY1NCAwLTMtMS4zNDYtMy0zem0tMTYuNzkzIDQuMDZjLjUyNi0uODMgMS44MzQtMS41NzIgMy4zMzQtMS44OTEuNTcxLS4xMjEgMS4xMDUtLjE3NCAxLjU5MS0uMTc0IDEuNDE1IDAgMi40MjMuNDQ4IDIuNzUxLjk2bC4wOTguMzA0Yy4wMjQuMjA1LS4wMjkuNDMxLS4xODguNjgyLS41MjYuODMtMS44MzQgMS41NzItMy4zMzQgMS44OTEtMi4wNjQuNDM3LTMuNjIzLS4wMTgtNC4yMDItLjYyOWwtLjE5Ni0uMjk0Yy0uMDEyLS4wMy0uMDM2LS4wNTgtLjA0NC0uMDg4LS4wNTItLjIyNC4wMTItLjQ3OS4xOS0uNzYxem0yLjY5OCAzLjkzOWMuNjMgMCAxLjI5My0uMDY4IDEuOTctLjIxMiAxLjYwNy0uMzQxIDMuMDAyLTEuMDUgMy45MzItMS45NjJsMS45MDMgNS45MDljLS40NDYuNjQ1LS43MSAxLjQyNC0uNzEgMi4yNjZ2NS43OTRsLTcuOTA0LTExLjgzOGMuMjYzLjAyNi41MzIuMDQzLjgwOS4wNDN6bTMuMDk1IDE2LjAwMWMwLTEuODE5LjI5NS0zLjU4OS44NzYtNS4yODJsMy4xMjQgNC42Nzl2MS4yOTFjLS40MzYtLjM5LS44NDQtLjgxNC0xLjItMS4yODhsLTEuNiAxLjJjMi4wNjYgMi43NTUgNS4zNTYgNC40IDguOCA0LjRoM3Y0aC00Yy00Ljk2MyAwLTktNC4wMzgtOS05em0xMSAxM2gtM2MtMS4xMDMgMC0yLS44OTctMi0ydi0uNDI2Yy45NTUuMjcxIDEuOTU5LjQyNiAzIC40MjZoN2MwIDEuMTAzLS44OTcgMi0yIDJ6bTI1LjIwMS0xMGMtMi4yMSAwLTQuMTk3LTEuMjI4LTUuMTg2LTMuMjA1bC0xLjAxNS0yLjAzMXYtMy43NjRoLTJ2MTloLTZ2LTIuMTg0YzEuMTYxLS40MTQgMi0xLjUxNCAyLTIuODE2di0yYzAtMS4zMDItLjgzOS0yLjQwMi0yLTIuODE2di0xOC45MmM1LjQyMyAxLjQ2IDkuOTcgNS4yODggMTIuMzEgMTAuNDM1bC4xNTEuMzMxLS40NTMgMy44NTQgMS45ODYuMjMzIDEuODk1LTE2LjExN2g0LjExMXYxNC4yMDJjMCAzLjE5Ny0yLjYwMiA1Ljc5OC01Ljc5OSA1Ljc5OHoiLz48L3N2Zz4=" /></span>
							
							<span className="colorlib-counter-label">Мы забираем Ваш ковёр</span>
						</div>
						<div className="col-md-3 text-center animate-box">
							<span className="icon white-circle"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk5IDUxMS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTE5LjQ3LDgzLjQyMmMtMTYuMDI4LDAtMjkuMDY4LDEzLjI0Ni0yOS4wNjgsMjkuNTI4czEzLjA0LDI5LjUyOCwyOS4wNjgsMjkuNTI4YzE2LjAyNywwLDI5LjA2Ni0xMy4yNDYsMjkuMDY2LTI5LjUyOA0KCQkJUzEzNS40OTcsODMuNDIyLDExOS40Nyw4My40MjJ6IE0xMTkuNDcsMTI3LjQ3N2MtNy43NTcsMC0xNC4wNjgtNi41MTgtMTQuMDY4LTE0LjUyOGMwLTguMDEsNi4zMTEtMTQuNTI4LDE0LjA2OC0xNC41MjgNCgkJCWM3Ljc1NiwwLDE0LjA2Niw2LjUxOCwxNC4wNjYsMTQuNTI4QzEzMy41MzYsMTIwLjk2LDEyNy4yMjYsMTI3LjQ3NywxMTkuNDcsMTI3LjQ3N3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ5OS40OTksMzUxLjcwNGgtMjMuMTU0Yy00LjE0MywwLTcuNSwzLjM1Ny03LjUsNy41YzAsNC4xNDIsMy4zNTcsNy41LDcuNSw3LjVoMjAuNjU0djI2LjYyMmgtODYuNTA0di0yNi42MjJoMjkuODUNCgkJCWM0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41YzAtNC4xNDMtMy4zNTctNy41LTcuNS03LjVIMzIyLjg0MWMtMC4wOTYtMTQuODMzLTExLjg3OS0yNi45MzItMjYuNTQ3LTI3LjQ0NQ0KCQkJYy0yLjY3LTguMDktOS43ODMtMTQuMTUxLTE4LjQxOS0xNS4yOThjMC42MDctMS40MDIsMC45NTUtMi45NCwxLjAwNi00LjU1MWgyOS45NzhjNy40NzksMCwxNy4wOTYtNCwyMi4zNjktOS4zMDRsMzAuMjc0LTMwLjQ1Mg0KCQkJbDEuOTYsMS45NzFjMi4zNTYsMi4zNjksNS40OTcsMy42NzQsOC44NDQsMy42NzRzNi40ODctMS4zMDUsOC44NDQtMy42NzVsNDUuMDc0LTQ1LjMzOGMyLjkyLTIuOTM4LDIuOTA2LTcuNjg3LTAuMDMxLTEwLjYwNw0KCQkJYy0yLjkzOC0yLjkxOS03LjY4Ny0yLjkwNC0xMC42MDcsMC4wMzFsLTIxLjM0MiwyMS40NjlsLTExLjAzLTExLjA5N2w3MS4zMzUtNzEuNzU0YzAuODU3LTAuODYxLDEuODY5LTAuOTg5LDIuMzk3LTAuOTg5DQoJCQlzMS41NDEsMC4xMjgsMi4zOTcsMC45ODlsNi4xNzUsNi4yMTFjMS4zMzMsMS4zNCwxLjMzMywzLjYwNS0wLjAwMSw0Ljk0NmwtMjQuMDg0LDI0LjIyNWMtMi45MjEsMi45MzgtMi45MDcsNy42ODcsMC4wMywxMC42MDcNCgkJCWMyLjkzOSwyLjkyMiw3LjY4NiwyLjkwNiwxMC42MDYtMC4wM2wyNC4wODQtMjQuMjI0YzcuMTU2LTcuMTk2LDcuMTU2LTE4LjkwNSwwLTI2LjEwMWwtNi4xNzQtNi4yMQ0KCQkJYy0zLjQ3MS0zLjQ5MS04LjEtNS40MTMtMTMuMDM0LTUuNDEzYy00LjkzNCwwLTkuNTYzLDEuOTIyLTEzLjAzNCw1LjQxM2wtOTUuMDA2LDk1LjU2M2MtNC44NDQsNC44NzItNC44NDQsMTIuNzk4LDAsMTcuNjY5DQoJCQlsMi4wMjIsMi4wMzJsLTMwLjMzNiwzMC41MTVjLTIuNDQ4LDIuNDYzLTguMjYsNC44OC0xMS43MzIsNC44OGgtMjkuOTc3Yy0wLjIxMy02LjcwOC01LjcyMi0xMi4xMDMtMTIuNDgtMTIuMTAzaC0xLjE0NXYtOC4wODkNCgkJCWMwLTkuNjQ5LTcuODUxLTE3LjUtMTcuNS0xNy41aC01Ny4wMDZjLTkuNjUsMC0xNy41LDcuODUxLTE3LjUsMTcuNXY4LjA4OWgtMS4xNDZjLTYuODkzLDAtMTIuNSw1LjYwNy0xMi41LDEyLjV2MTQuMjA0DQoJCQljMCwxLjE0NywwLjE2OCwyLjI1MiwwLjQ1OCwzLjMwOGMtMy42NTEsMC43MTgtNy4xMTEsMi4xNDctMTAuMTY5LDQuMjA5Yy00Ljc4Ni02LjUwOS0xMS45ODYtMTAuOTc1LTIwLjE1NC0xMi4yNTgNCgkJCUMxMjcuNCwyODQuMzgzLDExNC41MDcsMjcyLjk2LDk5LDI3Mi45NmMtMTYuODQyLDAtMzAuNjAyLDEzLjQ3My0zMS4xMDQsMzAuMjI3Yy0xMS41MjksMi44NjItMjAuNTQzLDEyLjE4My0yMi45OCwyMy44OTJoLTguODk5DQoJCQljLTEzLjg4NCwwLTI1LjIwNCwxMS4xNzctMjUuNDgyLDI1LjAyYy0zLjYwMywwLjc5Ni02LjYwMSwyLjc4LTguNDk2LDUuNzE2Yy0yLjUwNiwzLjg4My0yLjcxMSw4LjgzNi0wLjU2MywxMy41OTJsMTkuNzIzLDQzLjY0NA0KCQkJYzMuNDgzLDcuNzExLDEyLjQ5MSwxMy41MjUsMjAuOTUzLDEzLjUyNWg0OC4xOTVjNC4xNDMsMCw3LjUtMy4zNTcsNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVINDIuMTUNCgkJCWMtMi41NTYsMC02LjIzMi0yLjM3Mi03LjI4My00LjcwMmwtMTkuMDU2LTQyLjE2OGgyODYuNTQzbC0xOS4wNTYsNDIuMTY3Yy0xLjA1MiwyLjMyOS00LjcyOCw0LjcwMS03LjI4Myw0LjcwMUgxMzEuMzQ0DQoJCQljLTQuMTQzLDAtNy41LDMuMzU3LTcuNSw3LjVzMy4zNTcsNy41LDcuNSw3LjVoMTQ0LjY3MWM4LjQ2MiwwLDE3LjQ3LTUuODE0LDIwLjk1My0xMy41MjRsMTAuMTU1LTIyLjQ3M2g2NC45MjV2My4yNDkNCgkJCWMwLDYuODkzLDUuNjA3LDEyLjUsMTIuNSwxMi41aDExNC45NTFjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNXYtMzEuNjIyQzUxMS45OTksMzU3LjMxMSw1MDYuMzkyLDM1MS43MDQsNDk5LjQ5OSwzNTEuNzA0eg0KCQkJIE0zNzIuNjM3LDIzMS43MTlsMTEuMDMsMTEuMDk2bC0xMS4zNjEsMTEuNDI5bC0xMS4wMzEtMTEuMDk1TDM3Mi42MzcsMjMxLjcxOXogTTE4OC4yNTEsMjY5LjIxOGMwLTEuMzU1LDEuMTQ1LTIuNSwyLjUtMi41DQoJCQloNTcuMDA2YzEuMzU1LDAsMi41LDEuMTQ1LDIuNSwyLjV2OC4wODloLTYyLjAwNlYyNjkuMjE4eiBNMTc0LjYwNSwyOTIuMzA3aDg5LjI5N3Y5LjIwNGgtODkuMjk3VjI5Mi4zMDd6IE0xNTEuOTgyLDM1MS43MDMNCgkJCUgyNS41NjVjMC40NjUtNS4zODQsNC45Ny05LjYyNSwxMC40NS05LjYyNUg1MS44MmMyLjA2MywwLDQuMDM2LTAuODUxLDUuNDUzLTIuMzUyYzEuNDE3LTEuNSwyLjE1My0zLjUxOCwyLjAzNC01LjU3OQ0KCQkJbC0wLjAyNy0wLjQyMmMtMC4wMDctMC4xLTAuMDE2LTAuMi0wLjAxOS0wLjI3NGMwLTguODc5LDcuMTY1LTE2LjExLDE1Ljk5OC0xNi4xNzdjMC4yMDUsMC4wMTUsMC43MjcsMCwwLjc4MywwDQoJCQljNi44MDksMC4yODYsMTIuODMzLDQuOTYyLDE0Ljc4OSwxMS41NDljMS4xNzgsMy45NzEsNS4zNTMsNi4yMzcsOS4zMjQsNS4wNTVjMy45NzEtMS4xNzksNi4yMzQtNS4zNTMsNS4wNTUtOS4zMjQNCgkJCWMtMy4xNTktMTAuNjQtMTEuODI3LTE4LjY3Ni0yMi4yODQtMjEuMzMyYzAuNDc4LTguNDk0LDcuNDkzLTE1LjI2MiwxNi4wNzMtMTUuMjYyYzguODg4LDAsMTYuMTE5LDcuMjU3LDE2LjExOSwxNi4xNzgNCgkJCWMwLDAuNTMtMC4wMjcsMS4wNjktMC4wODQsMS42NDhjLTAuMjE4LDIuMjM2LDAuNTc5LDQuNDUzLDIuMTcyLDYuMDRjMS41OTIsMS41ODYsMy44MDcsMi4zNzQsNi4wNDksMi4xNDgNCgkJCWMwLjU1MS0wLjA1NiwxLjA3OS0wLjA4MywxLjYxMy0wLjA4M2M2LjYxOSwwLDEyLjQyNiw0LjAxNSwxNC44NzYsMTAuMDFjLTEuMzcyLDMuMjg5LTIuMTMyLDYuODk2LTIuMTMyLDEwLjY3Nw0KCQkJYzAsNC4xNDMsMy4zNTcsNy41LDcuNSw3LjVzNy41LTMuMzU3LDcuNS03LjVjMC0yLjI4LDAuNjA3LTQuNDE1LDEuNjU2LTYuMjY5Yy0wLjAwMi0wLjAwMi0wLjAwNC0wLjAwNS0wLjAwNi0wLjAwNw0KCQkJYzAuMDE3LTAuMDI3LDAuMDM3LTAuMDUsMC4wNTMtMC4wNzdjMS45NjctMy40MzgsNS40LTUuNzQ1LDkuMjI5LTYuMzA2TDE1MS45ODIsMzUxLjcwM3ogTTI1My40MzMsMzUxLjcwM3YtMTUuNTgyDQoJCQljMC00LjE0My0zLjM1Ny03LjUtNy41LTcuNXMtNy41LDMuMzU3LTcuNSw3LjV2MTUuNTgyaC0xMi42NDZ2LTE1LjU4MmMwLTQuMTQzLTMuMzU3LTcuNS03LjUtNy41cy03LjUsMy4zNTctNy41LDcuNXYxNS41ODINCgkJCWgtMTAuNzE1di0xNS41ODJjMC00LjE0My0zLjM1Ny03LjUtNy41LTcuNXMtNy41LDMuMzU3LTcuNSw3LjV2MTUuNTgyaC0xNi45OTlsMTMuNjYyLTM1LjE5Mmg3NS4wMzZsMTMuNjYzLDM1LjE5MkgyNTMuNDMzeg0KCQkJIE0zMDMuOTc1LDM1MS43MDRoLTE3LjQ0OWwtMTAuODM5LTI3LjkxNWMzLjc4MywwLjM5Miw2Ljc0NCwzLjYzNiw2Ljc0NCw3LjU2N2MwLDAuMTY5LTAuMDE3LDAuMzM1LTAuMDI4LDAuNTAxbC0wLjAxLDAuMTQ1DQoJCQljLTAuMTYyLDIuNDM0LDAuODY4LDQuNzk0LDIuNzY0LDYuMzI4YzEuODk0LDEuNTM2LDQuNDE5LDIuMDUxLDYuNzY0LDEuMzg4YzEuMTE0LTAuMzE1LDIuMjYtMC40NzYsMy40MDMtMC40NzYNCgkJCWM2Ljg0NCwwLDEyLjQxNSw1LjU3NSwxMi41MTMsMTIuNDYySDMwMy45NzV6IE0zNzIuMDQ4LDM3Ny41NzdoLTU4LjE0NmwyLjc4OS02LjE3M2MwLjU1OC0xLjIzNCwwLjk0OS0yLjQ4MiwxLjE5LTMuNzIxDQoJCQljMC4yMjQtMC4zMiwwLjQzMi0wLjY1LDAuNjQyLTAuOTc5aDUzLjUyNVYzNzcuNTc3eiBNMzk1LjQ5NSwzOTMuMzI2aC04LjQ0N3YtMjYuNjIyaDguNDQ3VjM5My4zMjZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01Mi4wMjMsMTUwLjUzMmMtMjcuOTM0LDAtNTAuNjYsMjMuMDcyLTUwLjY2LDUxLjQzM2MwLDI4LjM1OSwyMi43MjUsNTEuNDMsNTAuNjYsNTEuNDMNCgkJCWMyNy45MzYsMCw1MC42NjItMjMuMDcxLDUwLjY2Mi01MS40M0MxMDIuNjg1LDE3My42MDUsNzkuOTU4LDE1MC41MzIsNTIuMDIzLDE1MC41MzJ6IE01Mi4wMjMsMjM4LjM5Ng0KCQkJYy0xOS42NjMsMC0zNS42Ni0xNi4zNDItMzUuNjYtMzYuNDNjMC0yMC4wODksMTUuOTk3LTM2LjQzMywzNS42Ni0zNi40MzNjMTkuNjY0LDAsMzUuNjYyLDE2LjM0NCwzNS42NjIsMzYuNDMzDQoJCQlDODcuNjg1LDIyMi4wNTQsNzEuNjg3LDIzOC4zOTYsNTIuMDIzLDIzOC4zOTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xODEuNTE2LDE5NC4xMmMtMTEuNTMtMy42NDgtMTIuNTktNC43MjktMTYuMTk2LTE2LjQ5NmMtMS4zMzEtNC4zNS01LjI2OC03LjI3MS05Ljc5OS03LjI3MQ0KCQkJYy00LjUzNiwwLTguNDc1LDIuOTI3LTkuNzk2LDcuMjY5Yy0zLjYwNywxMS43NzEtNC42NjcsMTIuODUtMTYuMiwxNi40OTljLTQuMjksMS4zNTctNy4xNzIsNS4zMDMtNy4xNzIsOS44MTgNCgkJCWMwLDQuNTE4LDIuODgyLDguNDY1LDcuMTcxLDkuODIxYzExLjUzMywzLjY0OSwxMi41OTQsNC43MjksMTYuMTk2LDE2LjQ4M2MxLjMyMyw0LjM1Niw1LjI2Myw3LjI4NCw5LjgwMSw3LjI4NA0KCQkJYzQuNTMyLDAsOC40NzEtMi45MjMsOS43OTgtNy4yNjhjMy42MDgtMTEuNzcxLDQuNjY4LTEyLjg1MiwxNi4xOTMtMTYuNDk4YzQuMjktMS4zNTUsNy4xNzMtNS4zMDMsNy4xNzMtOS44MjMNCgkJCUMxODguNjg1LDE5OS40MTksMTg1LjgwMiwxOTUuNDczLDE4MS41MTYsMTk0LjEyeiBNMTU1LjUyMiwyMTQuMzM2Yy0yLjU1LTQuNjc4LTUuNjkxLTcuODI2LTEwLjM1OC0xMC4zOTYNCgkJCWM0LjY2Ny0yLjU2OSw3LjgwNi01LjcxNywxMC4zNTctMTAuMzk1YzIuNTUsNC42NzksNS42ODksNy44MjYsMTAuMzU3LDEwLjM5NUMxNjEuMjEyLDIwNi41MDksMTU4LjA3MSwyMDkuNjU5LDE1NS41MjIsMjE0LjMzNnoiDQoJCQkvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" /></span>
							
							<span className="colorlib-counter-label">Чистим в Цехе</span>Name
						</div>
						<div className="col-md-3 text-center animate-box">
							<span className="icon white-circle"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMSA1MTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMSA1MTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xMTkuNSwzODRjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjVjMCw5LjA5OC03LjQwMiwxNi41LTE2LjUsMTYuNVM3OSw0MDAuNTk4LDc5LDM5MS41Uzg2LjQwMiwzNzUsOTUuNSwzNzUNCgkJYzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41Qzc4LjEzMSwzNjAsNjQsMzc0LjEzMSw2NCwzOTEuNVM3OC4xMzEsNDIzLDk1LjUsNDIzczMxLjUtMTQuMTMxLDMxLjUtMzEuNQ0KCQlDMTI3LDM4Ny4zNTgsMTIzLjY0MiwzODQsMTE5LjUsMzg0eiIvPg0KCTxwYXRoIGQ9Ik00MzkuNSwzODRjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjVjMCw5LjA5OC03LjQwMiwxNi41LTE2LjUsMTYuNXMtMTYuNS03LjQwMi0xNi41LTE2LjVzNy40MDItMTYuNSwxNi41LTE2LjUNCgkJYzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41Yy0xNy4zNjksMC0zMS41LDE0LjEzMS0zMS41LDMxLjVzMTQuMTMxLDMxLjUsMzEuNSwzMS41czMxLjUtMTQuMTMxLDMxLjUtMzEuNQ0KCQlDNDQ3LDM4Ny4zNTgsNDQzLjY0MiwzODQsNDM5LjUsMzg0eiIvPg0KCTxwYXRoIGQ9Ik00NDcuNSwyNTZoLTE2Yy00LjE0MiwwLTcuNSwzLjM1OC03LjUsNy41czMuMzU4LDcuNSw3LjUsNy41aDE2YzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjVTNDUxLjY0MiwyNTYsNDQ3LjUsMjU2eiIvPg0KCTxwYXRoIGQ9Ik0zMjcuNSwzMjBoLTE0NGMtNC4xNDIsMC03LjUsMy4zNTgtNy41LDcuNXMzLjM1OCw3LjUsNy41LDcuNWgxNDRjNC4xNDIsMCw3LjUtMy4zNTgsNy41LTcuNVMzMzEuNjQyLDMyMCwzMjcuNSwzMjB6Ii8+DQoJPHBhdGggZD0iTTQ3MS41MTMsMjI0SDM3MS4wMzhsLTY4LjE5OS04Mi43NjRjLTAuMDc3LTAuMDk0LTAuMTU3LTAuMTg2LTAuMjM5LTAuMjc1Yy02LjE5OC02LjgxNy0xNC41ODMtMTEuMjE5LTIzLjYtMTIuNTM3Vjk1LjUNCgkJYzAtMTcuMzY5LTE0LjEzMS0zMS41LTMxLjUtMzEuNUgyMTV2LTAuNWMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41cy03LjUsMy4zNTgtNy41LDcuNVY2NGgtNDF2LTAuNWMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41DQoJCXMtNy41LDMuMzU4LTcuNSw3LjVWNjRoLTMyLjVDOTQuMTMxLDY0LDgwLDc4LjEzMSw4MCw5NS41djMyLjUzN2MtMTMuMTg1LDAuMzgzLTI1LjIwMiw3LjE2OC0zMi4zMTYsMTguMzQ3DQoJCWMtMC4wNjgsMC4xMDctMC4xMzQsMC4yMTctMC4xOTcsMC4zMjhMNi4wNjEsMjE5Ljc5M0MyLjA5NSwyMjYuMDk1LDAsMjMzLjM1NiwwLDI0MC44MDVWMzI3LjUNCgkJYzAsMTUuMjg1LDkuMDE3LDI5LjMzNCwyMi45NzIsMzUuNzkxYzIuMDAyLDAuOTI3LDQuMzEyLDAuOTI1LDYuMzExLTAuMDA2YzEuODI5LTAuODUsMy4yMjEtMi40LDMuODk0LTQuMjg1aDcuNzk4DQoJCUMzNS4yODIsMzY4LjUxNCwzMiwzNzkuNjI5LDMyLDM5MS41YzAsMzUuMDE0LDI4LjQ4Niw2My41LDYzLjUsNjMuNXM2My41LTI4LjQ4Niw2My41LTYzLjVjMC0xMS44NzEtMy4yODItMjIuOTg2LTguOTc1LTMyLjUNCgkJaDcuNzc1YzAuMTksMC43MTgsMC4zNzUsMS40MzcsMC41NCwyLjE2MmMwLjc3NiwzLjQxNSwzLjgxMiw1LjgzOCw3LjMxMyw1LjgzOGgxNzkuNjkxYzMuNTAyLDAsNi41MzgtMi40MjMsNy4zMTMtNS44MzgNCgkJYzAuMTY1LTAuNzI1LDAuMzUtMS40NDQsMC41NC0yLjE2Mmg3Ljc3NWMtNS42OTMsOS41MTQtOC45NzUsMjAuNjI5LTguOTc1LDMyLjVjMCwzNS4wMTQsMjguNDg2LDYzLjUsNjMuNSw2My41DQoJCXM2My41LTI4LjQ4Niw2My41LTYzLjVjMC0xMS44NzEtMy4yODItMjIuOTg2LTguOTc1LTMyLjVoNy43NzVjMC4xOSwwLjcxOCwwLjM3NSwxLjQzNywwLjU0LDIuMTYyDQoJCWMwLjc3NiwzLjQxNSwzLjgxMiw1LjgzOCw3LjMxMyw1LjgzOGgxLjgyM0M1MDAuNDQ4LDM2Nyw1MTEsMzU2LjQ0Nyw1MTEsMzQzLjQ3N3YtNzkuOTlDNTExLDI0MS43MTQsNDkzLjI4NiwyMjQsNDcxLjUxMywyMjR6DQoJCSBNNDk2LDI4OGgtOC41Yy00LjY4NywwLTguNS0zLjgxMy04LjUtOC41czMuODEzLTguNSw4LjUtOC41aDguNVYyODh6IE0zMDQuNTYzLDE2Ni45MTZMMzUxLjYwMiwyMjRIMTE2LjA0MmwyNC41MjItNDUuNjUNCgkJQzE0NS4xLDE3MS4yMzgsMTUyLjgyMiwxNjcsMTYxLjI3LDE2N0gzMDMuNUMzMDMuODYyLDE2NywzMDQuMjE1LDE2Ni45NjYsMzA0LjU2MywxNjYuOTE2eiBNMjQ3LjUsNzkNCgkJYzkuMDk4LDAsMTYuNSw3LjQwMiwxNi41LDE2LjVWMTI4aC00OVY3OUgyNDcuNXogTTIwMCw3OXY0OWgtNDFWNzlIMjAweiBNMTExLjUsNzlIMTQ0djQ5SDk1Vjk1LjVDOTUsODYuNDAyLDEwMi40MDIsNzksMTExLjUsNzl6DQoJCSBNNTMuNDAxLDE2Ni42OTZjMC42NjcsMC4xOTQsMS4zNywwLjMwNCwyLjA5OSwwLjMwNGgzNS40NTdsLTI0LjUzNSw0NS42NzFDNjEuODk2LDIxOS43NjksNTQuMTg3LDIyNCw0NS43NTQsMjI0SDIwLjkxOA0KCQlMNTMuNDAxLDE2Ni42OTZ6IE05NS41LDQ0MEM2OC43NTcsNDQwLDQ3LDQxOC4yNDMsNDcsMzkxLjVTNjguNzU3LDM0Myw5NS41LDM0M3M0OC41LDIxLjc1Nyw0OC41LDQ4LjVTMTIyLjI0Myw0NDAsOTUuNSw0NDB6DQoJCSBNMTM3LjU3OSwzNDRjLTExLjIxMy05Ljk0NC0yNS45NDgtMTYtNDIuMDc5LTE2cy0zMC44NjYsNi4wNTYtNDIuMDc5LDE2SDM5LjI5YzExLjIxLTE5Ljk4NiwzMi41NzgtMzMsNTYuMjEtMzMNCgkJYzE0LjkxMywwLDI4LjkwOCw0Ljk0OCw0MC40NzQsMTQuMzFjNi40MTIsNS4xOSwxMS43NDYsMTEuNTY4LDE1Ljc0MSwxOC42OUgxMzcuNTc5eiBNNDE1LjUsNDQwYy0yNi43NDMsMC00OC41LTIxLjc1Ny00OC41LTQ4LjUNCgkJczIxLjc1Ny00OC41LDQ4LjUtNDguNXM0OC41LDIxLjc1Nyw0OC41LDQ4LjVTNDQyLjI0Myw0NDAsNDE1LjUsNDQweiBNNDU3LjU3OSwzNDRjLTExLjIxMy05Ljk0NC0yNS45NDgtMTYtNDIuMDc5LTE2DQoJCXMtMzAuODY2LDYuMDU2LTQyLjA3OSwxNmgtMTQuMTM2YzMuOTk1LTcuMTIzLDkuMzI5LTEzLjUsMTUuNzQxLTE4LjY5QzM4Ni41OTIsMzE1Ljk0OCw0MDAuNTg3LDMxMSw0MTUuNSwzMTENCgkJczI4LjkwOCw0Ljk0OCw0MC40NzQsMTQuMzFjNi40MTIsNS4xOSwxMS43NDYsMTEuNTY4LDE1Ljc0MSwxOC42OUg0NTcuNTc5eiBNNDkxLjEzOSwzNTEuMTcyDQoJCWMtNC43MTctMTQuNjM1LTEzLjY4OS0yNy43NzctMjUuNzI4LTM3LjUyMUM0NTEuMzUsMzAyLjI2OSw0MzMuNjI0LDI5Niw0MTUuNSwyOTZzLTM1Ljg1LDYuMjY5LTQ5LjkxMSwxNy42NTENCgkJYy0xMi4yNjYsOS45MjgtMjEuMzQ3LDIzLjM4Mi0yNS45OSwzOC4zNDlIMTcxLjQwMWMtNC42NDMtMTQuOTY3LTEzLjcyNC0yOC40MjEtMjUuOTktMzguMzQ5QzEzMS4zNSwzMDIuMjY5LDExMy42MjQsMjk2LDk1LjUsMjk2DQoJCWMtMzIuMjIxLDAtNjEuMDM0LDE5LjYxNC03My4yNjEsNDguNzgyQzE3LjY5NCwzNDAuMjYxLDE1LDMzNC4wNjMsMTUsMzI3LjVWMjcxaDM4NC41YzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjUNCgkJcy0zLjM1OC03LjUtNy41LTcuNUgxNXYtMTUuMTk1YzAtMC42MTEsMC4wMjYtMS4yMiwwLjA3MS0xLjgyNkMxNS4yMTQsMjM4Ljk4NiwxNS4zNTUsMjM5LDE1LjUsMjM5aDMwLjI1NA0KCQljMTMuNzE1LDAsMjYuMjQzLTYuOTQzLDMzLjUxMi0xOC41NzRjMC4wODctMC4xMzksMC4xNjktMC4yODEsMC4yNDctMC40MjVsMzAuNTk1LTU2Ljk1MWMxLjI0OS0yLjMyNCwxLjE4NC01LjEzNC0wLjE3LTcuMzk4DQoJCVMxMDYuMTM5LDE1MiwxMDMuNSwxNTJINjIuMTEzYzQuNjYxLTUuNjgsMTEuNTg3LTksMTkuMDYyLTloMTkyLjEyN2M2Ljg1OCwwLDEzLjQ0LDIuODg3LDE4LjA4Niw3LjkyNmwwLjg4NSwxLjA3NEgxNjEuMjcNCgkJYy0xMy43MjksMC0yNi4yNzEsNi45NTEtMzMuNTQ3LDE4LjU5NGMtMC4wODcsMC4xMzktMC4xNjksMC4yODEtMC4yNDcsMC40MjZsLTMwLjU4Miw1Ni45MzFjLTEuMjQ5LDIuMzI1LTEuMTg0LDUuMTM0LDAuMTcsNy4zOTgNCgkJUzEwMC44NjEsMjM5LDEwMy41LDIzOWgyNjRoMTA0LjAxM2MxMC44OTEsMCwyMC4xNDEsNy4xNDksMjMuMzEyLDE3SDQ4Ny41Yy0xMi45NTgsMC0yMy41LDEwLjU0Mi0yMy41LDIzLjVzMTAuNTQyLDIzLjUsMjMuNSwyMy41DQoJCWg4LjV2NDAuNDc3QzQ5NiwzNDYuODY2LDQ5NC4wMTEsMzQ5LjgsNDkxLjEzOSwzNTEuMTcyeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" /></span>
							
							<span className="colorlib-counter-label">Привозим чистый ковёр обратно</span>
						</div>
					</div>
				</div>
			</div>

		

			<div id="get-in-touch" className="colorlib-bg-color">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<h2>Мы работаем круглосуточно !</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
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

export default Home