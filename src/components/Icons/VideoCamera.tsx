import * as React from "react";
import { SVGProps } from "react";

const SvgVideoCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1020 1000" {...props}>
    <path
      fill="currentColor"
      d="M0 0h1000v1000H0V0zm640 905H90q-22 0-38.5-16T35 850V350q0-23 16.5-39T90 295h550q23 0 39 16t16 39v65l95-65q5 0 15-2.5t15-2.5h120q25 0 40 15t15 40v400q0 25-15 40t-40 15H820q-10 0-30-10l-95-65v70q0 23-16 39t-39 16zM95 845h535v-70q0-23 16.5-39t38.5-16q10 0 30 10l105 70h105V405H815l-105 70q-19 11-42 7t-38-22q-10-20-10-30v-75H95v490zm100-590h-65v-30q0-34 18-64t48-48 64-18h430v60H260q-30 0-50 20t-20 50v30h5z"
    />
  </svg>
);

export default SvgVideoCamera;
