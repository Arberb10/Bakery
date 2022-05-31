import { Parallax } from 'react-parallax';
import Chef from '../img/Chef.jpg';

const ImageTwo = () => (
    <Parallax className='image'  bgImage={Chef} strength={800}>
        <div className='content'>
            
        <span className='img-txt'> From the most proffesional hands with the most treditional best taste</span>
        </div>
    </Parallax>
);
export default ImageTwo