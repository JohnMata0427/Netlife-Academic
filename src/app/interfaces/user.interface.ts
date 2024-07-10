export interface User {
    id:                    string;
    name:                  string;
    lastname:              string;
    email:                 string;
    password:              string;
    role:                  string;
    token:                 string;
    verificationCode:      string;
    verified:              boolean;
    recoveryPassword:      boolean;
    company:               string;
    area:                  string;
    position:              string;
    birthdate:             Date;
    image:                 string;
    active:                boolean;
    deleted:               boolean;
    createdAt:             Date;
    updatedAt:             Date;
    enabled:               boolean;
    credentialsNonExpired: boolean;
    accountNonExpired:     boolean;
    authorities:           Authority[];
    username:              string;
    accountNonLocked:      boolean;
}

export interface Authority {
    authority: string;
}
