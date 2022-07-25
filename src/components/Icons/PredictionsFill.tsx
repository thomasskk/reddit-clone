import * as React from "react";
import { SVGProps } from "react";

const SvgPredictionsFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M756 747q-77 54-168 73t-181.5 0T239 747l-47 127q-7 19-4.5 39t13.5 37q10 14 24.5 22t31.5 8h481q17 0 31.5-8t24.5-22q11-17 13.5-37t-4.5-39zm55-267q-31 0-57-15t-41-42l-21-37-37-20q-27-15-42-41.5t-15-57 15-56.5 42-41l37-21 21-37q9-15 23-27-66-53-146-73T428.5 7t-150 63-110 120T119 344t19.5 161.5 85 139 134.5 90T518.5 760 675 716t123.5-104.5T868 465q-26 15-57 15zM477 183q-48 0-88.5 24T324 271.5 300 360q0 16-11 26.5T262.5 397 236 386.5 225 360q0-68 34-126t92-92 126-34q15 0 26 11t11 26.5-11 26.5-26 11zm455 47-54-30-30-54q-5-10-15.5-16t-21.5-6q-12 0-22 6t-16 16l-30 54-54 30q-11 6-16.5 16t-5.5 21.5 5.5 22T689 305l54 30 30 54q5 11 15.5 16.5T810 411q12 0 22-5.5t16-16.5l30-54 54-30q10-5 16-15.5t6-22-6-21.5-16-16z"
    />
  </svg>
);

export default SvgPredictionsFill;