export function ArrowCircleRight({ width, ...props }) {
  return (
    <svg
      {...props}
      width={width ? width : '20'}
      viewBox='0 0 20 20'
      fill='none'
    >
      <path
        d='M10.0001 18.3327C14.6025 18.3327 18.3334 14.6017 18.3334 9.99935C18.3334 5.39698 14.6025 1.66602 10.0001 1.66602C5.39771 1.66602 1.66675 5.39698 1.66675 9.99935C1.66675 14.6017 5.39771 18.3327 10.0001 18.3327Z'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.94995 12.9419L11.8833 10.0003L8.94995 7.05859'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
