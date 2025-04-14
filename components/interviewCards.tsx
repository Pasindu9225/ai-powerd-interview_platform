import dayjs from "dayjs";
import Image from "next/image";
import { getRandomInterviewCover } from "../lib/utils";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";

const interviewCards = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM DD, YYYY");

  return (
    <div className=" card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div className="">
          <div className=" absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>
          <Image
            src={getRandomInterviewCover()}
            alt="interview cover"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />
          <h3 className="mt-5 capitalize">{role} Interview</h3>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={20}
                height={20}
              />
              <p>{formattedDate}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" alt="clock" width={20} height={20} />
              <p>{feedback?.totalScore || "----"}/100</p>
            </div>
          </div>
          <p className="mt-5 line-clamp-2">
            {feedback?.finalAssessment ||
              "you haven't taken the interview yet. take it now to improve your skills. "}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <DisplayTechIcons techStack={techstack} />
          <button className="btn-primary">
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? "View Feedback" : "Take Interview"}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default interviewCards;
