import React from 'react'

const EventGallery = ({ images }) => {
    if (!images) images = []
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap md:-m-2">
                {images.map((image, index) => (
                    <div key={index} className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={image}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventGallery