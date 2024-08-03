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

export class Log {
    static FATAL: number;
    static fatal(msg: any, ...args: any[]): void;
    static ERROR: number;
    static error(msg: any, ...args: any[]): void;
    static WARNING: number;
    static warning(msg: any, ...args: any[]): void;
    static INFO: number;
    static info(msg: any, ...args: any[]): void;
    static DEBUG: number;
    static debug(msg: any, ...args: any[]): void;
    static DEBUG_LOGIC: number;
    static debug_logic(msg: any, ...args: any[]): void;
    static DEBUG_DATA: number;
    static debug_data(msg: any, ...args: any[]): void;
    static TRACE: number;
    static trace(msg: any, ...args: any[]): void;
    static TRACE_LOGIC: number;
    static trace_logic(msg: any, ...args: any[]): void;
    static TRACE_DATA: number;
    static trace_data(msg: any, ...args: any[]): void;
    static log_level: typeof Log.info;
    static is(log_level: any): boolean;
    static getLogLevel(log_level_name: any): number;
    static setLogLevel(log_level_name: any): void;
    static dump(...args: any[]): string;
}
