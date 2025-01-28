type AdNetwork = "adsense" | "adsterra" | "none"

interface AdConfig {
  activeNetwork: AdNetwork
  adsenseClientId: string
  adsterraAccountId: string
}

const adConfig: AdConfig = {
  activeNetwork: "none",
  adsenseClientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "",
  adsterraAccountId: process.env.NEXT_PUBLIC_ADSTERRA_ACCOUNT_ID || "",
}

export function getAdConfig(): AdConfig {
  return adConfig
}

export function setAdNetwork(network: AdNetwork): void {
  adConfig.activeNetwork = network
}

