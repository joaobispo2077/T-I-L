import { PersonError } from "./Error";
import { craeteSuccessResult, createFailureResult, Either } from "./Result";
interface NegativeAge extends PersonError {
	name: "NegativeAge";
}

interface NonIntegerAge extends PersonError {
	name: "NonIntegerAge";
}

type InvalidAgeStates = NegativeAge | NonIntegerAge;

interface InvalidAge extends PersonError {
	name: "InvalidAge";
	invalidStates: InvalidAgeStates[];
}

const createNonIntegerError = (value: number): NonIntegerAge => ({
	name: "NonIntegerAge",
	message: `Age must be a integer number, but "${value}" was provided.`,
});

const createNegativeAgeError = (value: number): NegativeAge => ({
	name: "NegativeAge",
	message: `Age must be a positive integer, but "${value}" was provided.`,
});

const createInvalidAge = (invalidStates: InvalidAgeStates[]): InvalidAge => ({
	name: "InvalidAge",
	invalidStates,
	message: "Invalid age.",
});

export const createAge = (value: number): Either<number, InvalidAge> => {
	const invalidStates: InvalidAgeStates[] = [];

	const hasntMinimumAge = value < 0;
	const isntInteger = !Number.isInteger(value);

	if (hasntMinimumAge) {
		invalidStates.push(createNegativeAgeError(value));
	}

	if (isntInteger) {
		invalidStates.push(createNonIntegerError(value));
	}

	if (invalidStates.length) {
		return createFailureResult(createInvalidAge(invalidStates));
	}

	return craeteSuccessResult<number, NegativeAge | NonIntegerAge>(value);
};
