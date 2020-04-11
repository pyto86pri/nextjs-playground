import React from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

const CustomFooter: React.FC<{}> = () => (
    <Footer size="mini">
        <FooterSection type="middle" logo="© 2020 pyto86 All rights reserved." />
    </Footer>
);

export default CustomFooter;
