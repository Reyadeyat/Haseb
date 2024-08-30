/*
 * Copyright (C) 2023-2024 Reyadeyat
 * All Rights Reserved.
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * https://reyadeyat.net/LICENSE/REYADEYAT.LICENSE
 * 
 * This License permits the use, modification, and distribution of the code
 * under the terms specified in the License document.
 */

export class JsonUtil {
    static toJSON(object: any, ignore_list: any[]): any;
    static cloneNoDOM(instance: any, ignore_dom_class_list: string[]): any;
    static clone(instance: any, ignore_all_cyclic: boolean, ignore_property_list: string[], ignore_dom_class_list: string[]): any;
    static cloneArray(list: any[], ignore_all_cyclic: boolean, ignore_property_list: string[], ignore_dom_class_list: string[]): any[];
    static cloneObject(object: any, ignore_all_cyclic: boolean, ignore_property_list: string[], ignore_dom_class_list: string[], stack: any[]): any;
    static objectShallowMerge(source: any, desitnation: any): any;
    static isInstanceOf(object: any, class_name: string): boolean;
    static isObject(value: any): boolean;
    static isArray(value: any): boolean;
    static isPrimitive(value: any): boolean;
    static isString(value: any): boolean;
    static isNumber(value: any): boolean;
    static isBoolean(value: any): boolean;
    static isNull(value: any): boolean;
}
