
import Image from 'next/image';
import zelda from '../images/zelda.jpg';
const Bride = () => {

    return (
        <div className='newlywedBox'>
            <h2>Stuff for the bride</h2>
            <p>maybe throw a picture or two here</p>
            <div className='blox'>
                <Image src={zelda} alt="Picture of the bride" width={500} height={500} />
            </div>
        </div>
    );

}

export default Bride;
