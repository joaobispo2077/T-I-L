import { createPerson } from "./src/entities/Person";

try {
	createPerson({
		age: 10,
		nickname: "nickname",
	});
} catch (error) {
	console.log(error);
}
