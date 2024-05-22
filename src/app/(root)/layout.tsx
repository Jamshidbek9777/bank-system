"use client";

import { PropsWithChildren, useEffect } from "react";
import { Header } from "@/components";
import { usePathname } from "next/navigation";
// import { usePathname } from "@/navigation";

// export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
//   const t = await getTranslations({ locale, namespace: 'meta.home' });

//   return {
//     title: t('0'),
//     description: t('1'),
//   };
// }

export default function RootLayout({ children }: PropsWithChildren) {
     const pathname = usePathname();

     useEffect(() => {
          window.scrollTo(0, 0);
     }, [pathname]);

     return (
          <>
               <Header />

               {children}

               {/* <Footer /> */}
          </>
     );
}
