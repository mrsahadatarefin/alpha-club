import React from 'react';
import"./Blog.css"

const Blog = () => {
    return (
        <div className='blog'>
            <div><h2> How does React work?</h2>
            <p>
                React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes
            </p></div>
            
            <div>
                <h2> what is difference between popse and usestate ?</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
            </div>
            <div>
                <h2>What is useEffect and when to use it?</h2>
                <p>What is useEffect and when to use it?
                    useEffect() is for side-effects. A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.</p>
            </div>
        </div>

    );
};

export default Blog;

