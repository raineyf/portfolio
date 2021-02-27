module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            center: true,
            padding: "1rem",
        },
        colors: {
            blue: {
                dark: "#004B6B",
                DEFAULT: "#004B6B",
                light: "#5B9BB7",
            },
            white: "#fff",
        },
    },
    variants: {
        extend: {
            fontSize: ["hover"],
            borderColor: ["hover"],
        },
    },
    plugins: [],
};
