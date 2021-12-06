import NextHead from "next/head";
import Script from "next/script";
import { Head } from "next/document";

import lang from "@/lang/en.lang";

const { title, description, domain, keywords } = lang.meta;

export const HeadDocument = () => (
  <Head>
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <meta name="theme-color" content="#000000" />
    <meta name={keywords.key} content={keywords.content} />
    <meta name={description.key} content={description.content} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title.content} />
    <meta property="og:description" content={description.content} />
    <meta property="og:site_name" content={domain} />
    <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
    <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
  </Head>
);

export const HtmlHead = () => (
  <>
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title.content}</title>
    </NextHead>
    <Script
      dangerouslySetInnerHTML={{
        __html: `
        (function(d) {
          var config = {
            kitId: 'rkp3shh',
            scriptTimeout: 3000,
            async: true
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document)
        `,
      }}
    />
  </>
);
