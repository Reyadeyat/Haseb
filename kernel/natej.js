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

export class Natej {

    constructor(hesab) {
        this.hesab = hesab;
        Log.info("startup Natej");
    }

    natija() {
        this.hesab.natija;
    }

    toString() {
        return 'Natej is => {Natej}';
    }
}
