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
import { Natej } from './natej.js';
import { DataTableProcessor } from '../processor/data-table-processor.js';

export class Hesab {

    constructor(hesab_json) {
        this.hesab_json = hesab_json;
        Log.info("startup Hesab - hesab_json =>\n"+hesab_json);
    }

    start_hesab() {
        return this.generateDataTableProcessor();
    }

    generateDataTableProcessor() {
        //<data-analyst [data_attributes]="car_sales_data_attributes" [attributes_process]="car_sales_attributes_process" 
        //[attributes_i18]="car_sales_data_attributes_i18" [model_name]="'Finance Sales Table'" [model_view]="'both'"
        //[model_view_size]="[600, 600]" [model_toolbar]="true" [model_type]="'ColumnChart'" 
        //[data_cache_name]="'master_table'" [data_cache_key]="'car_sales_data'"></data-analyst></span>
        let model_name = "Finance Sales Table";
        let attribute_list = this.hesab_json.attribute_list;
        let image_not_found = this.hesab_json.image_not_found;
        let attribute_process_list = this.hesab_json.attribute_process_list;
        let record_set = this.hesab_json.record_set;
        let lang = this.hesab_json.lang;
        let i18 = this.hesab_json.i18;
        //debugger;
        this.data_table_processor = new DataTableProcessor(model_name, i18, lang, attribute_list, image_not_found);
        this.data_table_processor.initData(record_set);
        this.data_table_processor.processAttributes(attribute_process_list);
        this.data_table_processor.propagator("group");
        this.natej_data = {
            data_table_processor: this.data_table_processor,
            sort_by: this.data_table_processor.sort_by,
            group_by: this.data_table_processor.group_by,
            groups: this.data_table_processor.groups,
            aggregates: this.data_table_processor.aggregates,
            table_record_set: this.data_table_processor.table_record_set,
            table_record_set_filtered: this.data_table_processor.table_record_set_filtered,
            table_record_element_column_list: this.data_table_processor.table_record_element_column_list,
            table_record_element_columns_names_list: this.data_table_processor.table_record_element_columns_names_list,
        };
        //debugger;
        this.natej = new Natej(this.natej_data);
        return this.natej;
    }

    toString() {
        return 'Hesab of => ' + this.hesab_json;
    }


}
