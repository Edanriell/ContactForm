import { IsBooleanString, IsEmail, IsIn, IsNotEmpty } from "class-validator";

import type { Message } from "../models";

export class CreateMessageRequestDto {
	@IsNotEmpty({ message: "First name is required." })
	firstName: string;

	@IsNotEmpty({ message: "Last name is required." })
	lastName: string;

	@IsEmail({}, { message: "Invalid email format." })
	emailAddress: string;

	@IsIn(["General Enquiry", "Support Request"], { message: "Invalid query type." })
	queryType: string;

	@IsNotEmpty({ message: "Message is required." })
	message: string;

	@IsBooleanString({ message: "Service agreement must be accepted." })
	serviceAgreement: string;

	constructor({
		firstName,
		lastName,
		emailAddress,
		queryType,
		message,
		serviceAgreement
	}: Omit<Message, "id">) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailAddress = emailAddress;
		this.queryType = queryType;
		this.message = message;
		this.serviceAgreement = serviceAgreement;
	}
}
