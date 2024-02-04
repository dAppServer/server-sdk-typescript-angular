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

import { HashDTO } from '../model/models';
import { OpenPGPCreateKeyPairDTO } from '../model/models';
import { OpenPGPDecryptBYIDDTO } from '../model/models';
import { OpenPGPEncryptBYIDDTO } from '../model/models';
import { OpenPGPGetPublicKeyDTO } from '../model/models';
import { OpenPGPSignBYIDDTO } from '../model/models';
import { OpenPGPVerifyBYIDDTO } from '../model/models';
import { QuasiSaltHashDTO } from '../model/models';
import { QuasiSaltHashVerifyDTO } from '../model/models';


import { serverSDKConfiguration }                                     from '../configuration';



export interface CryptographyServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: serverSDKConfiguration;

    /**
     * 
     * 
     * @param quasiSaltHashDTO 
     */
    createQuasiSalt(quasiSaltHashDTO: QuasiSaltHashDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param openPGPDecryptBYIDDTO 
     */
    decrypt(openPGPDecryptBYIDDTO: OpenPGPDecryptBYIDDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param openPGPEncryptBYIDDTO 
     */
    encrypt(openPGPEncryptBYIDDTO: OpenPGPEncryptBYIDDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param openPGPCreateKeyPairDTO 
     */
    generateKeyPair(openPGPCreateKeyPairDTO: OpenPGPCreateKeyPairDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param openPGPGetPublicKeyDTO 
     */
    getPublicKey(openPGPGetPublicKeyDTO: OpenPGPGetPublicKeyDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param hashDTO 
     */
    sha256(hashDTO: HashDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param hashDTO 
     */
    sha384(hashDTO: HashDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param hashDTO 
     */
    sha512(hashDTO: HashDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param openPGPSignBYIDDTO 
     */
    sign(openPGPSignBYIDDTO: OpenPGPSignBYIDDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param openPGPVerifyBYIDDTO 
     */
    verify(openPGPVerifyBYIDDTO: OpenPGPVerifyBYIDDTO, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
     * @param quasiSaltHashVerifyDTO 
     */
    verifyQuasiSalt(quasiSaltHashVerifyDTO: QuasiSaltHashVerifyDTO, extraHttpRequestParams?: any): Observable<{}>;

}