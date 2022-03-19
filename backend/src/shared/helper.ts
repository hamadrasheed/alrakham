
import * as typings from './common';

export class Helper  {

    /**
     *
     * @param keys
     * @param obj
     */
    protected deleteAttributes = <K, T>(keys: K[], obj: T): T => {

        if (!obj || !Object.keys(obj).length) {
            return null;
        }

        if (keys.length) {
            for (const key of keys) {
                // tslint:disable-next-line: no-dynamic-delete
                delete obj[String(key)];
            }
            return obj;
        }

        // tslint:disable-next-line: no-dynamic-delete
        delete obj[String(keys)];
    }

    /**
     *
     * @param arr
     */
    protected filterNonEmpty = <T>(arr: T[]): T[] => arr.filter((value: T): boolean => JSON.stringify(value) !== '[]');

    /**
     *
     * @param arr
     */
    protected filterNonNull = <T>(arr: T[]): T[] => arr.filter((e: T): boolean => e !== null && e !== undefined);

    /**
     *
     * @param data
     */
    protected filterUnique = <T>(data: T[]): T[] => data.filter((v: T, i: number, a: T[]): boolean => a.indexOf(v) === i);

    /**
     *
     * @param data
     * @param field
     */
    protected groupByType = <T, Y>(data: T[], field: string): Y[] => data.reduce((acc: Y[], c: T): typings.ANY => {
            const type: string = c[`${field}`];
            acc[type] ? acc[type].push(c) : (acc[type] = [c]);
            return acc;
        },                                                                       {})

    /**
     *
     * @param array
     * @param page_size
     * @param page_number
     */
    protected paginate = <T, Y>(array: T[], page_size: number, page_number: number): T[] => array.slice((page_number - 1) * page_size, page_number * page_size);

    /**
     *
     * @param data
     */
    protected shallowCopy = <T>(data: T): T => JSON.parse(JSON.stringify(data));

    /**
     *
     * @param items
     * @param attribute
     */
    protected sort = <T, Y>(items: T[], attribute: Y): T[] => items.sort((a: T, b: T): number =>  a[`${String(attribute)}`] - b[`${String(attribute)}`]);

}
