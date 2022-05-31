import { Parallax } from 'react-parallax';
import Pancakes from '../img/Cupcake.jpg';

const ImageThree = () => (
    <Parallax className='image'  bgImage={Pancakes} strength={800}>
        <div className='content'>
        <span className='img-txt'> With all kind of yommy pasteries </span>
        </div>
    </Parallax>
);
export default ImageThree