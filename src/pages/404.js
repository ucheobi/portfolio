import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from "../components/SEO";

const Error = () => {
    return (
        <Layout>
        <Seo title="404 Error" description="Bad Request" />
            <main className="error-page">
                <div className="error-container">
                    <h2>oops!!!...try to use the links above</h2>
                    <Link to="/" className="btn">
                        back to homepage
                    </Link>
                </div>
            </main>
        </Layout>  
    );
}

export default Error;

