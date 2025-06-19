import "../globals.css";
import type { Metadata } from "next";

import { EndpointsContext } from "./agent";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AIGraphUI",
  description: "Generative UI application with AIGraphUI",
};

export default function RootLayout(props: { children: ReactNode }) {
  return <EndpointsContext>{props.children}</EndpointsContext>;
}
