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

import { JsonUtil } from "../data-structure/json-util.js";
import { Manipulate, Aggregate, GroupPlacement, Sort, Group, DataAttribute, AttributeProcess } from "./data-manipulate.js";


export class TableColumn {
  name;
  type;
  width_ratio;
  show_on_mobile;
  constructor(name, type, width_ratio, show_on_mobile) {
    this.name = name;
    this.type = type;
    this.width_ratio = width_ratio;
    this.show_on_mobile = show_on_mobile
  }
}

export class TableColumnDefinition {
  
  constructor(attribute) {
    this.attribute = attribute;
    this.visible = true;
    this.order;
    this.sort = 0;
    this.group = 0;
    this.aggregate = false;
    this.search = false;
    /*this.visibility_icon;
    this.sort_icon;
    this.group_icon;
    this.aggregate_icon;
    this.search_icon;
    this.visibility_text;
    this.sort_text;
    this.group_text;
    this.aggregate_text;
    this.search_text;
    this.search_value;*/
    this.visibility_color = "#ffffff";
    this.sort_color = "#ffffff";
    this.group_color = "#ffffff";
    this.aggregate_color = "#ffffff";
    this.search_color = "#ffffff";
  }
  hidden(is_screen) {
    if (is_screen == true) {
      return !this.attribute.show_on_screen;
    }
    return !this.attribute.show_on_mobile;
  }
}

export class DataTableProcessor {

  constructor(model_name, i18, lang, attribute_list, image_not_found) {
    this.model_name = model_name;
    this.busy = true;
    this.i18 = i18;
    this.lang = lang;
    this.attribute_list = attribute_list;
    this.image_not_found = image_not_found;
    this.data_initialized = false;
    this.tableInitialized = false;
    this.initTable();
    this.busy = false;
  }

  initTable() {
    this.busy = true;
    this.search = false;
    this.search_value = "";
    this.filter_on = false;
    this.sort_by = [];
    this.group_by = [];
    this.groups = [];
    this.aggregate_list = [];
    this.table_record_set = [];
    this.table_record_set_filtered = [];
    this.table_record_element_column_list = [];
    this.table_record_element_columns_names_list = [];
    this.table_record_element_column_list = this.attribute_list.map(attribute => new TableColumnDefinition(attribute));
    this.table_record_element_columns_names_list = this.table_record_element_column_list.map(column => column.attribute.field.name);
    for (let i = 0; i < this.table_record_element_column_list.length; i++) {
      this.columnInit(this.table_record_element_column_list[i]);
      this.columnLang(this.table_record_element_column_list[i]);
    }
    this.tableInitialized = true;
    this.busy = false;
  }

  initData(table_record_set) {
    if (table_record_set == null) {
      throw new Error("Table Data is null");
    }
    this.attribute_list.forEach(attribute => {
      if (attribute.field.type.isPrimitive() == false) {
        table_record_set.forEach(record => {
          if (typeof record[attribute.key()] === 'string') {
            try {
              record[attribute.key()] = JSON.parse(record[attribute.key()]);
            } catch(Error) {
              console.log("DataProcessor Staging record["+attribute.key()+"] type '"+attribute.field.type.type+"' neither object nor string!");
            }
          }
        });
      }
    })
    this.table_record_set = table_record_set;
    this.table_record_set_filtered = [];
    //let t1 = performance.now();
    this.table_record_set_filtered = JsonUtil.clone(this.table_record_set);
    //let t2 = performance.now();
    //////console.log("Clone time initData => " + (t2-t1) + " ms");
    //this.table_record_set_filtered = <any[]>JSON.parse(JSON.stringify(this.table_record_set));
    //this.table_record_set_filtered, this.table_record_set);
    this.data_initialized = true;
    this.refreshData();
  }

  isInitialized() {
    return /*this.data_initialized &&*/ this.tableInitialized;
  }

  hasData() {
    return this.table_record_set.length > 0;
  }

  getImageNotFound(img_event, img) {
    if (this.image_not_found == null) {
      throw new Error("image_not_found is null");
    }
    img_event.target.src = this.image_not_found.startsWith("data:image/") == true ? this.image_not_found : img + this.image_not_found;
  }

  language(i18, lang) {
    this.busy = true;
    this.i18 = i18;
    this.lang = lang;
    for (let i = 0; i < this.table_record_element_column_list.length; i++) {
      this.columnLang(this.table_record_element_column_list[i]);
    }    
    this.refreshTable();
    this.busy = false;
  }

  hasAggregates() {
    return this.aggregate_list.length > 0;
  }

  cellData(table_column_definition, rowIndex, element) {
    ///debugger;
    //console.log("rowIndex => " + rowIndex + " dataIndex => " + dataIndex);
    if (table_column_definition.visible == false) {
      return '';
    }
    if (element instanceof GroupPlacement == false) {
      if (table_column_definition.attribute.field.type.type == "icon") {
        if (table_column_definition.attribute.field.name.icon_runtime == null) {
          let icon_asset = element[table_column_definition.attribute.field.name].icon;
          element[table_column_definition.attribute.field.name].icon_runtime = table_column_definition.attribute.field.assets.image_map[icon_asset];
        }
        return element[table_column_definition.attribute.field.name];
      }
      return table_column_definition.attribute.field.type.value(element[table_column_definition.attribute.key()], this.lang);
    }
    let group_placement = element;
    let key_data_attribute = group_placement.group.key;
    if (key_data_attribute.field.label === table_column_definition.attribute.label) {
      if (table_column_definition.attribute.field.type.type == "icon") {
        //return key_data_attribute.type.icon(group_placement.group.value);
        return group_placement.group.value;
      }
      if (group_placement.isHeaderPlacement() == true) {
        return key_data_attribute.field.type.value(group_placement.group.value, this.lang);// + "-H";
      }
      return key_data_attribute.field.type.value(group_placement.group.value, this.lang);// + "-F";
    }
    let aggregate_element = group_placement.group.aggregate_list.find(col => col.attribute.field.label === table_column_definition.attribute.field.label);
    if (aggregate_element != null) {
      return aggregate_element.getAggregate();
    }
    return '-';
  }

  cellDataIcon(table_column_definition, rowIndex, element, img) {
    let data_icon = this.cellData(table_column_definition, rowIndex, element);
    return data_icon['icon_runtime'];
  }

  refreshData() {
  }

  refreshTable() {
  }

  isHidden(element) {
    return element['_ɵ_hidden_ɵ_'];
  }

  isIcon(element, table_column_definition) {
    if (table_column_definition.attribute.field.type.type !== "icon") {
      return false;
    }
    if (element instanceof GroupPlacement == false) {
      return true;
    }
    let group_placement = element;
    let key_data_attribute = group_placement.group.key;
    if (key_data_attribute.field.label === table_column_definition.attribute.label) {
      let group_sort_element = this.group_by.find(group => group.attribute.field.label === table_column_definition.attribute.field.label);
      if (group_sort_element != null) {
        return true;
      }
      let aggregate_element = group_placement.group.aggregate_list.find(col => col.attribute.field.label === table_column_definition.attribute.field.label);
      if (aggregate_element != null) {
        return true;
      }
    }
    return false;
  }

  columnInit(table_column_definition) {
    this.search = false;
    this.filter_on = false;
    table_column_definition.visible = true;
    table_column_definition.visibility_icon = "visibility_off";
    table_column_definition.visibility_color = table_column_definition.attribute.deselected_color;
    table_column_definition.sort = 0;
    table_column_definition.sort_icon = "sort";
    table_column_definition.sort_color = table_column_definition.attribute.deselected_color;
    table_column_definition.group = 0;
    table_column_definition.group_icon = "unfold_more";
    table_column_definition.group_color = table_column_definition.attribute.deselected_color;
    table_column_definition.aggregate = false;
    table_column_definition.aggregate_icon = "calculate";
    table_column_definition.aggregate_color = table_column_definition.attribute.deselected_color;
    table_column_definition.search = false;
    table_column_definition.search_icon = "search_off";
    table_column_definition.search_value = "";
    table_column_definition.search_color = table_column_definition.attribute.deselected_color;
  }

  columnLang(attribute_table_column_definition) {
    attribute_table_column_definition.visibility_text = attribute_table_column_definition.visible == true ? this.i18["visibility_off"] : this.i18["visibility_on"];
    attribute_table_column_definition.sort_text = this.i18["sort_asc"];
    attribute_table_column_definition.group_text = this.i18["group_on"];
    attribute_table_column_definition.aggregate_text = this.i18["aggregate_on"];
    attribute_table_column_definition.search_text = this.i18["search"];
  }

  processAttributes(attribute_process_list) {
    if (attribute_process_list == null) {
      throw new Error("ProcessColumns null value!");
    }
    attribute_process_list.forEach(attribute_process => {
      let table_column_definition = this.table_record_element_column_list.find(column => column.attribute.field.label === attribute_process.label);
      if (table_column_definition == null) {
        throw new Error("processColumns Undefined Column Process '"+JSON.stringify(attribute_process)+"'");
      }
      this.processColumn(table_column_definition, attribute_process.operation, attribute_process.aggregation, false);
    },this);
  }

  processColumn(table_column_definition, operation, aggregation, user) {
    //console.log("option => '"+option+"' - table_column_definition => " + this.objout(table_column_definition));
    this.filter_on = true;
    if (operation === 'visibility') {
      table_column_definition.visible = !table_column_definition.visible;
      table_column_definition.visibility_icon = table_column_definition.visible == true ? "visibility_off" : "visibility";
      table_column_definition.visibility_text = table_column_definition.visible == true ? this.i18["visibility_off"] : this.i18["visibility_on"];
      table_column_definition.visibility_color = table_column_definition.visible == true ? table_column_definition.attribute.deselected_color : table_column_definition.attribute.selected_color;
    } else if (operation === 'sort') {
      /*if (this.group_by.length > 0) {
        this.tableFilterReset();
      }*/
      table_column_definition.sort_color = table_column_definition.attribute.selected_color;
      if (table_column_definition.sort == 0) {
        table_column_definition.sort = 1;
      } else {
        table_column_definition.sort = table_column_definition.sort * -1;
      }
      let sort_element = this.sort_by.find(col => col.attribute.field.label === table_column_definition.attribute.field.label);
      if (sort_element != null) {
        sort_element.asccending = table_column_definition.sort == 1 ? true : false;
      } else {
        this.sort_by.push(new Sort(table_column_definition.attribute, table_column_definition.sort == 1 ? true : false));
      }
      if (user == true) {
        let list = [];//JSON.parse(JSON.stringify(this.table_record_set));
        //Object.assign(list, this.table_record_set);
        //let t1 = performance.now();
        list = JsonUtil.clone(this.table_record_set);
        //let t2 = performance.now();
        ////console.log("Clone time sort => " + (t2-t1) + " ms");
        Manipulate.sort(list, this.sort_by, this.lang);
        this.table_record_set_filtered = list;
      }
      if (table_column_definition.sort == 1) {
        table_column_definition.sort_icon = "north";
        table_column_definition.sort_text = this.i18["sort_asc"];
      } else if (table_column_definition.sort == -1) {
        table_column_definition.sort_icon = "south";
        table_column_definition.sort_text = this.i18["sort_desc"];
      } else {
        table_column_definition.sort_icon = "sort";
      }
    } else if (operation === 'group') {
      /*if (this.sort_by.length > 0) {
        this.tableFilterReset();
      }*/
      table_column_definition.group_color = table_column_definition.attribute.selected_color;
      table_column_definition.group = table_column_definition.group == 0 ? 1 : 0;
      let sort_element = this.sort_by.find(col => col.attribute.field.label === table_column_definition.attribute.field.label);
      let group_sort_lement = this.group_by.find(col => col.attribute.field.label === table_column_definition.attribute.field.label);
      if (sort_element != null && group_sort_lement == null) {
        this.group_by.push(sort_element);
      /*} else if (group_sort_lement != null) {
        let index: number = this.group_by.findIndex(col => col.attribute.field.label === table_column_definition.attribute.field.label);
        this.group_by.splice(index, 1);*/
      } else if (sort_element == null && group_sort_lement == null) {
        sort_element = new Sort(table_column_definition.attribute, table_column_definition.sort == 0 || table_column_definition.sort == 1 ? true : false);
        this.sort_by.push(sort_element);
        this.group_by.push(sort_element);
      }
      if (user == true) {
        let list = [];//JSON.parse(JSON.stringify(this.table_record_set));
        //Object.assign(list, this.table_record_set);
        //let t1 = performance.now();
        list = JsonUtil.clone(this.table_record_set);
        //let t2 = performance.now();
        /////console.log("Clone time group => " + (t2-t1) + " ms");
        let spliced_list = [];
        let group_list = Manipulate.group(list, spliced_list, this.group_by, this.sort_by, this.aggregate_list, this.lang, true);
        /////console.log("group_list => " + JSON.stringify(group_list, null, 4));
        this.table_record_set_filtered = spliced_list;
      }
      if (table_column_definition.group == 0) {
        table_column_definition.group_icon = "unfold_more";
        table_column_definition.group_text = this.i18["group_on"];
      } if (table_column_definition.group == 1) {
        table_column_definition.group_icon = "unfold_less";
        table_column_definition.group_text = this.i18["group_off"];
      }
    } else if (operation === 'aggregate') {
      table_column_definition.aggregate_color = table_column_definition.attribute.selected_color;
      if (table_column_definition.aggregate == true) {
        table_column_definition.aggregate_icon = "calculate";
        table_column_definition.aggregate_text = this.i18["aggregate_on"];
      } else {
        table_column_definition.aggregate_icon = "calculate";
        table_column_definition.aggregate_text = this.i18["aggregate_off"];
      }
      let aggregate_element = this.aggregate_list.find(col => col.attribute.field.label === table_column_definition.attribute.field.label);
      if (aggregate_element == null) {
        aggregate_element = new Aggregate(table_column_definition.attribute);
        this.aggregate_list.push(aggregate_element);
      }
      if (aggregation == "minimum") {
        aggregate_element.addAggregation(Aggregate.minimum);
      } else if (aggregation == "maximum") {
        aggregate_element.addAggregation(Aggregate.maximum);
      } else if (aggregation == "sumation") {
        aggregate_element.addAggregation(Aggregate.summation);
      } else if (aggregation == "average") {
        aggregate_element.addAggregation(Aggregate.average);
      } else if (aggregation == "count") {
        aggregate_element.addAggregation(Aggregate.count);
      }
      if (user == true) {
        let list = [];//JSON.parse(JSON.stringify(this.table_record_set));
        //Object.assign(list, this.table_record_set);
        //let t1 = performance.now();
        list = JsonUtil.clone(this.table_record_set);
        //let t2 = performance.now();
        ////console.log("Clone time aggregate => " + (t2-t1) + " ms");
        let spliced_list = [];
        this.groups = Manipulate.group(list, spliced_list, this.group_by, this.sort_by, this.aggregate_list, this.lang, true);
        ////console.log("groups => " + JSON.stringify(this.groups, null, 4));
        this.table_record_set_filtered = spliced_list;
      }
    } else if (operation === 'search') {
      table_column_definition.search_color = table_column_definition.attribute.selected_color;
      table_column_definition.search = !table_column_definition.search;
      if (table_column_definition.search == true) {
        table_column_definition.search_icon = "search";
        table_column_definition.search_text = this.i18["search_on"];
      } if (table_column_definition.search == false) {
        table_column_definition.search_icon = "search_off";
        table_column_definition.search_text = this.i18["search_off"];
      }
    } else if (operation === 'move_next') {
      let index = this.table_record_element_column_list.findIndex(column => column.attribute.field.label === table_column_definition.attribute.field.label);
      if (index == -1 || index == this.table_record_element_column_list.length-1) {
        return;
      }
      this.table_record_element_column_list[index] = this.table_record_element_column_list[index+1];
      this.table_record_element_column_list[index+1] = table_column_definition;
      this.table_record_element_columns_names_list[index] = this.table_record_element_columns_names_list[index+1];
      this.table_record_element_columns_names_list[index+1] = table_column_definition.attribute.field.name;
    } else if (operation === 'move_previous') {
      let index = this.table_record_element_column_list.findIndex(column => column.attribute.field.label === table_column_definition.attribute.field.label);
      if (index == -1 || index == 0) {
        return;
      }
      this.table_record_element_column_list[index] = this.table_record_element_column_list[index-1];
      this.table_record_element_column_list[index-1] = table_column_definition;
      this.table_record_element_columns_names_list[index] = this.table_record_element_columns_names_list[index-1];
      this.table_record_element_columns_names_list[index-1] = table_column_definition.attribute.field.name;
    }
    if (user == true) {
      this.refreshData();
    }
    this.busy = false;
  }

  propagator(option) {
    let list = [];//JSON.parse(JSON.stringify(this.table_record_set));
    //Object.assign(list, this.table_record_set);
    //let t1 = performance.now();
    list = JsonUtil.clone(this.table_record_set);
    //let t2 = performance.now();
    /////console.log("Clone time propagator => " + (t2-t1) + " ms");
    let spliced_list = [];
    if (option === 'sort') {
      if (this.sort_by == null || this.sort_by.length ==0) {
        throw new Error("Sort By list is null for table '"+this.model_name+"'");
      }
        Manipulate.sort(list, this.sort_by, this.lang);
    } else if (option === 'group' || option === 'aggregate') {
      if (this.group_by == null || this.group_by.length == 0) {
        throw new Error("Group By list is null for table '"+this.model_name+"'");
      }
      if (this.sort_by == null || this.sort_by.length ==0) {
        throw new Error("Sort By list is null for table '"+this.model_name+"'");
      }
      if (this.aggregate_list == null || this.aggregate_list.length == 0) {
        throw new Error("Aggregates list is null for table '"+this.model_name+"'");
      }
      this.groups = Manipulate.group(list, spliced_list, this.group_by, this.sort_by, this.aggregate_list, this.lang, true);
    } else {
      throw new Error("Table Processor propagator passed undefined option '"+option+"'");
    }
    /////console.log("table propagator action => " + JSON.stringify(spliced_list, null, 4));
    this.table_record_set_filtered = spliced_list;
  }

  getColumn(column_label) {
    return this.table_record_element_column_list.find(column => column.attribute.field.label === column_label);
  }
  
  tableSearch() {
    this.busy = true;
    this.search = !this.search;
    this.search_value = "";
    this.busy = false;
  }

  /*columnFilter(keyboard_event, table_column_definition) {
    this.busy = true;
    //search_value
    //code
    //key => letter
    //keyCode
    //location
    //metaKey
    //repeat
    //shiftKey
    //type
    /////console.log(table_column_definition.search_value);
    this.busy = false;
  }*/

  tableReset() {
    this.busy = true;
    this.search = false;
    this.search_value = "";
    this.filter_on = false;
    this.sort_by = [];
    this.group_by = [];
    this.aggregate_list = [];
    this.table_record_set_filtered = [];//JSON.parse(JSON.stringify(this.table_record_set));
    //Object.assign(this.table_record_set_filtered, this.table_record_set);
    //let t1 = performance.now();
    this.table_record_set_filtered = JsonUtil.clone(this.table_record_set);
    //let t2 = performance.now();
    /////console.log("Clone time tableReset => " + (t2-t1) + " ms");
    for (let i = 0; i < this.table_record_element_column_list.length; i++) {
      this.columnInit(this.table_record_element_column_list[i]);
      this.columnLang(this.table_record_element_column_list[i]);
    }
    this.busy = false;
  }

  tableFilterReset() {
    this.tableReset();
    this.refreshData();
    this.refreshTable();
    ////console.log(" tableFilterReset X");
  }

  detailBandClick(rowIndex, row, table_column_definition) {
    if (table_column_definition == null) {
      return;
    }
    /*console.log("index Clicked => " + rowIndex);
    //console.log("DetailBand Clicked => " + JSON.stringify(row, null, 4));
    if ('group_level' in row == false) {
      return;
    }
    
    row['isOpen'] = !row['isOpen'];
    //console.log("GroupBand Clicked => isOpen["+row.isOpen+"] \n" + JSON.stringify(row, null, 4));
    for (let i = row['spliced_open_index']+1; i < row['spliced_close_index']; i++) {
      this.table_record_set_filtered[i]['_ɵ_hidden_ɵ_'] = !row['isOpen'];
      //console.log("Hide chassis '"+this.table_record_set_filtered[i]['chassis']+"' hidden '"+this.table_record_set_filtered[i]['_ɵ_hidden_ɵ_']+"'");
    }
    this.refresh();*/
    if (table_column_definition != null) {
      if (row instanceof GroupPlacement) {
        let group_placement = row;
        group_placement.group.isOpen = !group_placement.group.isOpen;
        //console.log("GroupBand Clicked => isOpen["+group_placement.group.isOpen+"] \n" + JSON.stringify(group_placement, null, 4));
        for (let i = group_placement.group.spliced_open_index+1; i < group_placement.group.spliced_close_index; i++) {
          this.table_record_set_filtered[i]['_ɵ_hidden_ɵ_'] = !group_placement.group.isOpen;
        }
        this.refreshData();
      }
    }
  }

  isDetailBand(index, row) {
    //console.log("isDetailBand => index ["+index+"] => hidden ["+row.hidden+"] " + JSON.stringify(row, null, 4));
    return 'group_level' in row == false;
  }

  isGroupHeader(table_column_definition) {
    return this.group_by != null && this.group_by.find(sort => sort.attribute.field.label === table_column_definition.attribute.field.label) != null;
  }

  isGroupBand(rowIndex, group, table_column_definition) {
    
    return 'group_level' in group == true;
  }

  isGroupBandHeader(rowIndex, group, table_column_definition) {
    //console.log("isGroupBand => index ["+index+"]["+('group_level' in group == true)+"] => " + JSON.stringify(group, null, 4));
    /*let dataIndex: number = rowIndex;
    if (table_column_definition != null) {
      let key: TableColumn = group['key'];
      return 'group_level' in group == true && group['spliced_open_index'] == dataIndex && key.name === table_column_definition.attribute.field.label;
    }
    return 'group_level' in group == true && group['spliced_open_index'] == dataIndex;*/
    if (table_column_definition != null) {
      if (group instanceof GroupPlacement) {
        let group_placement = group;
        let key_data_attribute = group_placement.group.key;
        return key_data_attribute.label === table_column_definition.attribute.label && group_placement.isHeaderPlacement() == true;
      }
      return false;
    }
    return false;
  }

  isGroupBandHeaderOpen(rowIndex, group, table_column_definition) {
    //console.log("isGroupBand => index ["+index+"]["+('group_level' in group == true)+"] => " + JSON.stringify(group, null, 4));
    /*let dataIndex: number = rowIndex;
    if (table_column_definition != null) {
      dataIndex = this.tableRecordElementDataSource.paginator == null ? -1 : this.tableRecordElementDataSource.paginator.pageIndex == 0 ? rowIndex : rowIndex + (this.tableRecordElementDataSource.paginator.pageIndex * this.tableRecordElementDataSource.paginator.pageSize);
    }
    return 'group_level' in group == true && group['spliced_open_index'] == dataIndex && group['isOpen'] == true;*/
    if (table_column_definition != null) {
      if (group instanceof GroupPlacement) {
        let group_placement = group;
        let key_data_attribute = group_placement.group.key;
        return key_data_attribute.field.label === table_column_definition.attribute.field.label && group_placement.isHeaderPlacement() == true && group_placement.group.isOpen == true;
      }
      return false;
    }
    return false;
  }

  isGroupBandFooter(rowIndex, group, table_column_definition) {
    //console.log("isGroupBand => index ["+index+"]["+('group_level' in group == true)+"] => " + JSON.stringify(group, null, 4));
    /*let dataIndex: number = rowIndex;
    if (table_column_definition != null) {
      dataIndex = this.tableRecordElementDataSource.paginator == null ? -1 : this.tableRecordElementDataSource.paginator.pageIndex == 0 ? rowIndex : rowIndex + (this.tableRecordElementDataSource.paginator.pageIndex * this.tableRecordElementDataSource.paginator.pageSize);
    }
    if ('group_level' in group == true && group['spliced_close_index'] == dataIndex) {
      return true;
    }
    return false;*/
    if (table_column_definition != null) {
      if (group instanceof GroupPlacement) {
        let group_placement = group;
        let key_data_attribute = group_placement.group.key;
        return key_data_attribute.field.label === table_column_definition.attribute.field.label && group_placement.isFooterPlacement() == true;
      }
      return false;
    }
    return false;
  }

  groupBandClick(group) {
    group.isOpen = !group.isOpen;
    //console.log("GroupBand Clicked => isOpen["+group.isOpen+"] \n" + JSON.stringify(group, null, 4));
    for (let i = group.spliced_open_index+1; i <= group.spliced_close_index; i++) {
      this.table_record_set_filtered[i]['_ɵ_hidden_ɵ_'] = !group.isOpen;
      //console.log("Hide chassis '"+this.table_record_set_filtered[i]['chassis']+"' hidden '"+this.table_record_set_filtered[i]['_ɵ_hidden_ɵ_']+"'");
    }
    this.refreshData();
  }

  groupCellData(group) {
    let key_data_attribute = group.key;
    return key_data_attribute.field.type.value(group.value, this.lang);
  }

  hasAggregate() {
    return this.aggregate_list.length > 0;
  }

  applyFilter(event) {

  }
}
