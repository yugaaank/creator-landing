import React from 'react';

const KatalystLogo = ({ className = "", textColor = "#0C0C0C" }) => {
  return (
    <svg 
      viewBox="0 0 450 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Red bar above the 'K' and first 'A' */}
      <rect x="0" y="0" width="85" height="12" fill="#F2613F" />
      
      {/* KATALYST text */}
      <g fill={textColor}>
        {/* K */}
        <path d="M0 40V90H12V70L24 90H38L21 65L36 40H22L12 60V40H0Z" />
        
        {/* A */}
        <path d="M45 90H58L68 55L78 90H91L75 40H61L45 90Z" />
        
        {/* T */}
        <path d="M100 40V51H118V90H131V51H149V40H100Z" />
        
        {/* A */}
        <path d="M155 90H168L178 55L188 90H201L185 40H171L155 90Z" />
        
        {/* L */}
        <path d="M210 40V90H245V79H222V40H210Z" />
        
        {/* Y */}
        <path d="M255 40L272 68V90H284V68L301 40H287L278 58L269 40H255Z" />
        
        {/* S - Refined block style */}
        <path d="M310 40H345V52H322V60H345V90H310V78H333V70H310V40Z" />
        
        {/* T */}
        <path d="M355 40V51H373V90H386V51H404V40H355Z" />
      </g>
    </svg>
  );
};

export default KatalystLogo;
