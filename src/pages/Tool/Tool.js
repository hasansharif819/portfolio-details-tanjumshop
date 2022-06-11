import React from 'react';

const Tool = ({tool}) => {
    const { name, img, bullet1, bullet2, bullet3, bullet4, bullet5 } = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl image-full mt-10">
      <figure><img src={img} alt="" /></figure>
      <div class="card-body">
        <h2 class="card-title text-yellow-600 font-bold">{name}</h2>
        <p>{bullet1}</p>
        <p>{bullet2}</p>
        <p>{bullet3}</p>
        <p>{bullet4}</p>
        <p>{bullet5}</p>
      </div>
    </div>
    );
};

export default Tool;