import { ref } from "vue";

// Mock Data
const mockUsers = [
    { email: "user@example.com", password: "password123", displayName: "John Doe", photoURL: "" },
    { email: "jane.doe@example.com", password: "password456", displayName: "Jane Doe", photoURL: "" }
];

// Mock persistence enums (simulating browser persistence modes)
const browserLocalPersistence = "local";
const browserSessionPersistence = "session";

export const useAuth = () => {
    const user = ref<{
        email: string;
        displayName: string;
    } | null>(null);

    // Mock for user session persistence
    let persistence: string | null = null;

    // Simulating onAuthStateChanged by checking the current user
    const onAuthStateChanged = (callback: (currentUser: { email: string; displayName: string } | null) => void) => {
        callback(user.value);
    };

    // Simulate login
    const login = async ({
        email,
        password,
        rememberMe
    }: {
        email: string;
        password: string;
        rememberMe: boolean;
    }) => {
        // Simulate persistence mode
        persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;

        const foundUser = mockUsers.find(
            (mockUser) => mockUser.email === email && mockUser.password === password
        );

        if (foundUser) {
            user.value = { email: foundUser.email, displayName: foundUser.displayName };
            return { user: user.value };
        } else {
            throw new Error("Invalid email or password");
        }
    };

    // Simulate register
    const register = async ({
        name,
        email,
        password
    }: {
        name: string;
        email: string;
        password: string;
    }) => {
        const existingUser = mockUsers.find((mockUser) => mockUser.email === email);

        if (existingUser) {
            throw new Error("User already exists");
        }

        const newUser = { email, password, displayName: name, photoURL: "" };
        mockUsers.push(newUser);

        user.value = { email: newUser.email, displayName: newUser.displayName };
        return { user: user.value };
    };

    // Simulate logout
    const logout = async () => {
        user.value = null;
        persistence = null; // Reset the persistence state
        return { message: "Logged out successfully" };
    };

    return { user, login, register, logout, onAuthStateChanged };
};
