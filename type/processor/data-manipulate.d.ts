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

import { StringI18n } from "../data-structure/string-i18n.js";

export class ComparisonOperator {
    operator: string;
    name: StringI18n;
    constructor(operator: string, name: StringI18n);
    static fromJSON(comparison_operator_json: any): ComparisonOperator;
    static fromJSONList(comparison_operator_json_list: any[]): ComparisonOperator[];
}

export class DataAttributeHeader {
    constructor(name: StringI18n, icon: string);
    name: StringI18n;
    icon: string;
    static fromJSON(data_attribute_header_json: any): DataAttributeHeader;
    static fromJSONList(data_attribute_header_json_list: any[]): DataAttributeHeader[];
}

export class DataField {
    constructor(label: string, type: DataType, name: StringI18n);
    label: string;
    type: DataType;
    name: StringI18n;
    class_name: string;
    composeValue(record: any, field_map: Map<string, number>): any;
    static fromJSON(data_field_json: any): DataField;
    static fromJSONList(data_field_json_list: any[]): DataField[];
}

export class CompositDataField extends DataField {
    constructor(label: string, type: DataType, name: StringI18n, composit_data_field_list: DataField[]);
    composit_data_field_list: DataField[];
    static fromJSON(composit_data_field_json: any): CompositDataField;
    static fromJSONList(composit_data_field_json_list: any[]): CompositDataField[];
}

export class DataType {
    constructor(type: string);
    type: string;
    html_type: string;
    value(value: any, lang: any): any;
    icon(value: any): any;
    equals(type: any): boolean;
    static fromJSON(data_type_json: any): DataType;
    static fromJSONList(data_type_json_list: any[]): DataType[];
}

export class DataAttribute {
    constructor(field: DataField, width_ratio: number, header: DataAttributeHeader, show_on_screen: any, show_on_mobile: any, selected_color: any, deselected_color: any, assets: any, style: any);
    field: DataField;
    width_ratio: number;
    header: DataAttributeHeader;
    show_on_screen: any;
    show_on_mobile: any;
    selected_color: any;
    deselected_color: any;
    assets: any;
    edit: boolean;
    style: any;
    class_name: string;
    key(): string;
    setIndexInRecord(index_in_record: number): void;
    getIndexInRecord(): number;
    setColumnIndexOnScreen(column_index_on_screen: number): void;
    getColumnIndexOnScreen(): number;
    static fromJSON(data_attribute_json: any): DataAttribute;
    static fromJSONList(data_attribute_json_list: any[]): DataAttribute[];
}

export class CompositDataAttribute extends DataAttribute {
    constructor(field: CompositDataField, width_ratio: number, header: DataAttributeHeader, show_on_screen: any, show_on_mobile: any, selected_color: any, deselected_color: any, assets: any, style: any, composit_data_field_list: DataField[]);
    composit_data_field_list: DataField[];
    static fromJSON(composit_data_attribute_json: any): CompositDataAttribute;
    static fromJSONList(composit_data_attribute_json: any[]): CompositDataAttribute[];
}

export class AttributeProcess {
    constructor(label: string, operation: string, aggregation: string);
    label: string;
    operation: string;
    aggregation: string;
}
export class Sort {
    constructor(attribute: any, asccending: any);
    attribute: any;
    asccending: any;
}
export class Aggregate {
    static minimum: number;
    static maximum: number;
    static summation: number;
    static average: number;
    static count: number;
    constructor(attribute: any);
    attribute: any;
    aggregation: number;
    minimum_value: any;
    maximum_value: any;
    summation_value: any;
    average_value: any;
    count_value: any;
    last_requested_aggregate: any;
    addAggregation(aggregation: any): void;
    init(value: any, lang: any): void;
    aggregate(value: any, lang: any): void;
    clone(): Aggregate;
    getMinimum(): any;
    getMaximum(): any;
    getSummation(): any;
    getAverage(): any;
    getCount(): any;
    getAggregate(): any;
    hasMinimum(): boolean;
    hasMaximum(): boolean;
    hasSummation(): boolean;
    hasAverage(): boolean;
    hasCount(): boolean;
    toJSON(): {
        attribute: any;
        minimum: any;
        maximum: any;
        summation: any;
        average: any;
        count: any;
    };
}
export class GroupPlacement {
    static header: number;
    static footer: number;
    constructor(group: any, placement: any);
    group: any;
    placement: any;
    isHeaderPlacement(): boolean;
    isFooterPlacement(): boolean;
}
export class Group {
    constructor(sort: any, aggregate_list: any, group_level: any, lang: any, spliced_list: any);
    className: string;
    key: any;
    value: any;
    group_level: any;
    sort_list: any;
    array_open_index: any;
    array_close_index: any;
    spliced_open_index: any;
    spliced_close_index: any;
    sub_group: any;
    sub_group_list: any;
    group_placement_list: any[];
    lang: any;
    isOpen: boolean;
    isHidden: boolean;
    hiddenRows: number;
    spliced_list: any;
    current: any;
    sort: any;
    aggregate_list: any[];
    openInfo(list: any, index: any): void;
    openSplice(list: any, spliced_list: any, index: any): number;
    breakInfo(list: any, index: any): boolean;
    breakSplice(list: any, spliced_list: any, index: any): boolean;
    closeInfo(index: any): void;
    closeSplice(spliced_list: any, index: any): void;
    toJSON(): {
        key: any;
        value: any;
        group_level: any;
        sort: any;
        array_open_index: any;
        array_close_index: any;
        spliced_open_index: any;
        spliced_close_index: any;
        sub_group_list: any;
        aggregate_list: any[];
    };
}
export class Manipulate {
    static sort(list: any, sort: any, lang: any): void;
    static group(list: any, spliced_list: any, group_by: any, sort_by: any, aggregate_list: any, lang: any, splice: any): Group[];
}
