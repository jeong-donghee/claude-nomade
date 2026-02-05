export default function ConfirmPendingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f2] px-4 py-20">
      <div className="w-full max-w-md text-center">
        <div className="bg-white rounded-2xl border border-[#ddd5c8] shadow-sm p-8">
          <h1 className="text-2xl font-bold text-[#3a3228] mb-3">
            이메일 확인 안내
          </h1>
          <p className="text-sm text-[#7a7068] leading-relaxed">
            회원가입이 완료되었습니다.
            <br />
            발신한 이메일의{" "}
            <strong className="text-[#3a3228]">확인 링크</strong>를 클릭하여
            <br />
            계정을 활성화해주세요.
          </p>
          <a
            href="/login"
            className="inline-block mt-6 text-sm text-[#2d5016] font-semibold hover:text-[#3d6b22] transition-colors"
          >
            로그인 페이지로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}
