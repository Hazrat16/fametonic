export default function Home() {
  return (
    <div
      className="h-screen flex bg-no-repeat  bg-[length:62%_100%] bg-[position:100%] "
      style={{ backgroundImage: 'url("/images/bg-image.png")' }}
    >
      {/* Left Text Side */}
      <div className="w-1/2 flex flex-col mt-[120px] ">
        <h1 className="font-urbanist font-bold text-[35px] leading-[100%] text-white mb-4">
          Want to Turn Social Media Into a <br />
          Profitable Career?
        </h1>

        <h2 className="font-urbanist font-bold text-[35px] leading-[100%]  text-[#00E7F9]  text-shadow-[0px_4px_4px_#FC004E] mb-4 w-fit">
          Discover your way to success <br /> with Fametonic:
        </h2>

        <p className="font-figtree font-semibold text-[16px] leading-[22px] text-white mb-6">
          Start growing your influence right away—no waiting required!
        </p>

        {/* Feature Points */}
        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-2">
            <span className="text-[#00E7F9] mt-1">✔</span>
            <span className="font-figtree text-[14px] leading-[20px] text-white">
              Personalized creator growth strategy
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00E7F9] mt-1">✔</span>
            <span className="font-figtree text-[14px] leading-[20px] text-white">
              Instant access to actionable tips
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00E7F9] mt-1">✔</span>
            <span className="font-figtree text-[14px] leading-[20px] text-white">
              Create viral TikToks and Reels step by step with easy-to-follow
              lessons
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00E7F9] mt-1">✔</span>
            <span className="font-figtree text-[14px] leading-[20px] text-white">
              Create viral TikToks and Reels step by step with easy-to-follow
              lessons
            </span>
          </div>
        </div>

        <div className="w-1/2">
          <button className="w-full h-[40px] rounded-[10px] bg-[#FC004E] text-white font-figtree font-semibold text-sm px-10 py-2 shadow-[2px_2px_10px_#00E7F9] mb-2">
            Take the Quiz
          </button>

          <p className="font-figtree font-normal text-[12px] leading-[16px] text-center text-white">
            1-minute quiz for personalized insights
          </p>
        </div>

        <p className="text-[12px] leading-[22px] text-[#ABABAB] my-[30px] font-medium">
          By clicking &quot;Get Started&quot;, you agree with Terms and
          Conditions, Privacy Policy, Subscription Terms
        </p>

        <p className="text-[10px] leading-[22px] font-medium text-[#ABABAB] my-[30px]">
          Fametonic 2025 ©All Rights Reserved.
        </p>
      </div>

      <div className="w-1/2"></div>
    </div>
  );
}
