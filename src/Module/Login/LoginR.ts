import { UserI } from '@a-a-game-studio/aa-core/lib/Infrastructure/SQL/Entity/UserE';

/** Модуль логина/авторизации */
export namespace LoginR {
  export namespace init {
    export const route = '/aa/login/init';
    export const action = 'init';
    export interface RequestI {}
    export interface ResponseI {
      is_login: boolean;
      one_user_info: UserI; // пользователь
      id_user: number;
    }
  }

  // =======================================================
  /** Залогиниться */
  export namespace login {
    export const route = '/aa/login/login';
    export const action = 'login';
    export interface RequestI {
      login: string; // Псевдоним пользователя
      pswd: string; // Пароль
    }
    export interface ResponseI {
      is_login: boolean; // Статус авторизирован пользователь или нет
      one_user: UserI; // пользователь
      token: string; // Токен
    }
  }

  // =======================================================
  /** Зарегистрироваться */
  export namespace register {
    export const route = '/aa/login/register';
    export const action = 'register';
    export interface RequestI {
      login: string; // Псевдоним пользователя
      name?: string; // Имя пользователя не обызательный параметр
      email: string; // email
      pswd: string; // Пароль
      secretKey: string; // Секретный ключ для регистрации
    }
    export interface ResponseI {
      token: string; // Токен
    }
  }
}
