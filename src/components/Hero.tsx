import { ReactTyped } from "react-typed";

const Hero: React.FC = () => {

    const fields: string[] = ["Design", "Develop", "Secure"];

    return (
        <div className="flex flex-col items-center">
            <div className="text-white flex flex-col font-bold text-7xl justify-center items-center">
                <p>Empower Your Growth</p>
                <p>Your Partner to</p>
                <ReactTyped strings={fields} typeSpeed={100} backSpeed={100} loop/>
            </div>
            <p className="text-white mt-6 w-15">
                Innovative design solutions for technology firms and emerging businesses weary of the 
                typical aesthetic methodology. Arriving shortly.
            </p>
            <button className="bg-yellow-200 rounded-3xl m-4 py-2 px-6">Get notified</button>

        </div>
    );
};

export default Hero;