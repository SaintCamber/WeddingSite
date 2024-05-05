import Image from "next/image";
import link from "../images/link.jpg";


export default function Groom() {

    return (
        <div className='newlywedBox'>
            <h2>Stuff for the groom</h2>
            <p>maybe throw a picture or two here</p>
            <div className='blox'>
                <Image src={link} alt="Picture of the groom" width={500} height={500} />
            </div>
        </div>
    );

}
