import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center'>This is blog Page</h1>
            <div className='mx-auto w-50 mb-3'>
                <h2>Difference between Nodejs and JavaScript?</h2>
                <h6> Javascript is a programming language that is used for writing scripts on the website and NodeJS is a Javascript runtime environment.Javascript basically used on the client-side but NodeJS mostly used on the server-side.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox and other side V8 is the Javascript engine inside of node.js that parses and runs Javascript.</h6>
            </div>
            <div className='mx-auto w-50 mb-3'>
                <h2>Differences between sql and nosql databases.</h2>
                <h6> SQL is relational database management system and nosql is Non-relational or distributed database system. SQL databases have fixed or static or predefined schema but nosql have dynamic schema. SQL is vertically Scalable and nosql is horizontally scalable. Sql databases are not suited for hierarchical data storage and nosql databases are best suited for hierarchical data storage.</h6>
            </div>
            <div className='mx-auto w-50 mb-3'>
                <h2>What is the purpose of `jwt` and how does it work?</h2>
                <h6> JWT is a mechanism to verify the owner of JSON data. It is an encoded and url-safe string that can contain an unlimited amount of data and is crypto signed. How does jwt work: we have client and a server.The client wants to access some protected data on our server, but the server knows users cannot be trusted. The server only wants to give the data to a trustworthy user. So our user sends a request to our server along with data to verify who it is. This user data was accepted as valid by the server. Now instead of saving this user data, the server instead creates a token. This token is returned to the user and it is up to the client to store this data and send it along as required for any requests to the server. The next time our user makes a request along a secure route, it does just that. It sends along the job token. But our server knows not to trust the user. Because users cannot be trusted.So our server verifies this token is who it says it is from and that it has not been tampered with.</h6>
            </div>
        </div>
    );
};

export default Blogs;