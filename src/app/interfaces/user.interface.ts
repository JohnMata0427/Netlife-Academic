export interface User {
  id: string;
  identification: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  token: string | null;
  verificationCode: string | null;
  verified: boolean;
  recoveryPassword: boolean;
  points: number;
  courses: string[];
  certificates: string[];
  company: string | null;
  area: string | null;
  level: string | null;
  position: string | null;
  birthdate: Date | null;
  imageUrl: string;
  state: string | null;
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
