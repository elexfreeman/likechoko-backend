import { UserI } from '@a-a-game-studio/aa-core/lib/Infrastructure/SQL/Entity/UserE';
/** Модуль логина/авторизации */
export declare namespace LoginR {
    namespace init {
        const route = "/aa/login/init";
        const action = "init";
        interface RequestI {
        }
        interface ResponseI {
            is_login: boolean;
            one_user_info: UserI;
            id_user: number;
        }
    }
    /** Залогиниться */
    namespace login {
        const route = "/aa/login/login";
        const action = "login";
        interface RequestI {
            login: string;
            pswd: string;
        }
        interface ResponseI {
            is_login: boolean;
            one_user: UserI;
            token: string;
        }
    }
    /** Зарегистрироваться */
    namespace register {
        const route = "/aa/login/register";
        const action = "register";
        interface RequestI {
            login: string;
            name?: string;
            email: string;
            pswd: string;
            secretKey: string;
        }
        interface ResponseI {
            token: string;
        }
    }
}
