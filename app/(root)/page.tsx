import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
// import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InterviewCard from "../../components/interviewCards";
import {
  getCurrentUser,
  getInterviewByUserId,
  getLatestInterviews,
} from "@/lib/actions/auth.action";

const page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getInterviewByUserId(user?.id!),
  ]);

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcommingInterviews = latestInterviews?.length > 0;

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
          {hasPastInterviews ? (
            userInterviews && userInterviews.length > 0 ? (
              userInterviews.map((interview) => (
                <InterviewCard {...interview} key={interview.id} />
              ))
            ) : (
              <p>You haven&apos;t taken any interviews yet</p>
            )
          ) : null}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>There are no new interviews available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
