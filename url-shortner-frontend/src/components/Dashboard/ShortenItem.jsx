



import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { IoCopy } from 'react-icons/io5';
import { LiaCheckSolid } from 'react-icons/lia';
import { MdAnalytics, MdOutlineAdsClick } from 'react-icons/md';
import api from '../../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { useStoreContext } from '../../contextApi/ContextApi';
import { Hourglass } from 'react-loader-spinner';
import Graph from './Graph';

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  const [analyticToggle, setAnalyticToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [analyticsData, setAnalyticsData] = useState([]);

  const subDomain = import.meta.env.VITE_REACT_FRONT_END_URL.replace(/^https?:\/\//, "");

  const analyticsHandler = (shortUrl) => {
    if (!analyticToggle) setSelectedUrl(shortUrl);
    setAnalyticToggle(!analyticToggle);
  };

  const fetchMyShortUrl = async () => {
    setLoader(true);
    try {
      const { data } = await api.get(
        `/api/urls/analytics/${selectedUrl}?startDate=2024-12-01T00:00:00&endDate=2026-12-31T23:59:59`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setAnalyticsData(data);
      setSelectedUrl("");
    } catch (error) {
      navigate("/error");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (selectedUrl) fetchMyShortUrl();
  }, [selectedUrl]);

  return (
    <div className="bg-surface shadow-md border border-borderColor px-6 py-5 rounded-md transition-all duration-100 text-textPrimary">
      <div className="flex sm:flex-row flex-col sm:justify-between w-full sm:gap-0 gap-5">
        <div className="flex-1 space-y-2 max-w-full overflow-x-auto overflow-y-hidden">
          <div className="flex items-center gap-2">
            <Link
              target="_blank"
              to={import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${shortUrl}`}
              className="text-accent font-semibold hover:underline break-words"
            >
              {subDomain + "/s/" + `${shortUrl}`}
            </Link>
            <FaExternalLinkAlt className="text-accent text-sm" />
          </div>

          <p className="text-textSecondary text-sm break-words">{originalUrl}</p>

          <div className="flex items-center gap-6 pt-4 text-sm">
            <div className="flex items-center gap-1 text-success font-semibold">
              <MdOutlineAdsClick className="text-lg" />
              <span>{clickCount}</span>
              <span>{clickCount === 1 ? "Click" : "Clicks"}</span>
            </div>

            <div className="flex items-center gap-2 text-textSecondary">
              <FaRegCalendarAlt />
              <span>{dayjs(createdDate).format("MMM DD, YYYY")}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 sm:justify-end items-center gap-4 mt-4 sm:mt-0">
          <button
            onClick={() => {
              const fullUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + shortUrl}`;
              navigator.clipboard.writeText(fullUrl).then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
              });
            }}
            className="flex items-center gap-1 bg-primary text-white py-2 px-4 rounded-md text-sm font-semibold"
          >
            {isCopied ? "Copied" : "Copy"}
            {isCopied ? <LiaCheckSolid /> : <IoCopy />}
          </button>

          <button
            onClick={() => analyticsHandler(shortUrl)}
            className="flex items-center gap-1 bg-error text-white py-2 px-4 rounded-md text-sm font-semibold"
          >
            Analytics
            <MdAnalytics />
          </button>
        </div>
      </div>

      {analyticToggle && (
        <div className="max-h-96 mt-5 border-t border-borderColor pt-4">
          {loader ? (
            <div className="flex justify-center items-center h-48">
              <div className="text-center text-textSecondary">
                <Hourglass height="50" width="50" colors={["#219ebc", "#8ecae6"]} />
                <p className="mt-2">Please Wait...</p>
              </div>
            </div>
          ) : analyticsData.length === 0 ? (
            <div className="text-center text-textSecondary">
              <p className="font-bold text-lg">No Analytics Available</p>
              <p className="text-sm">Share your link to start seeing data.</p>
            </div>
          ) : (
            <Graph graphData={analyticsData} />
          )}
        </div>
      )}
    </div>
  );
};

export default ShortenItem;
