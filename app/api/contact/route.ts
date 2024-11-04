import AWS from "aws-sdk";
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  company: z.string().optional(),
  email: z.string().email("Invalid email format"),
  phoneNumber: z.string().optional(),
  message: z.string(),
});

export async function POST(req: Request) {
  const sns = new AWS.SNS({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  try {
    const body = await req.json();

    // Validation des données avec Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return new NextResponse(JSON.stringify(result.error.flatten()), {
        status: 400,
      });
    }

    const { firstName, lastName, company, email, message } = result.data;

    // Générer un lien Google Meet
    const meetLink = "https://meet.google.com/new"; // Lien pour créer une nouvelle réunion

    const formattedMessage = `
New Message from Contact Form:

Name: ${firstName} ${lastName}
Company: ${company}
Email: ${email}

Message:
${message}

You can join the meeting using this link: ${meetLink}
    `;

    const params = {
      Message: formattedMessage,
      Subject: "New message from contact form",
      TopicArn: process.env.AWS_SNS_TOPIC_ARN,
    };

    await sns.publish(params).promise();
    return new NextResponse("Message sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    return new NextResponse("Failed to send message", { status: 500 });
  }
}

