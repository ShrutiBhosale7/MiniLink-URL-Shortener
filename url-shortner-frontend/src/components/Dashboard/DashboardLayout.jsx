

import React, { useState } from 'react'
import Graph from './Graph'
import { useStoreContext } from '../../contextApi/ContextApi'
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery'
import ShortenPopUp from './ShortenPopUp'
import { FaLink } from 'react-icons/fa'
import ShortenUrlList from './ShortenUrlList'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [shortenPopUp, setShortenPopUp] = useState(false);

  function onError() {
    navigate("/error");
  }

  const {
    isLoading,
    data: myShortenUrls,
    refetch,
  } = useFetchMyShortUrls(token, onError);

  const {
    isLoading: loader,
    data: totalClicks,
  } = useFetchTotalClicks(token, onError);

  return (
    <div className="bg-background text-textPrimary lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      {loader ? (
        <Loader />
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">
          {/* Chart Section */}
          <div className="h-96 relative bg-surface rounded-md shadow-custom px-4 py-6">
            {totalClicks.length === 0 && (
              <div className="absolute flex flex-col justify-center items-center w-full h-full text-center">
                <h1 className="font-serif sm:text-2xl text-[18px] font-bold text-textPrimary mb-1">
                  No Data For This Time Period
                </h1>
                <h3 className="sm:w-96 w-[90%] text-textSecondary text-sm sm:text-lg">
                  Share your short link to view where your engagements are coming from
                </h3>
              </div>
            )}
            <Graph graphData={totalClicks} />
          </div>

          {/* Button */}
          <div className="py-5 sm:text-end text-center">
            <button
              className="bg-primary hover:bg-secondary px-4 py-2 rounded-md text-white transition"
              onClick={() => setShortenPopUp(true)}
            >
              Create a New Short URL
            </button>
          </div>

          {/* List */}
          <div>
            {!isLoading && myShortenUrls.length === 0 ? (
              <div className="flex justify-center pt-16">
                <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-lg bg-surface text-textPrimary border border-borderColor">
                  <h1 className="font-montserrat sm:text-[18px] text-[14px] font-semibold mb-1">
                    You haven't created any short link yet
                  </h1>
                  <FaLink className="text-primary sm:text-xl text-sm " />
                </div>
              </div>
            ) : (
              <ShortenUrlList data={myShortenUrls} />
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  );
};

export default DashboardLayout;
