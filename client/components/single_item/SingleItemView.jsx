import React from 'react';
import { Link } from 'react-router-dom';
import { ReviewForm } from '../';

const SingleItemView = props => {
  const {
    id,
    title,
    imageUrl,
    description,
    price,
    upc,
    reviews
  } = props.singleGlasses;
  const isAdmin = props.user.isAdmin;
  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-interval="false"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={imageUrl} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1185x690"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1185x690"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="col-5">
        <div className="card">
          <div className="card-header">Awesome Brand</div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h5 className="card-title">{`$ ${price}`}</h5>
            <p className="card-text">{description}</p>
            {/* When User clicks would be nice to add toolpit 'Item is added to your cart' */}
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => {
                props.addItemToCart(props.singleGlasses, props.user);
              }}
            >
              ADD TO CART
            </a>
            <ReviewForm />{' '}
            {isAdmin ? (
              <div>
                <button
                  type="button"
                  onClick={() => props.deleteGlasses()}
                  href="#"
                  className="btn btn-danger adminBtn"
                >
                  DELETE
                </button>
                <Link
                  to={{
                    pathname: '/glasses/form',
                    state: props.singleGlasses
                  }}
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-warning adminBtn"
                  >
                    EDIT
                  </button>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {reviews &&
        reviews.map(review => (
          <div className="card review-card col-5">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">{review.body}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleItemView;
