const NavBar: React.FC = () => {
    return (
        <div className="text-white flex items-center h-20 w-screen">
            <div className="my-auto ml-4 mr-8">
                <img src="https://placehold.co/40x40"/>
            </div>
            <ul className="grow h-10 flex items-center justify-evenly">
                <li>Features</li>
                <li>How it works</li>
                <li>Testimonials</li>
                <li>FAQs</li>
            </ul>
            <div className="">Get in touch</div>
        </div>
    );
};

export default NavBar