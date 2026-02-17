// import React from "react";
// import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
// const AboutPage = () => {
//   return (
//     <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
//       <div className="bg-white w-full sm:py-10 py-8  ">
//         <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic  mb-3">
//           About Linklytics
//         </h1>
//         <p className="text-gray-700 text-sm  mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
//           Linklytics simplifies URL shortening for efficient sharing. Easily
//           generate, manage, and track your shortened links. Linklytics simplifies
//           URL shortening for efficient sharing. Easily generate, manage, and
//           track your shortened links. Linklytics simplifies URL shortening for
//           efficient sharing. Easily generate, manage, and track your shortened
//           links. Linklytics simplifies URL shortening for efficient sharing.
//           Easily generate, manage, and track your shortened links.
//         </p>
//         <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
//           <div className="flex items-start">
//             <FaLink className="text-blue-500 text-3xl mr-4" />
//             <div>
//               <h2 className="sm:text-2xl font-bold text-slate-800">
//                 Simple URL Shortening
//               </h2>
//               <p className="text-gray-600">
//                 Experience the ease of creating short, memorable URLs in just a
//                 few clicks. Our intuitive interface and quick setup process
//                 ensure you can start shortening URLs without any hassle.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start">
//             <FaShareAlt className="text-green-500 text-3xl mr-4" />
//             <div>
//               <h2 className="sm:text-2xl font-bold text-slate-800">
//                 Powerful Analytics
//               </h2>
//               <p className="text-gray-600">
//                 Gain insights into your link performance with our comprehensive
//                 analytics dashboard. Track clicks, geographical data, and
//                 referral sources to optimize your marketing strategies.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start">
//             <FaEdit className="text-purple-500 text-3xl mr-4" />
//             <div>
//               <h2 className="sm:text-2xl font-bold text-slate-800">
//                 Enhanced Security
//               </h2>
//               <p className="text-gray-600">
//                 Rest assured with our robust security measures. All shortened
//                 URLs are protected with advanced encryption, ensuring your data
//                 remains safe and secure.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start">
//             <FaChartLine className="text-red-500 text-3xl mr-4" />
//             <div>
//               <h2 className="sm:text-2xl font-bold text-slate-800">
//                 Fast and Reliable
//               </h2>
//               <p className="text-gray-600">
//                 Enjoy lightning-fast redirects and high uptime with our reliable
//                 infrastructure. Your shortened URLs will always be available and
//                 responsive, ensuring a seamless experience for your users.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;

// ----------------------------------------------------------------------
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
