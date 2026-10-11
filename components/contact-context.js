"use client";

import { createContext, useContext } from "react";

export const ContactContext = createContext(() => {});

// Lets any button on the page open the contact drawer.
export const useOpenContact = () => useContext(ContactContext);
