"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // Demo only: connect a form service or API before launch.
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="bg-[#292A27] px-5 py-20 sm:px-8 sm:py-24 md:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        {/* Intro */}
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#C5A486]">
            Let&apos;s Get Started
          </p>

          <h2 className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s Bring Your Vision to Life.
          </h2>

          <p className="mt-6 text-sm leading-7 text-neutral-300 sm:text-base">
            Tell us a little about your remodeling project. We&apos;d love to
            hear what you have in mind and explore how we can help.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white p-5 sm:p-8">
          <h3 className="text-2xl font-medium tracking-tight text-[#292A27]">
            Request a Consultation
          </h3>

          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Share a few details to get the conversation started.
          </p>

          {submitted ? (
            <div
              role="status"
              className="mt-6 border border-[#DED6CC] bg-[#F8F6F2] p-5 text-sm leading-6 text-[#292A27]"
            >
              Thanks for your interest! This is a demo form and your information
              has not been sent. Connect a form service before publishing.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#292A27]"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm text-[#292A27] outline-none transition focus:border-[#A87953] focus:ring-1 focus:ring-[#A87953]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#292A27]"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm text-[#292A27] outline-none transition focus:border-[#A87953] focus:ring-1 focus:ring-[#A87953]"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="mb-2 block text-sm font-medium text-[#292A27]"
                >
                  Type of project
                </label>
                <select
                  id="project"
                  name="project"
                  required
                  defaultValue=""
                  className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-[#292A27] outline-none focus:border-[#A87953] focus:ring-1 focus:ring-[#A87953]"
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option>Kitchen Remodeling</option>
                  <option>Bathroom Remodeling</option>
                  <option>Whole-Home Remodeling</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#292A27]"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="What would you like to transform?"
                  className="w-full resize-y border border-neutral-300 px-4 py-3 text-sm text-[#292A27] outline-none transition focus:border-[#A87953] focus:ring-1 focus:ring-[#A87953]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center bg-[#A87953] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#916746] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A87953]"
              >
                Request a Consultation
              </button>

              <p className="text-xs leading-5 text-neutral-500">
                This demo form does not transmit or store submissions.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
