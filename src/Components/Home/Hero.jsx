
import VRImage from '../../assets/banner.jpg'; 

const Hero = () => {
   

    return (
        <div className="bg-[#9747ff] rounded-b-[20px] py-16 px-6 text-center text-white relative">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-white/80">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to
            the coolest accessories, we have it all!
            </p>
            <button
            className="btn btn-primary mt-6 bg-white text-purple-700 font-bold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-purple-100 transition mb-12 md:mb-24 lg:mb-36">
            Shop Now
            </button>

            <div className="mt-12 flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[80%]">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
                <img
                src={VRImage}
                alt="VR Headset"
                className="rounded-xl w-full md:max-w-4xl"
                />
            </div>
            </div>
        </div>
        );
};

export default Hero;
