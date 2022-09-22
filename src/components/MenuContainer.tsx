import React from 'react'
import { Menu } from './Menu';

export const MenuContainer = () => {
  function displayMenu(): void {
    const headerMenu: any = document.querySelector('.header-menu');
    const menuIcon: any = document.querySelector('.menu-icon');

    headerMenu.classList.toggle("active");
    menuIcon.classList.toggle("clicked");
  }

  return (
    <Menu action={() => displayMenu()}/>
  )
}
