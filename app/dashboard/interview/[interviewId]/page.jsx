"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Webcam from "react-webcam";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Briefcase, Code, Calendar, Info } from "lucide-react";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockID, params.interviewId));

    console.log(result);
    setInterviewData(result[0]);
  };

  if (!interviewData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-10">
      <div className="flex items-center gap-2">
        <Info className="w-6 h-6 text-blue-600" />
        <h2 className="font-bold text-2xl">
          Review The Information Before You Start
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-5 ">
          <div className="flex flex-col p-6 rounded-lg border shadow-md bg-gradient-to-r from-blue-50 to-indigo-50 space-y-4">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-700">
                Job Title:
              </h2>
              <span className="text-lg font-normal text-gray-900">
                {interviewData.jobPosition}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-700">
                Job Skills:
              </h2>
              <span className="text-lg font-normal text-gray-900">
                {interviewData.jobDesc}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-700">
                Years of Experience:
              </h2>
              <span className="text-lg font-normal text-gray-900">
                {interviewData.jobExperience}
              </span>
            </div>
          </div>
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-200">
            <h2 className="flex gap-2 items-center text-yellow-600">
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-yellow-800">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{
                height: "90%",
                width: "90%",
              }}
            />
          ) : (
            <>
              <WebcamIcon
                style={{
                  height: "70%",
                  width: "70%",
                }}
              />
              <Button
                variant="ghost"
                className="w-full mt-4"
                onClick={() => setWebCamEnabled(true)}
              >
                Enable WebCam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end my-5">
        <Link href={"/dashboard/interview/" + params.interviewId + "/start"}>
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
