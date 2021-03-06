import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="page-footer yellow lighten-1">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#">More Links</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export {Footer};