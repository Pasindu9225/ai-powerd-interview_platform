import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getRandomInterviewCover } from "@/lib/utils";
import { db } from "@/firebase/admin";

export async function GET() {
  return Response.json({ success: true, data: "correct" }, { status: 200 });
}

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Prepare questions fore a job interview.
        the job role is ${role}.
        the job experience level is ${level}.
        the tech stack is ${techstack}.
        the focuse between behavioural and technical questions should learn towards : ${type}.
        the number of questions should be ${amount}.
        please return question only the questions, without any aditional text.
        the questions are going to be read by a voice assistant so do not use "/" or "*" any other special characters with might break the voice assistance 
        return the questions like this:
        ["Question 1", "Question 2", "Question 3"]

        Thank you! <3
        `,
    });

    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(","),
      questions: JSON.parse(questions),
      userID: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
