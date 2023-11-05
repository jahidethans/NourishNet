import bannerVid from '../../assets/bannerVid.mp4'

const Banner = () => {
    return (
        <div className='w-full h-[90vh] relative text-white space-y-'>
            <video className='h-full w-full object-cover' src={bannerVid} autoPlay loop muted />

            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>

            <div className='absolute top-0 h-full w-full flex flex-col justify-center text-center p-4 space-y-4'><h1>Share More, <br /> Waste Less  Join the Food Revolution.</h1>
                <div className='md:flex justify-center gap-6 items-center'><h2>See whats available now</h2>
                <button className='w-fit'>Explore</button></div>
            </div>
        </div>
    );
};

export default Banner;