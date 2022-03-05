import Nav from 'components/nav';
import React from 'react';

const TopHeader: React.FunctionComponent = (): JSX.Element => {
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
        <Nav.Link as="link" href="/blog">
          Blog
        </Nav.Link>

        <Nav.Link as="link" href="/about">
          About Us
        </Nav.Link>

        <Nav.Link as="link" href="/careers">
          Careers
        </Nav.Link>
      </Nav.Group>
    </Nav>
  );
};

export default TopHeader;
