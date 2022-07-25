import * as React from "react";
import { SVGProps } from "react";

const SvgViewClassic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 94H100q-23 0-39.5 16.5T44 150v700q0 23 16.5 39.5T100 906h800q23 0 39.5-16.5T956 850V150q0-23-16.5-39.5T900 94zm-6 750H106V659h788v185zM106 594V408h788v186H106zm0-438h788v188H106V156z"
    />
  </svg>
);

export default SvgViewClassic;
