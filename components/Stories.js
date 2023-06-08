import StoryCard from "./StoryCard";

import socialinkLogo from './selfie_by_satchely_dbz20mv-fullview.png';
import jeffBezos from './jeff_bezos_at_amazon_spheres_grand_opening_in_seattle_2018_2839074799225_29_28cropped_29_f0ab6bae_large.jpg';

const stories = [
    {
        name: "Syarwina Ridwan",
        src: socialinkLogo,
        profile: socialinkLogo,
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: jeffBezos,
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
]

function Stories() {
    return <div className="flex justify-center space-x-3 mx-auto">
        {stories.map((story) => (
            <StoryCard 
                key={story.src} 
                name={story.name} 
                src={story.src} 
                profile={story.profile}
            />
        ))}
    </div>
}

export default Stories;