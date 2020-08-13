import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores at cupiditate ducimus eius eos error expedita fugiat id iure laboriosam maxime neque officia quis ratione similique ut, veritatis voluptate?</p>
        </div>
    )
}

export default Rainbow(About);