import { Interceptors } from './interceptors';
import { Message } from 'element-ui';   // 弹吐司
// import router from '../router';

export class HttpService {
    public axios: any;
    public modal: any;

    constructor() {
        // 获取axios实例
        this.axios = new Interceptors().getInterceptors();
    }

    /**
     * get请求
     * @param path  服务接口路径
     * @param params  参数
     * @param headers  请求头
     */
    public get(path: string, params: any, headers: any) {

        return new Promise((resolve, reject) => {
            return this.axios.get(path, {
                params: params,
                headers: headers
            }).then((res: any) => {
                resolve(res)
            }).catch((res: any) => {
                reject(res)
            })
        });
    }


    /**
     * post请求
     * @param params  参数
     * @param jwt   是否token校验
     * @param modulename    模块
     * @param operation     接口
     * @param flag          标记
     * @param verson       版本,默认1.0.0
     * @param service      服务,默认services
     */
    public post(params: any, jwt: boolean, modulename: string, operation: string,
        flag: string, verson = '1.0.0', service = 'services') {
        const url = service + '/' + verson + '/' + modulename + '/' + operation;
        const body = {
            data: params,
            tag: flag,
        };
        return new Promise((resolve, reject) => {
            return this.axios.post(url, body, {
                headers: { isJwt: jwt },
            }).then((res: any) => {
                resolve(res)
            }).catch((err: { message: any; }) => {
                reject(err.message);
            });
        });

    }


    /**
     *
     * @param res
     * @param resolve
     */
    public resultHandle(res: any, resolve: { (value: unknown): void; (value: unknown): void; (arg0: any): void; }) {
        if (res.status > 0) {
            resolve(res.data);
        } else {
            this.errorHandle(res);
        }
    }


    /**
     * 服务端状态处理,例如中断性异常,退出异常等等(与拦截器http握手状态注意区分,一般都能分清楚吧)
     * @param res
     */
    public errorHandle(res: any) {
        Message.error(res.msg);  // 统一谈服务端提示,我们提示统一由服务端提供
        // 状态码判断
        switch (res.status) {
            case -102:
                break;
            case -152:
                break;
            default:
                console.log("");
        }
    }

}