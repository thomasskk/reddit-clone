import * as React from "react";
import { SVGProps } from "react";

const SvgTopicFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="m985 915-90-90q30-45 30-99.5T898 625t-73-73-100-27-100 27-73 73-27 100 27 100 73 73 100.5 27 99.5-30l90 90zm-260-90q-41 0-70.5-29.5T625 725t29.5-70.5T725 625t70.5 29.5T825 725t-29.5 70.5T725 825zM275 95q-49 0-90.5 24T119 184.5 95 275t24 90.5 65.5 65.5 90.5 24 90.5-24 65.5-65.5 24-90.5-24-90.5-65.5-65.5T275 95zm575 0H600q-22 0-38.5 16T545 150v250q0 22 16.5 38.5T600 455h250q23 0 39-16.5t16-38.5V150q0-23-16-39t-39-16zM400 545H150q-22 0-38.5 16T95 600v250q0 23 16 39t39 16h250q23 0 39-16t16-39V600q0-23-16-39t-39-16z"
    />
  </svg>
);

export default SvgTopicFill;
