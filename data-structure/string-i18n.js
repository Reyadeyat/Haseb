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
    
    static WorldLanguagesInstance = new WorldLanguages();
    
    constructor() {
        Object.defineProperty(this, "aa", {value: new LanguageI18N("Afar","aa","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ab", {value: new LanguageI18N("Аҧсуа","ab","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "af", {value: new LanguageI18N("Afrikaans","af","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ak", {value: new LanguageI18N("Akana","ak","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "als", {value: new LanguageI18N("Alemannisch","als","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "am", {value: new LanguageI18N("አማርኛ","am","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "an", {value: new LanguageI18N("Aragonés","an","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ang", {value: new LanguageI18N("Angal Heneng / Englisc","ang","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ar", {value: new LanguageI18N("العربية","ar","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "arc", {value: new LanguageI18N("ܣܘܪܬ","arc","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "arz", {value: new LanguageI18N("مصرى","arz","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "as", {value: new LanguageI18N("অসমীয়া","as","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ast", {value: new LanguageI18N("Asturianu","ast","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "av", {value: new LanguageI18N("Авар","av","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "awa", {value: new LanguageI18N("Awadhi","awa","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ay", {value: new LanguageI18N("Aymar","ay","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "az", {value: new LanguageI18N("Azərbaycanca / آذربايجان","az","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ba", {value: new LanguageI18N("Башҡорт","ba","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bar", {value: new LanguageI18N("Boarisch","bar","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bat_smg", {value: new LanguageI18N("Žemaitėška","bat_smg","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bcl", {value: new LanguageI18N("Bikol Central","bcl","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "be", {value: new LanguageI18N("Беларуская","be","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "be_x_old", {value: new LanguageI18N("Беларуская (тарашкевіца)","be_x_old","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bg", {value: new LanguageI18N("Български","bg","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bh", {value: new LanguageI18N("भोजपुरी","bh","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bi", {value: new LanguageI18N("Bislama","bi","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bm", {value: new LanguageI18N("Bamanankan","bm","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bn", {value: new LanguageI18N("বাংলা","bn","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bo", {value: new LanguageI18N("བོད་ཡིག / Bod skad","bo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bpy", {value: new LanguageI18N("ইমার ঠার/বিষ্ণুপ্রিয়া মণিপুরী","bpy","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "br", {value: new LanguageI18N("Brezhoneg","br","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "brx", {value: new LanguageI18N("बड़","brx","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bs", {value: new LanguageI18N("Bosanski","bs","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bug", {value: new LanguageI18N("ᨅᨔ ᨕᨘᨁᨗ / Basa Ugi","bug","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "bxr", {value: new LanguageI18N("Буряад хэлэн","bxr","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ca", {value: new LanguageI18N("Català","ca","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "cdo", {value: new LanguageI18N("Mìng-dĕ̤ng-ngṳ̄ / 閩東語","cdo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ce", {value: new LanguageI18N("Нохчийн","ce","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ceb", {value: new LanguageI18N("Sinugboanong Binisaya","ceb","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ch", {value: new LanguageI18N("Chamoru","ch","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "cho", {value: new LanguageI18N("Choctaw","cho","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "chr", {value: new LanguageI18N("ᏣᎳᎩ","chr","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "chy", {value: new LanguageI18N("Tsetsêhestâhese","chy","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ckb", {value: new LanguageI18N("کوردی","ckb","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "co", {value: new LanguageI18N("Corsu","co","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "cr", {value: new LanguageI18N("Nehiyaw","cr","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "crn", {value: new LanguageI18N("crnogorski","crn","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "cs", {value: new LanguageI18N("Česky","cs","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "csb", {value: new LanguageI18N("Kaszëbsczi","csb","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "cu", {value: new LanguageI18N("словѣньскъ / slověnĭskŭ","cu","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "cv", {value: new LanguageI18N("Чăваш","cv","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "cy", {value: new LanguageI18N("Cymraeg","cy","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "da", {value: new LanguageI18N("Dansk","da","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "de", {value: new LanguageI18N("Deutsch","de","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "diq", {value: new LanguageI18N("Zazaki","diq","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "dsb", {value: new LanguageI18N("Dolnoserbski","dsb","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "dv", {value: new LanguageI18N("ދިވެހިބަސް","dv","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "dz", {value: new LanguageI18N("རྫོང་ཁ","dz","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ee", {value: new LanguageI18N("Ɛʋɛ","ee","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "el", {value: new LanguageI18N("Ελληνικά","el","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "en", {value: new LanguageI18N("English","en","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "eo", {value: new LanguageI18N("Esperanto","eo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "es", {value: new LanguageI18N("Español","es","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "et", {value: new LanguageI18N("Eesti","et","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "eu", {value: new LanguageI18N("Euskara","eu","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ext", {value: new LanguageI18N("Estremeñu","ext","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "fa", {value: new LanguageI18N("فارسی","fa","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ff", {value: new LanguageI18N("Fulfulde","ff","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "fi", {value: new LanguageI18N("Suomi","fi","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "fiu_vro", {value: new LanguageI18N("Võro","fiu_vro","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "fj", {value: new LanguageI18N("Na Vosa Vakaviti","fj","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "fo", {value: new LanguageI18N("Føroyskt","fo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "fr", {value: new LanguageI18N("Français","fr","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "frp", {value: new LanguageI18N("Arpitan / francoprovençal","frp","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "fur", {value: new LanguageI18N("Furlan","fur","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "fy", {value: new LanguageI18N("Frysk","fy","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ga", {value: new LanguageI18N("Gaeilge","ga","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "gan", {value: new LanguageI18N("贛語","gan","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "gbm", {value: new LanguageI18N("गढ़वळी","gbm","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "gd", {value: new LanguageI18N("Gàidhlig","gd","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "gil", {value: new LanguageI18N("Taetae ni kiribati","gil","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "gl", {value: new LanguageI18N("Galego","gl","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "gn", {value: new LanguageI18N("Avañe'ẽ","gn","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "got", {value: new LanguageI18N("gutisk","got","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "gu", {value: new LanguageI18N("ગુજરાતી","gu","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "gv", {value: new LanguageI18N("Gaelg","gv","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ha", {value: new LanguageI18N("هَوُسَ","ha","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "hak", {value: new LanguageI18N("客家語/Hak-kâ-ngî","hak","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "haw", {value: new LanguageI18N("Hawai`i","haw","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "he", {value: new LanguageI18N("עברית","he","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "hi", {value: new LanguageI18N("हिन्दी","hi","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ho", {value: new LanguageI18N("Hiri Motu","ho","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "hr", {value: new LanguageI18N("Hrvatski","hr","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ht", {value: new LanguageI18N("Krèyol ayisyen","ht","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "hu", {value: new LanguageI18N("Magyar","hu","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "hy", {value: new LanguageI18N("Հայերեն","hy","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "hz", {value: new LanguageI18N("Otsiherero","hz","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ia", {value: new LanguageI18N("Interlingua","ia","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "id", {value: new LanguageI18N("Bahasa Indonesia","id","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ie", {value: new LanguageI18N("Interlingue","ie","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ig", {value: new LanguageI18N("Igbo","ig","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ii", {value: new LanguageI18N("ꆇꉙ / 四川彝语","ii","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ik", {value: new LanguageI18N("Iñupiak","ik","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ilo", {value: new LanguageI18N("Ilokano","ilo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "inh", {value: new LanguageI18N("ГӀалгӀай","inh","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "io", {value: new LanguageI18N("Ido","io","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "is", {value: new LanguageI18N("Íslenska","is","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "it", {value: new LanguageI18N("Italiano","it","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "iu", {value: new LanguageI18N("ᐃᓄᒃᑎᑐᑦ","iu","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ja", {value: new LanguageI18N("日本語","ja","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "jbo", {value: new LanguageI18N("Lojban","jbo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "jv", {value: new LanguageI18N("Basa Jawa","jv","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ka", {value: new LanguageI18N("ქართული","ka","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "kg", {value: new LanguageI18N("KiKongo","kg","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ki", {value: new LanguageI18N("Gĩkũyũ","ki","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "kj", {value: new LanguageI18N("Kuanyama","kj","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "kk", {value: new LanguageI18N("Қазақша","kk","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "kl", {value: new LanguageI18N("Kalaallisut","kl","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "km", {value: new LanguageI18N("ភាសាខ្មែរ","km","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "kn", {value: new LanguageI18N("ಕನ್ನಡ","kn","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "khw", {value: new LanguageI18N("کھوار","khw","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ko", {value: new LanguageI18N("한국어","ko","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "kr", {value: new LanguageI18N("Kanuri","kr","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ks", {value: new LanguageI18N("कॉशुर / کٲشُر","ks","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ksh", {value: new LanguageI18N("Ripoarisch","ksh","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ku", {value: new LanguageI18N("Kurdî","ku","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "kv", {value: new LanguageI18N("Коми","kv","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "kw", {value: new LanguageI18N("Kernewek","kw","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ky", {value: new LanguageI18N("Kırgızca / Кыргызча","ky","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "la", {value: new LanguageI18N("Latina","la","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "lad", {value: new LanguageI18N("Dzhudezmo / Djudeo-Espanyol","lad","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "lan", {value: new LanguageI18N("Leb Lango / Luo","lan","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "lb", {value: new LanguageI18N("Lëtzebuergesch","lb","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "lg", {value: new LanguageI18N("Luganda","lg","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "li", {value: new LanguageI18N("Limburgs","li","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "lij", {value: new LanguageI18N("Líguru","lij","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "lmo", {value: new LanguageI18N("Lumbaart","lmo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ln", {value: new LanguageI18N("Lingála","ln","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "lo", {value: new LanguageI18N("ລາວ / Pha xa lao","lo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "lzz", {value: new LanguageI18N("Lazuri / ლაზური","lzz","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "lt", {value: new LanguageI18N("Lietuvių","lt","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "lv", {value: new LanguageI18N("Latviešu","lv","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "map_bms", {value: new LanguageI18N("Basa Banyumasan","map_bms","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "mg", {value: new LanguageI18N("Malagasy","mg","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "man", {value: new LanguageI18N("官話/官话","man","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "mh", {value: new LanguageI18N("Kajin Majel / Ebon","mh","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "mi", {value: new LanguageI18N("Māori","mi","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "min", {value: new LanguageI18N("Minangkabau","min","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "mk", {value: new LanguageI18N("Македонски","mk","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ml", {value: new LanguageI18N("മലയാളം","ml","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "mn", {value: new LanguageI18N("Монгол","mn","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "mo", {value: new LanguageI18N("Moldovenească","mo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "mr", {value: new LanguageI18N("मराठी","mr","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "mrh", {value: new LanguageI18N("Mara","mrh","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ms", {value: new LanguageI18N("Bahasa Melayu","ms","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "mt", {value: new LanguageI18N("bil-Malti","mt","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "mus", {value: new LanguageI18N("Mvskoke","mus","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "mwl", {value: new LanguageI18N("Mirandés","mwl","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "my", {value: new LanguageI18N("Myanmasa","my","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "na", {value: new LanguageI18N("Dorerin Naoero","na","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "nah", {value: new LanguageI18N("Nahuatl","nah","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "nap", {value: new LanguageI18N("Nnapulitano","nap","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "nd", {value: new LanguageI18N("Sindebele","nd","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "nds", {value: new LanguageI18N("Plattdüütsch","nds","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "nds_nl", {value: new LanguageI18N("Nedersaksisch","nds_nl","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ne", {value: new LanguageI18N("नेपाली","ne","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "new", {value: new LanguageI18N("नेपालभाषा / Newah Bhaye","new","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ng", {value: new LanguageI18N("Oshiwambo","ng","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "nl", {value: new LanguageI18N("Nederlands","nl","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "nn", {value: new LanguageI18N("Norsk (nynorsk)","nn","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "no", {value: new LanguageI18N("Norsk (bokmål / riksmål)","no","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "nr", {value: new LanguageI18N("isiNdebele","nr","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "nso", {value: new LanguageI18N("Sesotho sa Leboa / Sepedi","nso","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "nrm", {value: new LanguageI18N("Nouormand / Normaund","nrm","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "nv", {value: new LanguageI18N("Diné bizaad","nv","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ny", {value: new LanguageI18N("Chi-Chewa","ny","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "oc", {value: new LanguageI18N("Occitan","oc","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "oj", {value: new LanguageI18N("ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin","oj","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "om", {value: new LanguageI18N("Oromoo","om","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "or", {value: new LanguageI18N("ଓଡ଼ିଆ","or","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "os", {value: new LanguageI18N("Иронау","os","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "pa", {value: new LanguageI18N("ਪੰਜਾਬੀ / پنجابی","pa","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "pag", {value: new LanguageI18N("Pangasinan","pag","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "pam", {value: new LanguageI18N("Kapampangan","pam","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "pap", {value: new LanguageI18N("Papiamentu","pap","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "pdc", {value: new LanguageI18N("Deitsch","pdc","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "pi", {value: new LanguageI18N("Pāli / पाऴि","pi","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "pih", {value: new LanguageI18N("Norfuk","pih","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "pl", {value: new LanguageI18N("Polski","pl","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "pms", {value: new LanguageI18N("Piemontèis","pms","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ps", {value: new LanguageI18N("پښتو","ps","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "pt", {value: new LanguageI18N("Português","pt","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "qu", {value: new LanguageI18N("Runa Simi","qu","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "rm", {value: new LanguageI18N("Rumantsch","rm","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "rmy", {value: new LanguageI18N("Romani / रोमानी","rmy","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "rn", {value: new LanguageI18N("Kirundi","rn","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ro", {value: new LanguageI18N("Română","ro","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "roa_rup", {value: new LanguageI18N("Armâneashti","roa_rup","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ru", {value: new LanguageI18N("Русский","ru","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "rw", {value: new LanguageI18N("Kinyarwandi","rw","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sa", {value: new LanguageI18N("संस्कृतम्","sa","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sc", {value: new LanguageI18N("Sardu","sc","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "scn", {value: new LanguageI18N("Sicilianu","scn","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sco", {value: new LanguageI18N("Scots","sco","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sd", {value: new LanguageI18N("सिंधी / سنڌي‎","sd","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "se", {value: new LanguageI18N("Davvisámegiella","se","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sg", {value: new LanguageI18N("Sängö","sg","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sh", {value: new LanguageI18N("Srpskohrvatski / Српскохрватски","sh","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "si", {value: new LanguageI18N("සිංහල","si","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "simple", {value: new LanguageI18N("Simple English","simple","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sk", {value: new LanguageI18N("Slovenčina","sk","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sl", {value: new LanguageI18N("Slovenščina","sl","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sm", {value: new LanguageI18N("Gagana Samoa","sm","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sn", {value: new LanguageI18N("chiShona","sn","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "so", {value: new LanguageI18N("Soomaaliga","so","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sq", {value: new LanguageI18N("Shqip","sq","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sr", {value: new LanguageI18N("Српски","sr","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ss", {value: new LanguageI18N("SiSwati","ss","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "st", {value: new LanguageI18N("Sesotho","st","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "su", {value: new LanguageI18N("Basa Sunda","su","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sv", {value: new LanguageI18N("Svenska","sv","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "sw", {value: new LanguageI18N("Kiswahili","sw","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ta", {value: new LanguageI18N("தமிழ்","ta","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "te", {value: new LanguageI18N("తెలుగు","te","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "tet", {value: new LanguageI18N("Tetun","tet","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "tg", {value: new LanguageI18N("Тоҷикӣ","tg","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "th", {value: new LanguageI18N("ไทย / Phasa Thai","th","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ti", {value: new LanguageI18N("ትግርኛ","ti","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "tk", {value: new LanguageI18N("Туркмен / تركمن","tk","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "tl", {value: new LanguageI18N("Tagalog / ᜆᜄᜎᜓᜄ᜔","tl","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "tlh", {value: new LanguageI18N("tlhIngan-Hol","tlh","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "tn", {value: new LanguageI18N("Setswana","tn","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "to", {value: new LanguageI18N("Lea Faka-Tonga","to","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "tpi", {value: new LanguageI18N("Tok Pisin","tpi","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "tr", {value: new LanguageI18N("Türkçe","tr","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ts", {value: new LanguageI18N("Xitsonga","ts","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "tt", {value: new LanguageI18N("Tatarça","tt","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "tum", {value: new LanguageI18N("chiTumbuka","tum","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "tw", {value: new LanguageI18N("Twi","tw","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ty", {value: new LanguageI18N("Reo Mā`ohi","ty","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "udm", {value: new LanguageI18N("Удмурт кыл","udm","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ug", {value: new LanguageI18N("Uyƣurqə / ئۇيغۇرچە","ug","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "uk", {value: new LanguageI18N("Українська","uk","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ur", {value: new LanguageI18N("اردو","ur","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "uz", {value: new LanguageI18N("Ўзбек","uz","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "uz_AF", {value: new LanguageI18N("اوزبیکی","uz_AF","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "ve", {value: new LanguageI18N("Tshivenḓa","ve","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "vi", {value: new LanguageI18N("Tiếng Việt","vi","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "vec", {value: new LanguageI18N("Vèneto","vec","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "vls", {value: new LanguageI18N("West-Vlaoms","vls","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "vo", {value: new LanguageI18N("Volapük","vo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "wa", {value: new LanguageI18N("Walon","wa","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "war", {value: new LanguageI18N("Winaray / Binisaya Lineyte-Samarnon","war","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "wo", {value: new LanguageI18N("Wollof","wo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "xal", {value: new LanguageI18N("Хальмг","xal","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "xh", {value: new LanguageI18N("isiXhosa","xh","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "xmf", {value: new LanguageI18N("მარგალური","xmf","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "yi", {value: new LanguageI18N("ייִדיש","yi","rtl"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "yo", {value: new LanguageI18N("Yorùbá","yo","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "za", {value: new LanguageI18N("Cuengh / Tôô / 壮语","za","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "zg", {value: new LanguageI18N("ⵜⴰⵎⴰⵣⵉⵖⵜ","zg","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "zh", {value: new LanguageI18N("中文","zh","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "zh_classical", {value: new LanguageI18N("文言","zh_classical","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "zh_min_nan", {value: new LanguageI18N("Bân-lâm-gú","zh_min_nan","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "zh_yue", {value: new LanguageI18N("粵語 / 粤语","zh_yue","ltr"), writable: true, enumerable: true, configurable: true});
        Object.defineProperty(this, "zu", {value: new LanguageI18N("isiZulu","zu","ltr"), writable: true, enumerable: true, configurable: true});  
    }

    static isLanguage(code) {
        return  WorldLanguages.WorldLanguagesInstance[code] != null;
    }

    static getLanguage(code) {
        return  WorldLanguages.WorldLanguagesInstance[code];
    }
}