import suburbs from './specialtiesData.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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

function SpecialtiesSection() {
    var specialitiesListData:SpecialitiesListData = suburbs;
    
    return (
        <section className='life-altering-block py-12'>
            <div className='relative custom-banner-padding '>
                <h3 className="primary-brand-color banner-text-size mb-4">From <span className="letter-cta">little</span> to <br/> <span className="letter-cta">life-altering</span> issues,</h3>
                <h4 className="primary-brand-color text-2xl	fw-bold mb-16">Get answers for anything and everything.</h4>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {specialitiesListData.specialitiesList.imagesUrl.map((speciality: SpecialtiesItem, index) => (
                        <SwiperSlide>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
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