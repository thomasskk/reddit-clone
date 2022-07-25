import * as React from "react";
import { SVGProps } from "react";

const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 94h-94V0h-62v94H256V0h-62v94h-94q-23 0-39.5 16.5T44 150v650q0 23 16.5 39.5T100 856h800q23 0 39.5-16.5T956 800V150q0-23-16.5-39.5T900 94zm-6 700H106V406h788v388zm0-450H106V156h88v44h62v-44h488v44h62v-44h88v188z"
    />
  </svg>
);

export default SvgCalendar;
