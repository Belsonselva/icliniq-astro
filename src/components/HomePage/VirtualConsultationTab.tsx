import React from 'react'
import { Tabs } from 'flowbite-react'
import './virtualConsultationTab.css'
function VirtualConsultationTab() {
  return (
    <>
      <h2 className="text-center primary-brand-color banner-text-size  my-12">A virtual consultation that feels <span className="letter-cta">less virtual</span></h2>
      <Tabs.Group
        aria-label="Pills"
        style="pills"
        className='virtualconsult-tabs'
      >
        <Tabs.Item
          active={true}
          title="Chat"
        >
          <div className="personality-brand-block">
            <div className="grid grid-cols-3 gap-4">
                <div className='md:col-span-2'>
                    <h2 className="text-3xl font-bold">How it works:</h2>
                    <div className="bs-vertical-wizard">
                        <ul>
                            <li className="complete">
                                <p className="icon-padding">Write your health query in detail.<span className="ico ico-green">1</span></p>
                            </li>
                            <li className="complete prev-step mb-3">
                                <p className="icon-padding">Choose a chat plan that fits your needs and pay the consultation fee.<span className="ico ico-green">2</span></p>
                            </li>
                            <li className="complete prev-step">
                                <p className="icon-padding">Chat unlimited with a doctor based on your plan. <span className="ico ico-green">3</span></p>
                            </li>
                        </ul>
                        <div className="xs-text-center mt-4 mb-4">
                            <a className="btn cta-banner-icliniq  mr-2.5" href="https://www.icliniq.com/ask-a-doctor-online/icq100">Start chat consultation</a>
                        </div>
                    </div>
                </div>
                <div className='mx-auto'>
                    <img width="321" height="277" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Query-min.jpg" alt="Chat Consultation" />
                </div>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Phone">
            <div className="personality-brand-block">
                <div className="grid grid-cols-3 gap-4">
                    <div className='md:col-span-2'>
                        <h2 className="text-3xl font-bold">How it works:</h2>
                        <div className="bs-vertical-wizard">
                            <ul>
                                <li className="complete">
                                    <p className="icon-padding">Write your health query in detail and add photos/reports, if any.<span className="ico ico-green">1</span></p>
                                </li>
                                <li className="complete prev-step mb-3">
                                    <p className="icon-padding">Pick a date and time slot for your medical phone consultation and pay the fee.<span className="ico ico-green">2</span></p>
                                </li>
                                <li className="complete prev-step">
                                    <p className="icon-padding">Talk to a doctor over a highly secure end-to-end encrypted phone call.  <span className="ico ico-green">3</span></p>
                                </li>
                            </ul>
                            <div className="xs-text-center mt-4 mb-4">
                                <a className="btn cta-banner-icliniq  mr-2.5" href="https://www.icliniq.com/ask-a-doctor-online/icq100">Start chat consultation</a>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <img width="268" height="231" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Call-min.jpg" alt="Chat Consultation" />
                    </div>
                </div>
            </div>
        </Tabs.Item>
        <Tabs.Item title="Video">
            <div className="personality-brand-block">
                <div className="grid grid-cols-3 gap-4">
                    <div className='md:col-span-2'>
                        <h2 className="text-3xl font-bold">How it works:</h2>
                        <div className="bs-vertical-wizard">
                            <ul>
                                <li className="complete">
                                    <p className="icon-padding">Write your health query in detail and add photos/reports, if any.<span className="ico ico-green">1</span></p>
                                </li>
                                <li className="complete prev-step mb-3">
                                    <p className="icon-padding">Pick a date and time slot for your medical video consultation and pay the fee.<span className="ico ico-green">2</span></p>
                                </li>
                                <li className="complete prev-step">
                                    <p className="icon-padding">Talk to a doctor over a highly secure HIPAA compliant end-to-end encrypted video call. <span className="ico ico-green">3</span></p>
                                </li>
                            </ul>
                            <div className="xs-text-center mt-4 mb-4">
                                <a className="btn cta-banner-icliniq  mr-2.5" href="https://www.icliniq.com/ask-a-doctor-online/icq100">Start chat consultation</a>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <img width="268" height="231" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Video-call-min.jpg" alt="Chat Consultation" />
                    </div>
                </div>
            </div>
        </Tabs.Item>
        <Tabs.Item title="Query">
            <div className="personality-brand-block">
                <div className="grid grid-cols-3 gap-4">
                    <div className='md:col-span-2'>
                        <h2 className="text-3xl font-bold">How it works:</h2>
                        <div className="bs-vertical-wizard">
                            <ul>
                                <li className="complete">
                                    <p className="icon-padding">Write your health query in detail and add photos / reports, if any.<span className="ico ico-green">1</span></p>
                                </li>
                                <li className="complete prev-step mb-3">
                                    <p className="icon-padding">Submit the query and pay the consultation fee.<span className="ico ico-green">2</span></p>
                                </li>
                                <li className="complete prev-step">
                                    <p className="icon-padding">Get your answer from a doctor within 4 hours.<span className="ico ico-green">3</span></p>
                                </li>
                            </ul>
                            <div className="xs-text-center mt-4 mb-4">
                                <a className="btn cta-banner-icliniq  mr-2.5" href="https://www.icliniq.com/ask-a-doctor-online/icq100">Start chat consultation</a>
                            </div>
                            <h2 className="h6 usp-paragraph xs-text-center">P.S. Your first query gets one free online doctor consultation.</h2>
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <img width="268" height="340" src="https://assets.icliniq.com/v2/assets/images/hompage-image/Query-consult.jpg" alt="Chat Consultation" />
                    </div>
                </div>
            </div>
        </Tabs.Item>
      </Tabs.Group>
    </>
  )
}

export default VirtualConsultationTab