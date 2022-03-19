interface GenerateMsgI {
    [key: string]: number | string;
}
export declare const generateMessages: (code: string, validator?: boolean, type?: string) => GenerateMsgI;
export {};
