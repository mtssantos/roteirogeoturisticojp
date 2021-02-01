import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    const autoPlay = () => {
        setTimeout(nextSlide, 8500)
    }

    autoPlay();
    return (
        <section className="slider">
            <MdKeyboardArrowLeft className="left-arrow" onClick={prevSlide}  />
            <MdKeyboardArrowRight className="right-arrow" onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt="Imagem Pegada" className="image" />
                        )}
                    </div>
                )
            })}
        </section>
    )
};

export default ImageSlider;