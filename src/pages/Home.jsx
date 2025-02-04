import Hero from "../components/Hero";
import JobListing from "../components/JobListing";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <JobListing/>
    </div>
  );
};

export default Home;
