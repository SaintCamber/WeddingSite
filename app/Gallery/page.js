import EmblaCarousel from "../components/carousel/EmblaCarousel.js";
import both from "../images/both.jpg";
import testFirst from "../images/testFirst.webp";
import testSecond from "../images/testSecond.webp";
import Image from 'next/image'



export default function Gallery() {
    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const SLIDES = [both,testFirst,testSecond,both,testFirst,testSecond,both,testFirst,testSecond,both,testFirst,testSecond]

    return (
        <div className="Gallery">
            <h1>Gallery</h1>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    )
}
