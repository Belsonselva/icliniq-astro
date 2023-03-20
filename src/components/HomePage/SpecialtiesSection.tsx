import { useState, useEffect } from 'react';
import suburbs from './specialtiesData.json'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css" 
import {BsChevronRight} from 'react-icons/bs'
import {BsChevronLeft} from 'react-icons/bs'
import './specialtiesSection.css'
import MostSearchMedical from './MostSearchMedical';

type SpecialtiesItem = {
    imgurl: string;
    specialitiesLabel: string;
    specUrl: string;
    id: number;
}
type SpecialitiesListData ={
    specialitiesList: {
        imagesUrl:SpecialtiesItem[]
    }
}
type CustomArrowProps = {
    currentSlide?: string;
    slideCount?: number;
}

const NextArrow = ({currentSlide, slideCount, ...props}: CustomArrowProps) => (
    <div {...props}>
        <BsChevronRight  />
    </div>
);
const PrevArrow = ({currentSlide, slideCount, ...props}: CustomArrowProps) => (
    <div {...props}>
        <BsChevronLeft />
    </div>
);
function SpecialtiesSection() {
    var specialitiesListData:SpecialitiesListData = suburbs;
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <section className='life-altering-block py-12'>
            <div className='relative custom-banner-padding '>
                <h3 className="primary-brand-color banner-text-size mb-4">From <span className="letter-cta">little</span> to <br/> <span className="letter-cta">life-altering</span> issues,</h3>
                <h4 className="primary-brand-color text-2xl	fw-bold mb-16">Get answers for anything and everything.</h4>
                <Slider className='pb-16' {...settings}>
                    {specialitiesListData.specialitiesList.imagesUrl.map((speciality: SpecialtiesItem, index) => (
                        <div className="specialties-brand-block" key={index}>
                            <a className="tags" target="_blank" href={speciality.specUrl}>
                                <div className="single-work-process">
                                    <div className="work-process-icon">
                                        <img width="50" height="50" title={speciality.specialitiesLabel} alt={speciality.specialitiesLabel} src={speciality.imgurl}/>
                                    </div>
                                    <h3 className="primary-brand-color fw-bold specialties-title">{speciality.specialitiesLabel}</h3>
                                </div>
                            </a>
                        </div>
                    ))}
                </Slider>
                <div className="grid grid-cols-3">
                    <p className='pb-16'>With 80+ specialties covered, get medical advice and medical second opinion to any of your health concerns under one roof.</p>
                </div>
            </div>
            <div className='relative custom-banner-padding text-center'>
                <MostSearchMedical/>
            </div>
        </section>
    )
}

export default SpecialtiesSection