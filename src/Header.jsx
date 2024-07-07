import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header () {
    const [isScrolled, setIsScrolled] = useState(false);
    // const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

//   const toggleMobileNav = () => {
//     setIsMobileNavOpen(!isMobileNavOpen);
//   };

    return (
        <>
            <header>
                <div className="top-header">
                    <section>
                        <img src="/fluent_call-20-regular.svg" alt="phone" />
                        <p>+234903874698</p>
                    </section>
                    <section>
                        <p>Get 10% off on selected items | Shop Now</p>
                    </section>
                    <section>
                        <div>
                            <p>Eng</p>
                            <img src="/mingcute_down-line.svg" alt="down arrow" />
                        </div>
                        <div>
                            <p>Location</p>
                            <img src="/mingcute_down-line.svg" alt="down arrow" />
                        </div>
                    </section>
                </div>
                <div className={`${isScrolled ? "scrolled" : ""} bottom-header `}>
                    <section>
                        <img src="/Logo.svg" alt="logo" />
                    </section>
                    <section>
                        <nav>
                            <ul>
                                <li>Categories <img src="/mingcute_down-line.svg" alt="down arrow" /></li>
                                <li>Deals</li>
                                <li>What's New</li>
                                <li>Delivery</li>
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <form action="POST">
                            <input type="text" placeholder="Search product"/>
                            <img src="/circum_search.svg" alt="search icon" />
                        </form>
                    </section>
                    <section>
                        <div>
                            <img src="/line-md_account.svg" alt="person icon" />
                            <p>Account</p>
                        </div>
                        <div>
                            <img src="/bytesize_cart.svg" alt="cart icon" />
                            <p>Cart</p>
                        </div>
                    </section>
                </div>
            </header>
        </>
    )
};

export default Header;