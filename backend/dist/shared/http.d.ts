import { AxiosResponse } from 'axios';
import { GenericHeadersI, GenericReqObjI } from './common';
export declare class Http {
    get: (url: string, headers: GenericHeadersI) => Promise<AxiosResponse>;
    post: (url: string, data: GenericReqObjI, headers?: GenericHeadersI) => Promise<AxiosResponse>;
    put: (url: string, data: GenericReqObjI, headers?: GenericHeadersI) => Promise<AxiosResponse>;
}
