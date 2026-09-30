function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("goblok masukin pw dan username dolo eeeeeeewww!");
    return false;
  }

  if (username === "Beta ye" && password === "seng ada") {
    return true;
  }

  alert("woy woy woy salah salah salah woy!");
  return false;
}
