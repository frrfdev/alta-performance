import React from 'react';

type CheckoutButtonProps = {
  children?: React.ReactNode;
};

export const CheckoutButton = ({
  children = 'Comprar Agora',
}: CheckoutButtonProps) => {
  return (
    <button className="bg-yellow-500 p-4 rounded-md w-full font-bold uppercase">
      {children}
    </button>
  );
};
