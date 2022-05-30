import BaseM from '@a-a-game-studio/aa-core/lib/System/BaseM';
import { LoginR as R } from './LoginR';
/**
 * Бизнес модель пользователя суда мы нас проксирует контроллер 1 url = 1 метод модели
 * Внутри метода делаем нужную бизнес логику
 */
export declare class LoginM extends BaseM {
    private userSQL;
    constructor(req: any);
    init(data: R.init.RequestI): Promise<R.init.ResponseI>;
    login(data: R.login.RequestI): Promise<R.login.ResponseI>;
    register(data: R.register.RequestI): Promise<R.register.ResponseI>;
}
