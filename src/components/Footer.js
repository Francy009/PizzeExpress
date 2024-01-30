import React from "react";
import './footer.css'


function Footer() {
    return (
        <footer className="py-3 border-top footer">
            <div className="container text-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24">
                        <use href="#bootstrap"></use>
                    </svg>
                </a>
                <span>© 2024 Company, Inc</span>
            </div>
        </footer>
    )
}

export default Footer;