import React from 'react';

export default function Footer(){
    const currYear = new Date().getFullYear();
    return(
        <footer className="bg-dark text-light py-3">
        <p className="text-center">
            Copyright &copy; {currYear} amazon.com
        </p>
        </footer>
    );
}
