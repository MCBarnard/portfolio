import payfastMarketing from "./../assets/pf-marketing.jpg";
import payfastMarketingBanner from "./../assets/payfastBanner.png";
import payfastBlackFriday from "./../assets/bfcm.png";
import payfastBlackFriday1 from "./../assets/PayFastBFCM.png";
import totem from "./../assets/totem.png";
import particles from "./../assets/particlesBanner.png";
import mediafreaks from "./../assets/thumbnail-mediaAddicts.jpg";
import mediafreaksBanner from "./../assets/mediafreaks.png";
import netflixSm from "./../assets/netflix-clone.png";
import netflixbanner from "./../assets/netflixbanner.png";
import skyagencysm from "./../assets/sky-thumbnail.jpg";
import skyagency from "./../assets/skyagency.png";
import { BsArrowRightShort } from "react-icons/bs";

function filterProjects(project) {
    switch (project) {
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
        case "black-friday-cm":
            return {
                intro: <span><small>Black Friday Statistics for</small> <strong>PayFast</strong></span>,
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
    }
}

export default filterProjects;
