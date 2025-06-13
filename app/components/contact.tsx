'use client';
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f6f2] px-4 py-10">
      <div className="bg-white w-full max-w-5xl rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2">
        {/* Left Content */}
        <div className="p-8 border-r border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Get more benefits <br />
            by Sign Up & Join <br />
            Mejiwoo Community!
          </h2>
          <ul className="text-black space-y-4">
            <li>◆ FREE Special Gift to a new member</li>
            <li>◆ Get 2x JIWOO Points to purchase items</li>
            <li>◆ Get special voucher code every month</li>
            <li>◆ Claim Voucher Disc. Up To 50%</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="p-8">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
            />

            <div className="flex items-center">
              <input type="checkbox" id="agree" className="mr-2" />
              <label htmlFor="agree" className="text-sm text-gray-800">
                I agree to all the{" "}
                <span className="font-semibold">Terms</span> and{" "}
                <span className="font-semibold">Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md"
            >
              SIGN UP
            </button>
          </form>

          <div className="my-4 flex items-center justify-between">
            <hr className="w-full border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">Or</span>
            <hr className="w-full border-gray-300" />
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-sm gap-2 text-black">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              SIGN UP WITH GOOGLE
            </button>
            <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-sm gap-2 text-black">
              <img
                src="/facebook.png"
                alt="Facebook"
                className="h-8 w-8"
              />
              SIGN UP WITH FACEBOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
