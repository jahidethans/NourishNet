import { Link } from 'react-router-dom';
import aboutBG from '../../assets/aboutBG.jpg';

const About = () => {
    return (
        <section
    className="relative h-screen flex items-center justify-center my-20"
    style={{
      backgroundImage: `url(${aboutBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>

    <div className="z-10 text-white text-center">
      <h1 className="text-7xl font-bold mb-4">Join the Community</h1>
      <p className="text-lg mb-8">Stop food waste and make a difference!</p>
      <Link to='/login' className="p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition duration-300">
        Join the community
      </Link>
    </div>
  </section>
    );
};

export default About;