import Head from 'next/head';
import Hackathon from "../public/images/Hackathon.png";
import Image from 'next/image'

export default function Home() {

  return (
    <div>

      <Head>
        <title>HackLink</title>
        <meta name="description" content=""/>
        <link rel="icon" type="image/png" href="images/logoNav.png" />
      </Head>
    
      <div id="home" className="flex md:flex-row flex-col justify-around items-center min-w-7xl">
      {/* textual area */}
      <div className="flex flex-col items-start justify-start md:ml-20 mx-10 mt-[15px] md:mt-0">
        <p className="text-black text-base text-green font-bold"> HackLink</p>
        <h2 className="font-bold md:text-3xl text-3xl text-gray-800">
        Unleash Collaboration, Fuel Innovation: Welcome to <span className='font-bold'>HackLink</span> 
        </h2>
        <p className="md:text-base text-sm font-semibold text-gray-700 mt-5">
Welcome to <span className='font-bold'>HackLink</span> , the ultimate platform for hackathon teams to connect, <br/>
collaborate, and showcase their innovative projects. Powered by the secure and<br/>
decentralized Juno blockchain, <span className='font-bold'>HackLink</span>  offers a seamless experience for participants <br/>
to upload, organize, and share their hackathon creations. <br/><br/>
Join our vibrant community and unleash your creativity as you link up with like-minded individuals, turning ideas into reality. <br/>
Discover the power of collaboration and propel your projects to new heights with <span className='font-bold'>HackLink</span> .<br/><br/>

Get started !
        </p>
        
      </div>
        {/* image area */}
      <div className="pointer-events-none mr-20 md:block hidden p-10">
        <Image alt="bt" src={Hackathon} width={500} height={500} objectFit="cover" />
      </div>*
    </div>
      
    <div className="flex flex-col items-center justify-center mt-[50px]">
      <h2 className="font-bold md:text-4xl mx-10 text-3xl text-gray-800 text-center">
      Organize an Epic Hackathon in 3 Steps: Plan, Configure, and Publish!
      </h2>
      <div className="flex sm:flex-row flex-col sm:space-x-20 space-y-3 mb-5 mt-10 ">
        <div className="flex flex-col items-center justify-center border-[2px] h-[250px] w-[200px] p-4 bg-white rounded-[10px] hover:scale-105 hover:bg-gray-200">
        <h2 className="font-bold md:text-2xl text-2xl text-gray-800 text-center">Plan</h2>
          <p className=" text-sm font-semibold text-[#000] mt-5">
          Define the details of your hackathon, including the name, duration, theme, and any specific rules or requirements. Determine the judging criteria, team size limits, and any additional guidelines for participants.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-[2px] h-[250px] w-[200px] p-4 bg-white rounded-[10px] hover:scale-105 hover:bg-gray-200">
        <h2 className="font-bold md:text-2xl text-2xl text-gray-800 text-center">Configure</h2>
          <p className=" text-sm font-semibold text-[#000] mt-5">
          Seamlessly integrate with the Juno blockchain to ensure secure project submission and evaluation. Configure the <span className='font-bold'>HackLink</span>  platform to ensure seamless participant registration, project submission, and collaboration.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-[2px] h-[250px] w-[200px] p-4 bg-white rounded-[10px] hover:scale-105 hover:bg-gray-200">
        <h2 className="font-bold md:text-2xl text-2xl text-gray-800 text-center">Publish</h2>
          <p className=" text-sm font-semibold text-[#000] mt-5">
          Once you have reviewed and finalized the hackathon details, publish it on the <span className='font-bold'>HackLink</span>  platform. Make it visible to potential participants, allowing them to discover and join your hackathon. 
          </p>
        </div>
        
      </div>
    </div>

    <div className="flex flex-col items-center justify-center  mt-[50px]">
      <h2 className="font-bold md:text-4xl mx-10 text-3xl text-gray-800 text-center">
      Team Success in 3 Simple Steps: Choose, Create, and Upload!
      </h2>
      <div className="flex sm:flex-row flex-col sm:space-x-20 space-y-3 mb-5 mt-10 ">
        <div className="flex flex-col items-center justify-center border-[2px] h-[250px] w-[200px] p-4 bg-white rounded-[10px] hover:scale-105 hover:bg-gray-200">
          <h2 className="font-bold md:text-2xl text-2xl text-gray-800 text-center">Explore Hackathons</h2>
          <p className=" text-sm font-semibold text-[#000] mt-5">
          Browse through the available hackathons on <span className='font-bold'>HackLink</span>  and explore their themes, durations, and specific requirements. Consider the ones that align with your interests and skills. 
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-[2px] h-[250px] w-[200px] p-4 bg-white rounded-[10px] hover:scale-105 hover:bg-gray-200">
        <h2 className="font-bold md:text-2xl text-2xl text-gray-800 text-center">Create Your Team</h2>
          <p className=" text-sm font-semibold text-[#000] mt-5">
          Once you have selected a hackathon, form a team with like-minded individuals who possess complementary skills. Collaborate, brainstorm ideas, and define roles within your team.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-[2px] h-[250px] w-[200px] p-4 bg-white rounded-[10px] hover:scale-105 hover:bg-gray-200">
        <h2 className="font-bold md:text-2xl text-2xl text-gray-800 text-center">Upload Your Project</h2>
          <p className=" text-sm font-semibold text-[#000] mt-5">
          Develop your innovative project as a team and leverage <span className='font-bold'>HackLink</span> collaborative features. When ready, use the platform designated submission feature to upload your project.
          </p>
        </div>
       
      </div>
    </div>

</div>
    
  );
}
