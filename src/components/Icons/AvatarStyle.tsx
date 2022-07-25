import * as React from "react";
import { SVGProps } from "react";

const SvgAvatarStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M975 275 775 70q-15-15-40-15h-80q-22 0-36.5 12.5T600 100q-4 30-27 53t-53 27q-39 8-70-15-38-23-45-65-4-20-18.5-32.5T350 55h-80q-25 0-40 15L30 275q-15 19-15 42t15 38l100 95q15 15 37.5 15t37.5-15h5v440q0 23 16.5 39t38.5 16h450q23 0 39-16.5t16-38.5V440l20 15q15 15 35.5 15t39.5-15l100-100q22-14 24-37t-14-43zM835 405l-125-85v560H275V310l-110 90-85-85 190-195h75q16 65 65 100 52 38 120 30 52-7 88-41t47-84h70l195 195z"
    />
  </svg>
);

export default SvgAvatarStyle;
