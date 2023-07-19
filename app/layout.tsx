'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../components/styles';
import { Gamba } from 'gamba/react';
import { GambaUi } from 'gamba/react-ui';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Gamba
            connection={{
              endpoint:
                'https://radial-delicate-layer.solana-mainnet.discover.quiknode.pro/124d30642a313843475e1ac3f67e59d11d55d943',
              config: {
                wsEndpoint:
                  'wws://radial-delicate-layer.solana-mainnet.discover.quiknode.pro/124d30642a313843475e1ac3f67e59d11d55d943',
              },
            }}
          >
            <GambaUi>{children}</GambaUi>
          </Gamba>
        </ThemeProvider>
      </body>
    </html>
  );
}
