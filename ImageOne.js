import { Parallax } from 'react-parallax';
//Importing image from the img folder 
import Crossaint from '../img/Crossaint.jpg';

const ImageOne = () => (
    //Setting image by name and strength is the clarity of the image 
    //Inside the parallax u can add all your html elements I just added some text and an image
    <Parallax className='image' blur={2}  bgImage={Crossaint}  strength={800}>
        <header>
        <nav >
           

            <ul >
                <li>PRODUCTS</li>
                <li><a >HISTORY</a></li>
                <li>LOCATION</li>
            </ul>
        </nav>
        </header>
        <div className='content'>
            <span className='img-txt'> The best Premium bakery in Kosovo</span>
        </div>
    </Parallax>
);
export default ImageOne