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

export class LogLevel {
    static NONE: LogLevel;
    static FATAL: LogLevel;
    static ERROR: LogLevel;
    static WARNING: LogLevel;
    static INFO: LogLevel;
    static DEBUG: LogLevel;
    static DEBUG_LOGIC: LogLevel;
    static DEBUG_DATA: LogLevel;
    static TRACE: LogLevel;
    static TRACE_LOGIC: LogLevel;
    static TRACE_DATA: LogLevel;
    constructor(log_level_name: string, log_level: number);
    getName(): string;
    getLevel(): number;
    static getLogLevel(log_level_name: string): LogLevel;
    static getLogLevelConsoleColor(log_level_name: string): "\u001B[90m" | "\u001B[37m\u001B[41m" | "\u001B[31m" | "\u001B[33m" | "\u001B[36m" | "\u001B[34m" | "\u001B[94m" | "\u001B[92m" | "\u001B[35m" | "\u001B[95m" | "\u001B[93m";
    static getLogLevelCssColor(log_level_name: string): "color: #808080" | "color: #FFFFFF; background-color: #FF0000; font-weight: bold; padding: 5px;" | "color: #FF0000" | "color: #FFFF00" | "color: #00FFFF" | "color: #0000FF" | "color: #ADD8E6" | "color: #90EE90" | "color: #FF00FF" | "color: #DDA0DD" | "color: #FFFFE0";
    static getLogLevelCssColorClass(): string;
}
export class Log {
    private log_space_level_map: Map<string, LogLevel>;
    constructor();
    static isLoggable(space: string, log_level: LogLevel): boolean;
    static setLogLevel(space: string, log_level: LogLevel): void;
    static getLogLevel(space: string): any;
    static log(space: string, level: any, msg: string, ...args: any[]): void;
    static fatal(msg: string, ...args: any[]): void;
    static error(msg: string, ...args: any[]): void;
    static warning(msg: string, ...args: any[]): void;
    static info(msg: string, ...args: any[]): void;
    static debug(msg: string, ...args: any[]): void;
    static debug_logic(msg: string, ...args: any[]): void;
    static debug_data(msg: string, ...args: any[]): void;
    static trace(msg: string, ...args: any[]): void;
    static trace_logic(msg: string, ...args: any[]): void;
    static trace_data(msg: string, ...args: any[]): void;
    static dump(...args: any[]): string;
}
