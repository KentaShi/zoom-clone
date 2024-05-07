"use client"

import { useGetCalls } from "@/hooks/useGetCalls"
import { CallRecording } from "@stream-io/video-react-sdk"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
    const { endedCalls, upcomingCalls, callRecordings, isLoading } =
        useGetCalls()

    const router = useRouter()
    const [recordins, setRecordins] = useState<CallRecording[]>([])

    return <div>CallList</div>
}

export default CallList
