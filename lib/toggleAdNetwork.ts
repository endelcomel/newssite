import { setAdNetwork, getAdConfig } from "./adConfig"

export function toggleAdNetwork() {
  const currentConfig = getAdConfig()

  if (currentConfig.activeNetwork === "adsense") {
    setAdNetwork("adsterra")
    console.log("Switched to Adsterra")
  } else if (currentConfig.activeNetwork === "adsterra") {
    setAdNetwork("none")
    console.log("Ads turned off")
  } else {
    setAdNetwork("adsense")
    console.log("Switched to AdSense")
  }
}

