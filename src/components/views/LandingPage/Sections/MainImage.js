import React from 'react';
import '../../../../css/MainImage.css';

function MainImage({ image, title, desc }) {
    return (
        <div style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%,rgba(0,0,0,0) 41%,rgba(0,0,0,0.65)100%),
        url('${image}'), #1c1c1c`,
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative'
        }}>
            <div>
                <div className="mainImage txt">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>

            </div>
        </div>
    )
}

export default MainImage
