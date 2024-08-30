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

"use strict";

import { Log } from '../util/log.js';
import { Hesab } from './hesab.js';

export class Haseb {

    constructor(haseb_json) {
        Log.info("startup Haseb");
        this.hesab = new Hesab(haseb_json);
    }

    get_hesab() {
        return this.hesab;
    }

    ehseb() {
        return this.hesab.start_hesab();
    }

}
