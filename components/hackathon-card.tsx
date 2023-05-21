/* eslint-disable @next/next/no-html-link-for-pages */
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Text } from "@chakra-ui/react";

const HackathonCard = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="lg"> Hackathon 1 </Heading>
      </CardHeader>
      <CardBody>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non ultricies turpis. Nulla porttitor pretium interdum.
        </Text>
      </CardBody>
      <Divider/>
      <CardFooter>
        <ButtonGroup>
          <a href="/createteam">
            <Button colorScheme="cyan" color="white">
            Join
          </Button>
          </a>

          <a href="/hackathoninfo">
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