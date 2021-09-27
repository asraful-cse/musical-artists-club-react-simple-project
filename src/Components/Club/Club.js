import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';
import Cart from '../Cart/Cart';
import './Club.css';
const Club = () => {
    const [artists, setArtists] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('./artistsFakeData.JSON')
            .then(res => res.json())
            .then(data => setArtists(data))
    }, [])
    const handleAddToCart = (item) => {
        const newCart = [...carts, item];
        setCarts(newCart);
    }
    return (
        <div>
            <div className="club-container d-flex container " >
                <div class="row row-cols-1 row-cols-md-3 g-4 container artist-container">
                    {
                        artists.map(artist => <Artist
                            key={artist.key}
                            handleAddToCart={handleAddToCart}
                            artist={artist}

                        >
                        </Artist>)
                    }
                </div>
                <div className="cart-container row">
                    <Cart cart={carts}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Club;