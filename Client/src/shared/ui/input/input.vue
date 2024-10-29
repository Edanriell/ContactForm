<script lang="ts" setup>
	import gsap from "gsap";
	import { ref, watch } from "vue";

	type InputProps = {
		modelValue: string;
		labelText: string;
		labelFor: string;
		inputName: string;
		inputId: string;
		inputType: "text" | "email" | "radio" | "textarea" | "checkbox";
		isValid?: boolean;
		isSelected?: boolean;
		value?: string;
	};

	const {
		modelValue,
		labelText,
		labelFor,
		inputName,
		inputId,
		inputType = "text",
		isValid = true,
		isSelected = false,
		value = ""
	} = defineProps<InputProps>();

	const textInputRef = ref<HTMLInputElement>();
	const emailInputRef = ref<HTMLInputElement>();
	const textareaRef = ref<HTMLTextAreaElement>();
	const radioInputLabelRef = ref<HTMLLabelElement>();
	const radioInputRadioMarkRef = ref<HTMLSpanElement>();
	const checkboxInputCheckMarkRef = ref<HTMLSpanElement>();

	const emit = defineEmits(["update:modelValue"]);

	const updateValue = (event: Event) => {
		const target = event.target as HTMLInputElement;
		emit("update:modelValue", target.value);
	};

	const handleInputMouseEnter = (element: EventTarget | null) => {
		if (!isValid || isSelected) return;
		gsap.to(element, { borderColor: "#0c7d69", duration: 0.2, ease: "power2.out" });
	};

	const handleInputMouseLeave = (element: EventTarget | null) => {
		if (!isValid || isSelected) return;
		gsap.to(element, { borderColor: "#86a2a5", duration: 0.15, ease: "power2.out" });
	};

	const handleInputFocus = (element: EventTarget | null) => {
		if (!isValid || isSelected) return;
		gsap.to(element, { borderColor: "#0c7d69", duration: 0.2, ease: "power2.out" });
	};

	const handleInputBlur = (element: EventTarget | null) => {
		if (!isValid || isSelected) return;
		gsap.to(element, { borderColor: "#86a2a5", duration: 0.15, ease: "power2.out" });
	};

	const handleInputMouseDown = (element: EventTarget | null) => {
		gsap.to(element, { scale: 0.98, duration: 0.2, ease: "power2.inOut" });
	};

	const handleInputMouseUp = (element: EventTarget | null) => {
		gsap.to(element, { scale: 1, duration: 0.15, ease: "power2.inOut" });
	};

	const applyInvalidInputStyles = (element: EventTarget | null) => {
		gsap.to(element, { borderColor: "#d73c3c", duration: 0.2, ease: "power2.out" });
	};

	const applyValidInputStyles = (element: EventTarget | null) => {
		gsap.to(element, { borderColor: "#86a2a5", duration: 0.15, ease: "power2.out" });
	};

	const applyIsSelectedRadioInputLabelStyles = (element: EventTarget | null) => {
		gsap.to(element, {
			backgroundColor: "#e0f1e8",
			borderColor: "#0c7d69",
			duration: 0.2,
			ease: "power2.out"
		});
	};

	const applyNotSelectedRadioInputLabelStyles = (element: EventTarget | null) => {
		gsap.to(element, {
			backgroundColor: "#fff",
			borderColor: "#86a2a5",
			duration: 0.15,
			ease: "power2.out"
		});
	};

	const applyIsSelectedRadioInputRadioMarkStyles = (element: EventTarget | null) => {
		gsap.to(element, {
			"--radio-mark-opacity": 1,
			"--radio-mark-scale": 1,
			borderColor: "#0c7d69",
			duration: 0.2,
			ease: "power2.out"
		});
	};

	const applyNotSelectedRadioInputRadioMarkStyles = (element: EventTarget | null) => {
		gsap.to(element, {
			"--radio-mark-opacity": 0,
			"--radio-mark-scale": 0.6,
			borderColor: "#86a2a5",
			duration: 0.15,
			ease: "power2.out"
		});
	};

	const applyIsSelectedCheckboxInputCheckMarkStyles = (element: EventTarget | null) => {
		gsap.to(element, {
			"--check-mark-opacity": 1,
			"--check-mark-height": "10rem",
			"--check-mark-width": "7rem",
			backgroundColor: "#0c7d69",
			borderColor: "#0c7d69",
			duration: 0.2,
			ease: "power2.out"
		});
	};

	const applyNotSelectedCheckboxInputCheckMarkStyles = (element: EventTarget | null) => {
		gsap.to(element, {
			"--check-mark-opacity": 0,
			"--check-mark-height": 0,
			"--check-mark-width": 0,
			backgroundColor: "#fff",
			borderColor: "#86a2a5",
			duration: 0.15,
			ease: "power2.out"
		});
	};

	watch(
		() => isValid,
		(newValue) => {
			if (!newValue) {
				if (textInputRef.value) {
					applyInvalidInputStyles(textInputRef.value);
				} else if (emailInputRef.value) {
					applyInvalidInputStyles(emailInputRef.value);
				} else if (textareaRef.value) {
					applyInvalidInputStyles(textareaRef.value);
				}
			} else {
				if (textInputRef.value) {
					applyValidInputStyles(textInputRef.value);
				} else if (emailInputRef.value) {
					applyValidInputStyles(emailInputRef.value);
				} else if (textareaRef.value) {
					applyValidInputStyles(textareaRef.value);
				}
			}
		}
	);

	watch(
		() => isSelected,
		(newValue) => {
			if (newValue) {
				if (radioInputLabelRef.value && radioInputRadioMarkRef.value) {
					applyIsSelectedRadioInputLabelStyles(radioInputLabelRef.value);
					applyIsSelectedRadioInputRadioMarkStyles(radioInputRadioMarkRef.value);
				} else if (checkboxInputCheckMarkRef.value) {
					applyIsSelectedCheckboxInputCheckMarkStyles(checkboxInputCheckMarkRef.value);
				}
			} else {
				if (radioInputLabelRef.value && radioInputRadioMarkRef.value) {
					applyNotSelectedRadioInputLabelStyles(radioInputLabelRef.value);
					applyNotSelectedRadioInputRadioMarkStyles(radioInputRadioMarkRef.value);
				} else if (checkboxInputCheckMarkRef.value) {
					applyNotSelectedCheckboxInputCheckMarkStyles(checkboxInputCheckMarkRef.value);
				}
			}
		}
	);
</script>

<template>
	<div v-if="inputType === 'text'" class="text-input__field">
		<label :for="labelFor" class="text-input__label">{{ labelText }} <span>*</span></label>
		<input
			:id="inputId"
			ref="textInputRef"
			:name="inputName"
			:value="modelValue"
			class="text-input"
			type="text"
			@blur="handleInputBlur($event.target)"
			@focus="handleInputFocus($event.target)"
			@input="updateValue"
			@mousedown="handleInputMouseDown($event.target)"
			@mouseenter="handleInputMouseEnter($event.target)"
			@mouseleave="handleInputMouseLeave($event.target)"
			@mouseup="handleInputMouseUp($event.target)"
		/>
	</div>
	<div v-else-if="inputType === 'email'" class="email-input__field">
		<label :for="labelFor" class="email-input__label">{{ labelText }} <span>*</span></label>
		<input
			:id="inputId"
			ref="emailInputRef"
			:name="inputName"
			:value="modelValue"
			class="email-input"
			type="email"
			@blur="handleInputBlur($event.target)"
			@focus="handleInputFocus($event.target)"
			@input="updateValue"
			@mousedown="handleInputMouseDown($event.target)"
			@mouseenter="handleInputMouseEnter($event.target)"
			@mouseleave="handleInputMouseLeave($event.target)"
			@mouseup="handleInputMouseUp($event.target)"
		/>
	</div>
	<label
		v-else-if="inputType === 'radio'"
		ref="radioInputLabelRef"
		:for="labelFor"
		class="radio-input__label"
		@blur="handleInputBlur($event.currentTarget)"
		@focus="handleInputFocus($event.currentTarget)"
		@mousedown="handleInputMouseDown($event.currentTarget)"
		@mouseenter="handleInputMouseEnter($event.currentTarget)"
		@mouseleave="handleInputMouseLeave($event.currentTarget)"
		@mouseup="handleInputMouseUp($event.currentTarget)"
	>
		<input
			:id="inputId"
			:name="inputName"
			:value="value"
			class="radio-input"
			type="radio"
			@change="updateValue"
			@input="updateValue"
		/>
		<span ref="radioInputRadioMarkRef" class="radio-input__radio-mark"></span>
		<span class="radio-input__label-name">{{ labelText }}</span>
	</label>
	<div v-else-if="inputType === 'textarea'" class="textarea__field">
		<label :for="labelFor" class="textarea__label">{{ labelText }} <span>*</span></label>
		<textarea
			:id="inputId"
			ref="textareaRef"
			:name="inputName"
			:value="modelValue"
			autocomplete="off"
			class="textarea"
			spellcheck="true"
			wrap="soft"
			@blur="handleInputBlur($event.target)"
			@focus="handleInputFocus($event.target)"
			@input="updateValue"
			@mousedown="handleInputMouseDown($event.target)"
			@mouseenter="handleInputMouseEnter($event.target)"
			@mouseleave="handleInputMouseLeave($event.target)"
			@mouseup="handleInputMouseUp($event.target)"
		></textarea>
	</div>
	<label
		v-else-if="inputType === 'checkbox'"
		:for="labelFor"
		class="checkbox-input__label"
		@blur="handleInputBlur(checkboxInputCheckMarkRef!)"
		@focus="handleInputFocus(checkboxInputCheckMarkRef!)"
		@input="updateValue"
		@mouseenter="handleInputMouseEnter(checkboxInputCheckMarkRef!)"
		@mouseleave="handleInputMouseLeave(checkboxInputCheckMarkRef!)"
	>
		<input
			:id="inputId"
			:name="inputName"
			:value="value"
			class="checkbox-input"
			type="checkbox"
			@change="updateValue"
		/>
		<span ref="checkboxInputCheckMarkRef" class="checkbox-input__check-mark"></span>
		<span class="checkbox-input__label-name">{{ labelText }} <span>*</span></span>
	</label>
</template>

<style scoped>
	.text-input__field {
		display: flex;
		flex-direction: column;
		row-gap: 8rem;

		@media (width >= 768px) {
			width: 100%;
		}
	}

	.text-input__label {
		display: flex;
		flex-direction: row;
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--color-grey-900);
		column-gap: 8rem;

		> span {
			font-family: var(--font-family), sans-serif;
			font-weight: 400;
			font-size: 16rem;
			line-height: 150%;
			color: var(--color-green-600);
		}
	}

	.text-input {
		border: 1rem solid var(--color-grey-500);
		border-radius: 8rem;
		padding: 12rem 24rem;
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 18rem;
		line-height: 150%;
		color: var(--color-grey-900);
	}

	.email-input__field {
		display: flex;
		flex-direction: column;
		row-gap: 8rem;
	}

	.email-input__label {
		display: flex;
		flex-direction: row;
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--color-grey-900);
		column-gap: 8rem;

		> span {
			font-family: var(--font-family), sans-serif;
			font-weight: 400;
			font-size: 16rem;
			line-height: 150%;
			color: var(--color-green-600);
		}
	}

	.email-input {
		border: 1rem solid var(--color-grey-500);
		border-radius: 8rem;
		padding: 12rem 24rem;
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 18rem;
		line-height: 150%;
		color: var(--color-grey-900);
	}

	.radio-input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.radio-input__label {
		position: relative;
		display: flex;
		align-items: center;
		cursor: pointer;
		border: 1rem solid var(--color-grey-500);
		border-radius: 8rem;
		width: inherit;
		height: 51rem;
		background-color: transparent;
		will-change: border, background;
		transition:
			border 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),
			background 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);

		@media (width >= 768px) {
			width: 100%;
		}
	}

	.radio-input__radio-mark {
		--radio-mark-opacity: 0;
		--radio-mark-scale: 0.6;

		width: 20rem;
		height: 20rem;
		border-radius: 50%;
		background-color: transparent;
		border: 1rem solid var(--color-grey-500);
		display: inline-block;
		position: relative;
		margin: 0 14.25rem 0 26.25rem;
		will-change: border;
		transition: border 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	.radio-input__radio-mark::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(var(--radio-mark-scale));
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		background: var(--color-green-600);
		opacity: var(--radio-mark-opacity);
	}

	.radio-input__label-name {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 18rem;
		line-height: 150%;
		color: var(--color-grey-900);
	}

	.textarea__field {
		display: flex;
		flex-direction: column;
		row-gap: 8rem;
	}

	.textarea__label {
		display: flex;
		flex-direction: row;
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--color-grey-900);
		column-gap: 8rem;

		> span {
			font-family: var(--font-family), sans-serif;
			font-weight: 400;
			font-size: 16rem;
			line-height: 150%;
			color: var(--color-green-600);
		}
	}

	.textarea {
		border: 1rem solid var(--color-grey-500);
		border-radius: 8rem;
		padding: 12rem 24rem;
		height: 240rem;
		resize: none !important;
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 18rem;
		line-height: 150%;
		color: var(--color-grey-900);

		@media (width >= 768px) {
			height: 132rem;
		}

		@media (width >= 1440px) {
			height: 105rem;
		}
	}

	.checkbox-input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.checkbox-input__label {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 19rem;
		cursor: pointer;
	}

	.checkbox-input__label-name {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--color-grey-900);

		> span {
			font-family: var(--font-family), sans-serif;
			font-weight: 400;
			font-size: 16rem;
			line-height: 150%;
			color: var(--color-green-600);
		}
	}

	.checkbox-input__check-mark {
		--check-mark-opacity: 0;
		--check-mark-width: 0;
		--check-mark-height: 0;

		display: block;
		width: 18rem;
		height: 18rem;
		border: 1rem solid var(--color-grey-500);
		border-radius: 2rem;
		position: relative;
	}

	.checkbox-input__check-mark::after {
		opacity: var(--check-mark-opacity);
		height: var(--check-mark-height);
		width: var(--check-mark-width);
		transform-origin: left top;
		border-right: 2rem solid #fff;
		border-top: 2rem solid #fff;
		content: "";
		left: 50%;
		top: 40%;
		position: absolute;
		transform: scaleX(-1) rotate(135deg) translate(-50%, -50%);
		border-radius: 2rem;
	}
</style>
