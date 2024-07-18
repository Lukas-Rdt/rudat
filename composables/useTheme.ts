export default function useTheme() {
  const enabled = ref<boolean | null>(null);

  if (process.client) {
    // Nur auf Client-Seite ausführen
    onMounted(() => {
      const storedTheme = localStorage.getItem("theme");
      enabled.value = storedTheme === "dark" ? true : false;
      setTheme(); // Setze das Theme basierend auf dem localStorage-Wert
    });
  }

  const toggleTheme = () => {
    enabled.value = !enabled.value;
    localStorage.setItem("theme", enabled.value ? "dark" : "light");
    setTheme();
  };

  function setTheme() {
    if (process.client) {
      const theme = localStorage.getItem("theme");
      if (
        theme === "dark" ||
        (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.setAttribute("data-theme", "dark");
        enabled.value = true;
      } else {
        document.documentElement.removeAttribute("data-theme");
        enabled.value = false;
      }
    }
  }

  return {
    enabled,
    toggleTheme,
    setTheme,
  };
}
