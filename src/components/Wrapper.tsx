import { ReactNode } from "react";

import { Banner } from "@/components/Banner";

interface ContainerProps {
  children: ReactNode;
}

export function Wrapper({ children }: ContainerProps) {
  return (
    <>
      <Banner />
      <div className="m-auto flex w-full flex-grow flex-col px-16 pt-8">
        {children}
      </div>
    </>
  );
}
