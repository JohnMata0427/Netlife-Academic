export interface User {
  id: string;
  identification: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  token?: string;
  verificationCode?: string;
  verified: boolean;
  recoveryPassword: boolean;
  points: number;
  courses: string[];
  certificates: string[];
  company?: string;
  area?: string;
  level?: string;
  position?: string;
  birthdate?: Date;
  imageUrl: string;
  state?: string;
  active: boolean;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  enabled: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  authorities: Authority[];
  username: string;
  accountNonLocked: boolean;
}

export interface Authority {
  authority: string;
}
