import { Image, Webcam } from "lucide-react";
import React from "react";

function RecordAnswerSection() {
  return (
    <div>
      <Image
        src={"/webcam.png"}
        width={200}
        height={200}
        className="absolute"
      />
      <Webcam />
    </div>
  );
}

export default RecordAnswerSection;
