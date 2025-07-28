export interface UserHeaderDto{
    username: string;
    role: string;
    email: string;
    name: string;
}

export interface ShowQuizzesDto {
    id: number;
    name: string;
    isFreeTrial: boolean;
}

export interface Subject {
    id: number;
    name: string;
}
export interface Grade {
    id: number;
    name: string;
}
export interface Chapter {
    id: number;
    name: string;
}
export interface Topic {
    id: number;
    name: string;
}