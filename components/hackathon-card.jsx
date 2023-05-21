/* eslint-disable @next/next/no-html-link-for-pages */
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Text } from "@chakra-ui/react";

const HackathonCard = ({ hackathon }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="lg"> {hackathon.name} </Heading>
      </CardHeader>
      <CardBody>
        <Text>
          {hackathon.description}
        </Text>
      </CardBody>
      <Divider/>
      <CardFooter>
        <ButtonGroup>
          <a href={"/createteam/" + hackathon.id.toString()}>
            <Button colorScheme="cyan" color="white">
            Join
          </Button>
          </a>

          <a href={"/hackathoninfo/" + hackathon.id.toString()}>
          <Button colorScheme="blackAlpha">
            More
          </Button>
          </a>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
 
export default HackathonCard;