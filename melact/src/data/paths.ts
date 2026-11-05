export const withBase = (route: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${route.replace(/^\//, "")}`;
