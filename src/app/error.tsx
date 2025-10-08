// src/app/error.tsx
"use client";

import React from "react";

export default function GlobalError({ error }: { error: Error }) {
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-muted mb-4">We encountered an unexpected error. Please try again.</p>
        <pre className="text-xs bg-gray-100 p-3 rounded">{error.message}</pre>
      </div>
    </div>
  );
}