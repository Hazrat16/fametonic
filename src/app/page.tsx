export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col-reverse md:flex-row bg-no-repeat bg-[length:100%] md:bg-[length:62%_100%] bg-[position:top_center] md:bg-[position:right] overflow-x-hidden "
      style={{ backgroundImage: 'url("/images/bg-image.png")' }}
    >
      {/* Left Text Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-[0px] pt-28 md:pt-[120px]">
        <h1 className="font-urbanist font-bold text-[28px] md:text-[35px] leading-[100%] text-white mb-4">
          Want to Turn Social Media Into a <br className="hidden md:block" />
          Profitable Career?
        </h1>

        <h2 className="font-urbanist font-bold text-[28px] md:text-[35px] leading-[100%] text-[#00E7F9] mb-4 w-fit drop-shadow-[0_4px_4px_#FC004E]">
          Discover your way to success <br className="hidden md:block" /> with
          Fametonic:
        </h2>

        <p className="font-figtree font-semibold text-[16px] leading-[22px] text-white mb-6">
          Start growing your influence right away—no waiting required!
        </p>

        {/* Feature Points */}
        <div className="space-y-2 mb-6">
          {[
            "Personalized creator growth strategy",
            "Instant access to actionable tips",
            "Create viral TikToks and Reels step by step with easy-to-follow lessons",
            "Create viral TikToks and Reels step by step with easy-to-follow lessons",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-[#00E7F9] mt-1">✔</span>
              <span className="font-figtree text-[14px] leading-[20px] text-white">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse md:flex-col">
          {/* Button Section - should appear last in mobile, first in desktop */}
          <div className="w-full md:w-1/2">
            <button className="w-full h-[40px] rounded-[10px] bg-[#FC004E] text-white font-figtree font-semibold text-sm px-10 py-2 shadow-[2px_2px_10px_#00E7F9] mb-2">
              Take the Quiz
            </button>

            <p className="font-figtree font-normal text-[12px] leading-[16px] text-center text-white">
              1-minute quiz for personalized insights
            </p>
          </div>

          {/* Text Sections */}
          <p className="text-[12px] leading-[22px] text-[#ABABAB] my-[30px] font-medium">
            By clicking &quot;Get Started&quot;, you agree with Terms and
            Conditions, Privacy Policy, Subscription Terms
          </p>

          <p className="text-[10px] leading-[22px] font-medium text-[#ABABAB] mb-6 md:mb-[30px]">
            Fametonic 2025 © All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Image container (empty on purpose to display bg-image) */}
      <div className="w-full md:w-1/2 h-[250px] md:h-auto"></div>
    </div>
  );
}
