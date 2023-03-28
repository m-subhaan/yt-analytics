import React from "react";
import { Link } from "react-router-dom";
import { FaGem } from 'react-icons/fa';



const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center mt-5">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                        <label className="form-label" for="form5Example21">Email address</label>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>

                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>

                    {/* <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section> */}
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <FaGem classNameName="me-2" />Company name
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Products
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Angular</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">React</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Vue</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Laravel</a>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Pricing</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Settings</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Orders</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Help</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                    <p>
                                        <i className="fas fa-envelope me-3"></i>
                                        info@example.com
                                    </p>
                                    <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}>
                    © 2023 Copyright: &nbsp;
                    <Link to="/" className="text-white">YT Analytics</Link>
                </div>
            </footer>
        </>
    );
};

export default Footer;
