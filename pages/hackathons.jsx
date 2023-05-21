import { useEffect, useState } from "react";
import HackathonCard from "../components/hackathon-card";
import { getData, useWallet } from "../utils";

const Hackathons = () => {
  const [data, setData] = useState();
  const { wallet } = useWallet();

  useEffect(() => {
    (async function tmp() {
      if (wallet !== undefined) {
        console.log("dafasdf")
        const data = await getData(wallet.client);
        console.log(data);
        setData(data);
      }
    })();
  }, [wallet]);

  return (
    <div className="h-full w-full flex justify-center pt-8">
      <div className="h-full w-full max-w-5xl grid gap-4 lg:grid-cols-3 grid-cols-1 mx-4">
        { data?.hackatons && data.hackatons.map(val => (<HackathonCard hackathon={val}/>)) }
      </div>
    </div>
  );
}
 
export default Hackathons;