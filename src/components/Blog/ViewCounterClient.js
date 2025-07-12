// src/components/Blog/ViewCounterClient.js
"use client";

import dynamic from "next/dynamic";

const ViewCounter = dynamic(() => import("./ViewCounter"), { ssr: false });

export default ViewCounter;
