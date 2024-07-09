function CheckoutPage() {
    return (
        <>
            <main>
                <div className="checkout">
                    <h4>Checkout</h4>
                    <div className="checkout-inner">
                        <section>
                            <div className="checkout-div">
                                <h5>How would your like to get your order?</h5>
                                <div>
                                    <button>Delivery</button>
                                    <button>Cash on delivery</button>
                                </div>
                            </div>
                            <div className="checkout-div">
                                <h5>Enter your details</h5>
                                <form action="POST" className="double-form" >
                                    <input type="text" placeholder="First name" />
                                    <input type="text" placeholder="Last name" />
                                </form>
                                <form action="POST" className="single-form">
                                    <input type="text" placeholder="Email address" />
                                </form>
                                <form action="POST" className="single-form">
                                    <input type="text" placeholder="Address" />
                                </form>
                                <form action="POST" className="double-form">
                                    <input type="text" placeholder="City" />
                                    <input type="text" placeholder="Postal code" />
                                </form>
                                <form action="POST" className="double-form">
                                        <input type="text" placeholder="State/Province" />
                                        <img src="/arrow_drop_down.svg" alt="arrow down" />
                                        <input type="text"  placeholder="Country"/>
                                        <img src="/arrow_drop_down.svg" alt="arrow down" />
                                </form>
                                <button className="save-button">Save and continue</button>
                            </div>
                        </section>
                        <section className="checkout-summary">
                            <div className="checkout-div check-sum">
                                <h5>Summary</h5>
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
                                <p className="check-sum-p">Promo code <img src="/help.svg" alt="question mark icon" /></p>
                                <form action="POST" className="single-form">
                                    <input type="text" placeholder="Enter your promo code" />
                                </form>
                                <div className="cart-description-total">
                                    <h3>Total</h3>
                                    <h5>$315.00</h5>
                                </div>
                            </div>
                            <div className="checkout-div arrival">
                                <h2>Arrives mon, sept 10 - fri, sept 15  </h2>
                                <div>
                                    <img src="/pobo jeep 2.png" alt="jeep" />
                                    <div className="inner-arrival">
                                        <h6>Mercedes Benz Cls</h6>
                                        <p>battery operated ride</p>
                                        <p>Color: black</p>
                                        <p>Quantity: 1</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="payment">
                    <section className="checkout-div">
                        <h4>Payment</h4>
                        <div className="inner-payment">
                            <h6>Billing country/Region <img src="/help.svg" alt="help icon" /></h6>
                            <p>Nigeria <span>Edit</span></p>
                            <h6> <input type="checkbox" name="check" id="check" /> Do you have a gift card, product voucher or promo code?</h6>
                            <div className="payment-method">
                                <h5>Select payment method</h5>
                                <div className="input-image">
                                    <input type="checkbox" name="check" id="check" className="image-check-payment" />
                                    <img src="/credit_card.svg" alt="card icon" />
                                    <p>Credit or Debit card</p>
                                </div>
                                <div className="input-image">
                                    <input type="checkbox" name="check" id="check" className="image-check-payment" />
                                    <img src="/paypal_logo.svg.svg" alt="paypal icon" />
                                </div>
                                <div className="input-image">
                                    <input type="checkbox" name="check" id="check" className="image-check-payment" />
                                    <div>
                                        <img src="/flat-color-icons_google.svg" alt="google icon" />
                                        <p>pay</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-payment-section">
                                <h4>Add card</h4>
                                <div className="form-card-payment">
                                    <form action="POST">
                                        <h6>Card Number</h6>
                                        <input type="text" name="" id="" placeholder="0000 - 0000- 0000 - 0000" />
                                    </form>
                                    <form action="POST">
                                        <h6>Expiration date</h6>
                                        <input type="text" name="" id="" placeholder="MM/YY" />
                                    </form>
                                    <form action="POST">
                                        <h6>cvc</h6>
                                        <input type="text" name="" id="" placeholder="xxx" />
                                    </form>
                                </div>
                                <div className="save-later">
                                    <input type="checkbox" name="" id="" />
                                    <p>Save card for later</p>
                                    <img src="/help.svg" alt="help icon" />
                                </div>
                            </div>
                            <div className="billing-address">
                                <input type="checkbox" name="" id="" />
                                <p>Billing address same as shipping.</p>
                            </div>
                        </div>
                    </section>
                    <section className="checkout-div last-section">
                        <h4>Order review</h4>
                        <p>By clicking The “place order” button, you confirm that you have read, understand, and accept our <span> Terms of Use</span>, <span>Terms of Sale</span>, <span>Privacy Policy</span>, and <span>Return Policy</span></p>
                        <button>Place order</button>
                    </section>
                </div>
            </main>
        </>
    )
};

export default CheckoutPage;