// script.js
const usersTable = document.getElementById("users-table");
const printOutBtn = document.getElementById("print-btn");
const outputDiv = document.getElementById("output");
const deleteUsersBtn = document.getElementById("deletePrintedUser-btn");

let selectedUsers = [];

usersTable.addEventListener("click", (event) => {
	if (event.target.tagName === "TD") {
		const row = event.target.parentElement;
		const korisnickoIme = row.cells[0].textContent;
		const ime = row.cells[1].textContent;
		const prezime = row.cells[2].textContent;
		const email = row.cells[3].textContent;

		const user = {
			korisnickoIme,
			ime,
			prezime,
			email,
		};

		selectedUsers.push(user);
		row.classList.add("selected");
	}
});

printOutBtn.addEventListener("click", () => {
	outputDiv.innerHTML = "";
	for (const user of selectedUsers) {
		outputDiv.innerHTML += `<p>${JSON.stringify(user)}</p>`;
	}
	if (selectedUsers.length > 0) {
		outputDiv.innerHTML += `<p>Broj elemenata niza: ${selectedUsers.length}</p>`;
	} else {
		outputDiv.innerHTML += `<h2>Trenutno nemate ubacenih korisnika</h2>`;
	}
});
deleteUsersBtn.addEventListener("click", () => {
	selectedUsers.splice(0);
});

const employeesTable = document.getElementById("employees-table");
const izbrisiBtn = document.getElementById("izbrisi-btn");
const warningDiv = document.getElementById("warning");

let clickedEmployee = null;

employeesTable.addEventListener("click", (event) => {
	if (event.target.tagName === "TD") {
		const row = event.target.parentElement;
		if (clickedEmployee) {
			clickedEmployee.classList.remove("selected");
		}
		row.classList.add("selected");
		clickedEmployee = row;

		const clickedSalary = parseInt(row.cells[3].textContent, 10);

		for (const row of employeesTable.querySelectorAll("tr")) {
			const salary = parseInt(row.cells[3].textContent, 10);
			row.classList.remove("low-salary");
			row.classList.remove("higher-salary");

			if (salary < clickedSalary) {
				row.classList.add("low-salary");
			} else if (salary > clickedSalary) {
				row.classList.add("higher-salary");
			}
		}
	}
});

izbrisiBtn.addEventListener("click", () => {
	if (clickedEmployee) {
		clickedEmployee.remove();
		clickedEmployee = null;
		warningDiv.textContent = "";
	} else {
		warningDiv.textContent = "Morate kliknuti zaposlenog";
	}
});
