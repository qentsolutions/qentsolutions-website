import { HeroParallax } from "../../components/hero-parallax";


export default function Website() {

    const products = [
        {
            title: "B-Lab",
            link: "https://b-lab.app",
            thumbnail:
                "/website/blab.png",
        },
        {
            title: "Workflow Made Easy",
            link: "https://wme.us.com",
            thumbnail:
                "/website/wme.png",
        },
        {
            title: "B-Lab",
            link: "https://b-lab.app",
            thumbnail:
                "/website/blab.png",
        },
        {
            title: "Workflow Made Easy",
            link: "https://wme.us.com",
            thumbnail:
                "/website/wme.png",
        }
    ];



    return (
        <div className=" mt-20">
            <div>
                <HeroParallax products={products} />;

            </div>
        </div>
    )
}