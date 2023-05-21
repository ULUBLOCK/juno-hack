import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Text } from "@chakra-ui/react";

const ProjectCard = ({ project, hackathon_id }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="lg"> {project.name} </Heading>
      </CardHeader>
      <CardBody>
        <Text>
          {project.project_desc}
        </Text>
      </CardBody>
      <Divider/>
      <CardFooter>
        <ButtonGroup>
          <a href={"/projectinfo/" + hackathon_id + '_' + project.id}>
          <Button colorScheme="cyan" color="white">
            More
          </Button>
          </a>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
 
export default ProjectCard;