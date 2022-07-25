import * as React from "react";
import { SVGProps } from "react";

const SvgEffectFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1020 1000" {...props}>
    <path
      fill="currentColor"
      d="m862 218-80-80q-23-24-57-24t-58 24L517 289l194 194 151-151q23-23 23-57t-23-57zM38 768q-24 23-24 57t24 58l80 79q23 24 57 24t58-24l425-426-194-194zm306-543v25h62v-25q0-28 20.5-48.5T475 156h25V94h-25q-28 0-48.5-20.5T406 25V0h-62v25q0 28-20.5 48.5T275 94h-25v62h25q28 0 48.5 20.5T344 225zM985 44q-12 0-20.5-8.5T956 15V0h-62v15q0 12-8.5 20.5T865 44h-15v62h15q12 0 20.5 8.5T894 135v15h62v-15q0-12 8.5-20.5T985 106h15V44h-15zm-79 471v-15h-62v15q0 12-8.5 20.5T815 544h-15v62h15q12 0 20.5 8.5T844 635v15h62v-15q0-12 8.5-20.5T935 606h15v-62h-15q-12 0-20.5-8.5T906 515z"
    />
  </svg>
);

export default SvgEffectFill;
