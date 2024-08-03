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