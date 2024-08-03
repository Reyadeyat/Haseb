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

"use strict";

import { StringI18n} from "../data-structure/string-i18n.js";

export class ComparisonOperator {
  constructor(operator, name) {
    this.operator = operator;
    this.name = name;
  }
  
  static fromJSON(comparison_operator_json) {
    return new ComparisonOperator(comparison_operator_json.operator, StringI18n.fromJSON(comparison_operator_json.name));
  }

  static fromJSONList(comparison_operator_json_list) {
    let comparison_operator_list = [];
    comparison_operator_json_list.forEach(comparison_operator_json => comparison_operator_list.push(ComparisonOperator.fromJSON(comparison_operator_json)));
    return comparison_operator_list;
  }
}

export class DataAttributeHeader {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
  }

  static fromJSON(data_attribute_header_json) {
    return new DataAttributeHeader(StringI18n.fromJSON(data_attribute_header_json.name), data_attribute_header_json.icon);
  }

  static fromJSONList(data_attribute_header_json_list) {
    let data_attribute_header_list = [];
    data_attribute_header_json_list.forEach(data_attribute_header_json => data_attribute_header_list.push(DataAttributeHeader.fromJSON(data_attribute_header_json)));
    return data_attribute_header_list;
  }
}

export class DataField {
  constructor(label, type, name) {
    this.label = label;
    this.type = type;
    this.name = name;
    this.class_name = "DataField";
  }

  static fromJSON(data_field_json) {
    return new DataField(data_field_json.label, new DataType(data_field_json.type.type), data_field_json.name);
  }

  static fromJSONList(data_field_json_list) {
    let data_field_list = [];
    data_field_json_list.forEach(data_field_json => {
      if (data_field_json.class_name == "CompositDataField") {
        data_field_list.push(CompositDataField.fromJSON(data_field_json));
      } else {
        data_field_list.push(DataField.fromJSON(data_field_json));
      }
    });
    return data_field_list;
  }

}

export class CompositDataField extends DataField {
  constructor(label, type, name, composit_data_field_list) {
    super(label, type, name);
    this.composit_data_field_list = composit_data_field_list;
    this.class_name = "CompositDataField";
  }

  composeValue(record, field_map) {
    let composit = {};
    this.composit_data_field_list.forEach(data_field => {
      let label = data_field.label.split('_').pop();
      Object.defineProperty(composit, label, {
        value: record[field_map.get(data_field.label)],
        writable: true,
        enumerable: true,
        configurable: true
      });
    });
    return composit;
  }

  static fromJSON(composit_data_field_json) {
    return new CompositDataField(composit_data_field_json.label, new DataType(composit_data_field_json.type.type), composit_data_field_json.name, composit_data_field_json.composit_data_field_list);
  }

  static fromJSONList(composit_data_field_json_list) {
    let composit_data_field_list = [];
    composit_data_field_json_list.forEach(composit_data_field_json => composit_data_field_list.push(CompositDataField.fromJSON(composit_data_field_json)));
    return composit_data_field_list;
  }

}

export class DataType {

  constructor(type) {
    if (type !== "boolean"
      && type !== "string"
      && type !== "string18"
      && type !== "icon"
      && type !== "label"
      && type !== "number"
      && type !== "date"
      && type !== "time"
      && type !== "timestamp"
      && type !== "timestamp_with_timezone"
      && type !== "time_with_timezone"
      && type !== "composit"
    ) {
      throw new Error("Undefined DataType '" + type + "'");
    }
    this.type = type;
    this.html_type = this.type === "string" || this.type === "string18" || this.type === "composit" ? "text" : this.type == "timestamp" || this.type == "timestamp_with_timezone" || this.type == "time_with_timezone" ? "time" : this.type;
  }

  isLabel() {
    return this.type == "label";
  }

  isPrimitive() {
    return this.type != "string18" && this.type != "icon";
  }

  value(object, key) {
    if (this.type === "string18"
      || this.type === "icon") {
      return object[key];
    }
    return object;
  }
  
  icon(value) {
    if (this.type === "icon") {
      return value["icon"]["icon_file_url"];
    }
    throw new Error("DataType is not icon => '" + this.type + "'");
  }

  equals(type) {
    return this.type === type;
  }

  static fromJSON(data_type_json) {
    return new DataType(data_type_json.type);
  }

  static fromJSONList(data_type_json_list) {
    let data_type_list = [];
    data_type_json_list.forEach(data_type_json => data_type_list.push(DataType.fromJSON(data_type_json)));
    return data_type_list;
  }
}

export class DataAttribute {

  constructor(field, width_ratio, header, show_on_screen, show_on_mobile, selected_color, deselected_color, assets, style) {
    this.field = field;
    this.width_ratio = width_ratio;
    this.header = header;
    this.show_on_screen = show_on_screen;
    this.show_on_mobile = show_on_mobile;
    this.selected_color = selected_color
    this.deselected_color = deselected_color;
    this.assets = assets;
    this.edit = false;
    this.style = style;
    this.class_name = "DataAttribute";
  }

  key() {
    return this.field.label;
  }

  setIndexInRecord(index_in_record) {
    this.index_in_record = index_in_record;
  }

  getIndexInRecord() {
    return this.index_in_record;
  }

  setColumnIndexOnScreen(column_index_on_screen) {
    this.column_index_on_screen = column_index_on_screen;
  }

  getColumnIndexOnScreen() {
    return this.column_index_on_screen;
  }

  static fromJSON(data_attribute) {
    return new DataAttribute(DataField.fromJSON(data_attribute.field), data_attribute.width_ratio, DataAttributeHeader.fromJSON(data_attribute.header), data_attribute.show_on_screen, data_attribute.show_on_mobile, data_attribute.selected_color, data_attribute.deselected_color, data_attribute.assets, data_attribute.style);
  }

  static fromJSONList(data_attribute_json_list) {
    let data_attribute_list = [];
    data_attribute_json_list.forEach(data_attribute_json => {
      if (data_attribute_json.class_name == "CompositDataAttribute") {
        data_attribute_list.push(CompositDataAttribute.fromJSON(data_attribute_json));
      } else {
        data_attribute_list.push(DataAttribute.fromJSON(data_attribute_json));
      }
    });
    return data_attribute_list;
  }

}

export class CompositDataAttribute extends DataAttribute {

  constructor(field, width_ratio, header, show_on_screen, show_on_mobile, selected_color, deselected_color, assets, style, composit_data_field_list) {
    super(field, width_ratio, header, show_on_screen, show_on_mobile, selected_color, deselected_color, assets, style);
    this.composit_data_field_list = composit_data_field_list;
    this.class_name = "CompositDataAttribute";
  }

  static fromJSON(composit_data_data_attribute) {
    return new CompositDataAttribute(CompositDataField.fromJSON(composit_data_data_attribute.field), composit_data_data_attribute.width_ratio, DataAttributeHeader.fromJSON(composit_data_data_attribute.header), composit_data_data_attribute.show_on_screen, composit_data_data_attribute.show_on_mobile, composit_data_data_attribute.selected_color, composit_data_data_attribute.deselected_color, composit_data_data_attribute.assets, composit_data_data_attribute.style, composit_data_data_attribute.composit_data_field_list);
  }

  static fromJSONList(composit_data_attribute_json_list) {
    let composit_data_attribute_list = [];
    composit_data_attribute_json_list.forEach(composit_data_attribute_json => composit_data_attribute_list.push(CompositDataAttribute.fromJSON(composit_data_attribute_json)));
    return composit_data_attribute_list;
  }

}

export class AttributeProcess {
  label;
  operation;
  aggregation;
  constructor(label, operation, aggregation) {
    this.label = label;
    this.operation = operation;
    this.aggregation = aggregation;
  }
}

export class Sort {
  attribute;
  asccending;
  constructor(attribute, asccending) {
    this.attribute = attribute;
    this.asccending = asccending;
  }
}

export class Aggregate {
  attribute;
  static minimum = 0x2;
  static maximum = 0x4;
  static summation = 0x8;
  static average = 0x10;
  static count = 0x20;
  aggregation;
  minimum_value;
  maximum_value;
  summation_value;
  average_value;
  count_value;
  last_requested_aggregate;
  constructor(attribute) {
    this.attribute = attribute;
    this.minimum_value = null;
    this.maximum_value = null;
    this.summation_value = null;
    this.average_value = null;
    this.count_value = null;
    this.aggregation = 0;
  }
  addAggregation(aggregation) {
    this.aggregation = this.aggregation | aggregation;
    if ((this.aggregation & Aggregate.average) == Aggregate.average) {
      this.aggregation = this.aggregation | Aggregate.summation;
      this.aggregation = this.aggregation | Aggregate.count;
    }
    this.last_requested_aggregate = aggregation;
  }
  init(value, lang) {
    if (this.aggregation & Aggregate.minimum) {
      this.minimum_value = value;
    }
    if (this.aggregation & Aggregate.maximum) {
      this.maximum_value = value;
    }
    if (this.attribute.field.type.type === "number") {
      if (this.aggregation & Aggregate.average) {
        this.summation_value = 0;
        this.count_value = 0;
        this.average_value = null;
      } else {
        if (this.aggregation & Aggregate.summation) {
          this.summation_value = 0;
        }
        if (this.aggregation & Aggregate.count) {
          this.count_value = 0;
        }
      }
    }
  }
  aggregate(value, lang) {
    if (this.attribute.field.type.type === "boolean") {
      if (this.aggregation & Aggregate.minimum) {
        this.minimum_value = this.minimum_value < value ? this.minimum_value : value;
      }
      if (this.aggregation & Aggregate.maximum) {
        this.maximum_value = this.maximum_value < value ? this.maximum_value : value;
      }
      if (this.aggregation & Aggregate.count) {
        this.count_value++;
      }
    } else if (this.attribute.field.type.type === "string") {
      if (this.aggregation & Aggregate.minimum) {
        this.minimum_value = this.minimum_value < value ? this.minimum_value : value;
      }
      if (this.aggregation & Aggregate.maximum) {
        this.maximum_value = this.maximum_value < value ? this.maximum_value : value;
      }
      if (this.aggregation & Aggregate.count) {
        this.count_value++;
      }
    } else if (this.attribute.field.type.type === "string18") {
      if (this.aggregation & Aggregate.minimum) {
        this.minimum_value = this.minimum_value < value[lang] ? this.minimum_value : value[lang];
      }
      if (this.aggregation & Aggregate.maximum) {
        this.maximum_value = this.maximum_value < value[lang] ? this.maximum_value : value[lang];
      }
      if (this.aggregation & Aggregate.count) {
        this.count_value++;
      }
    } else if (this.attribute.field.type.type === "number") {
      if (this.aggregation & Aggregate.minimum) {
        this.minimum_value = Math.min(value, this.minimum_value);
      }
      if (this.aggregation & Aggregate.maximum) {
        this.maximum_value = Math.max(value, this.maximum_value);
      }
      if (this.aggregation & Aggregate.average) {
        this.summation_value += value;
        this.count_value++;
        this.average_value = this.summation_value / this.count_value;
      } else {
        if (this.aggregation & Aggregate.summation) {
          this.summation_value += value;
        }
        if (this.aggregation & Aggregate.count) {
          this.count_value++;
        }
      }
    } else if (this.attribute.field.type.type === "date") {
      if (this.aggregation & Aggregate.minimum) {
        this.minimum_value = this.minimum_value < value ? this.minimum_value : value;
      }
      if (this.aggregation & Aggregate.maximum) {
        this.maximum_value = this.maximum_value < value ? this.maximum_value : value;
      }
      if (this.aggregation & Aggregate.count) {
        this.count_value++;
      }
    }
  }
  clone() {
    let clone = new Aggregate(this.attribute);
    clone.aggregation = this.aggregation;
    clone.last_requested_aggregate = this.last_requested_aggregate;
    return clone;
  }
  getMinimum() {
    if ((this.aggregation & Aggregate.minimum) == Aggregate.minimum) {
      return this.minimum_value;
    }
    return null;
  }
  getMaximum() {
    if ((this.aggregation & Aggregate.maximum) == Aggregate.maximum) {
      return this.maximum_value;
    }
    return null;
  }
  getSummation() {
    if ((this.aggregation & Aggregate.summation) == Aggregate.summation) {
      return this.summation_value;
    }
    return null;
  }
  getAverage() {
    if ((this.aggregation & Aggregate.average) == Aggregate.average) {
      return this.average_value;
    }
    return null;
  }
  getCount() {
    if ((this.aggregation & Aggregate.count) == Aggregate.count) {
      return this.count_value;
    }
    return null;
  }
  getAggregate() {
    if (this.last_requested_aggregate == Aggregate.minimum) {
      return this.minimum_value;
    } else if (this.last_requested_aggregate == Aggregate.maximum) {
      return this.maximum_value;
    } else if (this.last_requested_aggregate == Aggregate.summation) {
      return this.summation_value;
    } else if (this.last_requested_aggregate == Aggregate.average) {
      return this.average_value;
    } else if (this.last_requested_aggregate == Aggregate.count) {
      return this.count_value;
    }
    return null;
  }
  hasMinimum() {
    return (this.aggregation & Aggregate.minimum) == Aggregate.minimum;
  }
  hasMaximum() {
    return (this.aggregation & Aggregate.maximum) == Aggregate.maximum;
  }
  hasSummation() {
    return (this.aggregation & Aggregate.summation) == Aggregate.summation;
  }
  hasAverage() {
    return (this.aggregation & Aggregate.average) == Aggregate.average;
  }
  hasCount() {
    return (this.aggregation & Aggregate.count) == Aggregate.count;
  }
  toJSON() {
    return {
      attribute: this.attribute,
      minimum: this.minimum_value,
      maximum: this.maximum_value,
      summation: this.summation_value,
      average: this.average_value,
      count: this.count_value
    }
  }
}
export class GroupPlacement {
  static header = 0x2;
  static footer = 0x4;
  group;
  placement;
  constructor(group, placement) {
    this.group = group;
    this.placement = placement;
  }
  isHeaderPlacement() {
    return (this.placement & GroupPlacement.header) == GroupPlacement.header;
  }
  isFooterPlacement() {
    return (this.placement & GroupPlacement.footer) == GroupPlacement.footer;
  }
}
export class Group {
  className = "Group";
  key;
  value;
  group_level;
  sort_list;
  aggregate_list;
  list_open_index;
  list_close_index;
  spliced_open_index;
  spliced_close_index;
  sub_group;
  sub_group_list;
  group_placement_list;
  lang;
  isOpen;
  isHidden;
  hiddenRows;
  spliced_list;
  current;
  constructor(sort, aggregate_list, group_level, lang, spliced_list) {
    this.sort = sort;
    this.group_level = group_level;
    try {
      this.key = this.sort[this.group_level].attribute;
    } catch (err) {
      console.log("this.sort => " + this.sort);
      console.log("this.group_level => " + this.group_level);
      console.log("this.sort[this.group_level].attribute => " + this.sort[this.group_level].attribute);
      console.error(err);
    }
    this.lang = lang;
    this.spliced_list = spliced_list;
    this.isOpen = true;
    this.isHidden = false;
    this.hiddenRows = 0;
    this.group_placement_list = [];
    this.aggregate_list = [];
    aggregate_list.forEach((aggregate) => {
      this.aggregate_list.push(aggregate.clone());
    });
  }
  openInfo(list, index) {
    this.list_open_index = index;
    let tuple = list[this.list_open_index];
    let thisis = this;
    this.aggregate_list.forEach(aggregate => {
      aggregate.init(tuple[aggregate.attribute.key()], thisis.lang);
      aggregate.aggregate(tuple[aggregate.attribute.key()], thisis.lang);
    });
    this.value = tuple[this.sort[this.group_level].attribute.key()];
    this.current = this.sort[this.group_level].attribute.field.type.value(tuple[this.sort[this.group_level].attribute.key()], this.lang);
    if (this.group_level + 1 < this.sort.length) {
      this.sub_group_list = [];
      this.sub_group = new Group(this.sort, this.aggregate_list, this.group_level + 1, this.lang, this.spliced_list);
      this.sub_group.openInfo(list, this.list_open_index);
    }
  }
  openSplice(list, spliced_list, index) {
    this.list_open_index = index;
    let tuple = list[this.list_open_index];
    let thisis = this;
    this.aggregate_list.forEach(aggregate => {
      aggregate.init(tuple[aggregate.attribute.key()], thisis.lang);
      aggregate.aggregate(tuple[aggregate.attribute.key()], thisis.lang);
    });
    this.value = tuple[this.sort[this.group_level].attribute.key()];
    this.current = this.sort[this.group_level].attribute.field.type.value(tuple[this.sort[this.group_level].attribute.key()], this.lang);
    this.spliced_open_index = spliced_list.length;
    let groupPlacement = new GroupPlacement(this, GroupPlacement.header);
    spliced_list.push(groupPlacement);
    if (this.group_level + 1 < this.sort.length) {
      this.sub_group_list = [];
      this.sub_group = new Group(this.sort, this.aggregate_list, this.group_level + 1, this.lang, this.spliced_list);
      this.sub_group.openSplice(list, spliced_list, this.list_open_index);
    }
    return 1;
  }
  breakInfo(list, index) {
    let tuple = list[index];
    let value = this.sort[this.group_level].attribute.field.type.value(tuple[this.sort[this.group_level].attribute.key()], this.lang);
    if (this.current !== value) {
      this.closeInfo(index - 1);
      this.current = value;
      this.sub_group = new Group(this.sort, this.aggregate_list, this.group_level, this.lang, this.spliced_list);
      return true;
    } else {
      if (this.sub_group_list != null && this.sub_group.breakInfo(list, index) == true) {
        this.sub_group_list.push(this.sub_group);
        this.sub_group = new Group(this.sort, this.aggregate_list, this.group_level + 1, this.lang, this.spliced_list);
        this.sub_group.openInfo(list, index);
      }
      let thisis = this;
      this.aggregate_list.forEach(aggregate => {
        aggregate.aggregate(tuple[aggregate.attribute.key()], thisis.lang);
      });
    }
    return false;
  }
  breakSplice(list, spliced_list, index) {
    let tuple = list[index];
    tuple['hidden'] = false;
    let value = this.sort[this.group_level].attribute.field.type.value(tuple[this.sort[this.group_level].attribute.key()], this.lang);
    if (this.current !== value) {
      this.closeSplice(spliced_list, index - 1);
      this.current = value;
      this.sub_group = new Group(this.sort, this.aggregate_list, this.group_level, this.lang, this.spliced_list);
      return true;
    } else {
      if (this.sub_group_list != null && this.sub_group.breakSplice(list, spliced_list, index) == true) {
        this.sub_group_list.push(this.sub_group);
        this.sub_group = new Group(this.sort, this.aggregate_list, this.group_level + 1, this.lang, this.spliced_list);
        this.sub_group.openSplice(list, spliced_list, index);
      }
      let thisis = this;
      this.aggregate_list.forEach(aggregate => {
        aggregate.aggregate(tuple[aggregate.attribute.key()], thisis.lang);
      });
    }

    return false;
  }
  closeInfo(index) {
    this.list_close_index = index;
    if (this.sub_group_list != null) {
      this.sub_group.closeInfo(index);
      this.sub_group_list.push(this.sub_group);
    }
  }
  closeSplice(spliced_list, index) {
    this.list_close_index = index;
    if (this.sub_group_list != null) {
      this.sub_group.closeSplice(spliced_list, index);
      this.sub_group_list.push(this.sub_group);
    }
    this.spliced_close_index = spliced_list.length;
    this.hiddenRows = this.spliced_close_index - this.spliced_open_index;
    let groupPlacement = new GroupPlacement(this, GroupPlacement.footer);
    spliced_list.push(groupPlacement);
  }
  toJSON() {
    return {
      key: this.key.name,
      value: this.key.type.value(this.value, this.lang),
      group_level: this.group_level,
      sort: this.sort,
      list_open_index: this.list_open_index,
      list_close_index: this.list_close_index,
      spliced_open_index: this.spliced_open_index,
      spliced_close_index: this.spliced_close_index,
      sub_group_list: this.sub_group_list,
      aggregate_list: this.aggregate_list
    };
  }
}

export class Manipulate {

  static sort(list, sort, lang) {
    list.sort((a, b) => {
      let result = 0;
      for (let i = 0; i < sort.length; i++) {
        let value_a = sort[i].attribute.field.type.value(a[sort[i].attribute.key()], lang);
        let value_b = sort[i].attribute.field.type.value(b[sort[i].attribute.key()], lang);
        if (value_a === value_b) {
          result = 0;
        } else if (value_a > value_b) {
          result = sort[i].asccending == true ? 1 : -1;
          break;
        } else if (value_a < value_b) {
          result = sort[i].asccending == true ? -1 : 1;
          break;
        }
      }
      return result;
    });
  }

  static group(list, spliced_list, group_by, sort_by, aggregate_list, lang, splice) {
    Manipulate.sort(list, sort_by, lang);
    let group_list = [];
    if (splice == false) {
      let group = new Group(group_by, aggregate_list, 0, lang, splice);
      group.openInfo(list, 0);
      for (let i = 1; i < list.length; i++) {
        if (group.breakInfo(list, i) == true) {
          group_list.push(group);
          group = new Group(group_by, aggregate_list, 0, lang, splice);
          group.openInfo(list, i);
        }
      }
      group.closeInfo(list.length - 1);
      group_list.push(group);
    } else {
      let group = new Group(group_by, aggregate_list, 0, lang, splice);
      group.openSplice(list, spliced_list, 0);
      spliced_list.push(list[0]);
      for (let i = 1; i < list.length; i++) {
        if (group.breakSplice(list, spliced_list, i) == true) {
          group_list.push(group);
          group = new Group(group_by, aggregate_list, 0, lang, splice);
          group.openSplice(list, spliced_list, i);
        }
        spliced_list.push(list[i]);
      }
      group.closeSplice(spliced_list, list.length - 1);
      group_list.push(group);
    }
    return group_list;
  }
  
}
