import React from 'react';
import Rating from 'react-rating';
import './Artist.css'
const Artist = (props) => {
    const {
        img, name, profession, salary, born, nationality, rating,
        facebook, twitter, instragram } = props.artist || {};
    return (
        <>
            <div className="col container artist-style">
                <div className="card h-94 card-style">
                    <img src={img} className="card-img-top figure-img img-fluid rounded" alt="..." />
                    <div className="card-body">
                        <h5 style={{ textTransform: 'uppercase', color: 'gold' }}>{name}</h5>
                        <p><bold style={{ textTransform: 'uppercase', color: 'gold' }}>{profession}</bold></p>
                        <h5 style={{ textTransform: 'uppercase', color: 'gold' }}>Net Worth: ${salary} M</h5>
                        <h6 style={{ textTransform: 'uppercase', color: 'gold' }}><small>Born: {born}</small></h6>
                        <h6 style={{ textTransform: 'uppercase', color: 'gold' }}><small>{nationality}</small></h6>
                        <p>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly>
                            </Rating>
                        </p>
                        <p>
                            <button
                                onClick={() => props.handleAddToCart(props.artist)}
                                className="btn btn-danger rgular-btn"><i className="fas fa-icons btn-icon ">  </i> add to artist
                            </button>
                            <br /><br />
                            <div className="social-style">
                                <a href={facebook}> <i className="fab fa-facebook-square"></i></a>
                                <a href={instragram}><i className="fab fa-instagram-square"></i></a>
                                <a href={twitter}><i className="fab fa-twitter-square"></i></a>
                            </div>
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Artist;