'use client';

import React from 'react';
import clsx from 'clsx';

const Skeleton = ({ className }) => {
  return (
    <div
      className={clsx(
        "bg-gray-300 animate-pulse relative overflow-hidden rounded",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-shimmer"
      />
    </div>
  );
};

export default Skeleton;
