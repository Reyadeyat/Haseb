/*
 * Copyright (C) 2023 Reyadeyat
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

import { Log } from './log.js'

export class Hesab {

    constructor(hesab_json) {
        this.hesab_json = hesab_json;
        Log.info("startup haseb - hesab_json =>\n"+hesab_json);
    }

    toString() {
        return 'Hesab of => ' + this.hesab_json;
    }


}
