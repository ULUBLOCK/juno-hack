/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react";
import Logo from "../public/images/logoNav.png";
import Image from 'next/image'
import { connect, useWallet } from "../utils"

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    const [address, setAddress] = useState("");

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setAddress(localStorage.getItem('keplrAddress') || "");
      }
    }, []);
    
    const [isConnected, setConnected] = useState(false);
    
      useEffect(() => {
        const connectedStatus = localStorage.getItem('keplrConnected');
        if (connectedStatus === 'true') {
          setConnected(true);
        }
      }, []);

      useEffect(() => {
        if (isConnected) {
          localStorage.setItem('keplrConnected', 'true');
        } else {
          localStorage.removeItem('keplrConnected');
        }
      }, [isConnected]);
    
      const connectWallet = async () => {
        if (window.keplr) {
          const chainId = "testing";
          await window.keplr.enable(chainId);
          const offlineSigner = window.keplr.getOfflineSigner(chainId);
          const accounts = await offlineSigner.getAccounts();
          if (accounts.length > 0) {
            const address = accounts[0].address;
            setAddress(address);
            localStorage.setItem('keplrAddress', address);
            setConnected(true);
          }
        } else {
          alert("Please install Keplr extension.");
        }
      };
      
      const disconnectWallet = () => {
        setConnected(false);
        setAddress("");
        localStorage.removeItem('keplrConnected');
        localStorage.removeItem('keplrAddress');
      };
    
/**
 * 
 */
    return (
        <>
        <nav className="bg-gray-300 w-full shadow pt-2 ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-1 md:py-1 md:block">
                        <a href="/">
                            <h2 className="text-2xl font-bold">
                            <Image alt="bt" src={Logo} width={90} height={90} objectFit="cover" />
                            </h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <div
                        className={`items-center flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-black font-bold hover:text-[#1da7a4]">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-black font-bold hover:text-[#1da7a4]">
                                <a href="/hackathons">All Hackathons</a>
                            </li>
                            <li className="text-black font-bold hover:text-[#1da7a4]">
                                <a href="/createHack">Create Hackathon</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                
            </div>
        </nav>
        
        <div className="flex w-full items-center gap-4 px-8">
      <button className="bg-[#1da7a4] px-8 py-4 rounded-xl text-white my-3" onClick={connectWallet}>Connect Wallet</button>
      {isConnected &&
      <button className="bg-[#1da7a4] px-8 py-4 rounded-xl text-white my-3" onClick={disconnectWallet}>Disconnect Wallet</button>
    }
    {isConnected && <p>Wallet is connected with address: {address}</p>}
  </div>

    </>
    );
}