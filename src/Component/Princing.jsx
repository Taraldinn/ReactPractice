import React, { useState } from 'react';

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  // Pricing data for monthly and yearly packages
  const monthlyPrices = {
    basic: 10,
    standard: 20,
    premium: 30
  };

  const yearlyPrices = {
    basic: 100,
    standard: 200,
    premium: 300
  };

  const prices = isMonthly ? monthlyPrices : yearlyPrices;

  const togglePackageType = () => {
    setIsMonthly(!isMonthly);
  };

return (
    <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Pricing
                </h2>
                <div className="mt-4">
                <label
  htmlFor="AcceptConditions"
  className="relative h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
>
  <input type="checkbox" onClick={togglePackageType} id="AcceptConditions" className="peer sr-only" />

  <span
    className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
  ></span>
                          {isMonthly ? 'Yearly' : 'Monthly'} Package

</label>
                   
                </div>
            </div>
            <div className="mt-12">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {isMonthly ? 'Monthly' : 'Yearly'} Prices
                </h3>
                <ul className="mt-6 space-y-4">
                    <li className="bg-white shadow-md p-6 rounded-md">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-900">
                                Basic
                            </span>
                            <span className="ml-auto text-lg font-semibold text-gray-900">
                                ${prices.basic}
                            </span>
                        </div>
                    </li>
                    <li className="bg-white shadow-md p-6 rounded-md">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-900">
                                Standard
                            </span>
                            <span className="ml-auto text-lg font-semibold text-gray-900">
                                ${prices.standard}
                            </span>
                        </div>
                    </li>
                    <li className="bg-white shadow-md p-6 rounded-md">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-900">
                                Premium
                            </span>
                            <span className="ml-auto text-lg font-semibold text-gray-900">
                                ${prices.premium}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);
};

export default PricingSection;
