import React from 'react';
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { IoCallSharp, IoMailOutline, IoPaperPlaneOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <Layout>
            <Seo title="Contact - Uche Anota" description="You can reach me here" />
            <section>
            <h2 className="title contact-title">Get <span className="underline" id="about_me">In</span> Touch</h2>
            <p className="summary">You can reach me through any of the channels below, It will be a pleasure to hear from you.</p>
            <div className="contact-page">   
                    <article className="contact-details">
                        <p><IoCallSharp className="contact-phone" />   Phone: <span>+49 17647600839</span></p>
                        <p><IoMailOutline className="contact-email" /> Email: <span>ucheobi2009@yahoo.com</span></p>
                        <p><IoPaperPlaneOutline className="contact-address" />Address: 29, Dusternbrooker weg, </p>
                        <p className="left-align">24105, Kiel,</p>
                        <p className="left-align">Deutschland</p>    
                    </article>
                    <article className="contact-form">
                        <form action="https://formspree.io/f/xoqydlyq" method="POST">
                            <div className="form-group">
                            <div className="form-members">
                                <input type="text" 
                                        placeholder="name" 
                                        className="form-control form-name" 
                                        name="name"
                                    />
                                <input type="email" 
                                    placeholder="email" 
                                    className="form-control form-email"
                                    name="email" 
                                />
                            </div>
                                
                                <input type="text" 
                                    placeholder="subject" 
                                    className="form-control"
                                    name="subject"
                                />

                                <textarea
                                    rows="9"
                                    placeholder="message"
                                    className="form-control"
                                    name="message">     
                                </textarea>
                            </div>

                            <button type="submit" className="submit-btn btn">
                                Send Message
                            </button>
                        </form>
                    </article>
                </div> 
            </section>
        </Layout>
    )
}

export default Contact;