import { IPropsSvgs } from "@app/interface/IPropsSvgs";

export function ArrowLeft({ width, ...props }: IPropsSvgs) {
  return (
    <svg
      {...props}
      width={width ? width : '24'}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M14.9998 19.9181L8.47984 13.3981C7.70984 12.6281 7.70984 11.3681 8.47984 10.5981L14.9998 4.07812'
        strokeWidth='2.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15 19.9184L8.47998 13.3984'
        strokeWidth='2.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
