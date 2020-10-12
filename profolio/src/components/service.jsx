import React from 'react'

const service =() =>{
    return(
        <><div id="colorlib-page">
		<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
		<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
			<h1 id="colorlib-logo"><a href="/index"><img src='images/logo-1.png' style={{width: "200px"}} /></a></h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul>
					<li><a href="/index">Главная</a></li>
					<li ><a href="/about">О нас</a></li>
					<li><a href="/work">Наши работы</a></li>
					<li className="colorlib-active"><a href="/services">FAQ</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="/contact">Контакты</a></li>
				</ul>
			</nav>

			<div className="colorlib-footer">
				<p><small>&copy; 
Copyright &copy;</small></p>
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
							<span className="heading-meta">FAQ</span>
							<h2 className="colorlib-heading">Часто задаваемые вопросы</h2>
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
											<h3>Сколько времени стирается ковер на фабрике ?</h3>
											<p>Ковер который забирается на фабрику, стирается ровно 7 дней. Исключением может быть сложно или сильно загрязненные  изделия. Они попадают на повторный цикл стирки. Отсчет начинается со следующего дня после бесплатного забора ковра из вашего дома. Для получения более подробной информации позвоните в офис +74951222320</p>
										</div>
									</div>

									<div className="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
										<div className="colorlib-icon">
											<i className="flaticon-sketch"></i>
										</div>
										<div className="colorlib-text">
											<h3> Сколько стоит доставка?</h3>
											<p>Доставка ковров по Киеве бесплатна, а вот по Киевской области нужно будет доплатить 30 грн. за километр.  </p>
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
											<h3>Куда сдать ковер?</h3>
											<p> У нас работает служба доставки, которая сделает это за Вас.  </p>
										</div>
									</div>

									<div className="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
										<div className="colorlib-icon">
											<i className="flaticon-crane"></i>
										</div>
										<div className="colorlib-text">
											<h3>Как часто чистить ковер?</h3>
											<p>Чистить ковер нужно не реже одного раза в год. В странах азии, от куда к нам пришли ковры, сдать квоер в химчистку является обязательным.
												Благодаря чистки ковер всегда остается ярким. Из него выбивается вся пыль, которая скопилась за год. После этого ковер стирают и сушат.
												Ковер за год собирается более киллограма пыли. Никакой пылесос не может до конца убрать всю грязь и мелкие частицы. </p>
										</div>
									</div>
								</div>
							</div>
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
	</div></>
    )
    
}

export default service