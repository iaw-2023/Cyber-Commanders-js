"use client";


import { Disclosure } from "@headlessui/react";
import React from "react";
import {GiHamburgerMenu} from "react-icons/gi";


function SideNavbar(){
    return(
        <div>
            <Disclosure as="nav">
                <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-9000 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group ">
                    <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true">

                    </GiHamburgerMenu>
                </Disclosure.Button>
            </Disclosure>
        </div>
    );
}

export default SideNavbar;