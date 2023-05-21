import { FunctionComponent, ReactNode } from "react";

import Navbar from "../navbar";
import Footer from "../footer";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout:FunctionComponent<BaseLayoutProps> = ({ children }) => {
  return (
    <>
        <Navbar />
        <div className="py-20 bg-gray-50 overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8 ">
          {children}
        </div>
        </div>
      <Footer />
    </>
  ) 
}

export default BaseLayout;