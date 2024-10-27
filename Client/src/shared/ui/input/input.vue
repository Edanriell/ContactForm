<script lang="ts" setup>
	import gsap from "gsap";

	type InputProps = {
		labelText: string;
		labelFor: string;
		inputName: string;
		inputId: string;
		inputType: "text" | "email" | "radio" | "textarea" | "checkbox";
	};

	const { labelText, labelFor, inputName, inputId, inputType = "text" } = defineProps<InputProps>();

	const handleInputMouseEnter = (element: EventTarget | null) => {
		gsap.to(element, { borderColor: "#0c7d69", duration: 0.25, ease: "power2.out" });
	};

	const handleInputMouseLeave = (element: EventTarget | null) => {
		gsap.to(element, { borderColor: "#86a2a5", duration: 0.2, ease: "power2.out" });
	};

	const handleInputFocus = (element: EventTarget | null) => {
		gsap.to(element, { borderColor: "#0c7d69", duration: 0.25, ease: "power2.out" });
	};

	const handleInputBlur = (element: EventTarget | null) => {
		gsap.to(element, { borderColor: "#86a2a5", duration: 0.2, ease: "power2.out" });
	};

	const handleInputMouseDown = (element: EventTarget | null) => {
		gsap.to(element, { scale: 0.98, duration: 0.25, ease: "power2.inOut" });
	};

	const handleInputMouseUp = (element: EventTarget | null) => {
		gsap.to(element, { scale: 1, duration: 0.2, ease: "power2.inOut" });
	};
</script>

<template>
	<div v-if="inputType === 'text'" class="text-input__field">
		<label :for="labelFor" class="text-input__label">{{ labelText }} <span>*</span></label>
		<input
			:id="inputId"
			:name="inputName"
			class="text-input"
			type="text"
			@blur="handleInputBlur($event.target)"
			@focus="handleInputFocus($event.target)"
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
			:name="inputName"
			class="email-input"
			type="email"
			@blur="handleInputBlur($event.target)"
			@focus="handleInputFocus($event.target)"
			@mousedown="handleInputMouseDown($event.target)"
			@mouseenter="handleInputMouseEnter($event.target)"
			@mouseleave="handleInputMouseLeave($event.target)"
			@mouseup="handleInputMouseUp($event.target)"
		/>
	</div>
	<label
		v-else-if="inputType === 'radio'"
		:for="labelFor"
		class="radio-input__label"
		@blur="handleInputBlur($event.currentTarget)"
		@focus="handleInputFocus($event.currentTarget)"
		@mousedown="handleInputMouseDown($event.currentTarget)"
		@mouseenter="handleInputMouseEnter($event.currentTarget)"
		@mouseleave="handleInputMouseLeave($event.currentTarget)"
		@mouseup="handleInputMouseUp($event.currentTarget)"
	>
		<input :id="inputId" :name="inputName" class="radio-input" type="radio" />
		<span class="radio-input__radio-mark"></span>
		<span class="radio-input__label-name">{{ labelText }}</span>
	</label>
	<div v-else-if="inputType === 'textarea'" class="textarea__field">
		<label :for="labelFor" class="textarea__label">{{ labelText }} <span>*</span></label>
		<textarea
			:id="inputId"
			:name="inputName"
			autocomplete="off"
			class="textarea"
			spellcheck="true"
			wrap="soft"
			@blur="handleInputBlur($event.target)"
			@focus="handleInputFocus($event.target)"
			@mousedown="handleInputMouseDown($event.target)"
			@mouseenter="handleInputMouseEnter($event.target)"
			@mouseleave="handleInputMouseLeave($event.target)"
			@mouseup="handleInputMouseUp($event.target)"
		></textarea>
	</div>
	<label v-else-if="inputType === 'checkbox'" :for="labelFor" class="checkbox-input__label">
		<input :id="inputId" :name="inputName" class="checkbox-input" type="checkbox" />
		<span class="checkbox-input__check-mark"></span>
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
		transform: translate(-50%, -50%);
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		background: var(--color-green-600);
		opacity: 0;
		will-change: opacity;
		transition: opacity 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
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
		display: block;
		width: 18rem;
		height: 18rem;
		border: 1rem solid var(--color-grey-500);
		border-radius: 2rem;
	}
</style>
