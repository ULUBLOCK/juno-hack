/* eslint-disable @next/next/no-html-link-for-pages */
import { Button, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/project-card";
import { getData, useWallet } from "../../utils";

const HackathonInfo = () => {
  const [data, setData] = useState();
  const { wallet } = useWallet();
  const router = useRouter();
  const { id } = router.query;


  useEffect(() => {
    (async function tmp() {
      if (wallet === undefined) return;

      const data = await getData(wallet.client);
      setData(data.hackatons[id]);
      console.log(data);
    })();
  }, [wallet]);

  if (wallet === undefined) return;
  if (data === undefined) return;

  return (
    <div className="h-full w-full flex justify-center px-4">
      <div className="flex flex-col gap-16 max-w-5xl">
        <div className="flex flex-col gap-6 max-w-3xl items-start">
          <Heading>
            Hackathon 1
          </Heading>
          <Text>
            { data && data.description}
          </Text>
          <a href={"/createteam/" + data.id}>
          <Button size="lg" colorScheme="cyan" color="white">
            Join
          </Button>
          </a>
        </div>
        <div className="grid gap-4 lg:grid-cols-3 grid-cols-1">
          { data && data.teams.map(val => <ProjectCard hackathon_id={id} project={val}/>)}
        </div>
      </div>
    </div>
  );
}
 
export default HackathonInfo;