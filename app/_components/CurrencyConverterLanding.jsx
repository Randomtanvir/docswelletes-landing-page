"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowRightLeft,
  CheckCircle2,
  Globe,
  ShieldCheck,
  TrendingUp,
  Star,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function CurrencyAgencyLandingPage() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BDT");

  const rates = {
    USD: 121,
    EUR: 132,
    GBP: 154,
    BDT: 1,
  };

  const converted = ((amount * rates[from]) / rates[to]).toFixed(2);

  const features = [
    {
      title: "Real-Time Rates",
      icon: TrendingUp,
      desc: "Get accurate live exchange rates updated every second.",
    },
    {
      title: "Global Transfers",
      icon: Globe,
      desc: "Transfer money safely to over 150+ countries.",
    },
    {
      title: "100% Secure",
      icon: ShieldCheck,
      desc: "Enterprise-grade protection for every transaction.",
    },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute top-[40%] right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-black">
            docs<span className="text-cyan-400">wellate</span>
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#">Home</a>
            <a href="#">Rates</a>
            <a href="#">Services</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </nav>

          <button className="bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-full font-semibold">
            Start Now
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 overflow-hidden pt-24 pb-32">
        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop"
                alt="Fintech"
                className="w-full h-[650px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6">
                <p className="text-gray-300 text-sm">
                  Trusted Worldwide Platform
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <h3 className="text-4xl font-black">180+</h3>

                    <p className="text-gray-400 mt-1">Supported Countries</p>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-2xl">
                    🌍
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Mini Card */}
            <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl px-6 py-5 shadow-2xl">
              <p className="text-gray-400 text-sm">Transactions</p>

              <h3 className="text-3xl font-black mt-2">$48B+</h3>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full backdrop-blur-xl mb-8">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm text-cyan-300 font-medium">
                Modern Global Payment Solution
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
              Send Money
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mt-3">
                Across The
              </span>
              <span className="block mt-3">World Fast</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              Experience the next generation of international money transfers
              with ultra-fast transactions, secure payments and transparent
              exchange rates built for modern businesses and individuals.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {[
                "Instant Global Transfers",
                "Lowest Exchange Fees",
                "24/7 Customer Support",
                "Enterprise Grade Security",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                    ✓
                  </div>

                  <p className="text-gray-300 font-medium">{item}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-12">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all duration-300 px-8 py-5 rounded-2xl font-semibold text-lg shadow-2xl shadow-cyan-500/20">
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition"
                  />
                </span>
              </button>

              <button className="border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 px-8 py-5 rounded-2xl font-semibold text-lg backdrop-blur-xl">
                Learn More
              </button>
            </div>

            {/* Bottom Stats */}
            <div className="flex flex-wrap gap-12 mt-16">
              {[
                ["10M+", "Active Users"],
                ["99.99%", "Secure Payments"],
                ["150+", "Global Partners"],
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {item[0]}
                  </h3>

                  <p className="text-gray-500 mt-2">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Features
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5">
            Why Choose Us
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Everything you need for fast, secure and smart international money
            transfers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:border-cyan-500/30 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Icon size={28} />
                </div>

                <h3 className="text-3xl font-bold mt-7">{item.title}</h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[40px] p-12 md:p-20 text-center">
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Ready To Send Money Worldwide?
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto mt-6 text-lg">
            Join thousands of users already using CurrencyFlow for secure global
            transfers.
          </p>

          <button className="mt-10 bg-black hover:bg-neutral-900 transition px-9 py-5 rounded-2xl font-semibold text-lg">
            Create Free Account
          </button>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Reviews
          </p>

          <h2 className="text-5xl font-black mt-5">What Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8"
            >
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 mt-6 leading-relaxed">
                “Amazing platform for international transfers. Fast, secure and
                super easy to use.”
              </p>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />

                <div>
                  <h4 className="font-bold">John Carter</h4>
                  <p className="text-gray-400 text-sm">Business Owner</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-5">
          {[
            "How long do transfers take?",
            "Is CurrencyFlow secure?",
            "Which countries are supported?",
            "Are there hidden fees?",
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold">{faq}</h3>

              <p className="text-gray-400 mt-3">
                Most transfers are completed within minutes depending on the
                destination country and payment method.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black">
              Currency<span className="text-cyan-400">Flow</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Modern currency exchange and international money transfer
              solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">Company</h3>

            <div className="space-y-3 text-gray-400">
              <p>About Us</p>
              <p>Services</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-5">Support</h3>

            <div className="space-y-3 text-gray-400">
              <p>Help Center</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>FAQs</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5">Contact</h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                support@currencyflow.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +880 1234-567890
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Delli, Randia
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
          © 2026 CurrencyFlow. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
