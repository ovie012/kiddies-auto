function Footer () {
    return (
        <>
            <footer>
                <section className="first-footer">
                    <img src="/Logo.svg" alt="logo" />
                    <p>Discover the ultimate in kids' luxury automobiles.</p>
                    <div>
                        <img src="/Vector.svg" alt="facebook icon" />
                        <img src="/Vector (1).svg" alt="instagram icon" />
                        <img src="/Vector (2).svg" alt="linkedin icon" />
                        <img src="/Vector (3).svg" alt="twitter icon" />
                    </div>
                </section>
                <section className="second-footer">
                    <div className="first-inner-footer">
                        <nav>
                            <ul>
                                <h4>Useful Links</h4>
                                <li>Delivery</li>
                                <li>Account</li>
                                <li>Cart</li>
                                <li>Products</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="middle-inner-footer">
                        <nav>
                            <ul>
                                <h4>Category</h4>
                                <li>Compatible</li>
                                <li>Jeep</li>
                                <li>Motorbike</li>
                                <li>Bicycle</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="last-inner-footer">
                        <nav>
                            <ul>
                                <h4>Contact Info</h4>
                                <li>25marina street, Lagos<br/> island</li>
                                <li>Email-<br/> Kiddiesauto@gmail.com</li>
                                <li>Whatsapp- +234 456 753 8765</li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </footer>
        </>
    )
};

export default Footer;