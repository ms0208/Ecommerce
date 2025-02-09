import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews {122}</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitates
                    buying and selling of products or services over the internal
                    serves as a virtual marketplace where businesses and indivials
                    shocase their products , interact with customes, and conducts
                    transactions without the need for a physical presence. E-commerce
                    websites have gained immense popularity due to their convention
                    accessibilty and the global reach they offer.</p>
                <p>
                    E-commerce websites typically display products or servies
                    detailed descriptions, images , prices and any available like
                    (e.g., sizes , colors). Each product usually has its own decided
                    with relevant information.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
