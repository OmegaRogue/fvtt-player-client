// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Vite
// plugin that tells the Electron app where to look for the Vite-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;
declare const api: typeof import("./api").default;

interface GameConfig {
    name: string;
    url: string;
    id?: number;
}

interface AppConfig {
    games: GameConfig[];
    background: string;
    backgroundColor: string;
    textColor: string;
    accentColor: string;
}


interface UserData {
    [index: string]: GameUserData
}

interface GameUserData {
    password?: number[];
    user: string;
    adminPassword?: number[];
}
interface GameUserDataDecrypted {
    password?: string;
    user: string;
    adminPassword?: string;
}