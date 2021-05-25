import React from 'react';

const Button = ({technologies}) => {
    return (
        <div className="tech-btn">
            {
                technologies.map((item, idx) => {
                    return (
                        <span key={item.id} className="tech">
                            {item.name}
                        </span>
                    )
                })
            }
        </div>
    );
}

export default Button;
