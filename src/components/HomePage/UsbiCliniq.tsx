import Slider from "react-slick"
import {BsChevronRight} from 'react-icons/bs/index.js'
import {BsChevronLeft} from 'react-icons/bs/index.js'
import './usbiCliniq.css'

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
function UsbiCliniq() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '100px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  const usb1 = {

  }
  return (
    <>
      <section className="px-8 iCliniq-services py-12">
        <Slider className='usb-carousel pb-16' {...settings}>
          <div className="services-block usb1">
            <img  className="personality-brand-image" width="693" height="346" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Comfortable.jpg" alt="Step into your comfort zone."/>
            <div className="services-block-description">
              <h3 className="services-block-heading">Step into your <br/> comfort zone. </h3>
              <p className="text-white semi-bold fw-bold">We're bringing the care to you.</p>
              <p className="text-white service-block-subtitle">Be it your private cabin at work or your fave couch at home, consult doctors online from places you feel most comfortable.</p>
            </div>
          </div>
          <div className="services-block usb2">
            <img  className="personality-brand-image" width="693" height="346" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Anytime-1.jpg" alt="Midnight  fever or  Midday  meltdown"/>
            <div className="services-block-description">
              <h3 className="services-block-heading">Midnight fever or <br/>  Midday meltdown,  </h3>
              <p className="text-white semi-bold fw-bold">your doctor's ready.</p>
              <p className="text-white service-block-subtitle">With expert doctors available online 24/7, you can now get help whenever you need it. Just the way healthcare should be.</p>
            </div>
          </div>
          <div className="services-block usb3">
            <img  className="personality-brand-image" width="693" height="346" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Security.jpg" alt="Your peace of mind matters to us."/>
            <div className="services-block-description">
              <h3 className="services-block-heading">Your peace of mind  <br/>   matters to us.  </h3>
              <p className="text-white semi-bold fw-bold">Our sturdy security is the proof.</p>
              <p className="text-white service-block-subtitle">iCliniq is a HIPAA and GDPR compliant platform. All your data is safeguarded with secured SSL and data-at-rest encryption.</p>
            </div>
          </div>
          <div className="services-block usb4">
            <img  className="personality-brand-image" width="693" height="346" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Appointment.jpg" alt="Book appointments real quick."/>
            <div className="services-block-description">
              <h3 className="services-block-heading">Book appointments   <br/>   real quick. </h3>
              <p className="text-white semi-bold fw-bold">Yes, you read it right.</p>
              <p className="text-white service-block-subtitle">Get a quick and hassle-free appointment with an online doctor now without waiting long hours in a long queue.</p>
            </div>
          </div>
          <div className="services-block usb5">
            <img  className="personality-brand-image" width="693" height="346" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Travel.jpg" alt="Go, get your backpacks."/>
            <div className="services-block-description">
              <h3 className="services-block-heading">Go, get <br/>  your backpacks.</h3>
              <p className="text-white semi-bold fw-bold"> We've got your back.</p>
              <p className="text-white service-block-subtitle">Our doctors specifically address the needs of travelers and expats. So access to doctors during your next trip? Check.</p>
            </div>
          </div>
        </Slider>
      </section>
    </>
  )
}

export default UsbiCliniq