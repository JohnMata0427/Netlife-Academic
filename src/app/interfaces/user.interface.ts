export interface User {
    id:                    string | null;
    name:                  string | null;
    lastname:              string | null;
    email:                 string | null;
    password:              string | null;
    role:                  string | null;
    token:                 string | null;
    verificationCode:      string | null;
    verified:              boolean | null;
    recoveryPassword:      boolean | null;
    company:               string | null;
    area:                  string | null;
    level:                 string | null;
    position:              string | null;
    birthdate:             Date | null;
    image:                 File | null;
    imageUrl:              string | null;
    state:                 string | null;
    active:                boolean | null;
    deleted:               boolean | null;
    createdAt:             Date | null;
    updatedAt:             Date | null;
    enabled:               boolean | null;
    credentialsNonExpired: boolean | null;
    accountNonExpired:     boolean | null;
    authorities:           Authority[] | null;
    username:              string | null;
    accountNonLocked:      boolean | null;
}

export interface Authority {
    authority: string;
}
