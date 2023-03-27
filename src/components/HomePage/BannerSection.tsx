import React from 'react'
import './bannerSection.css'
import { IconContext } from 'react-icons';
import {BsArrowRight} from 'react-icons/bs/index.js'

function BannerSection() {
  return (
    <section className="banner-icliniq">
        <div className="mx-auto custom-banner-padding">
            <div className="row align-items-end">
                <div className="col-lg-6">
                    <h1 className="banner-text-size">Consult top doctors</h1>
                    <h2 className="banner-text-sub">effortlessly</h2>
                    <p className="banner-text-sub-heading nunito-Sans">
                        Get 24/7 online consultations with the best doctors <br/> without  breaking a sweat and your bank.
                    </p>
                    <a id="cta-banner-icliniq-askdoc" className="btn cta-banner-icliniq  mr-2.5" href="/ask-a-doctor-online">Start a consult now
                        <IconContext.Provider
                            value={{className: "icon-right-arrow"}}
                        >
                            <BsArrowRight  />
                        </IconContext.Provider>
                    </a>
                    <a id="cta-banner-icliniq-chat" className="btn cta-sub-banner-icliniq" href="https://www.icliniq.com/ask-a-doctor-online/icq100">Unlimited chat</a>
                    <div className="free-query-nudge">
                        <a href="/ask-a-doctor-online">
                            <span className="query-free-consult">
                            Your first query consult is free
                            </span>
                        </a>
                    </div>
                    <div className="pt-8 pb-16">
						<div className="grid grid-cols-3">
                            <img  src="https://assets.icliniq.com/v2/assets/images/hompage-image/trusted-top-rated-1.svg" alt="" />
						</div>
					</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerSection