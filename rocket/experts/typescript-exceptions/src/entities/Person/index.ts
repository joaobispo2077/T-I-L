import { createAge } from "./Age";
import { createNickname } from "./Nickname";

export interface PersonDTO {
	age: number;
	nickname: string;
}

export interface Person {
	age: number;
	nickname: string;
}

export const createPerson = ({
	age: inputAge,
	nickname: inputNickname,
}: PersonDTO): Person => {
	const age = createAge(inputAge);
	const nickname = createNickname(inputNickname);

	if (age.isFailure()) {
		throw age.value;
	}

	return {
		age: age.value as number,
		nickname,
	};
};
