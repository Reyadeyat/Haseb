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

import { AttributeProcess, DataAttribute } from "./processor/data-manipulate.js";

export class Asset {
    static dataset_1 = {
        "lang": "en",
        "i18": {
            "ar": {
                "firstPageLabel": "بداية",
                "itemsPerPageLabel": "تعداد",
                "lastPageLabel": "نهاية",
                "nextPageLabel": "تالى",
                "previousPageLabel": "سابق",

                "done": "تم",
                "finish": "إتمام",
                "exit": "خروج",
                "reload": "تحديث",
                "previous": "السابق",
                "_previous": ">>",
                "next": "التالى",
                "_next": "<<",
                "save": "شراء",
                "delete": "حذف",
                "reset": "تهيئة",
                "close": "إغلاق",
                "end": "إنهاء",
                "only": "فقط",
                "cancel": "إلغاء",
                "apply": "إختيار",

                "AM": "ص",
                "PM": "م",

                "AM_short": "ص",
                "PM_short": "م",

                "AM_full": "صباحا",
                "PM_full": "مساء",

                "friday": "الجمعة",
                "saturday": "السبت",
                "sunday": "الأحد",
                "monday": "الإثنين",
                "tuesday": "الثلاثاء",
                "wednesday": "الأريعاء",
                "thursday": "الخميس",

                "am": "ص",
                "pm": "م",

                "january": "يناير",
                "february": "فبراير",
                "march": "مارس",
                "april": "ابريل",
                "may": "مايو",
                "june": "يونيو",
                "july": "يوليو",
                "august": "أغسطس",
                "september": "سبتمبر",
                "october": "اكتوبر",
                "november": "نوفمبر",
                "december": "ديسمبر",

                "jan": "يناير",
                "feb": "فبراير",
                "mar": "مارس",
                "apr": "ابريل",

                "jun": "يونيو",
                "jul": "يوليو",
                "aug": "أغسطس",
                "sep": "سبتمبر",
                "oct": "اكتوبر",
                "nov": "نوفمبر",
                "dec": "ديسمبر",

                "visibility_off": "إخفاء",
                "visibility_on": "إظهار",
                "sort_asc": "ترتيب تصاعدى",
                "sort_desc": "ترتيب تنازلى",
                "group_on": "دمج",
                "group_off": "إفراد",
                "aggregate_text": "تجميع",
                "search": "بحث",
                "search_on": "إبدأ البحث",
                "search_off": "إلغاء البحث",
                "move_right": "نقل لليمين",
                "move_left": "نقل لليسار",
                "aggregate_minimum": "الأصغر",
                "aggregate_maximum": "الأكبر",
                "aggregate_summation": "المجموع",
                "aggregate_average": "المتوسط",
                "aggregate_count": "العدد",
                "aggregate_on": "إبدأ التجميع",
                "aggregate_off": "إلغاء التجميع",
                "data_charts": "رسومات بيانية",
                "bar_chart": "رسومات بياني أعمدة",
                "pie_chart": "رسومات بياني دائرة",
                "line_chart": "رسومات بياني خطى",
                "no_table_data": "لاتوجد بيانات",
                "no_table_aggregate_data": "لاتوجد تجميعات تم إختيارها بعد!",
            },
            "en": {
                "firstPageLabel": "First",
                "itemsPerPageLabel": "Count",
                "lastPageLabel": "Last",
                "nextPageLabel": "Next",
                "previousPageLabel": "Previous",

                "done": "Done",
                "finish": "Finish",
                "exit": "Exit",
                "reload": "Reload",
                "previous": "Previous",
                "_previous": "<<",
                "next": "Next",
                "_next": ">>",
                "save": "Save",
                "delete": "Delete",
                "reset": "Reset",
                "close": "Close",
                "end": "End",
                "only": "Only",
                "cancel": "Cancel",
                "apply": "Apply",

                "AM": "AM",
                "PM": "PM",

                "AM_short": "AM",
                "PM_short": "PM",

                "AM_full": "Morning",
                "PM_full": "Evening",

                "friday": "Friday",
                "saturday": "Saturday",
                "sunday": "Sunday",
                "monday": "Monday",
                "tuesday": "Tuesday",
                "wednesday": "Wednesday",
                "thursday": "Thursday",

                "am": "AM",
                "pm": "PM",

                "january": "January",
                "february": "February",
                "march": "March",
                "april": "April",
                "may": "May",
                "june": "June",
                "july": "July",
                "august": "August",
                "september": "September",
                "october": "October",
                "november": "November",
                "december": "December",

                "jan": "January",
                "feb": "February",
                "mar": "March",
                "apr": "April",

                "jun": "June",
                "jul": "July",
                "aug": "August",
                "sep": "September",
                "oct": "October",
                "nov": "November",
                "dec": "December",

                "visibility_off": "Show",
                "visibility_on": "hide",
                "sort_asc": "Sort Ascending",
                "sort_desc": "Sort Decending",
                "group_on": "Group",
                "group_off": "Ungroup",
                "aggregate_text": "Aggregate",
                "search": "Search",
                "search_on": "Search On",
                "search_off": "Search Off",
                "move_right": "Move Right",
                "move_left": "Move Left",
                "aggregate_minimum": "Minimum",
                "aggregate_maximum": "Maximum",
                "aggregate_summation": "Summation",
                "aggregate_average": "Average",
                "aggregate_count": "Count",
                "aggregate_on": "Aggregation On",
                "aggregate_off": "Aggregation Off",
                "data_charts": "Data Charts",
                "bar_chart": "Bar Chart",
                "pie_chart": "Pie Chart",
                "line_chart": "Line Chart",
                "no_table_data": "No Data",
                "no_table_aggregate_data": "There is not any aggregation selected yet!"
            }
        },
        "attribute_list": [
            new DataAttribute(-1, 'brand', 'icon', 30, true, true, "#ff0000", "#0000ff"),
            new DataAttribute(-1, 'chassis', 'string', 20, true, true, "#ff0000", "#0000ff"),
            new DataAttribute(-1, 'year', 'string', 15, true, true, "#ff0000", "#0000ff"),
            new DataAttribute(-1, 'color', 'string18', 15, true, true, "#ff0000", "#0000ff"),
            new DataAttribute(-1, 'sales', 'number', 10, true, true, "#ff0000", "#0000ff"),
            new DataAttribute(-1, 'inventory', 'number', 10, true, true, "#ff0000", "#0000ff")
        ],
        "attribute_process_list": [
            new AttributeProcess('brand', "group", ''),
            new AttributeProcess('year', "group", ''),
            new AttributeProcess('sales', "aggregate", 'sumation'),
            new AttributeProcess('inventory', "aggregate", 'sumation')
        ],
        "header": {
            "chassis": {
                "type": "string(4,10)",
                "name": { "ar": "شاسى", "en": "Chassis", "icon": "" },
                "group": null
            },
            "brand": {
                "type": "string(4,10)",
                "name": { "ar": "فئة", "en": "Brand", "icon": "" },
                "group": "(1, 1)"
            },
            "year": {
                "type": "string(4,10)",
                "name": { "ar": "سنة", "en": "Year", "icon": "" },
                "group": "(1, 2)"
            },
            "color": {
                "type": "string(4,10)",
                "name": { "ar": "سنة", "en": "Color", "icon": "" },
                "group": "(2, 1)"
            },
            "sales": {
                "type": "number(4)",
                "name": { "ar": "سنة", "en": "Sales", "icon": "" },
                "group": null
            },
            "inventory": {
                "type": "number(4)",
                "name": { "ar": "سنة", "en": "Inventory", "icon": "" },
                "group": null
            }
        },
        "record_set": [
            {
                "chassis": "ee8a89d8",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1987,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "642b3edc",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1968,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "19ec7580",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1981,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "39980f30",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1986,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ec9cc4e4",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1981,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "09a06548",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1965,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "05c47246",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 2007,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "a9cb87aa",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1962,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "eae758fa",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1999,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "1241c403",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1964,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "13f853a7",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 2006,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "447d9ed9",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 2005,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "78fa052e",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1990,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "8b77772a",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1991,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "23ba7e86",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1975,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "9bacb32d",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1968,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "62094d91",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1962,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "dc7003f4",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1976,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "08607aef",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1987,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "45eee33a",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1980,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "f199ec5c",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1961,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "b34cd9e8",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1993,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "54b20b02",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1967,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5dd8766e",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1998,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "df50ce22",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1964,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ecb3e9e1",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 2003,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "750d731d",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1962,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "bec38cf4",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1960,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "b7752002",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1964,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "315fe9c4",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1985,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "be65f786",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1963,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "786a7d57",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 2003,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "a3aee412",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 2003,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "749e6bdd",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1995,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "8cc40f50",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1961,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5de63a6f",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1961,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "bdae1e20",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 2008,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "290cc891",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1992,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "007e1014",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1966,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "429c502d",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1995,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c336f9b6",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1991,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "a6783ba3",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 2004,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "2ddaf8d5",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1982,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c09c4b15",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1991,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "4609844c",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1972,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "8db7df27",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1982,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "dcc58086",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 2001,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "f1274cbe",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1995,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "0858a5d4",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1992,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c2d42bb6",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1972,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5535cd5a",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1980,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "e3313e1e",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 2009,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "f4dea691",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 2002,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ec15a449",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1990,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "80b74a0e",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1979,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "513fe268",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1987,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "6934c8f8",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1989,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "6a4c3ad0",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1994,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "e0acd7b5",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1965,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "2f31ac35",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1991,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "36104237",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1992,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5be099b4",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1991,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "e2f55f31",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1967,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "11274338",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1999,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "f710e177",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 2007,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "d8375b4b",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1977,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "a27ddfe3",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1978,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "d8848162",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 2008,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "e9cb3677",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 2004,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c9dc321d",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1989,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "4c75c610",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1972,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "1c90c93d",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 2004,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5ccc9f7f",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1961,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "94498bc0",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1965,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "1d1a21f3",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1985,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ea463ad3",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1992,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c24bdeb2",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1991,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "af3b744b",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1998,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "bebd5a96",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1989,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "6ef9dbf3",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1962,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "eede8f1e",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1977,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "9d11b02d",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1971,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "1d4223a1",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1975,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "4d118346",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1985,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "cce76f06",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1980,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "2af398ed",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1970,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c0ddab4c",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 2003,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "a27ea639",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1968,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "e6441f09",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1982,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c4c59d58",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 2005,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "9d31fc0a",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1974,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "b0ffce2d",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1966,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ca7e52e3",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1971,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "56b36f0e",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 2008,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ba045e1e",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1968,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "fd579989",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1975,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "084850a3",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1990,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "e39245ab",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1969,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "41ab14a1",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1987,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "7ec4c1c0",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1980,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "bf1c14aa",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1984,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "adeff567",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 2000,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "61e5e07d",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1978,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "7555e46a",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1966,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "95babbd1",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1998,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ff6885f7",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1996,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5b5a0031",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1968,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "de63c575",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1989,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "6bf3bfbc",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1968,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "d2d2e8d4",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1985,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "edcab1f7",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1979,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "03234e20",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1962,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "de2a7b08",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 2007,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "717b8282",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1999,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "790e7f03",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1983,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "8eefb223",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1983,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5e524acd",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1994,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "26b1aff9",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1965,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c007a623",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1968,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "76733e83",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1991,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ef3c14f7",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1987,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "2b4ca005",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 2009,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "8191dbb6",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 2005,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "f6b3bd94",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1967,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "abb19f41",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1975,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "7470c95f",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1996,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5f1b57a3",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1986,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ed47a74b",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 2007,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ed6030f7",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1990,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "944c71dc",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1991,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c7d838a5",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1980,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "712db898",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1965,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "99acc06f",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1995,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "6c68ffa5",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1999,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "63893922",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1991,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "dca5f739",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 2002,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "16da6dcb",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 2006,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "fe9ca30c",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1967,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "f0193ac7",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1979,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "145f5551",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1993,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "24714317",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1971,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "1a9c6e4e",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1997,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c9b7ef72",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1992,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "b1b6c375",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1963,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "7254a003",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1982,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "6f0de80f",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1987,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "e3048f87",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1989,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "361e435a",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1973,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "59e6a9f3",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1964,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "b791fe05",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1993,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "68b0dd88",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 2002,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5b439d1f",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1964,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "9a7ac9e3",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1988,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "d214751d",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1997,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "72229390",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1996,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "b5fbbeee",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1999,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "8972b543",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1973,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "7bc21024",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1980,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5d661964",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 2005,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "a6ccc2d8",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1994,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c1f15f28",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1999,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "161512ce",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1962,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "16e0b448",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1990,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "f0734442",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1966,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5e233279",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1964,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "1de720b2",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 2003,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "46efaeb2",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1993,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "88f2354c",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 2006,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "04819fd6",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1983,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "401771c8",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1962,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "8600877b",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1996,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "946bd645",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1991,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ad078e69",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1991,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "93138901",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1961,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "f365dfa4",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 1980,
                "color": { "ar": "أسود", "en": "Black" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "22647161",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 2007,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "92d1ee27",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1977,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "137c2b3a",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1970,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "b05b5235",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1967,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "1afbf400",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1966,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "8530ae50",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1979,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "c9a487a3",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 1981,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "5cb0bed6",
                "brand": { "ar": "هوندا", "en": "Honda", "icon": "honda.png" },
                "year": 1962,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "cf7d0b45",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1997,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "bc762dd0",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 2000,
                "color": { "ar": "أصفر", "en": "Yellow" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "97207a61",
                "brand": { "ar": "فولكس", "en": "VW", "icon": "vw.png" },
                "year": 1976,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "17680899",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 2006,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "d8a98d30",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1990,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "ff01ead0",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1962,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "38b30a61",
                "brand": { "ar": "فيات", "en": "Fiat", "icon": "fiat.png" },
                "year": 1977,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "9a6793c1",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 1983,
                "color": { "ar": "أحمر", "en": "Red" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "b1f27273",
                "brand": { "ar": "مرسيدس", "en": "Mercedes", "icon": "mercedes.png" },
                "year": 2007,
                "color": { "ar": "بنى", "en": "Brown" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "0fa8c1aa",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 1982,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "a7520f42",
                "brand": { "ar": "فولفو", "en": "Volvo", "icon": "volvo.png" },
                "year": 2008,
                "color": { "ar": "مارونى", "en": "Maroon" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "494eba81",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1966,
                "color": { "ar": "فضى", "en": "Silver" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "683535b8",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 2003,
                "color": { "ar": "أبيض", "en": "White" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "62e5d216",
                "brand": { "ar": "أودى", "en": "Audi", "icon": "audi.png" },
                "year": 1962,
                "color": { "ar": "برتقالى", "en": "Orange" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "16a65b56",
                "brand": { "ar": "جاجيور", "en": "Jaguar", "icon": "jaguar.png" },
                "year": 2009,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "d00250a3",
                "brand": { "ar": "بى إم دبليو", "en": "BMW", "icon": "bmw.png" },
                "year": 1978,
                "color": { "ar": "أزرق", "en": "Blue" },
                "sales": 1000,
                "inventory": 1300
            },
            {
                "chassis": "f3c3909d",
                "brand": { "ar": "رينو", "en": "Renault", "icon": "renault.png" },
                "year": 2003,
                "color": { "ar": "أخضر", "en": "Green" },
                "sales": 1000,
                "inventory": 1300
            }
        ]
    }

    static dataset_2 = {
        "lang": "en",
        "i18": {
            "ar": {
                "firstPageLabel": "بداية",
                "itemsPerPageLabel": "تعداد",
                "lastPageLabel": "نهاية",
                "nextPageLabel": "تالى",
                "previousPageLabel": "سابق",

                "done": "تم",
                "finish": "إتمام",
                "exit": "خروج",
                "reload": "تحديث",
                "previous": "السابق",
                "_previous": ">>",
                "next": "التالى",
                "_next": "<<",
                "save": "شراء",
                "delete": "حذف",
                "reset": "تهيئة",
                "close": "إغلاق",
                "end": "إنهاء",
                "only": "فقط",
                "cancel": "إلغاء",
                "apply": "إختيار",

                "AM": "ص",
                "PM": "م",

                "AM_short": "ص",
                "PM_short": "م",

                "AM_full": "صباحا",
                "PM_full": "مساء",

                "friday": "الجمعة",
                "saturday": "السبت",
                "sunday": "الأحد",
                "monday": "الإثنين",
                "tuesday": "الثلاثاء",
                "wednesday": "الأريعاء",
                "thursday": "الخميس",

                "am": "ص",
                "pm": "م",

                "january": "يناير",
                "february": "فبراير",
                "march": "مارس",
                "april": "ابريل",
                "may": "مايو",
                "june": "يونيو",
                "july": "يوليو",
                "august": "أغسطس",
                "september": "سبتمبر",
                "october": "اكتوبر",
                "november": "نوفمبر",
                "december": "ديسمبر",

                "jan": "يناير",
                "feb": "فبراير",
                "mar": "مارس",
                "apr": "ابريل",

                "jun": "يونيو",
                "jul": "يوليو",
                "aug": "أغسطس",
                "sep": "سبتمبر",
                "oct": "اكتوبر",
                "nov": "نوفمبر",
                "dec": "ديسمبر",

                "visibility_off": "إخفاء",
                "visibility_on": "إظهار",
                "sort_asc": "ترتيب تصاعدى",
                "sort_desc": "ترتيب تنازلى",
                "group_on": "دمج",
                "group_off": "إفراد",
                "aggregate_text": "تجميع",
                "search": "بحث",
                "search_on": "إبدأ البحث",
                "search_off": "إلغاء البحث",
                "move_right": "نقل لليمين",
                "move_left": "نقل لليسار",
                "aggregate_minimum": "الأصغر",
                "aggregate_maximum": "الأكبر",
                "aggregate_summation": "المجموع",
                "aggregate_average": "المتوسط",
                "aggregate_count": "العدد",
                "aggregate_on": "إبدأ التجميع",
                "aggregate_off": "إلغاء التجميع",
                "data_charts": "رسومات بيانية",
                "bar_chart": "رسومات بياني أعمدة",
                "pie_chart": "رسومات بياني دائرة",
                "line_chart": "رسومات بياني خطى",
                "no_table_data": "لاتوجد بيانات",
                "no_table_aggregate_data": "لاتوجد تجميعات تم إختيارها بعد!",
            },
            "en": {
                "firstPageLabel": "First",
                "itemsPerPageLabel": "Count",
                "lastPageLabel": "Last",
                "nextPageLabel": "Next",
                "previousPageLabel": "Previous",

                "done": "Done",
                "finish": "Finish",
                "exit": "Exit",
                "reload": "Reload",
                "previous": "Previous",
                "_previous": "<<",
                "next": "Next",
                "_next": ">>",
                "save": "Save",
                "delete": "Delete",
                "reset": "Reset",
                "close": "Close",
                "end": "End",
                "only": "Only",
                "cancel": "Cancel",
                "apply": "Apply",

                "AM": "AM",
                "PM": "PM",

                "AM_short": "AM",
                "PM_short": "PM",

                "AM_full": "Morning",
                "PM_full": "Evening",

                "friday": "Friday",
                "saturday": "Saturday",
                "sunday": "Sunday",
                "monday": "Monday",
                "tuesday": "Tuesday",
                "wednesday": "Wednesday",
                "thursday": "Thursday",

                "am": "AM",
                "pm": "PM",

                "january": "January",
                "february": "February",
                "march": "March",
                "april": "April",
                "may": "May",
                "june": "June",
                "july": "July",
                "august": "August",
                "september": "September",
                "october": "October",
                "november": "November",
                "december": "December",

                "jan": "January",
                "feb": "February",
                "mar": "March",
                "apr": "April",

                "jun": "June",
                "jul": "July",
                "aug": "August",
                "sep": "September",
                "oct": "October",
                "nov": "November",
                "dec": "December",

                "visibility_off": "Show",
                "visibility_on": "hide",
                "sort_asc": "Sort Ascending",
                "sort_desc": "Sort Decending",
                "group_on": "Group",
                "group_off": "Ungroup",
                "aggregate_text": "Aggregate",
                "search": "Search",
                "search_on": "Search On",
                "search_off": "Search Off",
                "move_right": "Move Right",
                "move_left": "Move Left",
                "aggregate_minimum": "Minimum",
                "aggregate_maximum": "Maximum",
                "aggregate_summation": "Summation",
                "aggregate_average": "Average",
                "aggregate_count": "Count",
                "aggregate_on": "Aggregation On",
                "aggregate_off": "Aggregation Off",
                "data_charts": "Data Charts",
                "bar_chart": "Bar Chart",
                "pie_chart": "Pie Chart",
                "line_chart": "Line Chart",
                "no_table_data": "No Data",
                "no_table_aggregate_data": "There is not any aggregation selected yet!"
            }
        },
        "attribute_list": [
            new DataAttribute(0, 'chassis', 'string', 20, true, true, "#ff0000", "#0000ff"),
            new DataAttribute(1, 'brand', 'icon', 30, true, true, "#ff0000", "#0000ff"),
            new DataAttribute(2, 'year', 'string', 15, true, true, "#ff0000", "#0000ff"),
            new DataAttribute(3, 'color', 'string18', 15, true, true, "#ff0000", "#0000ff"),
            new DataAttribute(4, 'sales', 'number', 10, true, true, "#ff0000", "#0000ff"),
            new DataAttribute(5, 'inventory', 'number', 10, true, true, "#ff0000", "#0000ff")
        ],
        "attribute_process_list": [
            new AttributeProcess('brand', "group", ''),
            new AttributeProcess('year', "group", ''),
            new AttributeProcess('sales', "aggregate", 'sumation'),
            new AttributeProcess('inventory', "aggregate", 'sumation')
        ],
        "header": {
            "chassis": {
                "type": "string(4,10)",
                "name": { "ar": "شاسى", "en": "Chassis", "icon": "" },
                "group": null
            },
            "brand": {
                "type": "string(4,10)",
                "name": { "ar": "فئة", "en": "Brand", "icon": "" },
                "group": "(1, 1)"
            },
            "year": {
                "type": "string(4,10)",
                "name": { "ar": "سنة", "en": "Year", "icon": "" },
                "group": "(1, 2)"
            },
            "color": {
                "type": "string(4,10)",
                "name": { "ar": "سنة", "en": "Color", "icon": "" },
                "group": "(2, 1)"
            },
            "sales": {
                "type": "number(4)",
                "name": { "ar": "سنة", "en": "Sales", "icon": "" },
                "group": null
            },
            "inventory": {
                "type": "number(4)",
                "name": { "ar": "سنة", "en": "Inventory", "icon": "" },
                "group": null
            }
        },
        "record_set": [
            [
                "ee8a89d8",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1987,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "642b3edc",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1968,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "19ec7580",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1981,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "39980f30",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1986,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "ec9cc4e4",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1981,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "09a06548",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1965,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "05c47246",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                2007,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "a9cb87aa",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1962,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "eae758fa",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1999,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "1241c403",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1964,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "13f853a7",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                2006,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "447d9ed9",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                2005,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "78fa052e",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1990,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "8b77772a",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1991,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "23ba7e86",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1975,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "9bacb32d",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1968,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "62094d91",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1962,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "dc7003f4",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1976,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "08607aef",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1987,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "45eee33a",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1980,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "f199ec5c",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1961,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "b34cd9e8",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1993,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "54b20b02",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1967,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "5dd8766e",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1998,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "df50ce22",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1964,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "ecb3e9e1",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                2003,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "750d731d",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1962,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "bec38cf4",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1960,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "b7752002",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1964,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "315fe9c4",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1985,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "be65f786",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1963,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "786a7d57",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                2003,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "a3aee412",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                2003,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "749e6bdd",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1995,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "8cc40f50",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1961,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "5de63a6f",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1961,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "bdae1e20",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                2008,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "290cc891",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1992,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "007e1014",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1966,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "429c502d",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1995,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "c336f9b6",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1991,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "a6783ba3",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                2004,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "2ddaf8d5",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1982,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "c09c4b15",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1991,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "4609844c",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1972,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "8db7df27",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1982,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "dcc58086",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                2001,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "f1274cbe",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1995,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "0858a5d4",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1992,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "c2d42bb6",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1972,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "5535cd5a",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1980,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "e3313e1e",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                2009,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "f4dea691",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                2002,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "ec15a449",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1990,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "80b74a0e",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1979,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "513fe268",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1987,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "6934c8f8",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1989,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "6a4c3ad0",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1994,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "e0acd7b5",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1965,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "2f31ac35",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1991,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "36104237",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1992,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "5be099b4",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1991,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "e2f55f31",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1967,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "11274338",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1999,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "f710e177",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                2007,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "d8375b4b",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1977,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "a27ddfe3",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1978,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "d8848162",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                2008,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "e9cb3677",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                2004,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "c9dc321d",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1989,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "4c75c610",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1972,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "1c90c93d",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                2004,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "5ccc9f7f",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1961,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "94498bc0",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1965,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "1d1a21f3",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1985,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "ea463ad3",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1992,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "c24bdeb2",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1991,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "af3b744b",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1998,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "bebd5a96",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1989,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "6ef9dbf3",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1962,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "eede8f1e",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1977,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "9d11b02d",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1971,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "1d4223a1",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1975,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "4d118346",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1985,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "cce76f06",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1980,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "2af398ed",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1970,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "c0ddab4c",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                2003,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "a27ea639",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1968,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "e6441f09",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1982,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "c4c59d58",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                2005,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "9d31fc0a",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1974,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "b0ffce2d",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1966,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "ca7e52e3",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1971,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "56b36f0e",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                2008,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "ba045e1e",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1968,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "fd579989",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1975,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "084850a3",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1990,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "e39245ab",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1969,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "41ab14a1",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1987,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "7ec4c1c0",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1980,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "bf1c14aa",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1984,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "adeff567",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                2000,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "61e5e07d",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1978,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "7555e46a",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1966,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "95babbd1",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1998,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "ff6885f7",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1996,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "5b5a0031",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1968,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "de63c575",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1989,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "6bf3bfbc",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1968,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "d2d2e8d4",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1985,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "edcab1f7",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1979,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "03234e20",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1962,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "de2a7b08",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                2007,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "717b8282",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1999,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "790e7f03",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1983,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "8eefb223",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1983,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "5e524acd",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1994,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "26b1aff9",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1965,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "c007a623",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1968,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "76733e83",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1991,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "ef3c14f7",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1987,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "2b4ca005",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                2009,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "8191dbb6",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                2005,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "f6b3bd94",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1967,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "abb19f41",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1975,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "7470c95f",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1996,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "5f1b57a3",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1986,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "ed47a74b",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                2007,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "ed6030f7",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1990,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "944c71dc",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1991,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "c7d838a5",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1980,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "712db898",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1965,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "99acc06f",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1995,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "6c68ffa5",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1999,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "63893922",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1991,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "dca5f739",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                2002,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "16da6dcb",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                2006,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "fe9ca30c",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1967,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "f0193ac7",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1979,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "145f5551",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1993,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "24714317",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1971,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "1a9c6e4e",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1997,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "c9b7ef72",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1992,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "b1b6c375",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1963,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "7254a003",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1982,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "6f0de80f",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1987,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "e3048f87",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1989,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "361e435a",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1973,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "59e6a9f3",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1964,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "b791fe05",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1993,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "68b0dd88",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                2002,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "5b439d1f",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1964,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "9a7ac9e3",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1988,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "d214751d",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1997,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "72229390",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1996,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "b5fbbeee",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1999,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "8972b543",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1973,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "7bc21024",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1980,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "5d661964",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                2005,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "a6ccc2d8",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1994,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "c1f15f28",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1999,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "161512ce",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1962,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "16e0b448",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1990,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "f0734442",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1966,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "5e233279",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1964,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "1de720b2",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                2003,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "46efaeb2",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1993,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "88f2354c",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                2006,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "04819fd6",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1983,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "401771c8",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1962,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "8600877b",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1996,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "946bd645",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1991,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "ad078e69",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1991,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "93138901",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1961,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "f365dfa4",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                1980,
                "{\"ar\":\"أسود\",\"en\":\"Black\"}",
                1000,
                1300
            ],
            [
                "22647161",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                2007,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "92d1ee27",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1977,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "137c2b3a",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1970,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "b05b5235",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1967,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "1afbf400",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1966,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "8530ae50",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1979,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "c9a487a3",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                1981,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "5cb0bed6",
                "{\"ar\":\"هوندا\",\"en\":\"Honda\",\"icon\":\"honda.png\"}",
                1962,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "cf7d0b45",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1997,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "bc762dd0",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                2000,
                "{\"ar\":\"أصفر\",\"en\":\"Yellow\"}",
                1000,
                1300
            ],
            [
                "97207a61",
                "{\"ar\":\"فولكس\",\"en\":\"VW\",\"icon\":\"vw.png\"}",
                1976,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "17680899",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                2006,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "d8a98d30",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1990,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ],
            [
                "ff01ead0",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1962,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "38b30a61",
                "{\"ar\":\"فيات\",\"en\":\"Fiat\",\"icon\":\"fiat.png\"}",
                1977,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "9a6793c1",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                1983,
                "{\"ar\":\"أحمر\",\"en\":\"Red\"}",
                1000,
                1300
            ],
            [
                "b1f27273",
                "{\"ar\":\"مرسيدس\",\"en\":\"Mercedes\",\"icon\":\"mercedes.png\"}",
                2007,
                "{\"ar\":\"بنى\",\"en\":\"Brown\"}",
                1000,
                1300
            ],
            [
                "0fa8c1aa",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                1982,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "a7520f42",
                "{\"ar\":\"فولفو\",\"en\":\"Volvo\",\"icon\":\"volvo.png\"}",
                2008,
                "{\"ar\":\"مارونى\",\"en\":\"Maroon\"}",
                1000,
                1300
            ],
            [
                "494eba81",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1966,
                "{\"ar\":\"فضى\",\"en\":\"Silver\"}",
                1000,
                1300
            ],
            [
                "683535b8",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                2003,
                "{\"ar\":\"أبيض\",\"en\":\"White\"}",
                1000,
                1300
            ],
            [
                "62e5d216",
                "{\"ar\":\"أودى\",\"en\":\"Audi\",\"icon\":\"audi.png\"}",
                1962,
                "{\"ar\":\"برتقالى\",\"en\":\"Orange\"}",
                1000,
                1300
            ],
            [
                "16a65b56",
                "{\"ar\":\"جاجيور\",\"en\":\"Jaguar\",\"icon\":\"jaguar.png\"}",
                2009,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "d00250a3",
                "{\"ar\":\"بى إم دبليو\",\"en\":\"BMW\",\"icon\":\"bmw.png\"}",
                1978,
                "{\"ar\":\"أزرق\",\"en\":\"Blue\"}",
                1000,
                1300
            ],
            [
                "f3c3909d",
                "{\"ar\":\"رينو\",\"en\":\"Renault\",\"icon\":\"renault.png\"}",
                2003,
                "{\"ar\":\"أخضر\",\"en\":\"Green\"}",
                1000,
                1300
            ]
        ]
    }
}