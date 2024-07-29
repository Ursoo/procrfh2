import Link from 'next/link';
import React from 'react';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
    <p>2022 PRO C.R.F.H. Toate drepturile rezervate</p>
    <p className="icons">
      <Link href='https://www.instagram.com/pro_crfh/'>
        <FaInstagram />
      </Link>
        <Link href='https://wa.me/0746940947'>
          <FaWhatsapp />
        </Link>
    </p>
    </div>
  );
}

export default Footer;
