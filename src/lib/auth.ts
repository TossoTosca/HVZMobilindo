const AUTH_STORAGE_KEY = "hvz_admin_auth";

export interface AdminSession {
  email: string;
  name: string;
  loggedInAt: string;
}

export function saveAdminSession(session: AdminSession) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
}

export function getAdminSession(): AdminSession | null {
  const rawSession = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!rawSession) {
    return null;
  }

  try {
    return JSON.parse(rawSession) as AdminSession;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function isAdminAuthenticated() {
  return Boolean(getAdminSession());
}

export function logoutAdmin() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}