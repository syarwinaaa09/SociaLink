import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact"

import jeffBezos from './jeff_bezos_at_amazon_spheres_grand_opening_in_seattle_2018_2839074799225_29_28cropped_29_f0ab6bae_large.jpg';

const contacts = [
    { src: jeffBezos, name: "Jeff Bezos"},
    { src: "https://links.papareact.com/kxk", name: "Elon Musk"},
    { src: "https://links.papareact.com/zvy", name: "Bill Gates"},
    { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg"},
    { src: "https://links.papareact.com/d0c", name: "Harry Potter"},
    { src: "https://links.papareact.com/6gg", name: "The Queen"},
    { src: "https://links.papareact.com/r57", name: "James Bond"},
]

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map((contact) => (
                <Contact key={contact.src} src={contact.src} name={contact.name}/>
            ))}
        
        </div>
    )
}

export default Widgets