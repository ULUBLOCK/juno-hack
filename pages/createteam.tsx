import { Button, FormControl, FormLabel, Heading, Input, Text, Textarea } from "@chakra-ui/react";

const CreateTeam = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-3xl mx-4 my-8">

        <div className="flex flex-col gap-8 items-center border-2 rounded-xl p-4">
          <Heading>
            Create Your Team
          </Heading>

          <div className="flex flex-col items-start gap-6">
            <div className="flex gap-4">
              <FormControl>
                <FormLabel>Team name</FormLabel>
                <Input placeholder="MyTeam"/>
              </FormControl>
              <FormControl>
                <FormLabel>Project name</FormLabel>
                <Input placeholder="BestProject"/>
              </FormControl>
            </div>

            <FormControl>
              <FormLabel>Project goal</FormLabel>
              <Textarea placeholder="To improve..."/>
            </FormControl>

            <FormControl>
              <FormLabel>Project explanation</FormLabel>
              <Textarea placeholder="Our project is about..."/>
            </FormControl>

            <Button size="lg" colorScheme="blue">
              Upload Project Logo
            </Button>

            <FormControl>
              <FormLabel>Presentation link</FormLabel>
              <Input placeholder="https://drive.google.com/myproject"/>
            </FormControl>

            <FormControl>
              <FormLabel>Project link</FormLabel>
              <Input placeholder="https://www.github.com/myproject"/>
            </FormControl>
          </div>

          <Button size="lg" colorScheme="green">
            Apply!
          </Button>
        </div>
      </div>
    </div>
  );
}
 
export default CreateTeam;