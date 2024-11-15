import React from "react";

function LandingPage() {
  return (
    <>
      <div className="min-h-screen min-w-[100%] flex justify-center items-center shadow-md">
        <section className="flex flex-col justify-center items-center mx-auto">
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="min-h-[250px] min-w-[250px]"
          />
          <section className="flex flex-col justify-center items-center pt-[20px] gap-2">
            <h1 className="text-[24px] md:text-[36px]  lg:text-[54px] font-medium">
              Test your knowledge!
            </h1>
            <p className="text-slate-500 text-[8px] md:text-[16px]  lg:text-[24px]">
              Challenge yourself with randomly generated quizzes
            </p>
            <section className="pt-[20px] min-w-[75%]">
              <button className="rounded-xl flex-1 border p-2 min-w-[100%] font-semibold text-[#0b192c] hover:bg-[#f1d38e] bg-[#FFD369]">
                Let's Get Started
              </button>
            </section>
          </section>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
