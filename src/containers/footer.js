import React from 'react';
import { Footer } from '../components';

const FooterContainer = ({ ...restProps }) => {
  return (
    <Footer>
      <Footer.Text>
        😀 designed & developed by{' '}
        <a
          style={{ color: '#7289da', textDecoration: 'none' }}
          href='https://github.com/gokulkrishna-k'
          target='_blank'
          rel='noreferrer'
        >
          Gokul Krishna K
        </a>
      </Footer.Text>
    </Footer>
  );
};

export default FooterContainer;
