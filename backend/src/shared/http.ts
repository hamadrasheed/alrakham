// tslint:disable-next-line: match-default-export-name
import axios, { AxiosResponse } from 'axios';

import { GenericHeadersI, GenericReqObjI } from './common';

export class Http {

    public get = async (url: string, headers: GenericHeadersI): Promise<AxiosResponse> => {
        try {
            const response: AxiosResponse = await axios.get(url, headers);
            return response?.data;
        } catch (error) {
            throw { ...error?.response?.data, status: error?.response?.status };
        }
    }
  
    public post = async (url: string, data: GenericReqObjI, headers?: GenericHeadersI): Promise<AxiosResponse> => {
        try {
            const response: AxiosResponse = await axios.post(url, data, headers);
            return response.data;
        } catch (error) {
            throw { ...error?.response?.data, status: error?.response?.status };
        }
    }
  
    public put = async (url: string, data: GenericReqObjI, headers?: GenericHeadersI): Promise<AxiosResponse> => {
        try {
            const response: AxiosResponse = await axios.put(url, data, headers);
            return response.data;
        } catch (error) {
            throw { ...error?.response?.data, status: error?.response?.status };
        }
    }
  

}
