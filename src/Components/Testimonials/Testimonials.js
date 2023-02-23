import React from 'react'

import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import './Testimonials.css'

import TestimonialPic1 from '../../image/t1.webp'
import TestimonialPic2 from '../../image/t2.webp'
import TestimonialPic3 from '../../image/t3.webp'
import TestimonialPic4 from '../../image/t4.webp'
import TestimonialPic5 from '../../image/t5.webp'

export default function Testimonials() {
  return (
    <Row classList={'bo '}>

        <Row classList={'bo w-12 g-3 g-5-s r-x-center  r-wrap-s'}>
            <Col classList="bo py-3 g-3 w-3 w-s-12">
                <div className=" txt-l txt-bold-l vt-title">
                    Terimonials
                </div>
                <div className="bo txt-m hide-s">
                    Here is what our customers has to say about us.
                </div>
            </Col>
            <Col classList="bo py-3 w-3 w-s-12">
                <div className="t-sub">
                    <Col classList={'bo p-3 g-3 '}>
                        <img className='t-pic' src={TestimonialPic1} alt="" />
                        <div className="bo txt-s txt-s-s">
                          I was feeling lost and unsure about my career path, 
                          but after a consultation with this firm, I now have a 
                          clear direction and a roadmap to achieving my goals.                             
                        </div>
                        <Row classList={'bo r-x-end'}> 
                            - Vinay Kumar
                        </Row>
                    </Col>
                </div>
            </Col>
            <Col classList="bo py-3 w-3 w-s-12">
                <div className="t-sub">
                    <Col classList={'bo p-3 g-3 '}>
                        <img className='t-pic' src={TestimonialPic2} alt="" />
                        <div className="txt-s txt-s-s">
                            The job consultation services provided by this firm were 
                            exceptional. They helped me prepare for interviews and 
                            provided valuable feedback that helped me secure my dream job
                        </div>
                        <Row classList={'bo r-x-end'}> 
                            - Steve Ramsay
                        </Row>
                    </Col>
                </div>           
            </Col>
            <Col classList="bo py-3 w-3 w-s-12">
                <div className="t-sub">
                    <Col classList={'bo p-3 g-3 '}>
                        <img className='t-pic' src={TestimonialPic3} alt="" />
                        <div className="txt-s txt-s-s">
                            The education consultation service helped me identify the 
                            best courses to take to enhance my skills and further my 
                            career. The expert advice and support I received were invaluable.
                            Thanks
                        </div>
                        <Row classList={'bo r-x-end'}> 
                            - Irvin Langer
                        </Row>
                    </Col>
                </div>             
            </Col>
            <Col classList="bo py-3 w-3 w-s-12 hide-s">
                <div className="t-sub">
                    <Col classList={'bo p-3 g-3 '}>
                        <img className='t-pic' src={TestimonialPic4} alt="" />
                        <div className="txt-s">
                            I cannot recommend this firm enough. The personalized career 
                            consultation I received helped me understand my strengths and 
                            weaknesses, and I am now on track to achieving my career aspirations
                        </div>
                        <Row classList={'bo r-x-end'}> 
                            - John Williams
                        </Row>
                    </Col>
                </div> 
            </Col>
            <Col classList="bo py-3 w-3 w-s-12 hide-s">
                <div className="t-sub">
                    <Col classList={'bo p-3 g-3 '}>
                        <img className='t-pic' src={TestimonialPic5} alt="" />
                        <div className="txt-s">
                            The team at this firm went above and beyond to support 
                            me in my career journey. Their expertise and guidance were 
                            instrumental in helping me make the right decisions and move 
                            forward with confidence
                        </div>
                        <Row classList={'bo r-x-end'}> 
                            - Rondy Hamster
                        </Row>
                    </Col>
                </div> 
            </Col>
        </Row>
    </Row>
  )
}
