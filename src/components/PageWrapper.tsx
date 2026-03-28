import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";

interface Props {
  children: ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <FooterSection />
    </>
  );
};

export default PageWrapper;
