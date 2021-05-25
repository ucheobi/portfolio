import React from 'react';

const WorkEducation = ({role, description, date=""}) => {
    return (
        <article  className="edu-snippet">
            <h4>{role}</h4>
            <p>{date}</p>
            <p>{description}</p>
        </article>         
    );
}

export default WorkEducation;
