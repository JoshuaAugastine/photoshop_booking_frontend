import styled from "styled-components";
import './collectiondetails.css'

import img11 from './img11.jpeg'
import img12 from './img12.jpeg'
import img13 from './img13.jpeg'
import img14 from './img14.jpeg'
import img15 from './img15.jpeg'
import img16 from './img16.jpeg'
import img17 from './img17.jpeg'
import img18 from './img18.jpeg'
import img19 from './img19.jpeg'
import img20 from './img20.jpeg'
import img21 from './img21.jpeg'
import img22 from './img22.jpeg'
import img23 from './img23.jpeg'
import img24 from './img24.jpeg'
import img25 from './img25.jpeg'
import img26 from './img26.jpeg'
import img27 from './img27.jpeg'


let alt = 'Events img'

const InnerContainer = styled.div`   

    width:100%;
    display:flex;
    flex-direction:column;
    gap:20px;

    @media (min-width:451px) and (max-width:800px){
        display:flex;
        gap:20px
    }

`

const PreWedding = () => {
  return (
    <div className='container'>
        <div className='subContainer'>
            <div className='componentContainer'>
                <div className='imgContainer' id='special1'>
                    <img src={img11} alt={alt} className='img' id='special'/>
                </div>
                <InnerContainer className='one'>
                    <div className='imgContainer'>
                        <img src={img12} alt = {alt} className='img'/>
                    </div>
                    <div className='imgContainer'>
                        <img src={img13} alt = {alt} className='img' />
                    </div>
                </InnerContainer>
                <InnerContainer className='two'>
                    <div className='imgContainer'>
                        <img src={img14} alt = {alt} className='img' />
                    </div>
                    <div className='imgContainer'>
                        <img src={img15} alt = {alt} className='img' />
                    </div>
                </InnerContainer>    
            </div>
            <div className='SecondContainer'>
                <div className='imgContainer' id='one'>
                    <img src={img16} alt='Events img' className='img' />
                </div>
                <div className='imgContainer' id='two'>
                    <img src={img17} alt='Events img' className='img' />
                </div>
                <div className='imgContainer' id='three'>
                    <img src={img18} alt='Events img' className='img' />
                </div>
                <div className='imgContainer' id='four'>
                    <img src={img19} alt='Events img' className='img'/>
                </div>
            </div>
            <div className='ThirdContainer'>
                <div className='imgContainer' id='five'>
                    <img src={img20} alt='Events img' className='img'/>
                </div>
                <div className='imgContainer' id='six'>
                    <img src={img21} alt='Events img' className='img'/>
                </div>
                <div className='imgContainer' id='seven'>
                    <img src={img22} alt='Events img' className='img' id='special'/>
                </div>
                <div className='imgContainer' id='eight'>
                    <img src={img23} alt='Events img' className='img'/>
                </div>
            </div>
            <div className='componentContainer'>
                <div className='imgContainer' id='special2'>
                    <img src={img24} alt={alt} className='img'/>
                </div>
                <InnerContainer className='one'>
                    <div className='imgContainer'>
                        <img src={img25} alt = {alt} className='img'/>
                    </div>
                    <div className='imgContainer'>
                        <img src={img26} alt = {alt} className='img'/>
                    </div>
                </InnerContainer>
                <InnerContainer className='two'>
                    <div className='imgContainer'>
                        <img src={img27} alt = {alt} className='img'/>
                    </div>
                    
                </InnerContainer>   
            </div>
        </div>
    </div>
  )
}

export default PreWedding;