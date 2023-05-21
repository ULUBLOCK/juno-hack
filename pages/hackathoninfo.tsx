/* eslint-disable @next/next/no-html-link-for-pages */
import { Button, Heading, Text } from "@chakra-ui/react";
import ProjectCard from "../components/project-card";

const Hackathons = () => {
  return (
    <div className="h-full w-full flex justify-center px-4">
      <div className="flex flex-col gap-16 max-w-5xl">
        <div className="flex flex-col gap-6 max-w-3xl items-start">
          <Heading>
            Hackathon 1
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ultricies turpis. Nulla porttitor pretium interdum. Pellentesque tristique condimentum sagittis. Curabitur tortor odio, hendrerit commodo ultrices ac, rutrum ut nibh. Nulla ex lorem, laoreet id pretium vel, facilisis ut turpis.
          </Text>
          <a href="/createteam">
          <Button size="lg" colorScheme="cyan" color="white">
            Join
          </Button>
          </a>
        </div>
        <div className="grid gap-4 lg:grid-cols-3 grid-cols-1">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </div>
    </div>
  );
}
 
export default Hackathons;