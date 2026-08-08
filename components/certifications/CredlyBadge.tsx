"use client";

import Script from "next/script";

interface CredlyBadgeProps {
  badgeId: string;
}

export default function CredlyBadge({
  badgeId,
}: CredlyBadgeProps) {
  return (
    <div className="flex justify-center">
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id={badgeId}
        data-share-badge-host="https://www.credly.com"
      />

      <Script
        src="https://cdn.credly.com/assets/utilities/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}