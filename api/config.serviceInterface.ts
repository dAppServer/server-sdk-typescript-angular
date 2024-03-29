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
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { ConfigFileLoadDTO } from '../model/models';
import { ConfigFileRenderAndLoadDTO } from '../model/models';
import { ConfigFileRenderDTO } from '../model/models';
import { ConfigFileRenderStringDTO } from '../model/models';
import { ConfigObjectClearDTO } from '../model/models';
import { ConfigObjectCountDTO } from '../model/models';
import { ConfigObjectGetDTO } from '../model/models';
import { ConfigObjectRemoveDTO } from '../model/models';
import { ConfigObjectSetDTO } from '../model/models';
import { INIObjectParseJSONDTO } from '../model/models';


import { serverSDKConfiguration }                                     from '../configuration';



export interface ConfigServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: serverSDKConfiguration;

    /**
     * 
     * 
     * @param configObjectClearDTO 
     */
    clearConfig(configObjectClearDTO: ConfigObjectClearDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param configObjectCountDTO 
     */
    countConfig(configObjectCountDTO: ConfigObjectCountDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param configObjectGetDTO 
     */
    getConfig(configObjectGetDTO: ConfigObjectGetDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param configFileLoadDTO 
     */
    load(configFileLoadDTO: ConfigFileLoadDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param iNIObjectParseJSONDTO 
     */
    parse(iNIObjectParseJSONDTO: INIObjectParseJSONDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param configObjectRemoveDTO 
     */
    removeConfig(configObjectRemoveDTO: ConfigObjectRemoveDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param configFileRenderDTO 
     */
    render(configFileRenderDTO: ConfigFileRenderDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param configFileRenderAndLoadDTO 
     */
    renderAndLoad(configFileRenderAndLoadDTO: ConfigFileRenderAndLoadDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param configFileRenderStringDTO 
     */
    renderString(configFileRenderStringDTO: ConfigFileRenderStringDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param configObjectSetDTO 
     */
    setConfig(configObjectSetDTO: ConfigObjectSetDTO, extraHttpRequestParams?: any): Observable<{}>;

}
