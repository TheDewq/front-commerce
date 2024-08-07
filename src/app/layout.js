import { Inter } from "next/font/google";
import "@/scss/global.scss"
import { AuthProvider } from "@/contexts/index";
import { ChakraProvider } from "@chakra-ui/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (


        <html lang="en">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
          <body>
            <ChakraProvider>
              <AuthProvider>
                {children}
              </AuthProvider>
            </ChakraProvider>
          </body>
        </html>

    
  );
}
