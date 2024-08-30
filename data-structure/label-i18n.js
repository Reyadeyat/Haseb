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

export class LabelI18n {
    
    constructor(label, text, icon) {
        this.label = label;
        this.text = text = null ? new text("", "") : text;
        this.icon = icon == null ? "" : icon;
    }

    static fromJSON(json) {
        return new LabelI18n(json.label, json.text, json.icon);
    }
}
