import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
// import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InterviewCard from "../../components/interviewCards";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Get ready to interview like a pro with AI powered interview platform
          </h2>
          <p>
            Practice your interview skills with our AI powered interview
            platform. Simulate real-time interviews and get feedback on your
            performance.
          </p>
          <Button asChild className="btn-primary">
            <Link href="/interview">Get Started</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-4 mt-8">
        <h2>Your interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
