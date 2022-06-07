import React from 'react'
import ImageGallery from 'react-image-gallery';

export const Carousel = ({data}) => {
    return (
        <div className=''>
            <ImageGallery 
                items={data}
                showPlayButton={false} 
                showFullscreenButton={false} 
                showThumbnails={false}
                originalClass={"galery-item"}
            />
        </div>
    )
}
