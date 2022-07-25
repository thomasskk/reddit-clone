import * as React from "react";
import { SVGProps } from "react";

const SvgScheduled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 144h-94V50h-62v94H256V50h-62v94h-94q-23 0-39.5 16.5T44 200v650q0 23 16.5 39.5T100 906h800q23 0 39.5-16.5T956 850V200q0-23-16.5-39.5T900 144zm-6 700H106V456h788v388zm0-450H106V206h88v44h62v-44h488v44h62v-44h88v188z"
    />
  </svg>
);

export default SvgScheduled;
