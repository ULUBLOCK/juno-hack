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
          <Button colorScheme="cyan" color="white">
            Join
          </Button>
          <Button colorScheme="blackAlpha">
            More
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
 
export default HackathonCard;