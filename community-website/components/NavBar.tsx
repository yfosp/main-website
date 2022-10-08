import React, { useState, useEffect } from "react";
import { Disclosure } from '@headlessui/react';
import DarkModeButton from "./DarkModeButton";

export default function NavBar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <DarkModeButton></DarkModeButton>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
