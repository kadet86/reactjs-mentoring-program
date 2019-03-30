import React from 'react';

const TopSection = ({children}) => (
    <section className="top-section">
        <div className="top-section__overlay"></div>
        <div className="top-section__inner-container">
            {children}
        </div>
    </section>
);

export default TopSection;