import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function NavBar() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' className='bg-transparent'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>UTE</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Latest
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Politics</MDBDropdownItem>
                  <MDBDropdownItem link>Business</MDBDropdownItem>
                  <MDBDropdownItem link>Entertainment</MDBDropdownItem>
                  <MDBDropdownItem link>Technology</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Videos</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>

        <form className='d-flex input-group w-auto'>
          <input
            type='search'
            className='form-control'
            placeholder='Type query'
            aria-label='Search'
          />
          <MDBBtn color='danger'>Search</MDBBtn>
        </form>
      </MDBContainer>
    </MDBNavbar>
  );
}
