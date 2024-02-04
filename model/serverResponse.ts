/**
 * Lethean Server
 * Lethean dAppServer
 *
 * The version of the OpenAPI document: 3.1.1
 * Contact: hello@lt.hn
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface ServerResponse { 
    status: ServerResponse.StatusEnum;
    data: string;
    signature?: string;
}
export namespace ServerResponse {
    export type StatusEnum = 200 | 404;
    export const StatusEnum = {
        NUMBER_200: 200 as StatusEnum,
        NUMBER_404: 404 as StatusEnum
    };
}


