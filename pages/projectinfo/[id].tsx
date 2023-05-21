import { Button, Heading, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getData, useWallet } from "../../utils";

const ProjectInfo = () => {
  const [sliderValue, setSliderValue] = useState(3);

  const [data, setData] = useState();
  const { wallet } = useWallet();
  const router = useRouter();

  useEffect(() => {
    (async function tmp() {
      if (wallet === undefined) return;

      const [hackathon_id, project_id] = router.query.id.split("_");
      const data = await getData(wallet.client);
      setData(data.hackatons[hackathon_id].teams[project_id]);
      console.log(data);
    })();
  }, [wallet]);

  if (wallet === undefined) return;
  if (data === undefined) return;

  return (
    <div className="w-full flex justify-center px-4">

      <div className="flex flex-col items-center max-w-3xl">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center font-bold text-[2rem]">
            {data.name} <br />
            {data.project_name}
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <Image
              width={256}
              height={256}
              alt="project logo"
              src="/projectPicture.png"/>
            <Text> {data.project_desc} </Text>
          </div>
        </div>

        <div className="my-3">
        <p className="font-bold text-[20px]">
          Project Goal
        </p>
         <div className="">
         {data.project_goal}
          </div>
        </div>

        <div className="my-3">
        <p className="font-bold text-[20px]">
          Project Description
        </p>        
         <div className="">
         {data.project_desc}
          </div>
        </div>

        <a className="my-3 hover:font-semibold cursor-pointer" href="/">       
        {data.video_link}
        </a>

        <a className="hover:font-semibold cursor-pointer" href="/">       
        {data.github_link}
        </a>


        <div className="flex flex-col lg:flex-row gap-10 items-center mt-16 w-full px-8">
          <Slider onChange={val => setSliderValue(val)} min={1} max={5} defaultValue={5}>
            <SliderMark
              value={sliderValue}
              borderRadius="md"
              textAlign="center"
              bg="cyan.400"
              color="white"
              mt="-10"
              ml="-6"
              w="12"
            >
              {sliderValue}
            </SliderMark>

            <SliderTrack>
              <SliderFilledTrack bg="cyan.400"/>
            </SliderTrack>
            <SliderThumb/>
          </Slider>

          <Button colorScheme="cyan" color="white" size="lg"> Vote </Button>
        </div>
      </div>

    </div>
  );
};

export default ProjectInfo;