import React from 'react';
import { CustomInput } from 'components/custom-input/custom-input';
import { CustomButton } from 'components/custom-button/custom-button';
import { CustomSelect } from 'components/custom-select/custom-select';

export default function OpportunityForm({ formData, handleChange, onClose }) {
  return (
    <div className="flex-center flex-col !items-baseline gap-6 mt-6">
      <div className="w-full text-center">
        <h2 className="text-xl text-gray900 font-bold mb-2">New Opportunity</h2>
        <p className="text-xs text-gray500 font-medium">
          Enter the details below
        </p>
      </div>
      <form
        noValidate
        onSubmit={null}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <CustomInput
          name="name"
          label="Name"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <CustomInput
          name="company_name"
          label="Company Name"
          onChange={handleChange}
          value={formData.company_name}
          placeholder="Enter Company Name"
        />
        <CustomInput
          name="role"
          label="Role Position"
          value={formData.role}
          onChange={handleChange}
          placeholder="Enter Role Position"
        />
        <CustomSelect
          options={[]}
          name="lead_source"
          value={formData.lead_source}
          placeholder="Select Lead Source"
          onChange={(name, value) => handleChange({ name, value })}
        />
        <div className="mt-2 flex-center gap-3">
          <CustomButton
            text="Cancel"
            disabled={false}
            isLoading={false}
            onClick={() => onClose()}
            className="h-[40px] w-full flex-center text-sm text-gray700 font-semibold bg-transparent rounded-lg border border-solid border-gray700  shadow-[0px_1px_2px_0px_#1018280D]"
          />
          <CustomButton
            text="Save"
            type="submit"
            disabled={false}
            isLoading={false}
            className="btn-primary w-full !h-10"
          />
        </div>
      </form>
    </div>
  );
}
