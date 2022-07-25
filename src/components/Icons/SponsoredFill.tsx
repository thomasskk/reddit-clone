import * as React from "react";
import { SVGProps } from "react";

const SvgSponsoredFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M695 418q-16-9-35-9h-44v182h44q19 0 35-10 20-11 31-31 13-24 13-51.5T726 447q-11-19-31-29zm-351 11-38 106h77l-37-106h-2zM900 94H100q-23 0-39.5 16.5T44 150v700q0 23 16.5 39.5T100 906h800q23 0 39.5-16.5T956 850V150q0-23-16.5-39.5T900 94zM420 650l-22-61H291l-22 61h-70l118-300h55l118 300h-70zm363-70q-20 34-54 52t-72 18H550V350h103q39 0 74 17t56 50q22 37 21 81 1 44-21 82z"
    />
  </svg>
);

export default SvgSponsoredFill;
