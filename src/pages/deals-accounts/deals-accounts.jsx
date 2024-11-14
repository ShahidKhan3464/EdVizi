import React from 'react';
import { Icons } from 'assets';
import DragCards from './drag-cards';
import OpportunityForm from './opportunity-form';
import useDealsAccounts from './use-deals-accounts';
import { CustomTable } from 'components/custom-table/custom-table';
import { CustomModal } from 'components/custom-modal/custom-modal';
import { CustomButton } from 'components/custom-button/custom-button';
import { CustomSearchField } from 'components/custom-search-field/custom-search-field';

const DealsAccounts = () => {
  const {
    data,
    cards,
    columns,
    formData,
    totalPages,
    modalToggle,
    handleChange,
    handleDragEnd,
    handleDragOver,
    setModalToggle,
    setSearchQuery,
    handleDragStart,
    renderCellContent
  } = useDealsAccounts();

  return (
    <div className="p-6 flex flex-col gap-6 bg-white rounded-2xl border border-solid border-gray200">
      <CustomModal
        isOpen={modalToggle}
        className="w-full max-w-[400px]"
        onClose={() => setModalToggle(!modalToggle)}
      >
        <OpportunityForm
          formData={formData}
          handleChange={handleChange}
          onClose={() => setModalToggle(!modalToggle)}
        />
      </CustomModal>
      <div className="p-6 bg-white rounded-2xl border border-solid border-gray200">
        <div className="flex-between !items-baseline">
          <div>
            <h2 className="text-xl font-bold text-black">Opportunities</h2>
            <p className="text-sm text-gray500">
              Manage your contacts and leads in one place.
            </p>
          </div>
          <CustomButton
            text="New Opportunity"
            icon={<img src={Icons.plus} alt="plus" />}
            onClick={() => setModalToggle(!modalToggle)}
            className="h-[36px] w-[174px] flex-center gap-2 text-sm text-gray700 font-semibold !bg-greenNormal rounded-md shadow-[0px_1px_2px_0px_#1018280D]"
          />
        </div>
        <div className="my-6 border-b border-solid border-gray200">
          <p className="pb-1 inline-block text-lg font-bold text-[#17CB8C] border-b-2 border-solid border-[#17CB8C]">
            New (8)
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-8">
          {[
            'Qualification (0)',
            'Evaluation (0)',
            'Validation (0)',
            'Conformation (1)'
          ].map((tab, index) => {
            const bgColor =
              index === 0
                ? 'bg-[#D9F2EF]'
                : index === 1
                ? 'bg-[#B0E4DD]'
                : index === 2
                ? 'bg-[#00A991]'
                : 'bg-[#009883]';

            const clipPath =
              index === 0
                ? 'polygon(90% 0%, 100% 50%, 90% 100%, 0px 100%, 0px 100%, 0% 0%)'
                : index === 1
                ? 'polygon(90% 0%, 100% 50%, 90% 100%, 0px 100%, 30px 50%, 0% 0%)'
                : index === 2
                ? 'polygon(90% 0%, 100% 50%, 90% 100%, 0px 100%, 30px 50%, 0% 0%)'
                : 'polygon(100% 0%, 100% 100%, 90% 100%, 0px 100%, 30px 50%, 0% 0%)';

            return (
              <div
                key={index}
                style={{ clipPath }}
                className={`${bgColor} text-center text-black font-medium py-2 font-semibold`}
              >
                {tab}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {cards.map((card) => (
            <div key={card.id} className="p-4 bg-[#F5F8FA] rounded-[10px]">
              <h3 className="text-xl text-center text-[#003B33] font-medium">
                amount
              </h3>
              <div className="w-full h-0.5 bg-[#5030E5] mb-5 mt-6"></div>
              <DragCards
                card={card}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDragStart={handleDragStart}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 bg-white rounded-2xl border border-solid border-gray200">
        <div className="mb-4 flex-between">
          <div>
            <h2 className="text-xl font-bold text-black">Accounts</h2>
            <p className="text-sm text-gray500">
              Manage all accounts in one place.
            </p>
          </div>
          <div className="w-full max-w-[430px] flex-center !justify-end gap-3">
            <div className="w-full max-w-[320px]">
              <CustomSearchField
                handleSearchQueryChange={(value) => setSearchQuery(value)}
              />
            </div>
            <CustomButton
              text="Filters"
              icon={<img src={Icons.filterLines} alt="filter-lines" />}
              className="h-[40px] w-[98px] flex-center gap-2 text-sm text-gray700 font-semibold bg-transparent rounded-md border border-solid border-gray300 shadow-[0px_1px_2px_0px_#1018280D]"
            />
          </div>
        </div>
        <CustomTable
          data={data}
          columns={columns}
          isLoading={false}
          totalRecords={totalPages}
          renderCellContent={renderCellContent}
        />
      </div>
    </div>
  );
};

export default DealsAccounts;
