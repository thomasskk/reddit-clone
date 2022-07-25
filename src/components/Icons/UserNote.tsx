import * as React from "react";
import { SVGProps } from "react";

const SvgUserNote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M869 50H677v62h192q8 0 13.5 5.5T888 131v738q-1 6-5 11t-10 7L360 704v30q0 29-10 55t-28.5 47-43.5 33.5-53 16.5q-48-7-80-43.5T112 757V131q0-8 5.5-13t13.5-5h180V50H131q-33 0-57 24t-24 57v626q0 34 11.5 65.5t33 57.5 50.5 43 62 23l36 4h626q33 0 57-24t24-57V131q0-33-24-57t-57-24zM418 783l283 104H358q46-42 60-104zm184-662q0 31-17 57t-46 37.5-59 5.5-52-28-28-52.5 5.5-59T443 36t57-17q20 0 39 7.5t33.5 22 22 33.5 7.5 39zm-18 491H300v-62h284v62zm116-150H300v-62h400v62z"
    />
  </svg>
);

export default SvgUserNote;
