import { FormControl, FormLabel, Heading, Input, Text, Textarea } from "@chakra-ui/react";

const CreateTeam = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[100%] mx-4 my-8">

        <div className="flex flex-col gap-8 items-center border-2 rounded-xl p-4">
          <Heading>
            Create Your Team
          </Heading>

          <div className="flex flex-col items-start gap-6 w-[90%]">
            <div className="flex gap-[50px] w-[100%]">
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

            <button className='w-[30%] mt-[30px] p-2 font-bold rounded-[8px] bg-slate-400' >
              Upload Project Logo
            </button>

            <FormControl>
              <FormLabel>Presentation link</FormLabel>
              <Input placeholder="https://drive.google.com/myproject"/>
            </FormControl>

            <FormControl>
              <FormLabel>Project link</FormLabel>
              <Input placeholder="https://www.github.com/myproject"/>
            </FormControl>
          </div>

          <button className=' w-[40%] mt-[30px] p-2 font-bold rounded-[8px] bg-[#6AA4B0]' >
            Apply!
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default CreateTeam;