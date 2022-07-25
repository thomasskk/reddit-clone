import * as React from "react";
import { SVGProps } from "react";

const SvgUpvote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M650 956H350q-23 0-39.5-16.5T294 900V556H106q-16 0-30-9t-21-24.5-4.5-32T64 462L458 25q17-18 42-18t42 18l394 437q11 12 13.5 28.5t-4 32T925 547t-31 9H706v344q0 23-16.5 39.5T650 956zm-294-62h288V494l236-1L500 72 120 493h236v401zM505 67z"
    />
  </svg>
);

export default SvgUpvote;
