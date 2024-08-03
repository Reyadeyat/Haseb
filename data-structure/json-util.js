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

"use strict";

export class JsonUtil {

    static toJSON(object, ignore_list) {
        let new_object = {};
        Object.assign(new_object, object);
        if (ignore_list != null) {
            ignore_list.forEach(property => {
                delete new_object[property];
            });
        }
        return new_object;
    }

    static cloneNoDOM(instance, ignore_dom_class_list) {
        return JsonUtil.clone(instance, true, [], ignore_dom_class_list);
    }

    static clone(instance, ignore_all_cyclic, ignore_property_list, ignore_dom_class_list) {
        let stack = [];
        stack = [{ key: ".", instance: instance }];
        if (Array.isArray(instance)) {
            return JsonUtil.cloneArray(instance, ignore_all_cyclic, ignore_property_list, ignore_dom_class_list, stack);
        } else if (typeof instance == "object") {
            return JsonUtil.cloneObject(instance, ignore_all_cyclic, ignore_property_list, ignore_dom_class_list, stack);
        }
        return instance;
    }

    static cloneArray(list, ignore_all_cyclic, ignore_property_list, ignore_dom_class_list, stack) {
        let new_list = [];
        list.forEach(instance => {
            if (Array.isArray(instance)) {
                new_list.push(JsonUtil.cloneArray(instance, ignore_all_cyclic, ignore_property_list, ignore_dom_class_list, stack))
            } else if (typeof instance == "object") {
                new_list.push(JsonUtil.cloneObject(instance, ignore_all_cyclic, ignore_property_list, ignore_dom_class_list, stack))
            } else {
                new_list.push(instance);
            }
        });
        return new_list;
    }

    static cloneObject(object, ignore_all_cyclic, ignore_property_list, ignore_dom_class_list, stack) {
        let new_object = null;
        try {
            new_object = Object.create(object);
        } catch (er) {
            debugger;
            console.error(er);
        }
        for (const [key, instance] of Object.entries(object)) {
            if (ignore_property_list != null && ignore_property_list.find(element => element === key) != null) {
                continue;
            }
            if (ignore_dom_class_list != null && ignore_dom_class_list.find(className => object.constructor.prototype[Symbol.toStringTag] === className) != null) {
                continue;
            }
            if (Array.isArray(instance) || typeof instance == "object") {
                let element = stack.find(element => element.instance === instance);
                if (element != null) {
                    let path = "/";
                    stack.forEach(element => path += element.key + "/");
                    if (ignore_all_cyclic == false) {
                        throw new Error("Cycelic Redunduncy: " + path + key);
                    }
                    continue;
                }
            }
            if (Array.isArray(instance)) {
                //console.log("enkey: " + key);
                stack.push({ key: key, instance: instance });
                let new_value = JsonUtil.cloneArray(instance, ignore_all_cyclic, ignore_property_list, ignore_dom_class_list, stack);
                Object.defineProperty(new_object, key, {
                    value: new_value,
                    writable: true,
                    enumerable: true,
                    configurable: true
                    /*get() {
                        return new_value;
                    },
                    set(value) {
                        new_value = value;
                    }*/
                });
                let poped = stack.pop();
                //console.log("dekey: " + poped.key);
            } else {
                if (typeof instance == "object") {
                    //console.log("enkey: " + key);
                    stack.push({ key: key, instance: instance });
                    let new_value = instance == null ? null : JsonUtil.cloneObject(instance, ignore_all_cyclic, ignore_property_list, ignore_dom_class_list, stack);
                    Object.defineProperty(new_object, key, {
                        value: new_value,
                        writable: true,
                        enumerable: true,
                        configurable: true
                        /*get() {
                            return new_value;
                        },
                        set(value) {
                            new_value = value;
                        }*/
                    });
                    let poped = stack.pop();
                    //console.log("dekey: " + poped.key);
                } else {
                    //let new_instance = instance;
                    Object.defineProperty(new_object, key, {
                        value: instance,
                        writable: true,
                        enumerable: true,
                        configurable: true
                        /*get() {
                            return new_instance;
                        },
                        set(value) {
                            new_instance = value;
                        }*/
                    });
                }
            }
        }
        return new_object;
    }

    static objectShallowMerge(source, desitnation) {
        if (source instanceof Object == false) {
            throw new Error("objectShallowMerge source is not an Object");
        }
        if (desitnation instanceof Object == false) {
            throw new Error("objectShallowMerge desitnation is not an Object");
        }
        if (desitnation == null) {
            throw new Error("objectShallowMerge desitnation is null");
        }
        if (source == null) {
            return desitnation;
        }
        Object.entries(source).forEach(([key, value]) => {
            desitnation[key] = value;
        });
        return desitnation;
    }

    static isInstanceOf(object, class_name) {
        return object.constructor.prototype[Symbol.toStringTag] == class_name;
    }

    static isObject(value) {
        return typeof value === 'object' && !Array.isArray(value);
    }

    static isArray(value) {
        return Array.isArray(value);
    }

    static isPrimitive(value) {
        return !this.isObject(value) && !this.isArray(value);
    }

    static isString(value) {
        return typeof value === 'string';
    }

    static isNumber(value) {
        return typeof value === 'number' && !isNaN(value) && isFinite(value);
    }

    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    static isNull(value) {
        return value === null;
    }
}