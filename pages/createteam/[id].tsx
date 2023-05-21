import { FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { contract, getData, useWallet } from "../../utils";

const CreateTeam = () => {
  const router = useRouter();
  const { id } = router.query;
  const { wallet } = useWallet();
  const [data, setData] = useState();

  useEffect(() => {
    (async function tmp() {
      if (wallet !== undefined) {
        const data = await getData(wallet.client);
        setData(data.hackatons[id].id);
        console.log(data);
      }
    })();
  }, [wallet]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[100%] mx-4 my-8">

        <div className="flex flex-col gap-8 items-center border-2 rounded-xl p-4">
          <Heading>
            Create Your Team
          </Heading>

          <form onSubmit={async (e) => {
            e.preventDefault();
            console.log(e);
            const team_name = e.target[0].value;
            const project_name = e.target[1].value;
            const goal = e.target[2].value;
            const desc = e.target[3].value;
            const present = e.target[5].value;
            const github = e.target[6].value;
            const args = {
              create_team: {
                hackathon_id: data,
                team_name: team_name,
                project_goal: goal,
                project_desc: desc,
                image: "aösfmşslf",
                project_name: project_name,
                video_link: present,
                github_link: github,
                project_score: 0,
              }
            }
            console.log(args);
            await wallet.client.execute(wallet.account.address, contract, args, "auto");
          }}>
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
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default CreateTeam;