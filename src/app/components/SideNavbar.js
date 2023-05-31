"use client";


import { Disclosure } from "@headlessui/react";
import React from "react";
import {GiHamburgerMenu} from "react-icons/gi";


function SideNavbar(){
    return(
        <div>
            <Disclosure as="nav">
                <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-red-9000 hover:text-red focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black group hover:red-900">
                    <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true">

                    </GiHamburgerMenu>
                </Disclosure.Button>
            </Disclosure>

            <div className="p-6 w-1/2 h-screen bg-gray z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">

            </div>



        </div>
    );
}

export default SideNavbar;