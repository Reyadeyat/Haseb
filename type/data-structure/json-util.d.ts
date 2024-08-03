/*
 * Copyright (C) 2023-2024 Reyadeyat
 *
 * Reyadeyat/Haseb is licensed under the
 * BSD 3-Clause "New" or "Revised" License
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://reyadeyat.net/LICENSE/HASEB.LICENSE
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
