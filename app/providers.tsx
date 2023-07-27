'use client'

import client from "@/client";
import {ReactNode} from "react";
import {QueryClientProvider} from "@tanstack/react-query";

type ProvidersProps = {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
}

export default Providers;
