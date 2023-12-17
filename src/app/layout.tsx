/*
 * Copyright (C), 2023 Codex Microsystems. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}