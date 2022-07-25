import * as React from "react";
import { SVGProps } from "react";

const SvgUserNoteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M602 121q0 31-17 57t-46 37.5-59 5.5-52-28-28-52.5 5.5-59T443 36t57-17q20 0 39 7.5t33.5 22 22 33.5 7.5 39zM368 949h313L421 849q-13 57-53 100zm582-818v738q0 31-21.5 54.5T875 949L356 749v51q0 28-10 53.5t-28.5 46-43 33T222 948q-35-4-66.5-20T100 885.5t-37-60T50 757V131q0-33 24-57t57-24h213q-16 34-16 72t16.5 73.5 47 60T460 289t76.5 1 69-32 48.5-59 18.5-74T656 50h213q33 0 57 24t24 57zM584 550H300v75h284v-75zm116-150H300v75h400v-75z"
    />
  </svg>
);

export default SvgUserNoteFill;
