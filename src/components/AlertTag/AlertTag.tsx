import React from 'react';
import { CheckoutButton } from '../CheckoutButton/CheckoutButton';

export const AlertTag = () => {
  return (
    <div className="w-full bg-red-600 p-4 flex flex-col items-center">
      <h4 className="font-bold pb-4">
        Esses são os últimos lotes, e por isso você ganhou uma mega promoção.
      </h4>
      <CheckoutButton></CheckoutButton>
    </div>
  );
};
