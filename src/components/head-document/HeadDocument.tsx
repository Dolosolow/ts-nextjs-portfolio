import { Head } from "next/document";
import NextHead from "next/head";
import Script from "next/script";

export const HeadDocument = () => (
  <Head>
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="keywords"
      content="full stack, full-stack, web developer, designer,
    react, node.js, node js, responsive design, mobile design"
    />
    <meta
      name="description"
      content="Hire Freelancer and Full Stack developer. Hire Professional Freelancer & WordPress Developer. Building hi-end solutions, cloud solutions, website maintenance & security"
    />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="JR | Full Stack Developer - Freelancer" />
    <meta
      property="og:description"
      content="Hire Freelancer and Full Stack developer. Hire Professional Freelancer &amp; WordPress Developer. Building hi-end solutions, cloud solutions, website maintenance &amp; security"
    />
    <meta property="og:site_name" content="JRM" />
    <link rel="preconnect" href="https://use.typekit.net/" />
  </Head>
);

export const HtmlHead = () => (
  <>
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>JR | Full Stack Developer - Freelancer</title>
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
