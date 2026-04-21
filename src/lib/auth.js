export function setUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

export function register(newUser) {
  const users = getUsers();

  
  const isUserExist = users.find(
    (user) => user.email === newUser.email
  );

  if (isUserExist) {
    return {
      success: false,
      message: "User already exists",
    };
  }

  
  const userToSave = {
    id: Date.now().toString(), 
    name: newUser.name,
    email: newUser.email,
    password: newUser.password,
    role: newUser.role || "user", 
    createdAt: new Date().toISOString(),
  };

  
  users.push(userToSave);
  setUsers(users);

  return {
    success: true,
    message: "User registered successfully",
    user: userToSave,
  };
}

export function setSession(user) {
  localStorage.setItem("session", JSON.stringify(user));
}

export function getSession() {
  return JSON.parse(localStorage.getItem("session"));
}

export function clearSession() {
  localStorage.removeItem("session");
}

export function login(email, password) {
  const users = getUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password",
    };
  }

  // store current logged-in user
  setSession(user);

  return {
    success: true,
    user,
  };
}

export function getCurrentUser() {
  return getSession();
}

export function logout() {
  clearSession();
}