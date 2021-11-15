import payfastMarketing from "./../assets/pf-marketing.jpg";
import payfastMerchantDashboard from "./../assets/projects/Payfast-Merchant-Dashboard.png";
import payfastSandbox from "./../assets/projects/PayFast-Sandbox.png";
import payfastSandboxBanner from "./../assets/projects/sandbox-test-payment.png";
import payfastMarketingBanner from "./../assets/payfastBanner.png";
import payfastBlackFriday from "./../assets/projects/bfcm 2020.jpeg";
import payfastBlackFriday1 from "./../assets/PayFastBFCM.png";
import payfastBlackFriday2021 from "./../assets/projects/live-bfcm-2021.png";
import totem from "./../assets/totem.png";
import particles from "./../assets/particlesBanner.png";
import mediafreaks from "./../assets/thumbnail-mediaAddicts.jpg";
import mediafreaksBanner from "./../assets/mediafreaks.png";
import netflixSm from "./../assets/netflix-clone.png";
import netflixbanner from "./../assets/netflixbanner.png";
import skyagencysm from "./../assets/sky-thumbnail.jpg";
import skyagency from "./../assets/skyagency.png";
import nasaThumb from "../assets/nasa-thumbnail-portfolio.jpg";
import nasaBanner from "../assets/nasa-banner-image.png";
import chatAppInterface from "./../assets/projects/chat-app-interface.png";
import chatAppProfilePage from "./../assets/projects/chat-app-profile-page.png";
import { BsArrowRightShort } from "react-icons/bs";

function filterProjects(project) {
    switch (project) {
        case "chat-app":
            return {
                intro: <span><small>Encrypted </small> <strong>Live Chat Application</strong></span>,
                subText: <a rel="noreferrer" className={"demo-link"} target={"_blank"} href="http://thinus-chat-app.herokuapp.com/">
                            View the Site <BsArrowRightShort/>
                        </a>,
                projectImage: chatAppInterface,
                projectBannerImage: chatAppProfilePage,
                projectIntroParagraph: <p>
                                            This application was built to experiment with a few of Laravel's built in tools
                                            and also to test my own abilities. While the project is not 100% polished,
                                            it does look promising and can easily look very modern and slick. The main functionality
                                            is ready, such as making a friend request, communicating, updating a profile picture
                                            and having your chats be stored encrypted.
                                        </p>,
                projectBodyText: <>
                                    <p>
                                        I used Laravel and Vue.js to build the project, no bootstrap was used, this was a project where I wanted to show case
                                        my front end skills and work on some animations I have been wanting to try. I also encrypted the messages
                                        with <a rel="noreferrer" target={"_blank"} href="https://laravel.com/docs/8.x/encryption">Laravel's Encryption</a>&nbsp;
                                        library.
                                    </p>
                                    <br/>
                                    <p>
                                        The coolest part of the project is that everything is live and instant. I used <a rel="noreferrer" target={"_blank"} href="https://pusher.com/">Pusher
                                        </a> and <a rel="noreferrer" target={"_blank"} href="https://laravel-livewire.com/docs/2.x/laravel-echo">Laravel Echo</a> for
                                        the instant notifications and I also implemented fully encrypted message storage. There is currently an issue where postgres does not like
                                        the way Laravel handles some queries with JSON which I need to address and heroku only offers postgres. When it is fixed, I will share the
                                        usernames, passwords and connection id's
                                    </p>
                                    {/*<br/>*/}
                                    {/*<p>*/}
                                    {/*    The next steps will be sending an email to the recipient wen they receive a message. Feel free to send me a connection request and*/}
                                    {/*    let's talk code! My connection id is 602436794. <a rel="noreferrer" target={"_blank"} href="http://thinus-chat-app.herokuapp.com/register">Sign up</a>&nbsp;*/}
                                    {/*    or <a rel="noreferrer" target={"_blank"} href="http://thinus-chat-app.herokuapp.com/login">log in</a> to any of the open accounts you can see in the seeder...*/}
                                    {/*</p>*/}
                                    {/*<br/>*/}
                                    {/*<p>*/}
                                    {/*    <u><b>Or just use these credentials:</b></u><br/>*/}
                                    {/*        <b>Username:</b> test@test.com<br/>*/}
                                    {/*        <b>password:</b> 1qazxsw2<br/>*/}
                                    {/*</p>*/}
                                </>
            }
        case "payfast-marketing":
            return {
                intro: <span><small>Marketing Website for</small> <strong>PayFast</strong></span>,
                subText: <a rel="noreferrer" className={"demo-link"} target={"_blank"} href="https://www.payfast.co.za">
                            View the Site <BsArrowRightShort/>
                        </a>,
                projectImage: payfastMarketing,
                projectBannerImage: payfastMarketingBanner,
                projectIntroParagraph: <p>
                                            The PayFast Marketing website was the first ever professional site I was part of. We were a team of
                                            6 (Including the design team) and we had a lot to learn.
                                        </p>,
                projectBodyText: <>
                                    <p>
                                        We used Laravel and jQuery throughout the website, learning the in's and out's of HTML, Scss, JavaScript and laravel. The project took us just short
                                        of a year to complete and we are still busy with continued updates.
                                    </p>
                                    <br/>
                                    <p>
                                        The most complex pages of the site for me were definitely
                                        the <a rel="noreferrer" target={"_blank"} href="https://www.payfast.co.za/integration/shopping-carts">Cart Plugin listing page</a>
                                        and the <a rel="noreferrer" target={"_blank"} href="https://www.payfast.co.za/contact">Contact us page</a>. I am extremely proud to say that I was
                                        part of most aspects of the page and it's functionality.
                                    </p>
                                </>
            }
        case "payfast-merchant-dashboard":
            return {
                intro: <span><small>Merchant Dashboard for </small> <strong>PayFast</strong></span>,
                subText: <a rel="noreferrer" className={"demo-link"} target={"_blank"} href="https://my.payfast.co.za">
                            View the Site <BsArrowRightShort/>
                        </a>,
                projectImage: payfastMerchantDashboard,
                projectBannerImage: payfastMerchantDashboard,
                projectIntroParagraph: <p>
                    The PayFast Merchant Dashboard is a major milestone for PayFast. It is their biggest
                    front end project to date. It made use of an internal design system library (built with Vue.js)
                    and reach across multiple PayFast systems to produce a very user friendly admin dashboard for merchants.
                </p>,
                projectBodyText: <>
                                    <p>
                                        We used Laravel and Vue throughout the project with an internal design system package
                                        that our team also built. It had a lengthy development timeline passing over a year
                                        before anything was ready for release. Since then, the project has been releasing
                                        incremental bits and features with great feedback from merchants.
                                    </p>
                                    <br/>
                                    <p>
                                        This project had a large amount of complexity, ranging from architectural decisions
                                        to design decisions and user interaction. We had 10 developers on the project to
                                        push it over the line. my favorite section personally is
                                        the <a rel="noreferrer" target={"_blank"} href="https://www.payfast.co.za/contact">PayNow button page</a>.
                                        Which will build you pieces of code that you can use to implement the most basic PayFast integration onto your site.
                                        This is all done in JavaScript and will give you pure HTML wherever possible.
                                    </p>
                                </>
            }
        case "payfast-sandbox":
            return {
                intro: <span><small>Testing platform for </small> <strong>PayFast</strong></span>,
                subText: <a rel="noreferrer" className={"demo-link"} target={"_blank"} href="https://sandbox.payfast.co.za">
                    View the Site <BsArrowRightShort/>
                </a>,
                projectImage: payfastSandbox,
                projectBannerImage: payfastSandboxBanner,
                projectIntroParagraph: <p>
                    The PayFast Sandbox project is a complex system that allows users to complete payments and test their integration.
                    This is the tool that developers spend the most time with while integrating with PayFast and we added a few cool tools for them
                    inside this project.
                </p>,
                projectBodyText: <>
                    <p>
                        We used Laravel with a Vue Front End and Lumen for the engine. Our team was excited to remodel from the old sandbox.
                    </p>
                    <br/>
                    <p>
                        My favorite part of the project was building the <a rel="noreferrer" target={"_blank"} href="https://sandbox.payfast.co.za/integration-test">
                            test your integration</a> page which works by accepting user data and building a checkout
                        from the data provided.
                    </p>
                </>
            }
        case "2020-black-friday-cm":
            return {
                intro: <span><small>Black Friday Statistics for</small> <strong>PayFast</strong> 2020</span>,
                subText: <a rel="noreferrer" className={"demo-link"} target={"_blank"} href="https://bf.payfast.co.za/">
                            View the Site <BsArrowRightShort/>
                        </a>,
                projectImage: payfastBlackFriday,
                projectBannerImage: payfastBlackFriday1,
                projectIntroParagraph: <p>
                    The <a rel="noreferrer" target={"_blank"} href="https://bf.payfast.co.za/">Black Friday project</a> was
                    an incredibly fast paced project. We were about 6 developers, 1 designer and a product
                    manager that tackled this with 2 weeks before the big launch. The project is now in a waiting status until Black Friday comes around again.
                </p>,
                projectBodyText: <>
                    <p>
                        The project was built with Vue.js and elastic search for our data. We used
                        the <a rel="noreferrer" target={"_blank"} href="https://www.amcharts.com/">AmCharts</a> library
                        to build the map. I built the interface, the map, the plotting of the data and it's animations
                        while the other developers focussed on pulling in the data and making sure we poll the data
                        source correctly.
                    </p>
                    <br/>
                    <p>
                        One of the challenges we faced was that the animations for these "blips" would suddenly all show at once and then all fade out.
                        This was due to the polling rate. So in order to make it look "real-time" I divided the amount of "blips", that we received in
                        the payload, with the time between polling. This gave us a nice time frame to display all the data on their own.
                    </p>
                </>
            }
        case "2021-black-friday-cm":
            return {
                intro: <span><small>Black Friday Statistics for</small> <strong>PayFast</strong> 2021</span>,
                subText: <a rel="noreferrer" className={"demo-link"} target={"_blank"} href="https://bf.payfast.co.za/">
                            View the Site <BsArrowRightShort/>
                        </a>,
                projectImage: payfastBlackFriday,
                projectBannerImage: payfastBlackFriday2021,
                projectIntroParagraph: <p>
                    This years <a rel="noreferrer" target={"_blank"} href="https://bf.payfast.co.za/">Black Friday project</a> was
                    a mix between interactive animations and data presentation. We were about 6 developers, 1 designer and a product
                    manager and we had a bit more time to think it through.
                </p>,
                projectBodyText: <>
                    <p>
                        We kept the original infrastructure and used the same <a rel="noreferrer" target={"_blank"} href="https://www.amcharts.com/">AmCharts</a> library for
                        the pie chart and the map.
                        I built the live timeline, pie chart, map component and flip animation, however we all touched
                        most parts of the project and was responsible for bits and pieces across the site.
                    </p>
                    <br/>
                    <p>
                        The main focus of this year was to have one server send out notifications in the socket room
                        instead of each client making requests for data. Last year, the servers were really perspiring
                        to make it through the weekend. This year, we anticipate a lot less load on the servers since
                        queries will only occur once and be cached for everyone else.
                    </p>
                    </>
            }
        case "bike-shop":
            return {
                intro: <span><small>Personal Animations with </small> <strong>CSS and Three.js</strong></span>,
                subText: <a rel="noreferrer" className={"demo-link"} target={"_blank"} href="https://thinus-bike-shop.web.app/">
                            View the Site <BsArrowRightShort/>
                        </a>,
                projectImage: totem,
                projectBannerImage: particles,
                projectIntroParagraph: <p>
                    This was a very cool project, which I basically used to just test out Three.Js in a normal web project and added some cool animations
                    to top it off. Three.js is a 3D library that makes it possible to use .obj files that were exported from blender or similar 3D projects
                    and use them in your websites.
                </p>,
                projectBodyText: <>
                    <p>
                        The intro section uses 2 simple images, one is a drone shot of a mountain range, and the other is a displacement map which dictates the
                        height in the image. Feed this to Three.js and you can make cool animations and interactions such as the mountain spinning.0
                    </p>
                </>
            }
        case "mediafreaks":
            return {
                intro: <span><small>Marketing site project built with </small> <strong>Laravel and Vue.js</strong></span>,
                subText: <a rel="noreferrer" className={"demo-link"} target={"_blank"} href="https://mediaaddicts.herokuapp.com/">
                            View the Site <BsArrowRightShort/>
                        </a>,
                projectImage: mediafreaks,
                projectBannerImage: mediafreaksBanner,
                projectIntroParagraph: <p>
                    This project was my first freelance site which me and a friend decided to build for a client. The project
                    was meant to be for a online influencer fund me project, where online influencers would create content
                    and people who watch it would send them donations, much like patreon.
                </p>,
                projectBodyText: <>
                    <p>
                        The project is built with Laravel and Vue on top of it. We also
                        discovered  <a rel="noreferrer" target={"_blank"} href="https://lottiefiles.com/">Lotti Files</a> around
                        the time we started the project and I loved using it. I was responsible for all front end tasks. our
                        team of 2 consisted out of a front end strong dev and a backend strong dev. We did not get to finishing the project due
                        to some unfortunate circumstances.
                    </p>
                    <br/>
                    <p>
                        This project challenged me by forcing me to be the designer, UX engineer and the front end developer. It was incredibly fun and
                        gave me so much respect for UI designers. You guys <span className={"u-rock"}>ROCK</span>!
                    </p>
                </>
            }
        case "netflix":
            return {
                intro: <span><small>Netflix Clone built with</small> <strong>React.js</strong></span>,
                subText: <a rel="noreferrer" className={"demo-link"} target={"_blank"} href="https://thinus-netflix-clone.web.app/">
                            View the Site <BsArrowRightShort/>
                        </a>,
                projectImage: netflixSm,
                projectBannerImage: netflixbanner,
                projectIntroParagraph: <p>
                    This was my first big react tutorial course and project. I followed a YouTube tutorial to understand the Layouts and
                    basics of React.js in a real world application and how it all fits. I then extended the functionality to implement a
                    nicer video preview and add a filter to some of the content we received from
                    the <a rel="noreferrer" target={"_blank"} href="https://www.imdb.com/">IMDB API</a>.
                </p>,
                projectBodyText: <>
                    <p>
                        The project was built with React, and I was introduced to reduce and implementing a state. This is also the same
                        implementation that I used to build my portfolio website. I am still learning React and all the in's and out's
                        of it. There are a few things I would like to fix about the project such as the preview links. Due to the
                        inconsistencies in <a rel="noreferrer" target={"_blank"} href="https://www.imdb.com/">IMDB API</a>,
                        all of the videos don't have previews.
                    </p>
                    <br/>
                    <p>
                        This project is my first big real project in React. It taught me a lot about React and the way you can use it. Until I learn more
                        about React, I will probably prefer Vue over React. All in all, it is still a very fun library/framework.
                    </p>
                </>
            }
        case "skyagency":
            return {
                intro: <span><small>Marketing Website built with</small> <strong>Laravel and Vue.js</strong></span>,
                subText: <a rel="noreferrer" className={"demo-link"} target={"_blank"} href="https://skyagency.herokuapp.com/">
                            View the Site <BsArrowRightShort/>
                        </a>,
                projectImage: skyagencysm,
                projectBannerImage: skyagency,
                projectIntroParagraph: <p>
                    This project is still underway and will soon replace
                    their <a rel="noreferrer" target={"_blank"} href="http://www.skyagency.co.za/"> old site</a>. The requirements
                    were pretty simple, build a site to market polygraphs and build a contact page where the client could receive
                    emails from their site.
                </p>,
                projectBodyText: <>
                    <p>
                        This site was fairly simple, it uses Laravel's Mail class to send emails and right now points to a mailtrap account.
                    </p>
                </>
            }
        case "nasa-rover-api":
            return {
                intro: <span><small>Nasa Mars Rover Client with </small> <strong>Vue.js</strong></span>,
                subText: <a rel="noreferrer" className={"demo-link"} target={"_blank"} href="https://nasa-thinus.web.app/">
                            View the Site <BsArrowRightShort/>
                        </a>,
                projectImage: nasaThumb,
                projectBannerImage: nasaBanner,
                projectIntroParagraph: <p>
                    This was something I decided to tackle after Nasa's new rover proved flight was capable on mars.
                    I used the <a rel="noreferrer" target={"_blank"} href="https://api.nasa.gov/">Mars Rover Photos</a> API
                    and had so much fun. I will definitely be adding new features to this site such as saving pictures you
                    thought were interesting and conveying to the user that we are still loading or that there aren't pictures in the data set.
                </p>,
                projectBodyText: <>
                    <p>
                        The hardest part about this site was using the API correctly and implementing an image loading page. There is also a slight issue on the home page,
                        where the hubble api uses http while firebase hosts on https. This causes the api to not communicate with our site and we fallback to a generic
                        home page.
                    </p>
                </>
            }
    }
}

export default filterProjects;
