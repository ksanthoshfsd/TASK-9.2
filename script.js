document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const tableBody = document.getElementById('tableBody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.getElementById('gender').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        const selectedFoods = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(function (checkbox) {
            selectedFoods.push(checkbox.value);
        });

        if (selectedFoods.length < 2) {
            alert('Please select at least two food options.');
            return;
        }

        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = firstName;
        row.appendChild(firstNameCell);

        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = lastName;
        row.appendChild(lastNameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = email;
        row.appendChild(emailCell);

        const addressCell = document.createElement('td');
        addressCell.textContent = address;
        row.appendChild(addressCell);

        const pincodeCell = document.createElement('td');
        pincodeCell.textContent = pincode;
        row.appendChild(pincodeCell);

        const genderCell = document.createElement('td');
        genderCell.textContent = gender;
        row.appendChild(genderCell);

        const foodCell = document.createElement('td');
        foodCell.textContent = selectedFoods.join(', ');
        row.appendChild(foodCell);

        const stateCell = document.createElement('td');
        stateCell.textContent = state;
        row.appendChild(stateCell);

        const countryCell = document.createElement('td');
        countryCell.textContent = country;
        row.appendChild(countryCell);

        tableBody.appendChild(row);

        form.reset();
    });
});
