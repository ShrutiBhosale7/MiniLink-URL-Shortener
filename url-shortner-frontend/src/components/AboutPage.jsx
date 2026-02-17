import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-4 bg-background text-textPrimary font-roboto">
      <div className="w-full sm:py-10 py-8">
        <h1 className="sm:text-4xl text-3xl font-bold italic text-primary mb-4">
          About MiniLink
        </h1>
        <p className="text-textSecondary text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full leading-relaxed">
          MiniLink is your lightweight, efficient tool for URL shortening. It simplifies
          long URLs into clean, shareable links that are easy to manage and analyze.
          Whether you're sharing links for personal use or business campaigns, MiniLink helps
          you do it faster and smarter.
        </p>

        <div className="space-y-6 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          <Feature
            icon={<FaLink className="text-secondary text-3xl mr-4" />}
            title="Simple URL Shortening"
            desc="Create short, memorable URLs in seconds with our minimal and intuitive interface."
          />
          <Feature
            icon={<FaShareAlt className="text-accent text-3xl mr-4" />}
            title="Powerful Analytics"
            desc="Track every click, see where your audience is coming from, and optimize your strategy."
          />
          <Feature
            icon={<FaEdit className="text-success text-3xl mr-4" />}
            title="Enhanced Security"
            desc="All links are encrypted and protected to ensure safe redirection and reliable tracking."
          />
          <Feature
            icon={<FaChartLine className="text-error text-3xl mr-4" />}
            title="Fast and Reliable"
            desc="Experience fast redirects and high uptime with our dependable backend infrastructure."
          />
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex items-start">
    {icon}
    <div>
      <h2 className="text-xl font-bold text-primary mb-1">{title}</h2>
      <p className="text-textSecondary text-sm">{desc}</p>
    </div>
  </div>
);

export default AboutPage;
