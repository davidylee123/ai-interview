"use client";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";

function RecordAnswerSection() {
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    const finalAnswer = results.map((result) => result?.transcript).join(" ");
    setUserAnswer(finalAnswer);
  }, [results]);

  const toggleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5">
        <Image
          src={"/webcam.png"}
          width={200}
          height={200}
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            height: 350,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <div className="flex flex-col gap-4 my-10">
        <Button
          variant="outline"
          className="rounded-full flex items-center justify-center px-6 py-3"
          onClick={isRecording ? stopSpeechToText : startSpeechToText}
        >
          {isRecording ? (
            <span className="text-red-600 flex items-center gap-2">
              <Mic />
              Stop Recording
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <MicOff />
              Record Answer
            </span>
          )}
        </Button>
        <Button
          className="rounded-full flex items-center justify-center px-6 py-3"
          onClick={toggleShowAnswer}
        >
          Show Answer
        </Button>
      </div>
      {showAnswer && (
        <div className="my-5 p-3 bg-gray-100 rounded-lg w-full max-w-md">
          <h2 className="text-lg font-bold">Your Answer:</h2>
          <p>{userAnswer}</p>
        </div>
      )}
    </div>
  );
}

export default RecordAnswerSection;
