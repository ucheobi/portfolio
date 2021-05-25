import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Error = () => {
    return (
        <Layout>
            <main className="error-page">
                <div className="error-container">
                    <h2>oops!!!...try to use the links above(^_^)</h2>
                    <Link to="/" className="btn">
                        back to homepage
                    </Link>
                </div>
            </main>
        </Layout>  
    );
}

export default Error;

