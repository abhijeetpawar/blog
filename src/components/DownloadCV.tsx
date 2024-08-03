"use client";

import React from 'react';
import { Button } from '@/components/Button'

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
        <path
          d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  
const DownloadCV = () => {
  const handleOpenPdf = () => {
    const pdfUrl = './CV_abhijeetpawar.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <Button variant="secondary" className="group mt-6 w-full" onClick={handleOpenPdf}>
    Download CV
    <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
  </Button>

  );
};

export default DownloadCV;