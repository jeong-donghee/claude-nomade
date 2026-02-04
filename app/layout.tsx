import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const pretendard = Noto_Sans_KR({
  variable: "--font-pretendard",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "한국 노마드 시티 - 디지털 노마드 도시 가이드",
  description: "대한민국에서 일하며 살기 좋은 도시를 찾아보세요",
  keywords: ["디지털 노마드", "원격 근무", "한국", "도시 가이드", "생활비", "부산", "제주", "강릉"],
  openGraph: {
    title: "한국 노마드 시티 - 디지털 노마드 도시 가이드",
    description: "대한민국에서 일하며 살기 좋은 도시를 찾아보세요",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
