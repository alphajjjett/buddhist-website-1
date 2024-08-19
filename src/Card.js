import React from 'react';
import './component/card/Card.css';

function Card() {
  return (
    <div className='container'>
      <div className='BOX1'>
        <article className="card">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="card-image"
          />
          <div className="card-content">
            <time dateTime="2022-10-10" className="card-date"> 10th Oct 2022 </time>
            <a href="#">
              <h3 className="card-title">How to position your furniture for positivity</h3>
            </a>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </article>
      </div>
      <div className='BOX2'>
        <article className="card">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="card-image"
          />
          <div className="card-content">
            <time dateTime="2022-10-11" className="card-date"> 11th Oct 2022 </time>
            <a href="#">
              <h3 className="card-title">Tips for creating a productive workspace</h3>
            </a>
            <p className="card-text">
              Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium.
            </p>
          </div>
        </article>
      </div>
      <div className='BOX3'>
        <article className="card">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="card-image"
          />
          <div className="card-content">
            <time dateTime="2022-10-12" className="card-date"> 12th Oct 2022 </time>
            <a href="#">
              <h3 className="card-title">Tips for creating a productive workspace</h3>
            </a>
            <p className="card-text">
              Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Card;