import React from 'react';
import './ImageGrid.css';

function imageGrid( ) {
    return (
        <div class="gallery">
            <figure class="gallery__item gallery__item--1">
                <img src="https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="gallery__img" alt="Image 1" />
            </figure>
            <figure class="gallery__item gallery__item--2">
                <img src="https://images.pexels.com/photos/772571/pexels-photo-772571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="gallery__img" alt="Image 2" />
            </figure>
            <figure class="gallery__item gallery__item--3">
                <img src="https://images.pexels.com/photos/3629537/pexels-photo-3629537.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="gallery__img" alt="Image 3" />
            </figure>
            <figure class="gallery__item gallery__item--4">
                <img src="https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="gallery__img" alt="Image 4" />
            </figure>
            <figure class="gallery__item gallery__item--5">
                <img src="https://images.pexels.com/photos/3673762/pexels-photo-3673762.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="gallery__img" alt="Image 5" />
            </figure>
            {/* <figure class="gallery__item gallery__item--6">
                <img src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="gallery__img" alt="Image 6" />
            </figure> */}
        </div>
    )
}

export default imageGrid;