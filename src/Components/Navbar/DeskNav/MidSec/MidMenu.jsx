import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { useState } from 'react'


export default function MidMenu() {

    const [menuItem, setMenuItem] = useState('All Departments')

    return(
        <Menu closeOnSelect={true} >
            {({ isOpen }) => (
                <>
            <MenuButton as={Button} 
                isActive={isOpen}
                colorScheme='white' 
                color='blackAlpha.700'
                rightIcon={ !isOpen ? <ChevronDownIcon /> : <ChevronUpIcon/>}
                h='50px'
                fontSize='sm'
                >
                {menuItem}
            </MenuButton>
            <MenuList minWidth='240px' overflowY='scroll' h='300px'>
                <MenuOptionGroup type='radio' onChange={(e) => setMenuItem(e.toUpperCase())}>
                    <MenuItemOption value='email'>All Departments</MenuItemOption>
                    <MenuItemOption value='phone'>Auto</MenuItemOption>
                    <MenuItemOption value='baby'>Baby</MenuItemOption>
                    <MenuItemOption value='beauty'>Beauty</MenuItemOption>
                    <MenuItemOption value='books'>Books</MenuItemOption>
                    <MenuItemOption value='business'>Business</MenuItemOption>
                    <MenuItemOption value='clothes'>Clothes</MenuItemOption>
                    <MenuItemOption value='collectibles'>Collectibles</MenuItemOption>
                    <MenuItemOption value='computers'>Computers</MenuItemOption>
                    <MenuItemOption value='crafts'>Crafts</MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
            </>
            )}
        </Menu>
    )
};
