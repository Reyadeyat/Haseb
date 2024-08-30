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

import { Group } from "./data-manipulate.js";

export class TableColumn {
    constructor(name: any, type: any, width_ratio: any, show_on_mobile: any);
    name: any;
    type: any;
    width_ratio: any;
    show_on_mobile: any;
}
export class TableColumnDefinition {
    constructor(attribute: any);
    attribute: any;
    visible: boolean;
    sort: number;
    group: number;
    aggregate: boolean;
    search: boolean;
    visibility_color: string;
    sort_color: string;
    group_color: string;
    aggregate_color: string;
    search_color: string;
    hidden(is_screen: any): boolean;
}
export class DataTableProcessor {
    constructor(model_name: any, i18: any, lang: any, attribute_list: any, image_not_found: string);
    model_name: any;
    busy: boolean;
    i18: any;
    lang: any;
    attribute_list: any;
    data_initialized: boolean;
    tableInitialized: boolean;
    initTable(): void;
    search: any;
    search_value: string;
    filter_on: boolean;
    sort_by: any[];
    group_by: any[];
    groups: any[] | Group[];
    aggregates: any[];
    table_record_set: any;
    table_record_set_filtered: any[] | {};
    table_record_element_column_list: any;
    table_record_element_columns_names_list: any;
    initData(table_record_set: any): void;
    isInitialized(): boolean;
    hasData(): boolean;
    getImageNotFound(img_event: any, img: any): void;
    language(i18: any, lang: any): void;
    hasAggregates(): boolean;
    cellData(table_column_definition: any, rowIndex: any, element: any): any;
    cellDataIcon(table_column_definition: any, rowIndex: any, element: any, img: any): any;
    refreshData(): void;
    refreshTable(): void;
    isHidden(element: any): boolean;
    isIcon(element: any, table_column_definition: any): boolean;
    columnInit(table_column_definition: any): void;
    columnLang(attribute_table_column_definition: any): void;
    processAttributes(attribute_processes_list: any): void;
    processColumn(table_column_definition: any, operation: any, aggregation: any, user: any): void;
    propagator(option: any): void;
    getColumn(column_name: any): any;
    tableSearch(): void;
    tableReset(): void;
    tableFilterReset(): void;
    detailBandClick(rowIndex: any, row: any, table_column_definition: any): void;
    isDetailBand(index: any, row: any): boolean;
    isGroupHeader(table_column_definition: any): boolean;
    isGroupBand(rowIndex: any, group: any, table_column_definition: any): boolean;
    isGroupBandHeader(rowIndex: any, group: any, table_column_definition: any): boolean;
    isGroupBandHeaderOpen(rowIndex: any, group: any, table_column_definition: any): boolean;
    isGroupBandFooter(rowIndex: any, group: any, table_column_definition: any): boolean;
    groupBandClick(group: any): void;
    groupCellData(group: any): any;
    hasAggregate(): boolean;
    applyFilter(event: any): void;
}
