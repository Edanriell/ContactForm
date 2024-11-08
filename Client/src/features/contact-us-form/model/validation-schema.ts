import { z } from "zod";

export const contactUsFormValidationSchema = z.object({
	firstName: z.string().min(1, "This field is required"),
	lastName: z.string().min(1, "This field is required"),
	emailAddress: z
		.string()
		.email("Please enter a valid email address")
		.min(1, "This field is required"),
	queryType: z.string().min(1, "Please select a query type"),
	message: z.string().min(1, "This field is required"),
	serviceAgreement: z
		.boolean()
		.refine((value) => value, "To submit this form, please consent to being contacted")
});
