import React from 'react';
import { Icons } from 'assets';
import useEdvantageNavigator from './use-edVantage-navigator';
import { CustomButton } from 'components/custom-button/custom-button';
import { CustomSearchField } from 'components/custom-search-field/custom-search-field';

const EdVantageNavigator = () => {
  const { setSearchQuery } = useEdvantageNavigator();

  return (
    <div>
      <h1 className="text-black font-semibold">SAM: Olivier Rigaud</h1>
      <div className="p-6 mt-2.5 bg-white rounded-2xl border border-solid border-gray200">
        <div className="flex-between mt-6">
          <div className="flex-center flex-col !items-baseline gap-2">
            <h2 className="text-2xl text-black font-semibold">
              California Unified School District
            </h2>
            <p className="text-lg text-gray500 font-medium">Los Angeles </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex-center !justify-start gap-2">
              <img src={Icons.school} alt="school" />
              <span className="text-lg text-gray500 font-medium">
                32 Schools
              </span>
            </div>
            <div className="flex-center !justify-start gap-2">
              <img src={Icons.phStudent} alt="ph-student" />
              <p className="text-lg text-gray500 font-medium">
                18,500 Students
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray300 my-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Key Contacts */}
          <div className="bg-white p-4 rounded-xl border border-solid border-gray500">
            <h5 className="text-xl text-black font-semibold mb-3">
              Key Contacts
            </h5>
            <CustomSearchField
              handleSearchQueryChange={(value) => setSearchQuery(value)}
            />
            <div className="mt-5 text-gray-600">
              <p className="text-gray700 font-semibold">
                Name:{' '}
                <span className="text-lg text-gray500 font-medium">
                  Bilal Younas
                </span>
              </p>
              <p className="text-gray700 font-semibold">
                Position:{' '}
                <span className="text-lg text-gray500 font-medium">
                  Superintendent
                </span>
              </p>
              <p className="text-gray700 font-semibold">
                Phone:{' '}
                <span className="text-lg text-gray500 font-medium">
                  111-111-111
                </span>
              </p>
              <p className="text-gray700 font-semibold">
                Email:{' '}
                <span className="text-lg text-gray500 font-medium">
                  bilalyounas@gmail.com
                </span>
              </p>
            </div>
          </div>

          {/* Account Health */}
          <div className="bg-white p-4 rounded-xl border border-solid border-gray500">
            <h5 className="text-xl text-black font-semibold mb-3">
              Account Health
            </h5>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray700 font-semibold">
                Renewal Status:
              </span>
              <span className="px-3 py-1 text-sm font-medium text-error700 rounded-full border border-solid border-error600">
                At Risk
              </span>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 mb-3">
              <span className="text-gray700 font-semibold">Health Score:</span>
              <div className="w-full h-2 rounded-full bg-gray200">
                <div className="w-1/2 h-full rounded-full bg-danger"></div>
              </div>
              <span className="text-lg text-danger font-medium">45%</span>
            </div>
            <div className="flex items-start gap-2 mb-3">
              <span className="flex items-center gap-1 text-gray700 font-semibold">
                Usage
                <img src={Icons.chevronDownBlack} alt="black-arrow" />
              </span>
              <span className="text-gray500 font-medium">
                Concerns about budget cuts and potential non-renewal.
              </span>
            </div>
          </div>

          {/* Activities */}
          <div className="bg-white p-4 rounded-xl border border-solid border-gray500">
            <h5 className="text-xl text-black font-semibold mb-3">
              Activities
            </h5>
            <div className="mt-2">
              <div>
                <div className="flex-between">
                  <p className="text-greenNormal font-semibold">
                    Lunch & Learn
                  </p>
                  <p className="text-xs text-gray700 font-medium">12-10-2024</p>
                </div>
                <p className="text-sm text-gray600">
                  Discuss renewal and budget concerns
                </p>
              </div>
              <hr className="bg-gray400 mt-3" />
            </div>
            <div className="mt-2">
              <div>
                <div className="flex-between">
                  <p className="text-[#FF9500] font-semibold">In Person Demo</p>
                  <p className="text-xs text-gray700 font-medium">12-10-2024</p>
                </div>
                <p className="text-sm text-gray600">
                  Discuss renewal and budget concerns
                </p>
              </div>
              <hr className="bg-gray400 mt-3" />
            </div>
            <CustomButton
              text="Show Calendar"
              icon={<img src={Icons.calendar} alt="calendar" />}
              className="mt-5 h-[40px] w-[160px] flex-center gap-2 text-sm text-gray500 font-semibold !bg-transparent rounded-md border border-solid border-gray300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdVantageNavigator;
