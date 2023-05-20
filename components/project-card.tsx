import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Text } from "@chakra-ui/react";

const ProjectCard = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="lg"> Project 1 </Heading>
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
            More
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
 
export default ProjectCard;