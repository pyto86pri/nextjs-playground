import React from 'react';
import { Drawer, Navigation, Header, Textfield } from 'react-mdl';

const CustomHeader: React.FC<{}> = () => (
  <>
    <Header title="pyto86's Blog">
      <Textfield
        value=""
        onChange={() => {}}
        label="Search"
        expandable
        expandableIcon="search"
      />
    </Header>
    <Drawer title="Title">
      <Navigation>
        <a href="#">Home</a>
        <a href="#">About</a>
      </Navigation>
    </Drawer>
  </>
);

export default CustomHeader;
