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

import { Natej } from './natej.js';
import { DataTableProcessor } from '../processor/data-table-processor.js';

export class Hesab {
    constructor(hesab_json: any);
    hesab_json: any;
    start_hesab(): Natej;
    natej: Natej;
    generateDataTableProcessor(): Natej;
    data_table_processor: DataTableProcessor;
    natej_data: {
        sort_by: any[];
        group_by: any[];
        groups: any[] | import("../index.js").Group[];
        aggregates: any[];
        table_record_set: any;
        table_record_set_filtered: any[] | {};
        table_record_element_column_list: any;
        table_record_element_columns_names_list: any;
    };
    toString(): string;
}