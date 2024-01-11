let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

let isAuthenticated = true;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

if(isLoggedIn){
    if(userRole == "admin"){
        userMessage = "Welcome, Admin!";
    } else{
        userMessage = "Welcome, User!";
    }
} else{
    userMessage = "Please log in to access the system.";
}

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);

let person = "person";
let dietaryService;

switch(person){
    case "employee":
        dietaryService = "Access to Dietary Services!";
        break;
    case "enrolledMember":
        dietaryService = "Access to Dietary Services and One on One interaction with a dietician!"
        break;
    case "subscriber":
        dietaryService = "Partial access to facilitate Dietary Services only!";
        break;
    default:
        dietaryService = "Please enroll or subscribe first to avail this facility.";
}

console.log("Dietary Service:", dietaryService);