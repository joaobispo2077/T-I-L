export interface Result<Success, Failure> {
	value: Success | Failure;
	isSuccess: () => boolean;
	isFailure: () => boolean;
}

export interface SuccessResult<Success, Failure>
	extends Result<Success, Failure> {
	value: Success;
	isSuccess: () => true;
	isFailure: () => false;
}

export type Either<Success, Failure> =
	| SuccessResult<Success, Failure>
	| FailureResult<Success, Failure>;

export interface FailureResult<Success, Failure>
	extends Result<Success, Failure> {
	value: Failure;
	isSuccess: () => false;
	isFailure: () => true;
}

export const craeteSuccessResult = <Success, Failure>(
	value: Success
): SuccessResult<Success, Failure> => ({
	value,
	isSuccess: () => true,
	isFailure: () => false,
});

export const createFailureResult = <Success, Failure>(
	value: Failure
): FailureResult<Success, Failure> => ({
	value,
	isSuccess: () => false,
	isFailure: () => true,
});
