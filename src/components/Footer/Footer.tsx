import React from "react";
import styles from "./styles.module.scss";
import footer_logo_incode from '../../assets/icons/footer_logo_incode.png';
import { NavLink } from "react-router-dom";

export default function Footer() {

  
  return (
    <div className={styles.footer}>
      <p className={styles.footer__text}>performed as part of a test case for the company</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
  <g filter="url(#filter0_f_108_3185)">
    <circle cx="125" cy="125" r="41" fill="url(#paint0_linear_108_3185)" fill-opacity="0.8"/>
  </g>
  <image xlinkHref={footer_logo_incode} x="75" y="75" width="100" height="100" />
  <defs>
    <filter id="filter0_f_108_3185" x="0" y="0" width="250" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="42" result="effect1_foregroundBlur_108_3185"/>
    </filter>
    <linearGradient id="paint0_linear_108_3185" x1="169" y1="84" x2="84" y2="163.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
  </svg>

    <div className={styles.footer__links}>
      <NavLink to='https://github.io/'>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 19" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.25C4.0275 0.25 0 4.37937 0 9.47764C0 13.5609 2.57625 17.0097 6.15375 18.2324C6.60375 18.3131 6.7725 18.0363 6.7725 17.7941C6.7725 17.5749 6.76125 16.8482 6.76125 16.0754C4.5 16.5022 3.915 15.5102 3.735 14.9912C3.63375 14.7259 3.195 13.9069 2.8125 13.6878C2.4975 13.5147 2.0475 13.088 2.80125 13.0764C3.51 13.0649 4.01625 13.7454 4.185 14.0223C4.995 15.4179 6.28875 15.0258 6.80625 14.7835C6.885 14.1837 7.12125 13.78 7.38 13.5493C5.3775 13.3187 3.285 12.5228 3.285 8.99319C3.285 7.98969 3.63375 7.1592 4.2075 6.51326C4.1175 6.28257 3.8025 5.33674 4.2975 4.06794C4.2975 4.06794 5.05125 3.82571 6.7725 5.01377C7.4925 4.80615 8.2575 4.70234 9.0225 4.70234C9.7875 4.70234 10.5525 4.80615 11.2725 5.01377C12.9938 3.81418 13.7475 4.06794 13.7475 4.06794C14.2425 5.33674 13.9275 6.28257 13.8375 6.51326C14.4113 7.1592 14.76 7.97815 14.76 8.99319C14.76 12.5343 12.6562 13.3187 10.6538 13.5493C10.98 13.8377 11.2613 14.3914 11.2613 15.2565C11.2613 16.4907 11.25 17.4826 11.25 17.7941C11.25 18.0363 11.4187 18.3246 11.8688 18.2324C13.6554 17.614 15.2079 16.4366 16.3078 14.8662C17.4077 13.2957 17.9995 11.4111 18 9.47764C18 4.37937 13.9725 0.25 9 0.25Z" fill="#9E9E9E"/>
    </svg>
    </NavLink>
    <NavLink to='https://x.com/'>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 16" fill="none">
      <path d="M16.1498 4.67864C16.1612 4.84269 16.1612 5.00678 16.1612 5.17084C16.1612 10.1747 12.4493 15.9404 5.66499 15.9404C3.57488 15.9404 1.63326 15.3192 0 14.2412C0.296966 14.2763 0.582471 14.288 0.890863 14.288C2.61546 14.288 4.20305 13.6904 5.47083 12.6709C3.84899 12.6357 2.48985 11.5458 2.02156 10.0458C2.25001 10.081 2.47842 10.1044 2.71829 10.1044C3.0495 10.1044 3.38074 10.0575 3.6891 9.97553C1.99875 9.62394 0.730936 8.10052 0.730936 6.26067V6.21382C1.22204 6.49507 1.79315 6.67085 2.39844 6.69426C1.40478 6.01456 0.753788 4.85441 0.753788 3.5419C0.753788 2.83879 0.936496 2.19426 1.25631 1.63176C3.07232 3.92863 5.80203 5.42861 8.86293 5.5927C8.80583 5.31144 8.77155 5.01851 8.77155 4.72553C8.77155 2.63957 10.4162 0.940369 12.4607 0.940369C13.5228 0.940369 14.4822 1.3974 15.1561 2.13568C15.9898 1.97163 16.7893 1.6552 17.4975 1.22162C17.2233 2.10055 16.6409 2.83883 15.8756 3.30755C16.618 3.22555 17.3376 3.01457 18 2.72163C17.4975 3.4716 16.8693 4.13954 16.1498 4.67864Z" fill="#9E9E9E"/>
    </svg>
    </NavLink>
    <NavLink to='https://likee.video/'>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 0.5C9.61833 0.5 8.77833 0.958182 8.18333 1.59091C7.58833 2.22364 7.27333 2.59455 7.25 2.68182C7.22667 2.59455 6.92333 2.22364 6.31667 1.59091C5.71 0.958182 4.95167 0.5 3.75 0.5C1.846 0.593818 0.303667 1.95418 0.25 3.77273C0.25 4.34 0.355 5.43091 1.03167 6.68545C1.70833 7.94 3.76167 9.89273 7.25 12.5C10.7267 9.89273 12.815 7.95091 13.48 6.68545C14.145 5.42 14.25 4.31818 14.25 3.77273C14.1952 1.92909 12.6843 0.594909 10.75 0.5Z" fill="#9E9E9E"/>
    </svg>
    </NavLink>
    </div>

    <p className={styles.footer__bottom_text}>2023</p>
    </div>
  );
}
