import CartPage from "./CartPage";
import { Link } from "react-router-dom";

function ProductDescription () {
    return (
        <>
            <main>
                <div className="product-flash-sales-description">
                    <h3>Flash sale / <span>Mercedes Benz 12v</span></h3>
                    <div className="item-description">
                        <section>
                            <img src="/pobo jeep 2 (1).png" alt="jeep" />
                            <div>
                                <img src="/pobo jeep 2 (1).png" alt="jeep" />
                                <img src="/kiddies car5 1.png" alt="jeep" />
                                <img src="/kiddies car 6 1.png" alt="jeep" />
                                <img src="/8 300.png" alt="jeep" />
                            </div>
                        </section>
                        <section>
                            <h3>Mercedes Benz 12V, battery operated ride</h3>
                            <div>
                                <img src="/Frame 60927.svg" alt="stars" />
                                <span>(56)</span>
                            </div>
                            <h4>$270.00</h4>
                            <div>
                                <h5>$300.00</h5>
                                <h6>25% off</h6>
                            </div>
                            <p>Color : Mercedes Benz Cls-black</p>
                            <div>
                                <img src="/kiddies car4 1.png" alt="jeep" />
                                <img src="/kiddies car3 1.png" alt="jeep" />
                                <img src="/kiddies car2 1.png" alt="jeep" />
                                <img src="/kiddies car1 1.png" alt="jeep" />
                            </div>
                            <div>
                                <div>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <p>Only <span>10 items</span> left <br/>
                                Don’t miss it</p>
                            </div>
                            <div>
                                <button>Buy this item</button>
                                <button><Link to='/CartPage' className="link"> Add to cart</Link></button>
                            </div>
                            <div>
                                <div>
                                    <img src="/sms.svg" alt="chat icon" />
                                    <p>Chat</p>
                                </div>
                                <span></span>
                                <div>
                                    <img src="/favorite.svg" alt="heart icon" />
                                    <p>Wishlist</p>
                                </div>
                                <span></span>
                                <div>
                                    <img src="/share.svg" alt="share icon" />
                                    <p>Share</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <span className="division-line"></span>
                    <div className="item-description-text">
                        <section>
                            <p>Description</p>
                            <p>Review</p>
                            <p>Best seller</p>
                        </section>
                        <section>
                            <h4>Product Description</h4>
                            <ul>
                                <li><span>【REALISTIC AND STYLISH】</span>
                                  Our officially-licensed mercedes benz
                                   kids car is scaled down to the ideal
                                    size for kids’ driving mode. This
                                     colorful and streamlined toy will
                                      undoubtedly become a favorite among
                                       children due to its eye-catching
                                        appearance. We are dedicated to
                                         ensuring your children receive
                                          an authentic driving experience.
                                           The size of this toddler car is
                                            23.6" x 40.7" x 20", making it
                                             great for toddlers above 12 Months
                                              old.
                                </li>
                                <li><span>【HIGH PERFORMANCE AND SAFETY DESIGN】</span>
                                Our kids ride on toys is equipped with the
                                 bright LED lights, MP3 multifunctional player,
                                  built-in music, voltage display, USB and AUX
                                   connectors, volume adjustment, double modes
                                    (music and radio), TF card slot, and the
                                     horn. This kids electric car allows to play
                                      your favorite music, stories and
                                       broadcasting to create an enjoyable
                                        riding atmosphere
                                </li>
                                <li><span>【DUAL CONTROL MODE】</span>
                                This ride on car with remote control
                                 allows your kids to drive this 12
                                  volt Mercedes Benz car independently
                                   with the steering wheel and pedal.
                                    Or parents can use the 2.4G remote 
                                    control to safely guide them when your 
                                    kid learns to drive it.
                                </li>
                                <li><span>【SAFETY DRIVING ON】</span>
                                This kids electric vehicles made of a non-toxic, 
                                durable, non-chipping plastic with rounded edges. 
                                Equipped with a big seat with belt which allows 
                                comfortable and safe driving experience.Wheels 
                                designed with knobby tread and spring suspension 
                                are nonslip, wear-resistant, explosion-proof, and 
                                shockproof, ensuring smooth and comfortable riding 
                                on both flat and tough terrains.
                                </li>
                                <li><span>【PERFECT GIFTS & AFTER-SALE GUARANTEED】</span>
                                LITTLE BROWN BOX toddler electric car 
                                well-packaged,it is a good choice to be served 
                                as boys or girls' birthday gifts or Christmas 
                                gifts. All Little Brown Box toys meet the 
                                standard of ASTM 
                                (American Society for Testing and Materials). 
                                If any reason you are not completely satisfied 
                                with this kids ride on car toys, please contact 
                                us for a replacement or full refund.
                                </li>
                            </ul>
                            <ul>
                                <li>Product Dimensions-  
                                    <span> 40.7 x 23.58 x 20 inches 
                                        (103.4 x 59.9 x 50.8 cm)Item 
                                    </span>
                                </li>
                                <li>Weight-  
                                    <span>
                                     61 pounds (27.45 kg)
                                    </span>
                                </li>
                                <li>Country of Origin- 
                                    <span>
                                     China
                                    </span>
                                </li>
                                <li>Manufacturer recommended- 
                                    <span>
                                     age 0 - 3 years
                                    </span>
                                </li>
                                <li>Batteries- 
                                    <span>
                                     1 12V batteries required. (included)
                                    </span>
                                </li>
                                <li>Manufacturer- 
                                    <span>
                                     CHIZHOU KUAILEDA TOYS CO.,LTD
                                    </span>
                                </li>
                                <li>Date First Available- 
                                    <span>
                                     2021-04-15 02:12:31
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
};

export default ProductDescription;