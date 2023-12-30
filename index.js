/*
 * Copyright (C) 2023 Reyadeyat
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

import { Log } from './log.js'
import { Hesab } from './hesab.js';
import { Natej } from './natej.js';

export class Haseb {

    constructor(haseb_json) {
        Log.info("startup Haseb");
        this.hesab = new Hesab(haseb_json);
        this.natej = new Natej(this.haseb);
    }

    get_hesab() {
        return this.hesab;
    }

    ehseb() {
        return this.natej;
    }

    toString() {
        return "Haseb:\n" + this.hesab.toString() + "\n" + this.natej.toString();
    }

}


module.HasebModule = {
    Haseb, Hesab, Natej
};