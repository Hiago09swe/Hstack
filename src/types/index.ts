export type Role = "ADMIN" | "MANAGER" | "USER";

export type UserStatus = "ACTIVE" | "SUSPENDED" | "PENDING_DELETION";

export interface User {
  id: string;
  tenantId: string;
  name: string;
  email: string;
  role: Role;
  status: UserStatus;
  twoFactorEnabled: boolean;
  createdAt: string;
  deletedAt: string | null; // soft-delete
}

export type LicensePlan = "STARTER" | "GROWTH" | "ENTERPRISE";

export interface License {
  id: string;
  tenantId: string;
  plan: LicensePlan;
  maxUsers: number;
  activeUsers: number;
  expiresAt: string;
  autoRenew: boolean;
  status: "ACTIVE" | "EXPIRING" | "EXPIRED" | "OVERDUE";
}

export interface AuditLog {
  id: string;
  actorId: string;
  action: string;
  resource: string;
  ip: string;
  userAgent: string;
  createdAt: string;
}

export type LGPDRequestType = "EXPORT" | "SOFT_DELETE" | "HARD_DELETE" | "RECTIFICATION";

export interface LGPDRequest {
  id: string;
  userId: string;
  type: LGPDRequestType;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "REJECTED";
  requestedAt: string;
  completedAt: string | null;
}

export interface CookieConsent {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}
