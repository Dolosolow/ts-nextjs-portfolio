import type { Metadata } from 'next';
import Script from 'next/script';

import StyledComponentsRegistry from '@/lib/registry';

import lang from '@/lang/en.lang';

const { title, description, domain, keywords, url, cardImgUrl } = lang.meta;

export const metadata: Metadata = {
  title: title.content,
  description: description.content,
  keywords: keywords.content,
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: title.content,
    description: description.content,
    images: [cardImgUrl],
    siteName: domain,
    url: url,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  other: {
    'theme-color': '#000000',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
      </head>
      <body>
        <Script
          id="typekit"
          dangerouslySetInnerHTML={{
            __html: `
            (function(d) {
              var config = {
                kitId: 'rkp3shh',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document)
            `,
          }}
        />
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-2704BN32BH"
        />
        <Script id="gtag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GLG_ANALYTICS}');
          `}
        </Script>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
