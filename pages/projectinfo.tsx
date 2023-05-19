import { Button, Heading, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

const ProjectInfo = () => {
  const [sliderValue, setSliderValue] = useState(3);

  return (
    <div className="w-full flex justify-center px-4">

      <div className="flex flex-col items-center max-w-3xl">
        <div className="flex flex-col items-start gap-8">
          <Heading>
            Project 1
          </Heading>

          <div className="flex flex-col lg:flex-row gap-6">
            <Image
              width={256}
              height={256}
              alt="project logo"
              src="/project.png"/>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ultricies turpis. Nulla porttitor pretium interdum. Pellentesque tristique condimentum sagittis. Curabitur tortor odio, hendrerit commodo ultrices ac, rutrum ut nibh. Nulla ex lorem, laoreet id pretium vel, facilisis ut turpis.</Text>
          </div>
        </div>

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