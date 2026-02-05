const footerLinks = {
  서비스: [{ label: "도시찾기", href: "#" }, { label: "도시비교", href: "#" }, { label: "리뷰작성", href: "#" }],
  커뮤니티: [{ label: "밋업", href: "#" }, { label: "Q&A", href: "#" }, { label: "채팅방", href: "#" }],
  지원: [{ label: "도움말", href: "#" }, { label: "가이드", href: "#" }, { label: "문의", href: "#" }],
};
const socialLinks = [
  { icon: "f", label: "Facebook", href: "#" },
  { icon: "in", label: "Instagram", href: "#" },
  { icon: "tw", label: "Twitter", href: "#" },
  { icon: "li", label: "LinkedIn", href: "#" },
  { icon: "yt", label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0c] text-[#8a8279]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold text-[#d4af37]" style={{ letterSpacing: "0.06em" }}>한국 노마드 시티</span>
            </div>
            <p className="text-sm text-[#8a8279] leading-relaxed">대한민국 디지털 노마드를 위한<br />도시 정보 및 커뮤니티 플랫폼</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-[#e8e0d4] mb-4" style={{ letterSpacing: "0.04em" }}>{title}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}><a href={link.href} className="text-sm text-[#8a8279] hover:text-[#d4af37] transition-colors duration-200">{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#2a2624] my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} className="text-[#8a8279] hover:text-[#d4af37] transition-colors duration-200 text-sm font-medium">{social.icon}</a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-[#8a8279]">
            <span>© 2025 한국 노마드 시티</span>
            <span className="text-[#2a2624]">|</span>
            <a href="#" className="hover:text-[#d4af37] transition-colors">이용약관</a>
            <span className="text-[#2a2624]">|</span>
            <a href="#" className="hover:text-[#d4af37] transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
