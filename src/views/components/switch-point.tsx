export function SwitchPoint({ activePosition, width, ...props }
  : string | any
) {
  return (
    <svg
      {...props}
      width={width || '32'}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M21 16C21 17.6569 19.6569 19 18 19C16.3431 19 15 17.6569 15 16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16Z"
        fill="#1C1C1C"
        fillOpacity="0.2"
        className="dark:fill-[#88CCBC]"
      />
      <path
        d="M31 16C31 17.6569 29.6569 19 28 19C26.3431 19 25 17.6569 25 16C25 14.3431 26.3431 13 28 13C29.6569 13 31 14.3431 31 16Z"
        fill="#1C1C1C"
        fillOpacity="0.2"
        className="dark:fill-[#88CCBC]"
      />
      <path
        d="M1 16C1 14.3431 2.34315 13 4 13H8C9.65685 13 11 14.3431 11 16C11 17.6569 9.65685 19 8 19H4C2.34315 19 1 17.6569 1 16Z"
        fill="#34786A"
      />
    </svg>
  );
}

export default SwitchPoint;
