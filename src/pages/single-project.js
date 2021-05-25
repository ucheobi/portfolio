import React from 'react';

const SingleProject = ({show}) => {
    return (
        <section>
           {show && 
            <div className="popup-project">
                <h3>Project name</h3>
                <p>Project title and summary</p>
            </div>}
            
        </section>
    );
}

export default SingleProject;
