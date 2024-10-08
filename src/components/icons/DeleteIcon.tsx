/* import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';
export const DeleteIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-refresh"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke={props.color ?? defaultButtonColor}
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
  </svg>
); 変更前*/

import { JSX } from 'solid-js/jsx-runtime';

const defaultButtonColor = '#3B81F6';

export const DeleteIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke={props.color ?? defaultButtonColor}
  >
    <path 
      d="M8.0858 2.20712C8.86685 1.42608 10.1332 1.42608 10.9142 2.20712L14.7929 6.0858C15.574 6.86685 15.574 8.13318 14.7929 8.91423L9.29291 14.4142C8.91784 14.7893 8.40913 15 7.8787 15H5.12134C4.5909 15 4.0822 14.7893 3.70712 14.4142L1.20712 11.9142C0.426075 11.1332 0.426077 9.86685 1.20712 9.0858L8.0858 2.20712ZM10.2071 2.91423C9.8166 2.52371 9.18343 2.52371 8.79291 2.91423L4.16025 7.54689L9.45314 12.8398L14.0858 8.20712C14.4763 7.8166 14.4763 7.18344 14.0858 6.79291L10.2071 2.91423ZM8.74604 13.5469L3.45314 8.254L1.91423 9.79291C1.52371 10.1834 1.52371 10.8166 1.91423 11.2071L4.41423 13.7071C4.60177 13.8947 4.85612 14 5.12134 14H7.8787C8.14391 14 8.39827 13.8947 8.5858 13.7071L8.74604 13.5469Z" 
      fill="black" 
    />
  </svg>
);

