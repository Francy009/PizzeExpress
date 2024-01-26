import React from "react";
import './footer.css'


function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top footer">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24">
                        <use href="#bootstrap"></use>
                    </svg>
                </a>
                <span className="text-center p-3">© 2024 Company, Inc</span>
            </div>
        </footer>
    )
}

export default Footer;