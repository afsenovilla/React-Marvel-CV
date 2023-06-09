import React from 'react';
import "./More.css";

const More = (more) => {
  return (
    <div className="more">
        <div className='card'>
        <p>
            {more.languages.language}
        </p>
        <h1>
            {more.languages.wrlevel}
        </h1>
        <p>
            {more.languages.language}
        </p>
        </div>
        <div className='card'>
            {more.habilities.map((item,i) => {
        return (
            <div key={JSON.stringify(item)}>
            <p>
            {item}
            </p>
            </div>
                )
            })}
        </div>
        <div className="card">
        {more.volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default More
