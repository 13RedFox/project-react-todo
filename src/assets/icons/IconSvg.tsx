import React from 'react';

interface Props {
  id: string;
}

const IconSvg = ({ id }: Props) => {
  switch (id) {
    case 'entypo-list':
      return (
        <svg viewBox="0 0 18 18">
          <path d="M12.96 8.10001H7.74001C7.24321 8.10001 7.20001 8.50231 7.20001 9.00001C7.20001 9.49771 7.24321 9.90001 7.74001 9.90001H12.96C13.4568 9.90001 13.5 9.49771 13.5 9.00001C13.5 8.50231 13.4568 8.10001 12.96 8.10001ZM14.76 12.6H7.74001C7.24321 12.6 7.20001 13.0023 7.20001 13.5C7.20001 13.9977 7.24321 14.4 7.74001 14.4H14.76C15.2568 14.4 15.3 13.9977 15.3 13.5C15.3 13.0023 15.2568 12.6 14.76 12.6ZM7.74001 5.40001H14.76C15.2568 5.40001 15.3 4.99771 15.3 4.50001C15.3 4.00231 15.2568 3.60001 14.76 3.60001H7.74001C7.24321 3.60001 7.20001 4.00231 7.20001 4.50001C7.20001 4.99771 7.24321 5.40001 7.74001 5.40001ZM4.86001 8.10001H3.24001C2.74321 8.10001 2.70001 8.50231 2.70001 9.00001C2.70001 9.49771 2.74321 9.90001 3.24001 9.90001H4.86001C5.35681 9.90001 5.40001 9.49771 5.40001 9.00001C5.40001 8.50231 5.35681 8.10001 4.86001 8.10001ZM4.86001 12.6H3.24001C2.74321 12.6 2.70001 13.0023 2.70001 13.5C2.70001 13.9977 2.74321 14.4 3.24001 14.4H4.86001C5.35681 14.4 5.40001 13.9977 5.40001 13.5C5.40001 13.0023 5.35681 12.6 4.86001 12.6ZM4.86001 3.60001H3.24001C2.74321 3.60001 2.70001 4.00231 2.70001 4.50001C2.70001 4.99771 2.74321 5.40001 3.24001 5.40001H4.86001C5.35681 5.40001 5.40001 4.99771 5.40001 4.50001C5.40001 4.00231 5.35681 3.60001 4.86001 3.60001Z" />
        </svg>
      );
    case 'plus':
      return (
        <svg viewBox="0 0 12 12">
          <path
            d="M6 1V11"
            stroke="#868686"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 6H11"
            stroke="#868686"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'sun':
      return (
        <svg viewBox="0 0 82 83" fill="none">
          <g filter="url(#filter0_d)">
            <circle cx="43" cy="40" r="35" fill="url(#paint0_linear)" />
            <circle cx="43" cy="40" r="29" fill="url(#paint1_linear)" />
            <circle cx="43" cy="40" r="35" fill="#FF9255" />
            <circle cx="43" cy="40" r="29" fill="url(#paint2_linear)" />
            <mask
              id="mask0"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="8"
              y="5"
              width="70"
              height="70">
              <circle cx="43" cy="40" r="35" fill="url(#paint3_linear)" />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M50.5 43.0259C69.3 21.0259 88 20.5259 95 23.0259L106.5 34.0259L96.5 81.5259L24 104.026L-16.5 85.5259L-21 41.5259C-5 51.1925 31.7 65.0259 50.5 43.0259Z"
                fill="url(#paint4_linear)"
              />
              <path
                d="M40 39.9827C-1.19673 15 -13.3329 22.5952 -19.5717 26.6358L-28.2385 39.9827L-7.59815 83.917L68.1312 89.1674L103.301 61.8617L97.5766 18.0041C84.224 31.0866 66.2297 55.8889 40 39.9827Z"
                fill="url(#paint5_linear)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="82"
              height="82"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-2" dy="1" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <linearGradient
              id="paint0_linear"
              x1="43"
              y1="5"
              x2="43"
              y2="75"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC123" />
              <stop offset="1" stopColor="#F8832E" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="43"
              y1="11"
              x2="43"
              y2="69"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFBF24" />
              <stop offset="1" stopColor="#F4924B" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="43"
              y1="11"
              x2="43"
              y2="69"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFBF24" />
              <stop offset="1" stopColor="#F4924B" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="43"
              y1="5"
              x2="43"
              y2="75"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC123" />
              <stop offset="1" stopColor="#F8832E" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="42.75"
              y1="22"
              x2="42.75"
              y2="104.026"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF9D55" stopOpacity="0.6" />
              <stop offset="1" stopColor="#FD8A37" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="31.0465"
              y1="13.6391"
              x2="49.8823"
              y2="93.473"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFBD3E" stopOpacity="0.49" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'moon':
      return (
        <svg viewBox="0 0 82 82">
          <g filter="url(#filter0_d)">
            <circle cx="39" cy="40" r="35" fill="url(#paint0_linear)" />
            <circle cx="39" cy="40" r="29" fill="url(#paint1_linear)" />
            <mask
              id="mask0"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="4"
              y="5"
              width="70"
              height="70">
              <circle cx="39" cy="40" r="35" fill="url(#paint2_linear)" />
            </mask>
            <g mask="url(#mask0)">
              <circle cx="59" cy="54" r="15" fill="url(#paint3_linear)" />
              <circle cx="31" cy="70" r="9" fill="url(#paint4_linear)" />
              <circle cx="42" cy="36" r="2" fill="url(#paint5_linear)" />
              <circle cx="31" cy="47" r="4" fill="url(#paint6_linear)" />
              <circle cx="10.5" cy="45.5" r="5.5" fill="url(#paint7_linear)" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="82"
              height="82"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="1" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <linearGradient
              id="paint0_linear"
              x1="39"
              y1="5"
              x2="39"
              y2="75"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#D6E9FF" />
              <stop offset="1" stopColor="#CDE4FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="39"
              y1="11"
              x2="39"
              y2="69"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#CEE5FF" />
              <stop offset="0.9999" stopColor="#EDF6FF" />
              <stop offset="1" stopColor="#F1F9FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="39"
              y1="5"
              x2="39"
              y2="75"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#DDEDFF" />
              <stop offset="1" stopColor="#3483F9" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="59"
              y1="39"
              x2="59"
              y2="69"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#C8D7FF" />
              <stop offset="1" stopColor="#DCF0FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="31"
              y1="61"
              x2="31"
              y2="79"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#C8D7FF" />
              <stop offset="1" stopColor="#DCF0FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="42"
              y1="34"
              x2="42"
              y2="38"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#C8D7FF" />
              <stop offset="1" stopColor="#DCF0FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear"
              x1="31"
              y1="43"
              x2="31"
              y2="51"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#C8D7FF" />
              <stop offset="1" stopColor="#DCF0FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear"
              x1="10.5"
              y1="40"
              x2="10.5"
              y2="51"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#C8D7FF" />
              <stop offset="1" stopColor="#DCF0FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'done':
      return (
        <svg viewBox="0 0 11 8" fill="none">
          <path
            d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
            stroke=""
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'edit':
      return (
        <svg viewBox="0 0 15 15">
          <path d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z" />
        </svg>
      );
    default:
      return null;
  }
};

export default IconSvg;
