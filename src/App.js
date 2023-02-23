import './Theme/CommonTheme.css';
import './Theme/AppTheme.css';
import './App.css';

import Wrapper from './Components/BaseComponents/Wrapper/Wrapper'
import Row from './Components/BaseComponents/Row/Row'
import Col from './Components/BaseComponents/Col/Col'
import Section from './Components/BaseComponents/Section/Section'

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Services from './Components/Services/Services'
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';



function App() {
  return (

    <Wrapper classList={'b0'}>


      <div id="section-1">
        <Row classList="bo oh  section-1-wrapper">
          <Header />
          <Col classList="bo  w-7 w-s-12 c-x-end c-y-center hero-col">
            <Col classList="bo g-3 w-11 w-s-12  hero-text">
              <Row classList="bo  hero-heading">
                Guiding you towards a dream career
              </Row>
              <Row classList="bo w-6 txt-m txt-l px-2 py-2">
                We provide comprehensive services to help you make the most of your professional journey
              </Row>
              <Row classList="bo py-2">
                <div className='btn-primary'>
                  Book Appintment
                </div>
              </Row>
            </Col>
          </Col>
          <Col classList="bo w-5 w-s-12 c-x-center c-y-end hide-s">
            
          </Col>
        </Row>
      </div>

      <div id="section-2">
          <Row classList="bo section-wrapper r-x-center">
            <Col classList="bo w-8 w-10">
              <Services />
            </Col>
          </Row>
      </div>

      <div id='section-3'>
          <Row classList="bo section-wrapper r-x-center">
            <Col classList="bo w-8 w-10">
              <About />
            </Col>
          </Row>
      </div>

      <div id='section-4'>
          <Row classList="bo section-3-wrapper r-x-center">
            <Col classList="bo w-8 w-10">
              <Testimonials />
            </Col>
          </Row>
      </div>

      <div id="section-footer ">
        <Footer />
      </div>

    </Wrapper>


  );
}

export default App;
