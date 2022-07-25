import * as React from "react";
import { SVGProps } from "react";

const SvgSponsored = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M900 94H100q-23 0-39.5 16.5T44 150v700q0 23 16.5 39.5T100 906h800q23 0 39.5-16.5T956 850V150q0-23-16.5-39.5T900 94zm-6 750H106V156h788v688zM291 589h107l22 61h70L372 350h-55L199 650h70zm53-160h2l37 106h-77zm385 203q35-18 54-52 22-38 21-82 1-44-21-81-21-33-56-50t-75-17H550v300h108q37 0 71-18zM616 409h44q19 0 35 9 20 10 30 29 14 24 14 51.5T725 550q-11 20-30 31-17 10-36 10h-43V409z"
    />
  </svg>
);

export default SvgSponsored;
