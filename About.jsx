import React from 'react'
// import '../App.css';

export default function About() {
    return (
        <div className="About">
            <h2>About me</h2>
            <p>
                Myself Abhishek Choudhary, I'm a student persuing MCA from JAMIA MILLIA ISLIMIA, New Delhi.<br></br> 
                I have learnt and explored my experience on this project. 
                I also had access to learning tools like online resources, textbook material and library resources which helped me to understand new things effectively. 
                While working on project such as this, I exercised a great opportunity of developing and enhancing my developer skills effectively and efficiently.<br></br>
                Please visit my <a href="https://www.linkedin.com/in/abhi9698" rel="noreferrer" target="_blank">Linkedin</a> profile for more information.
            </p>
            <h2>About project</h2>
            <p>
                This is a e-commerce app developed in React.js . React breaks a web-page int different components and makes easy to work on these components which makes my app quite amazing.<br></br>
                you can customize any component and make it more effective.
            </p>
            <h5>React (JavaScript library)</h5>
            <p>
                React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components.
                It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
                However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for
                routing, as well as certain client-side functionality.</p>
            <h5>Components</h5>
            <p>
                React code is made of entities called components. Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass in values that are known as "props":
            </p>
            <h5>Virtual DOM</h5>
            <p>Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache,
                computes the resulting differences, and then updates the browser's displayed DOM efficiently.This process is called reconciliation.
                This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change.
                This selective rendering provides a major performance boost. It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.
            </p>
        </div>
    )
}