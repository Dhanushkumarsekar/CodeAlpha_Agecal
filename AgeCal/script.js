function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const todayInput = document.getElementById("todayDate").value;

  if (!dobInput || !todayInput) {
    alert("Please select both dates.");
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date(todayInput);

  if (dob > today) {
    alert("Date of birth cannot be in the future.");
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;
}

function resetForm() {
  document.getElementById("dob").value = "";
  document.getElementById("todayDate").value = "";
  document.getElementById("years").innerText = "0";
  document.getElementById("months").innerText = "0";
  document.getElementById("days").innerText = "0";
}
