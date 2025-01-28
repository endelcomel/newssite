"use client"

import { useState } from "react"
import { getAdConfig } from "@/lib/adConfig"
import { toggleAdNetwork } from "@/lib/toggleAdNetwork"
import { Button } from "@/components/ui/button"

export default function AdSettings() {
  const [adNetwork, setAdNetwork] = useState(getAdConfig().activeNetwork)

  const handleToggle = () => {
    toggleAdNetwork()
    setAdNetwork(getAdConfig().activeNetwork)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Ad Network Settings</h1>
      <p className="mb-4">Current ad network: {adNetwork}</p>
      <Button onClick={handleToggle}>Toggle Ad Network</Button>
    </div>
  )
}

