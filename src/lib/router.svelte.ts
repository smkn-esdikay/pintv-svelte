
let currentRoute = $state(window.location.hash.slice(1) || 'home');

// Listen for hash changes
window.addEventListener('hashchange', () => {
  currentRoute = window.location.hash.slice(1) || 'home';
});

// Programmatic navigation
export function navigate(route: string) {
  window.location.hash = route;
}

// Get current route (reactive)
export function getCurrentRoute() {
  return currentRoute;
}

// Route matching helper
export function isRoute(route: string) {
  return currentRoute === route;
}