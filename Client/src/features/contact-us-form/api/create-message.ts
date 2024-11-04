import { postData } from "@shared/api";

type CreateMessageParameters = {
	firstName: string;
	lastName: string;
	emailAddress: string;
	queryType: string;
	message: string;
	serviceAgreement: string;
};

export const createMessage = async ({
	firstName,
	lastName,
	emailAddress,
	queryType,
	message,
	serviceAgreement
}: CreateMessageParameters) => {
	try {
		const response = await postData("/api/message", {
			firstName,
			lastName,
			emailAddress,
			queryType,
			message,
			serviceAgreement
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`Failed to send message data. Status: ${response.status}. Message: ${errorText || "Unknown error"}`
			);
		}

		const contentType = response.headers.get("Content-Type");

		if (!contentType || !contentType.includes("application/json")) {
			throw new Error("Expected JSON response but received a different format.");
		}

		return await response.json();
	} catch (error) {
		console.error("An error occurred while sending the message data:", error);
		throw error;
	}
};
