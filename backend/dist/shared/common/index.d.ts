export declare type ANY = any;
export interface Filter {
    [key: string]: ANY;
}
export interface Where {
    [key: string]: ANY;
}
export interface Options {
    [key: string]: ANY;
}
export interface Paginate {
    page?: number;
    paginate?: number;
}
interface FileOptionI {
    contentType: ANY;
    filename: ANY;
    mimeType: ANY;
}
interface FileDataI {
    mimeType: ANY;
    options: FileOptionI;
    value: ANY;
}
export interface FileDataReqI {
    chiropractor_signature?: FileDataI;
    file?: FileDataI;
    patient_sign?: FileDataI;
}
interface AuthorizationI {
    Authorization: string;
}
export interface GenericQueryParamsI {
    [key: string]: number | string | null | undefined;
}
export interface GenericHeadersI {
    [key: string]: ANY;
    headers?: AuthorizationI;
    params?: GenericQueryParamsI;
}
export declare type GenericReqObjI = ANY;
export interface UserTimingsI {
    created_at?: Date;
    created_by?: number;
    day_id?: number;
    deleted_at?: Date;
    end_time?: Date;
    end_time_isb?: Date;
    facility_location_id?: number;
    id?: number;
    start_time?: Date;
    start_time_isb?: Date;
    time_zone?: number;
    time_zone_string?: string;
    updated_at?: Date;
    updated_by?: number;
    user_id?: number;
}
export interface DocSpecialitiesI {
    comments?: string;
    created_at?: Date;
    created_by?: number;
    default_name?: string;
    deleted_at?: Date;
    description?: string;
    has_app?: number;
    id?: number;
    is_available?: number;
    is_create_appointment?: number;
    is_defualt?: number;
    name?: string;
    over_booking?: number;
    speciality_key?: string;
    time_slot?: number;
    updated_at?: Date;
    updated_by?: number;
}
export interface GeneralResponseDataI<I> {
    data: unknown[] | I;
    total?: number;
}
export interface GeneralApiResponseI<I> {
    message: string;
    result: GeneralResponseDataI<I>;
    status: boolean;
}
export interface UserInfoFromTokenI {
    email: string;
    name: string;
    employee_id: number;
    iat: number;
    exp: number;
}
export {};
