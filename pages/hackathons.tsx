import HackathonCard from "../components/hackathon-card";

const Hackathons = () => {
  return (
    <div className="h-full w-full flex justify-center">
      <div className="h-full w-full max-w-5xl grid gap-4 lg:grid-cols-3 grid-cols-1 mx-4">
        <HackathonCard/>
        <HackathonCard/>
        <HackathonCard/>
        <HackathonCard/>
        <HackathonCard/>
      </div>
    </div>
  );
}
 
export default Hackathons;