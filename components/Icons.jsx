function Svg({ children }) {
  return (
    <svg viewBox="0 0 24 24" role="img" focusable="false">
      {children}
    </svg>
  );
}

export function HtmlIcon() {
  return (
    <Svg>
      <path d="M4 2.5h16l-1.35 16.9L12 21.5 5.35 19.4 4 2.5Z" fill="currentColor" />
      <path d="M8 6.5h8.2l-.22 2.15H10.3l.14 1.72h5.22l-.53 5.76L12 17.05l-3.04-.92-.18-2.08h2.09l.08.8 1.05.32 1.15-.32.18-2.28H8.52L8 6.5Z" fill="#ffffff" />
    </Svg>
  );
}

export function CssIcon() {
  return (
    <Svg>
      <path d="M4 2.5h16l-1.35 16.9L12 21.5 5.35 19.4 4 2.5Z" fill="currentColor" />
      <path d="M8.2 6.5h7.7l-.2 2.08h-5.24l.12 1.55h5.01l-.44 5.93L12 17l-2.92-.9-.17-2.02h2.03l.08.8 1 .3 1.12-.34.12-1.66h-4.6L8.2 6.5Zm5.68 0-.14 1.58-3.7 1.34 3.52 1.18-.12 1.45-5.18-1.8.14-1.54 5.48-2.21Z" fill="#ffffff" />
    </Svg>
  );
}

export function JsIcon() {
  return (
    <Svg>
      <rect x="2.5" y="2.5" width="19" height="19" fill="#F7DF1E" />
      <path d="M15.18 17.37c.38.62.87 1.07 1.88 1.07.79 0 1.3-.4 1.3-.95 0-.66-.52-.89-1.4-1.28l-.48-.21c-1.38-.59-2.3-1.34-2.3-2.91 0-1.45 1.1-2.55 2.82-2.55 1.22 0 2.1.43 2.74 1.54l-1.5.96c-.33-.59-.69-.82-1.24-.82-.56 0-.92.36-.92.82 0 .57.36.8 1.19 1.16l.48.21c1.63.69 2.55 1.41 2.55 3.03 0 1.73-1.36 2.68-3.19 2.68-1.79 0-2.95-.85-3.52-1.96l1.59-.92ZM8.06 17.54c.3.54.57.99 1.22.99.62 0 1.01-.24 1.01-1.18v-6.39h1.89v6.41c0 1.94-1.14 2.83-2.8 2.83-1.5 0-2.39-.78-2.84-1.73l1.52-.93Z" fill="#ffffff" />
    </Svg>
  );
}

export function GithubIcon() {
  return (
    <Svg>
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.88 1.55 2.32 1.1 2.88.84.09-.66.34-1.1.61-1.35-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.11-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.21 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.92-2.35 4.79-4.58 5.04.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" fill="currentColor" />
    </Svg>
  );
}

export function LinkedinIcon() {
  return (
    <Svg>
      <path d="M6.94 8.5A1.94 1.94 0 1 1 6.94 4.62 1.94 1.94 0 0 1 6.94 8.5ZM5.3 9.97h3.28V20.5H5.3V9.97Zm5.34 0h3.15v1.44h.04c.44-.83 1.51-1.7 3.11-1.7 3.33 0 3.95 2.19 3.95 5.04v5.75h-3.28v-5.1c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7v5.19h-3.3V9.97Z" fill="currentColor" />
    </Svg>
  );
}

export function EmailIcon() {
  return (
    <Svg>
      <path d="M4.75 6.5h14.5A1.25 1.25 0 0 1 20.5 7.75v8.5a1.25 1.25 0 0 1-1.25 1.25H4.75A1.25 1.25 0 0 1 3.5 16.25v-8.5A1.25 1.25 0 0 1 4.75 6.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="m4.5 8 7.5 5 7.5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </Svg>
  );
}

export function FacebookIcon() {
  return (
    <Svg>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.93.26-1.56 1.59-1.56H16.7V3.28c-.29-.04-1.27-.12-2.41-.12-2.38 0-4.01 1.45-4.01 4.12v2.52H7.6V13h2.68v8h3.22Z" fill="currentColor" />
    </Svg>
  );
}

export function InstagramIcon() {
  return (
    <Svg>
      <path d="M7.25 3h9.5A4.25 4.25 0 0 1 21 7.25v9.5A4.25 4.25 0 0 1 16.75 21h-9.5A4.25 4.25 0 0 1 3 16.75v-9.5A4.25 4.25 0 0 1 7.25 3Zm0 1.8A2.45 2.45 0 0 0 4.8 7.25v9.5a2.45 2.45 0 0 0 2.45 2.45h9.5a2.45 2.45 0 0 0 2.45-2.45v-9.5a2.45 2.45 0 0 0-2.45-2.45h-9.5Zm9.95 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.6A4.4 4.4 0 1 1 7.6 12 4.4 4.4 0 0 1 12 7.6Zm0 1.8A2.6 2.6 0 1 0 14.6 12 2.6 2.6 0 0 0 12 9.4Z" fill="currentColor" />
    </Svg>
  );
}

export function TiktokIcon() {
  return (
    <Svg>
      <path d="M14.92 3c.49 2.34 1.87 3.73 4.08 3.93v2.43a6.76 6.76 0 0 1-3.66-1.14v6.11a5.35 5.35 0 1 1-5.35-5.35c.33 0 .66.03.98.1v2.49a2.96 2.96 0 1 0 1.98 2.76V3h1.97Z" fill="currentColor" />
    </Svg>
  );
}

export const socialIcons = {
  facebook: FacebookIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  tiktok: TiktokIcon,
};

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
