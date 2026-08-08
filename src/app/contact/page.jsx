"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#0d1524] text-white">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden">

        {/* Background circles */}

        <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
              Contact FoodHub
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Get In
              <span className="text-orange-500"> Touch</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-8 mt-5">
              Have a question, suggestion, or just want to say hello?
              We would love to hear from you.
            </p>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* CONTACT SECTION */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* ================================================= */}
          {/* CONTACT INFORMATION */}
          {/* ================================================= */}

          <div className="lg:col-span-1 space-y-5">

            {/* Email */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6 hover:border-orange-500/60 transition">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-orange-500/15 flex items-center justify-center text-2xl">
                  ✉️
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Email Us
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    support@foodhub.com
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    We reply within 24 hours
                  </p>

                </div>

              </div>

            </div>


            {/* Phone */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6 hover:border-orange-500/60 transition">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-orange-500/15 flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Call Us
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    +1 (555) 123-4567
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Mon - Fri, 9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>


            {/* Location */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6 hover:border-orange-500/60 transition">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-orange-500/15 flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Visit Us
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    123 Food Street
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    New York, USA
                  </p>

                </div>

              </div>

            </div>


            {/* Opening Hours */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-5">
                Opening Hours
              </h3>

              <div className="space-y-3">

                <div className="flex justify-between text-sm">

                  <span className="text-gray-400">
                    Monday - Friday
                  </span>

                  <span className="text-orange-500 font-semibold">
                    9 AM - 6 PM
                  </span>

                </div>

                <div className="flex justify-between text-sm">

                  <span className="text-gray-400">
                    Saturday
                  </span>

                  <span className="text-orange-500 font-semibold">
                    10 AM - 4 PM
                  </span>

                </div>

                <div className="flex justify-between text-sm">

                  <span className="text-gray-400">
                    Sunday
                  </span>

                  <span className="text-gray-500">
                    Closed
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* CONTACT FORM */}
          {/* ================================================= */}

          <div className="lg:col-span-2">

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6 sm:p-8 lg:p-10">

              <div className="mb-8">

                <span className="text-orange-500 font-semibold">
                  SEND MESSAGE
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  Let's Talk About Food
                </h2>

                <p className="text-gray-400 mt-2">
                  Fill out the form below and our team will get back to you.
                </p>

              </div>


              {/* Success Message */}

              {submitted && (
                <div className="mb-6 bg-green-500/10 border border-green-500/40 text-green-400 rounded-xl px-4 py-3">

                  ✓ Your message has been sent successfully!

                </div>
              )}


              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name + Email */}

                <div className="grid sm:grid-cols-2 gap-5">

                  {/* Name */}

                  <div>

                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full bg-[#0d1524] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-orange-500 transition"
                    />

                  </div>


                  {/* Email */}

                  <div>

                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-[#0d1524] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-orange-500 transition"
                    />

                  </div>

                </div>


                {/* Phone + Subject */}

                <div className="grid sm:grid-cols-2 gap-5">

                  {/* Phone */}

                  <div>

                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      className="w-full bg-[#0d1524] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-orange-500 transition"
                    />

                  </div>


                  {/* Subject */}

                  <div>

                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0d1524] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 transition"
                    >

                      <option value="">
                        Select a subject
                      </option>

                      <option value="general">
                        General Question
                      </option>

                      <option value="recipe">
                        Recipe Question
                      </option>

                      <option value="feedback">
                        Feedback
                      </option>

                      <option value="support">
                        Support
                      </option>

                      <option value="other">
                        Other
                      </option>

                    </select>

                  </div>

                </div>


                {/* Message */}

                <div>

                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="7"
                    required
                    className="w-full bg-[#0d1524] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-orange-500 transition resize-none"
                  ></textarea>

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-bold transition shadow-lg shadow-orange-500/20"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* FAQ / HELP */}
      {/* ================================================= */}

      <section className="bg-[#101a2b] border-y border-gray-800">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="text-center">

            <span className="text-orange-500 font-semibold">
              NEED HELP?
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Frequently Asked Questions
            </h2>

          </div>


          <div className="grid md:grid-cols-2 gap-5 mt-12">

            {/* FAQ 1 */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6">

              <h3 className="font-bold text-lg">
                How can I find a recipe?
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Visit our Menu page to browse delicious recipes and
                discover dishes from different cuisines.
              </p>

            </div>


            {/* FAQ 2 */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6">

              <h3 className="font-bold text-lg">
                Can I suggest a recipe?
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Absolutely! Send us your suggestion using the contact
                form and we would love to hear your ideas.
              </p>

            </div>


            {/* FAQ 3 */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6">

              <h3 className="font-bold text-lg">
                How quickly will you respond?
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Our team normally responds to messages within 24 hours
                during business days.
              </p>

            </div>


            {/* FAQ 4 */}

            <div className="bg-[#141e2f] border border-gray-700 rounded-2xl p-6">

              <h3 className="font-bold text-lg">
                Can I give feedback?
              </h3>

              <p className="text-gray-400 leading-7 mt-3">
                Yes! We always appreciate feedback. Choose "Feedback"
                from the subject menu and tell us what you think.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="bg-orange-500 rounded-3xl p-8 sm:p-12 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Hungry for Something Delicious?
          </h2>

          <p className="text-orange-100 mt-4 max-w-xl mx-auto">
            Explore our collection of delicious recipes and discover
            your next favorite meal.
          </p>

          <a
            href="/menu"
            className="inline-block mt-7 bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-xl font-bold transition"
          >
            Explore Recipes
          </a>

        </div>

      </section>

    </main>
  );
}