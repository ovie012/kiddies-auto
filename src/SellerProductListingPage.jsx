import React, { useState, useEffect, useRef } from 'react';


function SellerProductListingPage() {

    // scroll logic 
    const scrollContainerRef = useRef(null);

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

    // time logic
    const [time, setTime] = useState({ hours: 7, minutes: 10, seconds: 43 });

    useEffect(() => {
        const countdown = () => {
        setTime((prevTime) => {
            let { hours, minutes, seconds } = prevTime;

            if (seconds > 0) {
            seconds -= 1;
            } else {
            seconds = 59;
            if (minutes > 0) {
                minutes -= 1;
            } else {
                minutes = 59;
                if (hours > 0) {
                hours -= 1;
                } else {
                hours = 0;
                minutes = 0;
                seconds = 0;
                }
            }
            }

            return { hours, minutes, seconds };
        });
        };

        const timerId = setInterval(countdown, 1000);

        return () => clearInterval(timerId);
    }, []);

    const formatTime = (time) => (time < 10 ? `0${time}` : time); 


    // products 
    const allProducts = [
        { id: 1, imgSrc: '/download 2.png', title: 'Ferrari, battery operated ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 2, imgSrc: '/small car6 2.png', title: 'Rolls Royce, battery operated ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 3, imgSrc: '/bike3 2.png', title: 'Kiddies power bike, battery operated ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 4, imgSrc: '/pobo jeep 2.png', title: 'Mercedes Benz 12V, battery operated ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 5, imgSrc: '/bicycle6 2.png', title: 'Rambo bicycle, for kids', price: '$100.00', originalPrice: '$101.00' },
        { id: 6, imgSrc: '/3 95392.png', title: 'Benz AMG G63 electric ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 7, imgSrc: '/1 7216.png', title: 'Lamborghini Urus, battery operated ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 8, imgSrc: '/4 466.png', title: '24V Mercedes Benz Unimog', price: '$100.00', originalPrice: '$101.00' },
        { id: 9, imgSrc: '/download 2.png', title: 'Ferrari, battery operated ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 10, imgSrc: '/small car6 2.png', title: 'Rolls Royce, battery operated ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 11, imgSrc: '/bike3 2.png', title: 'Kiddies power bike, battery operated ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 12, imgSrc: '/pobo jeep 2.png', title: 'Mercedes Benz 12V, battery operated ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 13, imgSrc: '/bicycle6 2.png', title: 'Rambo bicycle, for kids', price: '$100.00', originalPrice: '$101.00' },
        { id: 14, imgSrc: '/3 95392.png', title: 'Benz AMG G63 electric ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 15, imgSrc: '/1 7216.png', title: 'Lamborghini Urus, battery operated ride', price: '$100.00', originalPrice: '$101.00' },
        { id: 16, imgSrc: '/4 466.png', title: '24V Mercedes Benz Unimog', price: '$100.00', originalPrice: '$101.00' },
      ];
      
      const getRandomProducts = (currentProducts, allProducts, count) => {
        const remainingProducts = allProducts.filter(p => !currentProducts.includes(p));
        const randomProducts = [];
        while (randomProducts.length < count && remainingProducts.length > 0) {
          const randomIndex = Math.floor(Math.random() * remainingProducts.length);
          randomProducts.push(remainingProducts.splice(randomIndex, 1)[0]);
        }
        return randomProducts;
      };
      
        const [displayedProducts, setDisplayedProducts] = useState(getRandomProducts([], allProducts, 4));
        const [loadCount, setLoadCount] = useState(1);
      
        const handleLoadMore = () => {
          if (loadCount < 10) {
            const newProducts = getRandomProducts(displayedProducts, allProducts, 4);
            setDisplayedProducts([...displayedProducts, ...newProducts]);
            setLoadCount(loadCount + 1);
          }
        };

    return (
        <>
            <main>
                <div className="hero">
                    <section className="hero-text">
                        <h2>Luxury Rides for Little Drivers</h2>
                        <p>Our kids' luxury automobiles are designed to offer an unparalleled
                             driving experience that
                             captivates both children and parents alike.
                        </p>
                        <button>Learn more</button>
                        {/* <div><span></span><span></span><span></span><span></span></div> */}
                    </section>
                    <section className="hero-banner">
                        <img src="/hero-image-1.png" alt="kids car" />
                    </section>
                </div>
                <div className="filter">
                    <section>
                        <p>Compatible</p>
                        <p>Jeep</p>
                        <p>Motorbike</p>
                        <p>Bicycle</p>
                        <p>Brand</p>
                    </section>
                    <section>
                        <p>Sort by<img src="/mingcute_down-line.svg" alt="arrow down" /></p>
                    </section>
                </div>
                <div className="flash-sales">
                    <section className="flash-sales-header">
                        <div>
                            <img src="/bolt.svg" alt="bolt icon" />
                            <h4>Flash Sale</h4>   
                            <div>
                                <h5>{formatTime(time.hours)}</h5>
                                <p>:</p>
                                <h5>{formatTime(time.minutes)}</h5>
                                <p>:</p>
                                <h5>{formatTime(time.seconds)}</h5>
                            </div>
                        </div>
                        <div>
                            <img src="/east.svg" alt="back arrow" onClick={scrollLeft} />
                            <img src="/Arrow 1.svg" alt="forward arrow" onClick={scrollRight} />
                        </div>
                    </section>
                    <section className="flash-sales-body" ref={scrollContainerRef}>
                        <div className="flash-sales-product">
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
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                                <div>
                                    <img src="/Frame 60962.svg" alt="bar image" />
                                    <p>7/10 Sales</p>
                                </div>
                            </section>
                        </div>
                        <div className="flash-sales-product">
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
                                    <p>$270.00</p>
                                    <span>$300.00</span>
                                </div>
                                <div>
                                    <img src="/Frame 60962.svg" alt="bar image" />
                                    <p>7/10 Sales</p>
                                </div>
                            </section>
                        </div>
                        <div className="flash-sales-product">
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
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                                <div>
                                    <img src="/Frame 60962.svg" alt="bar image" />
                                    <p>7/10 Sales</p>
                                </div>
                            </section>
                        </div>
                        <div className="flash-sales-product">
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
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                                <div>
                                    <img src="/Frame 60962.svg" alt="bar image" />
                                    <p>7/10 Sales</p>
                                </div>
                            </section>
                        </div>
                        <div className="flash-sales-product">
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
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                                <div>
                                    <img src="/Frame 60962.svg" alt="bar image" />
                                    <p>7/10 Sales</p>
                                </div>
                            </section>
                        </div>
                        <div className="flash-sales-product">
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
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                                <div>
                                    <img src="/Frame 60962.svg" alt="bar image" />
                                    <p>7/10 Sales</p>
                                </div>
                            </section>
                        </div>
                        <div className="flash-sales-product">
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
                                    <p>$270.00</p>
                                    <span>$300.00</span>
                                </div>
                                <div>
                                    <img src="/Frame 60962.svg" alt="bar image" />
                                    <p>7/10 Sales</p>
                                </div>
                            </section>
                        </div>
                        <div className="flash-sales-product">
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
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                                <div>
                                    <img src="/Frame 60962.svg" alt="bar image" />
                                    <p>7/10 Sales</p>
                                </div>
                            </section>
                        </div>
                        <div className="flash-sales-product">
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
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                                <div>
                                    <img src="/Frame 60962.svg" alt="bar image" />
                                    <p>7/10 Sales</p>
                                </div>
                            </section>
                        </div>
                        <div className="flash-sales-product">
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
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                                <div>
                                    <img src="/Frame 60962.svg" alt="bar image" />
                                    <p>7/10 Sales</p>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                <div className="best-deals">
                    <section className="best-deals-header">
                        <h4>Today's best deal<br/> for you</h4>
                        <p>Best seller</p>
                        <p>Special discount</p>
                        <p>Official store</p>
                        <p>Coveted product</p>
                    </section>
                    <section className="best-deals-body">
                        <div className="best-deals-product">
                            <section>
                                <img src="/download 2.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Ferrari, battery operated<br/> ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <span>(54)</span>
                                </div>
                                <div>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        <div className="best-deals-product">
                            <section>
                                <img src="/small car6 2.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Rolls Royce, battery< br/> operated ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <span>(54)</span>
                                </div>
                                <div>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        <div className="best-deals-product">
                            <section>
                                <img src="/bike3 2.png" alt="car image" />
                                <img src="/favorite (1).svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Kiddies power bike,<br/> battery operated ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <span>(54)</span>
                                </div>
                                <div>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        <div className="best-deals-product">
                            <section>
                                <img src="/pobo jeep 2.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Mercedes Benz 12V,<br/> battery operated ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <span>(54)</span>
                                </div>
                                <div>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        {/* <div className="best-deals-product">
                            <section>
                                <img src="/bicycle6 2.png" alt="car image" />
                                <img src="/favorite (1).svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Rambo bicycle, for<br/> kids</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <span>(54)</span>
                                </div>
                                <div>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        <div className="best-deals-product">
                            <section>
                                <img src="/3 95392.png" alt="car image" />
                                <img src="/favorite (1).svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Benz AMG G63<br/> electric ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <span>(54)</span>
                                </div>
                                <div>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        <div className="best-deals-product">
                            <section>
                                <img src="/1 7216.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>Lamborghini Urus,<br/> battery operated ride</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <span>(54)</span>
                                </div>
                                <div>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div>
                        <div className="best-deals-product">
                            <section>
                                <img src="/4 466.png" alt="car image" />
                                <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                                <div>
                                    <p>24V Mercedes Benz<br/> Unimog</p>
                                    <img src="/Group.svg" alt="cart icon" />
                                </div>
                                <div>
                                    <img src="/Frame 60927.svg" alt="stars rating image" />
                                    <span>(54)</span>
                                </div>
                                <div>
                                    <p>$100.00</p>
                                    <span>$101.00</span>
                                </div>
                            </section>
                        </div> */}
                        {displayedProducts.map(product => (
                        <div key={product.id} className="best-deals-product">
                            <section>
                            <img src={product.imgSrc} alt="car image" />
                            <img src="/favorite.svg" alt="favorite icon" />
                            </section>
                            <section>
                            <div>
                                <p>{product.title}</p>
                                <img src="/Group.svg" alt="cart icon" />
                            </div>
                            <div>
                                <img src="/Frame 60927.svg" alt="stars rating image" />
                                <span>(54)</span>
                            </div>
                            <div>
                                <p>{product.price}</p>
                                <span>{product.originalPrice}</span>
                            </div>
                            </section>
                        </div>
                        ))}
                    </section>
                    {loadCount < 10 && <button className="best-deals-button" onClick={handleLoadMore}>Load more</button>}
                    {/* <button className="best-deals-button">Load more</button> */}
                </div>
            </main>
        </>
    )
}

export default SellerProductListingPage;