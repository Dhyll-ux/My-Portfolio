"use client";

import { useCallback, useState } from "react";
import { MotionConfig } from "motion/react";
import Preloader from "./Preloader";
import Header from "./Header";
import ContactDrawer from "./ContactDrawer";
import { ContactContext } from "./contact-context";

// Wraps the page with the preloader, header and contact drawer.
export default function SiteChrome({ children }) {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  return (
    <MotionConfig reducedMotion="user">
      <ContactContext.Provider value={openContact}>
        <Preloader />
        <Header />
        {children}
        <ContactDrawer open={contactOpen} onClose={closeContact} />
      </ContactContext.Provider>
    </MotionConfig>
  );
}
