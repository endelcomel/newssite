"use client"
import { useEffect } from "react"
import { getAdConfig } from "@/lib/adConfig"
import { cn } from "@/lib/utils"

interface AdBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  adSlot?: string
}

export function AdBanner({ className, adSlot = "auto", ...props }: AdBannerProps) {
  const adConfig = getAdConfig()

  useEffect(() => {
    if (adConfig.activeNetwork === "adsense") {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } else if (adConfig.activeNetwork === "adsterra") {
      // Adsterra ad initialization would go here
      // This is a placeholder as Adsterra doesn't have a direct equivalent to AdSense's push method
      console.log("Adsterra ad would be initialized here")
    }
  }, [adConfig.activeNetwork])

  if (adConfig.activeNetwork === "none") {
    return null
  }

  return (
    <div
      className={cn("flex items-center justify-center bg-muted p-4 text-sm text-muted-foreground", className)}
      {...props}
    >
      {adConfig.activeNetwork === "adsense" && (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={adConfig.adsenseClientId}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      )}
      {adConfig.activeNetwork === "adsterra" && (
        <div id={`adsterra-${adSlot}`}>
          {/* Adsterra ad code would go here */}
          Adsterra Ad Placeholder
        </div>
      )}
    </div>
  )
}

