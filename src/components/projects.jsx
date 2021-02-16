import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Restaurant Finder</h2> <a href="https://find-restaurant1.herokuapp.com/" > Click Here</a>

                       <ul>
					 <li> Developed a Responsive website for finding the restaurants of the location entered.</li>
					 <li>Used React.js for designing frontend of the application</li>
           <li>Used Redux as a state management library</li>
           <li> Used React Router for client side routing</li>
           <li> Used Redux Thunk middleware to dispatch async actions(calling API)</li>
           <li>Technologies Used: React,Redux, Redux Router, Redux Thunk,JavaScript(ES6),HTML5,CSS3</li>
					</ul>

                      </div>
                    </div>
                  </article>
						<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Seo Access</h2> <a href="https://seoaccess.herokuapp.com/" > Click Here</a>

                       <ul>
					 <li> 	Developed a Responsive web Scraper which scrap all the HTML/CSS from a website to generate an AODA(Accessibility) WCAG 2.0 or 2.1 AA and SEO analysis report.</li>
					 <li>	Creating a NodeJS based framework for scraping and validating results based on website URL and recording that result into database using MongoDB and depicting results as an interactive report on the webpage.</li>
					</ul>

                      </div>
                    </div>
                  </article>
				  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Grocers </h2> <a href="https://grocer-user.herokuapp.com/" > Click Here</a><br/>

						•	Developed a Responsive web application that allows user to do grocery shopping online and just visit the store for pickup and user can also select nearby grocery store using our online maps.<br/>
						•	It reduces about 50% of users time by eliminating the wait time in long queue and roaming around the store to collect groceries.<br/>
						•	Technologies used : Node, React, JavaScript, jQuery, MongoDB.


                      </div>
                    </div>
                  </article>
				  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Wish My Trip </h2> <a href="https://github.com/prashil117/WMT_User" > Click Here</a>

						•	Developed a website that allows user to book a car with the best deals available. The website integrates information of different car providing agents and various prices and car models available<br/>
						•	Website saves user time to call each different dealer for car availability and prices.<br/>
						•	Reduce 30% time of car provider to generate hand written bill as this website generate bills also<br/>
						•	Technologies used :- Node.js, Angular JS,  Typescript , MySQL, Laravel, PHP<br/>

                      </div>
                    </div>
                  </article>
				  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Let’s Shop  </h2> <a href="https://github.com/keval718/Lets-Shop" > Click Here</a>

						•	Developed a full stack e-commerce web app suitable for a wide range of products or service based business <br/>
						•	Created user interface with Semantic UI react, User authentication with JWT  and Cookies, Password hashing with bcrypt<br/>
						•	Process payments with Stripe API, Dynamically upload image with Cloudinary API, Modelling database concept with Mongoose Schemas<br/>
						•	Querying/Pagination/Mutating with MongoDB<br/>
						•	Deployed app with serverless deployment service Now<br/>
						•	Technologies used: - React, React Hooks, Google Cloud, Node.js, Express, Next.js, MongoDB, Semantic UI<br/>

                      </div>
                    </div>
                  </article>
							
						
							
						
						
						<div className="row">
							
						</div>
					</div>
				</section>
      </div>
    )
  }
}
