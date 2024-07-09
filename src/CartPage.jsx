import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';

function CartPage () {

     // scroll logic 
     const scrollContainerRef = useRef(null);
     const [canScrollLeft, setCanScrollLeft] = useState(false);
     const [canScrollRight, setCanScrollRight] = useState(true);
 
     const checkScrollPosition = () => {
         const container = scrollContainerRef.current;
         if (container) {
             setCanScrollLeft(container.scrollLeft > 0);
             setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
         }
     };
 
     const scrollLeft = () => {
         if (scrollContainerRef.current) {
             scrollContainerRef.current.scrollBy({ left: -0.8 * window.innerWidth, behavior: 'smooth' });
         }
     };
 
     const scrollRight = () => {
         if (scrollContainerRef.current) {
             scrollContainerRef.current.scrollBy({ left: 0.8 * window.innerWidth, behavior: 'smooth' });
         }
     };
 
     useEffect(() => {
         checkScrollPosition();
         const container = scrollContainerRef.current;
         container.addEventListener('scroll', checkScrollPosition);
         return () => container.removeEventListener('scroll', checkScrollPosition);
     }, []);

    return (
        <>
            <main>
                <div className="cart-product">
                    <h4>Cart</h4>
                    <div className="cart-description">
                        <section>
                            <div className="cart-description-image">
                                <img src="/pobo jeep 2.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </div>
                            <div>
                                <div>
                                    <h4>Mercedes Benz<br/> Cls</h4>
                                    <h5>$270.00</h5>
                                </div>
                                <p>battery operated ride</p>
                                <p>Age 1-3 years</p>
                                <p>Color black</p>
                                <div className="icons-click">
                                    <div>
                                        <img src="/favorite.svg" alt="like icon" />
                                        <img src="/delete.svg" alt="delete icon" />
                                    </div>
                                    <div className="button-product">
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h4>Summary</h4>
                            <div>
                                <p>Subtotal <img src="/help.svg" alt="question mark icon" /> </p>
                                <h6>$270.00</h6>
                            </div>
                            <div>
                                <p>Estimated delivery & handling</p>
                                <h6>$40.00</h6>
                            </div>
                            <div>
                                <p>Estimated Taxes <img src="/help.svg" alt="question mark icon" /></p>
                                <h6>$5.00</h6>
                            </div>
                            <p>Promo code <img src="/help.svg" alt="question mark icon" /></p>
                            <form action="POST">
                                <input type="text" placeholder="Enter your promo code" />
                            </form>
                            <div className="cart-description-total">
                                <h3>Total</h3>
                                <h5>$315.00</h5>
                            </div>
                            <div className="cart-description-buttons">
                                <button><Link to="/CheckoutPage" className='link'>Check out your cart</Link></button>
                                <button><img src="/paypal_logo.svg.svg" alt="paypal logo" /></button>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="cart-wishlist">
                    <h4>Wishlist</h4>
                    <div className="wishlist-product">
                        <section>
                            <div className="wishlist-product-image">
                                <img src="/8 299.png" alt="car image" />
                                <img src="/favorite (1).svg" alt="heart icon" />
                            </div>
                            <div className="wishlist-product-details">
                                <div>
                                    <p>Mercedes Benz 12V, battery operated ride</p>
                                    <h5>$101.00</h5>
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="star rating" />
                                    <span>(54)</span>
                                </div>
                                <button>Add to cart</button>
                            </div>
                        </section>
                        <section>
                            <div className="wishlist-product-image">
                                <img src="/1 7216.png" alt="car image" />
                                <img src="/favorite (1).svg" alt="heart icon" />
                            </div>
                            <div className="wishlist-product-details">
                                <div>
                                    <p>Lamborghini Urus, battery operated ride</p>
                                    <h5>$101.00</h5>
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="star rating" />
                                    <span>(54)</span>
                                </div>
                                <button>Add to cart</button>
                            </div>
                        </section>
                    </div>
                    <h6>view all wishlist</h6>
                </div>
                <div className="flash-sales">
                    <section className="flash-sales-header">
                        <div>
                            <h4>Recommendations<br/> for you</h4>
                        </div>
                        <div>
                            <img src="/east.svg" alt="back arrow" onClick={scrollLeft} style={{ opacity: canScrollLeft ? 1 : 0.5, cursor: canScrollLeft ? 'pointer' : 'default' }} />
                            <img src="/Arrow 1.svg" alt="forward arrow" onClick={scrollRight} style={{ opacity: canScrollRight ? 1 : 0.5, cursor: canScrollRight ? 'pointer' : 'default' }} />
                        </div>
                    </section>
                    <section className="flash-sales-body" ref={scrollContainerRef}>
                        <Link to='/ProductDescription'> <div className="flash-sales-product">
                            <section>
                                <img src="/jeep2 2.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Thar 888 jeep, battery<br/> operated jeep.</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <h6>(54)</h6>
                                </div>
                                <div className='cart-flash'>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        </Link>
                        <Link to='/ProductDescription'> <div className="flash-sales-product">
                            <section>
                                <img src="/pobo jeep 2.png" alt="car image" />
                                <img src="/favorite (1).svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Mercedes Benz 12V,<br/> battery operated ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <h6>(54)</h6>
                                </div>
                                <div className='cart-flash'>
                                    <p>$270.00</p>
                                    <span>$300.00</span>
                                </div>
                            </section>
                        </div>
                        </Link>
                        <Link to='/ProductDescription'> <div className="flash-sales-product">
                            <section>
                                <img src="/bike4 2.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>super bike, battery<br/> operated</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <h6>(54)</h6>
                                </div>
                                <div className='cart-flash'>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        </Link>
                        <Link to='/ProductDescription'> <div className="flash-sales-product">
                            <section>
                                <img src="/2 23259.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Rolls Royce, battery<br/> operated ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <h6>(54)</h6>
                                </div>
                                <div className='cart-flash'>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        </Link>
                        <Link to='/ProductDescription'> <div className="flash-sales-product">
                            <section>
                                <img src="/6 38.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Mercedes Benz 12V,<br/> battery operated ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <h6>(54)</h6>
                                </div>
                                <div className='cart-flash'>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        </Link>
                        <Link to='/ProductDescription'> <div className="flash-sales-product">
                            <section>
                                <img src="/jeep2 2.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Thar 888 jeep, battery<br/> operated jeep.</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <h6>(54)</h6>
                                </div>
                                <div className='cart-flash'>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        </Link>
                        <Link to='/ProductDescription'> <div className="flash-sales-product">
                            <section>
                                <img src="/pobo jeep 2.png" alt="car image" />
                                <img src="/favorite (1).svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Mercedes Benz 12V,<br/> battery operated ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <h6>(54)</h6>
                                </div>
                                <div className='cart-flash'>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        </Link>
                        <Link to='/ProductDescription'> <div className="flash-sales-product">
                            <section>
                                <img src="/bike4 2.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>super bike, battery<br/> operated</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <h6>(54)</h6>
                                </div>
                                <div className='cart-flash'>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        </Link>
                        <Link to='/ProductDescription'> <div className="flash-sales-product">
                            <section>
                                <img src="/2 23259.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Rolls Royce, battery<br/> operated ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <h6>(54)</h6>
                                </div>
                                <div className='cart-flash'>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        </Link>
                        <Link to='/ProductDescription'> <div className="flash-sales-product">
                            <section>
                                <img src="/6 38.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Mercedes Benz 12V,<br/> battery operated ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <h6>(54)</h6>
                                </div>
                                <div className='cart-flash'>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        </Link>
                    </section>
                </div>
            </main>
        </>
    )
};

export default CartPage;