import * as React from "react";
const SvgHotFood = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g fill="#2B111A" clipPath="url(#hot-food_svg__a)">
      <path d="M12.117 1.91v-.767a1.143 1.143 0 1 0-2.286 0v.785a9.2 9.2 0 0 1 2.286-.018M17.67 13.61l-.007.005-2.967 1.8q.075.25.095.511a.36.36 0 0 1-.33.385l-4.599.351-.027.001a.359.359 0 0 1-.027-.716l4.204-.32a1.73 1.73 0 0 0-1.79-1.237l-2.797.213a3.7 3.7 0 0 1-1.632-.245l-.299-.117a4.29 4.29 0 0 0-4.325.693l.307 4.027.425-.288a2.12 2.12 0 0 1 1.551-.335l4.872.836a4.43 4.43 0 0 0 2.664-.582l6.098-4.91a1.21 1.21 0 0 0-1.416-.072M2.794 11.583A2.03 2.03 0 0 0 4.627 12.7h12.85a2.03 2.03 0 0 0 1.833-1.118l.7-1.481H2.095zM.01 13.983l2.353-.18.46 6.017L.47 20zM16.524 4.666c-1.457-1.353-3.4-2.1-5.472-2.1-2.071 0-4.014.747-5.471 2.099-1.367 1.268-2.155 2.927-2.24 4.72h15.423c-.086-1.793-.873-3.45-2.24-4.72" />
    </g>
    <defs>
      <clipPath id="hot-food_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHotFood;