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

export class StringI18n {

    constructor(content) {
        if (content != null && content instanceof Map) {
            content.forEach((value, key) => {
                if (WorldLanguages.isLanguage(key) == true) {
                    Object.defineProperty(this, key, {
                        value: value,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
            });
        } else if (content != null) {
            Object.entries(content).forEach(([key, value]) => {
                if (WorldLanguages.isLanguage(key) == true) {
                    Object.defineProperty(this, key, {
                        value: value,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
            });
        }
    }

    get(language, default_string) {
        return this[language] != null ? this[language] : default_string;
    }

    static fromJSON(json) {
        let language_map = new Map();
        if (json == null) {
            return new StringI18n(null);
        }
        Object.entries(json).forEach(([key, value]) => {
            if (WorldLanguages.isLanguage(key) == true) {
                language_map.set(key, value);
            }
        });
        return new StringI18n(language_map);
    }
}

export class LanguageI18N {

    constructor(name, code, directionality) {
        this.name = name;
        this.code = code;
        this.directionality = directionality;
    }

    getName() {
        return this.name;
    }

    getCode() {
        return this.code;
    }

    getDirectionality() {
        return this.directionality;
    }
}

export class WorldLanguages {
    static language_list = [];
    static language_code_map = new Map();
    static language_name_map = new Map();
    static WorldLanguagesInstance = new WorldLanguages();
    
    constructor() {
        WorldLanguages.language_list = [
            new LanguageI18N("Afar", "aa", "ltr"),
            new LanguageI18N("Аҧсуа", "ab", "ltr"),
            new LanguageI18N("Afrikaans", "af", "ltr"),
            new LanguageI18N("Akana", "ak", "ltr"),
            new LanguageI18N("Alemannisch", "als", "ltr"),
            new LanguageI18N("አማርኛ", "am", "ltr"),
            new LanguageI18N("Aragonés", "an", "ltr"),
            new LanguageI18N("Angal Heneng / Englisc", "ang", "ltr"),
            new LanguageI18N("العربية", "ar", "rtl"),
            new LanguageI18N("ܣܘܪܬ", "arc", "rtl"),
            new LanguageI18N("مصرى", "arz", "rtl"),
            new LanguageI18N("অসমীয়া", "as", "ltr"),
            new LanguageI18N("Asturianu", "ast", "ltr"),
            new LanguageI18N("Авар", "av", "ltr"),
            new LanguageI18N("Awadhi", "awa", "ltr"),
            new LanguageI18N("Aymar", "ay", "ltr"),
            new LanguageI18N("Azərbaycanca / آذربايجان", "az", "ltr"),
            new LanguageI18N("Башҡорт", "ba", "ltr"),
            new LanguageI18N("Boarisch", "bar", "ltr"),
            new LanguageI18N("Žemaitėška", "bat_smg", "ltr"),
            new LanguageI18N("Bikol Central", "bcl", "ltr"),
            new LanguageI18N("Беларуская", "be", "ltr"),
            new LanguageI18N("Беларуская (тарашкевіца)", "be_x_old", "ltr"),
            new LanguageI18N("Български", "bg", "ltr"),
            new LanguageI18N("भोजपुरी", "bh", "ltr"),
            new LanguageI18N("Bislama", "bi", "ltr"),
            new LanguageI18N("Bamanankan", "bm", "ltr"),
            new LanguageI18N("বাংলা", "bn", "ltr"),
            new LanguageI18N("བོད་ཡིག / Bod skad", "bo", "ltr"),
            new LanguageI18N("ইমার ঠার/বিষ্ণুপ্রিয়া মণিপুরী", "bpy", "ltr"),
            new LanguageI18N("Brezhoneg", "br", "ltr"),
            new LanguageI18N("बड़", "brx", "ltr"),
            new LanguageI18N("Bosanski", "bs", "ltr"),
            new LanguageI18N("ᨅᨔ ᨕᨘᨁᨗ / Basa Ugi", "bug", "ltr"),
            new LanguageI18N("Буряад хэлэн", "bxr", "ltr"),
            new LanguageI18N("Català", "ca", "ltr"),
            new LanguageI18N("Mìng-dĕ̤ng-ngṳ̄ / 閩東語", "cdo", "ltr"),
            new LanguageI18N("Нохчийн", "ce", "ltr"),
            new LanguageI18N("Sinugboanong Binisaya", "ceb", "ltr"),
            new LanguageI18N("Chamoru", "ch", "ltr"),
            new LanguageI18N("Choctaw", "cho", "ltr"),
            new LanguageI18N("ᏣᎳᎩ", "chr", "ltr"),
            new LanguageI18N("Tsetsêhestâhese", "chy", "ltr"),
            new LanguageI18N("کوردی", "ckb", "rtl"),
            new LanguageI18N("Corsu", "co", "ltr"),
            new LanguageI18N("Nehiyaw", "cr", "ltr"),
            new LanguageI18N("crnogorski", "crn", "ltr"),
            new LanguageI18N("Česky", "cs", "ltr"),
            new LanguageI18N("Kaszëbsczi", "csb", "ltr"),
            new LanguageI18N("словѣньскъ / slověnĭskŭ", "cu", "ltr"),
            new LanguageI18N("Чăваш", "cv", "ltr"),
            new LanguageI18N("Cymraeg", "cy", "ltr"),
            new LanguageI18N("Dansk", "da", "ltr"),
            new LanguageI18N("Deutsch", "de", "ltr"),
            new LanguageI18N("Zazaki", "diq", "ltr"),
            new LanguageI18N("Dolnoserbski", "dsb", "ltr"),
            new LanguageI18N("ދިވެހިބަސް", "dv", "rtl"),
            new LanguageI18N("རྫོང་ཁ", "dz", "ltr"),
            new LanguageI18N("Ɛʋɛ", "ee", "ltr"),
            new LanguageI18N("Ελληνικά", "el", "ltr"),
            new LanguageI18N("English", "en", "ltr"),
            new LanguageI18N("Esperanto", "eo", "ltr"),
            new LanguageI18N("Español", "es", "ltr"),
            new LanguageI18N("Eesti", "et", "ltr"),
            new LanguageI18N("Euskara", "eu", "ltr"),
            new LanguageI18N("Estremeñu", "ext", "ltr"),
            new LanguageI18N("فارسی", "fa", "rtl"),
            new LanguageI18N("Fulfulde", "ff", "ltr"),
            new LanguageI18N("Suomi", "fi", "ltr"),
            new LanguageI18N("Võro", "fiu_vro", "ltr"),
            new LanguageI18N("Na Vosa Vakaviti", "fj", "ltr"),
            new LanguageI18N("Føroyskt", "fo", "ltr"),
            new LanguageI18N("Français", "fr", "ltr"),
            new LanguageI18N("Arpitan / francoprovençal", "frp", "ltr"),
            new LanguageI18N("Furlan", "fur", "ltr"),
            new LanguageI18N("Frysk", "fy", "ltr"),
            new LanguageI18N("Gaeilge", "ga", "ltr"),
            new LanguageI18N("贛語", "gan", "ltr"),
            new LanguageI18N("गढ़वळी", "gbm", "ltr"),
            new LanguageI18N("Gàidhlig", "gd", "ltr"),
            new LanguageI18N("Taetae ni kiribati", "gil", "ltr"),
            new LanguageI18N("Galego", "gl", "ltr"),
            new LanguageI18N("Avañe'ẽ", "gn", "ltr"),
            new LanguageI18N("gutisk", "got", "ltr"),
            new LanguageI18N("ગુજરાતી", "gu", "ltr"),
            new LanguageI18N("Gaelg", "gv", "ltr"),
            new LanguageI18N("هَوُسَ", "ha", "rtl"),
            new LanguageI18N("客家語/Hak-kâ-ngî", "hak", "ltr"),
            new LanguageI18N("Hawai`i", "haw", "ltr"),
            new LanguageI18N("עברית", "he", "rtl"),
            new LanguageI18N("हिन्दी", "hi", "ltr"),
            new LanguageI18N("Hiri Motu", "ho", "ltr"),
            new LanguageI18N("Hrvatski", "hr", "ltr"),
            new LanguageI18N("Krèyol ayisyen", "ht", "ltr"),
            new LanguageI18N("Magyar", "hu", "ltr"),
            new LanguageI18N("Հայերեն", "hy", "ltr"),
            new LanguageI18N("Otsiherero", "hz", "ltr"),
            new LanguageI18N("Interlingua", "ia", "ltr"),
            new LanguageI18N("Bahasa Indonesia", "id", "ltr"),
            new LanguageI18N("Interlingue", "ie", "ltr"),
            new LanguageI18N("Igbo", "ig", "ltr"),
            new LanguageI18N("ꆇꉙ / 四川彝语", "ii", "ltr"),
            new LanguageI18N("Iñupiak", "ik", "ltr"),
            new LanguageI18N("Ilokano", "ilo", "ltr"),
            new LanguageI18N("ГӀалгӀай", "inh", "ltr"),
            new LanguageI18N("Ido", "io", "ltr"),
            new LanguageI18N("Íslenska", "is", "ltr"),
            new LanguageI18N("Italiano", "it", "ltr"),
            new LanguageI18N("ᐃᓄᒃᑎᑐᑦ", "iu", "ltr"),
            new LanguageI18N("日本語", "ja", "ltr"),
            new LanguageI18N("Lojban", "jbo", "ltr"),
            new LanguageI18N("Basa Jawa", "jv", "ltr"),
            new LanguageI18N("ქართული", "ka", "ltr"),
            new LanguageI18N("KiKongo", "kg", "ltr"),
            new LanguageI18N("Gĩkũyũ", "ki", "ltr"),
            new LanguageI18N("Kuanyama", "kj", "ltr"),
            new LanguageI18N("Қазақша", "kk", "ltr"),
            new LanguageI18N("Kalaallisut", "kl", "ltr"),
            new LanguageI18N("ភាសាខ្មែរ", "km", "ltr"),
            new LanguageI18N("ಕನ್ನಡ", "kn", "ltr"),
            new LanguageI18N("کھوار", "khw", "rtl"),
            new LanguageI18N("한국어", "ko", "ltr"),
            new LanguageI18N("Kanuri", "kr", "ltr"),
            new LanguageI18N("कॉशुर / کٲشُر", "ks", "rtl"),
            new LanguageI18N("Ripoarisch", "ksh", "ltr"),
            new LanguageI18N("Kurdî", "ku", "ltr"),
            new LanguageI18N("Коми", "kv", "ltr"),
            new LanguageI18N("Kernewek", "kw", "ltr"),
            new LanguageI18N("Kırgızca / Кыргызча", "ky", "ltr"),
            new LanguageI18N("Latina", "la", "ltr"),
            new LanguageI18N("Dzhudezmo / Djudeo-Espanyol", "lad", "ltr"),
            new LanguageI18N("Leb Lango / Luo", "lan", "ltr"),
            new LanguageI18N("Lëtzebuergesch", "lb", "ltr"),
            new LanguageI18N("Luganda", "lg", "ltr"),
            new LanguageI18N("Limburgs", "li", "ltr"),
            new LanguageI18N("Líguru", "lij", "ltr"),
            new LanguageI18N("Lumbaart", "lmo", "ltr"),
            new LanguageI18N("Lingála", "ln", "ltr"),
            new LanguageI18N("ລາວ / Pha xa lao", "lo", "ltr"),
            new LanguageI18N("Lazuri / ლაზური", "lzz", "ltr"),
            new LanguageI18N("Lietuvių", "lt", "ltr"),
            new LanguageI18N("Latviešu", "lv", "ltr"),
            new LanguageI18N("Basa Banyumasan", "map_bms", "ltr"),
            new LanguageI18N("Malagasy", "mg", "ltr"),
            new LanguageI18N("官話/官话", "man", "ltr"),
            new LanguageI18N("Kajin Majel / Ebon", "mh", "ltr"),
            new LanguageI18N("Māori", "mi", "ltr"),
            new LanguageI18N("Minangkabau", "min", "ltr"),
            new LanguageI18N("Македонски", "mk", "ltr"),
            new LanguageI18N("മലയാളം", "ml", "ltr"),
            new LanguageI18N("Монгол", "mn", "ltr"),
            new LanguageI18N("Moldovenească", "mo", "ltr"),
            new LanguageI18N("मराठी", "mr", "ltr"),
            new LanguageI18N("Mara", "mrh", "ltr"),
            new LanguageI18N("Bahasa Melayu", "ms", "ltr"),
            new LanguageI18N("bil-Malti", "mt", "ltr"),
            new LanguageI18N("Mvskoke", "mus", "ltr"),
            new LanguageI18N("Mirandés", "mwl", "ltr"),
            new LanguageI18N("Myanmasa", "my", "ltr"),
            new LanguageI18N("Dorerin Naoero", "na", "ltr"),
            new LanguageI18N("Nahuatl", "nah", "ltr"),
            new LanguageI18N("Nnapulitano", "nap", "ltr"),
            new LanguageI18N("Sindebele", "nd", "ltr"),
            new LanguageI18N("Plattdüütsch", "nds", "ltr"),
            new LanguageI18N("Nedersaksisch", "nds_nl", "ltr"),
            new LanguageI18N("नेपाली", "ne", "ltr"),
            new LanguageI18N("नेपालभाषा / Newah Bhaye", "new", "ltr"),
            new LanguageI18N("Oshiwambo", "ng", "ltr"),
            new LanguageI18N("Nederlands", "nl", "ltr"),
            new LanguageI18N("Norsk (nynorsk)", "nn", "ltr"),
            new LanguageI18N("Norsk (bokmål / riksmål)", "no", "ltr"),
            new LanguageI18N("isiNdebele", "nr", "ltr"),
            new LanguageI18N("Sesotho sa Leboa / Sepedi", "nso", "ltr"),
            new LanguageI18N("Nouormand / Normaund", "nrm", "ltr"),
            new LanguageI18N("Diné bizaad", "nv", "ltr"),
            new LanguageI18N("Chi-Chewa", "ny", "ltr"),
            new LanguageI18N("Occitan", "oc", "ltr"),
            new LanguageI18N("ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin", "oj", "ltr"),
            new LanguageI18N("Oromoo", "om", "ltr"),
            new LanguageI18N("ଓଡ଼ିଆ", "or", "ltr"),
            new LanguageI18N("Иронау", "os", "ltr"),
            new LanguageI18N("ਪੰਜਾਬੀ / پنجابی", "pa", "ltr"),
            new LanguageI18N("Pangasinan", "pag", "ltr"),
            new LanguageI18N("Kapampangan", "pam", "ltr"),
            new LanguageI18N("Papiamentu", "pap", "ltr"),
            new LanguageI18N("Deitsch", "pdc", "ltr"),
            new LanguageI18N("Pāli / पाऴि", "pi", "ltr"),
            new LanguageI18N("Norfuk", "pih", "ltr"),
            new LanguageI18N("Polski", "pl", "ltr"),
            new LanguageI18N("Piemontèis", "pms", "ltr"),
            new LanguageI18N("پښتو", "ps", "rtl"),
            new LanguageI18N("Português", "pt", "ltr"),
            new LanguageI18N("Runa Simi", "qu", "ltr"),
            new LanguageI18N("Rumantsch", "rm", "ltr"),
            new LanguageI18N("Romani / रोमानी", "rmy", "ltr"),
            new LanguageI18N("Kirundi", "rn", "ltr"),
            new LanguageI18N("Română", "ro", "ltr"),
            new LanguageI18N("Armâneashti", "roa_rup", "ltr"),
            new LanguageI18N("Русский", "ru", "ltr"),
            new LanguageI18N("Kinyarwandi", "rw", "ltr"),
            new LanguageI18N("संस्कृतम्", "sa", "ltr"),
            new LanguageI18N("Sardu", "sc", "ltr"),
            new LanguageI18N("Sicilianu", "scn", "ltr"),
            new LanguageI18N("Scots", "sco", "ltr"),
            new LanguageI18N("सिंधी / سنڌي‎", "sd", "rtl"),
            new LanguageI18N("Davvisámegiella", "se", "ltr"),
            new LanguageI18N("Sängö", "sg", "ltr"),
            new LanguageI18N("Srpskohrvatski / Српскохрватски", "sh", "ltr"),
            new LanguageI18N("සිංහල", "si", "ltr"),
            new LanguageI18N("Simple English", "simple", "ltr"),
            new LanguageI18N("Slovenčina", "sk", "ltr"),
            new LanguageI18N("Slovenščina", "sl", "ltr"),
            new LanguageI18N("Gagana Samoa", "sm", "ltr"),
            new LanguageI18N("chiShona", "sn", "ltr"),
            new LanguageI18N("Soomaaliga", "so", "ltr"),
            new LanguageI18N("Shqip", "sq", "ltr"),
            new LanguageI18N("Српски", "sr", "ltr"),
            new LanguageI18N("SiSwati", "ss", "ltr"),
            new LanguageI18N("Sesotho", "st", "ltr"),
            new LanguageI18N("Basa Sunda", "su", "ltr"),
            new LanguageI18N("Svenska", "sv", "ltr"),
            new LanguageI18N("Kiswahili", "sw", "ltr"),
            new LanguageI18N("தமிழ்", "ta", "ltr"),
            new LanguageI18N("తెలుగు", "te", "ltr"),
            new LanguageI18N("Tetun", "tet", "ltr"),
            new LanguageI18N("Тоҷикӣ", "tg", "ltr"),
            new LanguageI18N("ไทย / Phasa Thai", "th", "ltr"),
            new LanguageI18N("ትግርኛ", "ti", "ltr"),
            new LanguageI18N("Туркмен / تركمن", "tk", "ltr"),
            new LanguageI18N("Tagalog / ᜆᜄᜎᜓᜄ᜔", "tl", "ltr"),
            new LanguageI18N("tlhIngan-Hol", "tlh", "ltr"),
            new LanguageI18N("Setswana", "tn", "ltr"),
            new LanguageI18N("Lea Faka-Tonga", "to", "ltr"),
            new LanguageI18N("Tok Pisin", "tpi", "ltr"),
            new LanguageI18N("Türkçe", "tr", "ltr"),
            new LanguageI18N("Xitsonga", "ts", "ltr"),
            new LanguageI18N("Tatarça", "tt", "ltr"),
            new LanguageI18N("chiTumbuka", "tum", "ltr"),
            new LanguageI18N("Twi", "tw", "ltr"),
            new LanguageI18N("Reo Mā`ohi", "ty", "ltr"),
            new LanguageI18N("Удмурт кыл", "udm", "ltr"),
            new LanguageI18N("Uyƣurqə / ئۇيغۇرچە", "ug", "ltr"),
            new LanguageI18N("Українська", "uk", "ltr"),
            new LanguageI18N("اردو", "ur", "rtl"),
            new LanguageI18N("Ўзбек", "uz", "ltr"),
            new LanguageI18N("اوزبیکی", "uz_AF", "rtl"),
            new LanguageI18N("Tshivenḓa", "ve", "ltr"),
            new LanguageI18N("Tiếng Việt", "vi", "ltr"),
            new LanguageI18N("Vèneto", "vec", "ltr"),
            new LanguageI18N("West-Vlaoms", "vls", "ltr"),
            new LanguageI18N("Volapük", "vo", "ltr"),
            new LanguageI18N("Walon", "wa", "ltr"),
            new LanguageI18N("Winaray / Binisaya Lineyte-Samarnon", "war", "ltr"),
            new LanguageI18N("Wollof", "wo", "ltr"),
            new LanguageI18N("Хальмг", "xal", "ltr"),
            new LanguageI18N("isiXhosa", "xh", "ltr"),
            new LanguageI18N("მარგალური", "xmf", "ltr"),
            new LanguageI18N("ייִדיש", "yi", "rtl"),
            new LanguageI18N("Yorùbá", "yo", "ltr"),
            new LanguageI18N("Cuengh / Tôô / 壮语", "za", "ltr"),
            new LanguageI18N("ⵜⴰⵎⴰⵣⵉⵖⵜ", "zg", "ltr"),
            new LanguageI18N("中文", "zh", "ltr"),
            new LanguageI18N("文言", "zh_classical", "ltr"),
            new LanguageI18N("Bân-lâm-gú", "zh_min_nan", "ltr"),
            new LanguageI18N("粵語 / 粤语", "zh_yue", "ltr"),
            new LanguageI18N("isiZulu", "zu", "ltr")
        ];
        
        WorldLanguages.language_list.forEach((language_i18n) => {
            WorldLanguages.language_code_map.set(language_i18n.getCode(), language_i18n);
            let language_name_list = language_i18n.getName().split("/");
            language_name_list.forEach((language_name) => {
                WorldLanguages.language_name_map.set(language_name.trim(), language_i18n);
            });
            Object.defineProperty(WorldLanguages, language_i18n.getCode(), { value: language_i18n, writable: true, enumerable: true, configurable: true });
        });
    }

    static isLanguage(code) {
        return WorldLanguages.language_code_map.get(code) != null;
    }

    static getLanguage(code) {
        return WorldLanguages.language_code_map.get(code);
    }

    static getLanguageList() {
        return WorldLanguages.language_list;
    }

    static getLanguageCodeMap() {
        return WorldLanguages.language_code_map;
    }

    static getLanguageNameMap() {
        return WorldLanguages.language_name_map;
    }
}