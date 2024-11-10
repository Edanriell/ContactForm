import gsap from "gsap";
import { fireEvent, render, screen, waitFor } from "@testing-library/vue";
import { describe, expect, it, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";

import { ContactUsForm } from "@features/contact-us-form/ui";
import { addToast } from "@shared/ui/toast/model";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { Loader } from "@shared/ui/loader/ui";

import { createMessage } from "../api";

vi.mock("gsap");
vi.mock("../api", () => ({
	createMessage: vi.fn()
}));
vi.mock("@shared/ui/toast/model", () => ({
	addToast: vi.fn()
}));

const setupForm = () => {
	return render(ContactUsForm, {
		global: {
			components: {
				Input,
				Button,
				Loader
			}
		}
	});
};

describe("contact-us-form.vue", () => {
	it("renders form inputs and submit button", async () => {
		setupForm();

		const firstNameInput = screen.getByTestId("first-name");
		const lastNameInput = screen.getByTestId("last-name");
		const emailInput = screen.getByTestId("email-address");
		const queryTypeRadios = screen.getAllByTestId("radio");
		const messageTextarea = screen.getByTestId("message");
		const serviceAgreementCheckbox = screen.getByTestId("service-agreement");
		const submitButton = screen.getByTestId("submit");

		expect(firstNameInput).toBeInTheDocument();
		expect(lastNameInput).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(queryTypeRadios.length).toBe(2);
		expect(messageTextarea).toBeInTheDocument();
		expect(serviceAgreementCheckbox).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});

	it("validates form inputs and shows error messages when validation fails", async () => {
		setupForm();

		const firstNameInput = screen.getByTestId("first-name");
		const lastNameInput = screen.getByTestId("last-name");
		const emailInput = screen.getByTestId("email-address");
		const messageTextarea = screen.getByTestId("message");
		const submitButton = screen.getByTestId("submit");

		await fireEvent.update(firstNameInput, "");
		await fireEvent.update(lastNameInput, "");
		await fireEvent.update(emailInput, "");
		await fireEvent.update(messageTextarea, "");

		await fireEvent.click(submitButton);

		await waitFor(
			() => {
				const requiredMessages = screen.getAllByText("This field is required");
				expect(requiredMessages).toHaveLength(3);

				expect(screen.getByText("Please select a query type")).toBeInTheDocument();
				expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
				expect(
					screen.getByText("To submit this form, please consent to being contacted")
				).toBeInTheDocument();
			},
			{ timeout: 1000 }
		);
	});

	it("submits form data successfully and shows success toast", async () => {
		(createMessage as vi.mock).mockResolvedValueOnce({
			id: 14,
			firstName: "John",
			lastName: "Doe",
			emailAddress: "john.doe@example.com",
			queryType: "General Enquiry",
			message: "This is a test message.",
			serviceAgreement: "true"
		});

		setupForm();

		const firstNameInput = screen.getByTestId("first-name");
		const lastNameInput = screen.getByTestId("last-name");
		const emailInput = screen.getByTestId("email-address");
		const queryTypeRadios = screen.getAllByTestId("radio");
		const messageTextarea = screen.getByTestId("message");
		const serviceAgreementCheckbox = screen.getByTestId("service-agreement");
		const submitButton = screen.getByTestId("submit");

		await userEvent.type(firstNameInput, "John");
		await userEvent.type(lastNameInput, "Doe");
		await userEvent.type(emailInput, "john.doe@example.com");
		await userEvent.click(queryTypeRadios[1]);
		await userEvent.type(messageTextarea, "This is a test message.");
		await userEvent.dblClick(serviceAgreementCheckbox);

		await userEvent.click(submitButton);

		await waitFor(() => {
			expect(createMessage).toHaveBeenCalledTimes(1);
			expect(addToast).toHaveBeenCalledWith(
				expect.objectContaining({
					title: "Message Sent!",
					message: "Thanks for completing the form. We’ll be in touch soon!"
				})
			);
		});
	});

	it("fails to submit form data and shows error toast when submission fails", async () => {
		(createMessage as vi.mock).mockRejectedValueOnce(new Error("Submission Failed"));

		setupForm();

		const firstNameInput = screen.getByTestId("first-name");
		const lastNameInput = screen.getByTestId("last-name");
		const emailInput = screen.getByTestId("email-address");
		const queryTypeRadios = screen.getAllByTestId("radio");
		const messageTextarea = screen.getByTestId("message");
		const serviceAgreementCheckbox = screen.getByTestId("service-agreement");
		const submitButton = screen.getByTestId("submit");

		await userEvent.type(firstNameInput, "John");
		await userEvent.type(lastNameInput, "Doe");
		await userEvent.type(emailInput, "john.doe@example.com");
		await userEvent.click(queryTypeRadios[1]);
		await userEvent.type(messageTextarea, "This is a test message.");
		await userEvent.dblClick(serviceAgreementCheckbox);

		await userEvent.click(submitButton);

		await waitFor(() => {
			expect(createMessage).toHaveBeenCalledTimes(2);
			expect(addToast).toHaveBeenCalledWith(
				expect.objectContaining({
					title: "Submission Failed",
					message: "There was an error submitting the form. Please try again.",
					type: "error"
				})
			);
		});
	});

	it("animates error messages with GSAP", async () => {
		setupForm();

		const submitButton = screen.getByTestId("submit");

		await fireEvent.click(submitButton);

		await waitFor(() => {
			expect(gsap.to).toHaveBeenCalled();
		});
	});
});
