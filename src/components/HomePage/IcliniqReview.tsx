import './icliniqReview.css'
import icliniqReviews from './specialtiesData.json'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css" 
type icliniqReviews = {
    id: number;
    review: string;
    reviewState: string;
}
type icliniqReviewsListData ={
    iCliniqReview: {
        reviewArray:icliniqReviews[]
    }
  }
function IcliniqReview() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    };
var icliniqReviewsListData:icliniqReviewsListData = icliniqReviews;
  return (
    <section className="primary-brand-color-bg py-11">
        <div className='custom-banner-padding'>
            <h2 className="text-white banner-text-size mb-2" style={{lineHeight: 1.3}}>The #1 online doctor <br /> consultation platform</h2>
            <h3 className="text-white text-xl font-semibold pb-16">Over 3 million users from 196+ countries trust iCliniq with their health.</h3>
            <Slider {...settings}>
                {icliniqReviewsListData.iCliniqReview.reviewArray.map((reviewArrayList: icliniqReviews) => (
                    <div className="text-white">
                        <div className="grid grid-cols-3 gap-4">
                            <div className='col-end-6 col-span-3' key={reviewArrayList.id}>
                                <p className='text-xl'>"{reviewArrayList.review}"</p>
                                <p className=''>"{reviewArrayList.reviewState}"</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </section>

  )
}

export default IcliniqReview