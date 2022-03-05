import Nav from 'components/nav';
import React from 'react';
import { ABOUT, BLOGS, CAREERS } from 'routes/router';

const HeaderNav: React.FunctionComponent = (): JSX.Element => {
  return (
    <Nav>
      <Nav.Group>
        <Nav.Link as="link" href="/">
          Chat with us
        </Nav.Link>

        <Nav.Link as="a" href="tel:+420336775664" variant="primary">
          +420 336 775 664
        </Nav.Link>

        <Nav.Link as="a" href="mailto:info@freshnesecom.com" variant="primary">
          info@freshnesecom.com
        </Nav.Link>
      </Nav.Group>

      <Nav.Group>
        <Nav.Link as="link" href={BLOGS}>
          Blog
        </Nav.Link>

        <Nav.Link as="link" href={ABOUT}>
          About Us
        </Nav.Link>

        <Nav.Link as="link" href={CAREERS}>
          Careers
        </Nav.Link>
      </Nav.Group>
    </Nav>
  );
};

export default HeaderNav;
export type HeaderNavType = { Navigation: typeof HeaderNav };
