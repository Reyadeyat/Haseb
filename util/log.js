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

export class LogLevel {

    static NONE = new LogLevel('NONE', 10000);
    static FATAL = new LogLevel('FATAL', 990);
    static ERROR = new LogLevel('ERROR', 890);
    static WARNING = new LogLevel('WARNING', 790);
    static INFO = new LogLevel('INFO', 690);
    static DEBUG = new LogLevel('DEBUG', 590);
    static DEBUG_LOGIC = new LogLevel('DEBUG_LOGIC', 580);
    static DEBUG_DATA = new LogLevel('DEBUG_DATA', 570);
    static TRACE = new LogLevel('TRACE', 490);
    static TRACE_LOGIC = new LogLevel('TRACE_LOGIC', 480);
    static TRACE_DATA = new LogLevel('TRACE_DATA', 470);

    constructor(log_level_name, log_level) {
        this.log_level_name = log_level_name;
        this.log_level = log_level;
    }

    getName() {
        return this.log_level_name;
    }

    getLevel() {
        return this.log_level;
    }

    static getLogLevel(log_level_name) {
        switch (log_level_name.toUpperCase()) {
            case 'NONE': return LogLevel.NONE;
            case 'FATAL': return LogLevel.FATAL;
            case 'ERROR': return LogLevel.ERROR;
            case 'WARNING': return LogLevel.WARNING;
            case 'INFO': return LogLevel.INFO;
            case 'DEBUG': return LogLevel.DEBUG;
            case 'DEBUG_LOGIC': return LogLevel.DEBUG_LOGIC;
            case 'DEBUG_DATA': return LogLevel.DEBUG_DATA;
            case 'TRACE': return LogLevel.TRACE;
            case 'TRACE_LOGIC': return LogLevel.TRACE_LOGIC;
            case 'TRACE_DATA': return LogLevel.TRACE_DATA;
        }
        throw new Error("Undefined Log Level Name '" + log_level_name.toUpperCase() + "'");
    }

    static getLogLevelConsoleColor(log_level_name) {
        switch (log_level_name) {
            case 'NONE': return '\x1b[90m';
            case 'FATAL': return '\x1b[37m\x1b[41m';
            case 'ERROR': return '\x1b[31m';
            case 'WARNING': return '\x1b[33m';
            case 'INFO': return '\x1b[36m';
            case 'DEBUG': return '\x1b[34m';
            case 'DEBUG_LOGIC': return '\x1b[94m';
            case 'DEBUG_DATA': return '\x1b[92m';
            case 'TRACE': return '\x1b[35m';
            case 'TRACE_LOGIC': return '\x1b[95m';
            case 'TRACE_DATA': return '\x1b[93m';
        }
        throw new Error("Undefined Log Level '" + log_level_name.toUpperCase() + "'");
    }

    static getLogLevelCssColor(log_level_name) {
        switch (log_level_name) {
            case 'NONE': return 'color: #808080';
            case 'FATAL': return 'color: #FFFFFF; background-color: #FF0000; font-weight: bold; padding: 5px;';
            case 'ERROR':return 'color: #FF0000';
            case 'WARNING': return 'color: #FFFF00';
            case 'INFO': return 'color: #00FFFF';
            case 'DEBUG': return 'color: #0000FF';
            case 'DEBUG_LOGIC': return 'color: #ADD8E6';
            case 'DEBUG_DATA': return 'color: #90EE90';
            case 'TRACE': return 'color: #FF00FF';
            case 'TRACE_LOGIC': return 'color: #DDA0DD';
            case 'TRACE_DATA': return 'color: #FFFFE0';
        }
        throw new Error("Undefined Log Level '" + log_level_name.toUpperCase() + "'");
    }

    static getLogLevelCssColorClass() {
        return `
.log-none {
    color: #808080;
}

.log-fatal {
    color: #FFFFFF;
    background-color: #FF0000;
}

.log-error {
    color: #FF0000;
}

.log-warning {
    color: #FFFF00;
}

.log-info {
    color: #00FFFF;
}

.log-debug {
    color: #0000FF;
}

.log-debug-logic {
    color: #ADD8E6;
}

.log-debug-data {
    color: #90EE90;
}

.log-trace {
    color: #FF00FF;
}

.log-trace-logic {
    color: #DDA0DD;
}

.log-trace-data {
    color: #FFFFE0;
}
        `;
    }
    
}

export class Log {
    
    constructor() {
        this.log_space_level_map = new Map();
    }

    static isLoggable(space, level) {
        return level <= this.getLogLevel(space, level)
    }

    static setLogLevel(space, log_level) {
        this.log_space_level_map.set(space, log_level);
    }

    static getLogLevel(space) {
        if (this.log_space_level_map.get(space) == null) {
            this.log_space_level_map.set(space, LogLevel.INFO);
            return LogLevel.INFO;
        }
        return this.log_space_level_map.get(space);
    }

    static log(space, level, msg, ...args) {
        if (level > this.getLogLevel(space, level)) {
            return;
        }
        console.info("FATAL: " + msg + Log.dump(...args), LogLevel.getLogLevelConsoleColor(level));
    }

    
    static fatal(msg, ...args) {
        if (this.getLogLevel(space, level) > LogLevel.FATAL) {
            return;
        }
        console.info("FATAL: " + msg + Log.dump(...args), LogLevel.getLogLevelConsoleColor(level));
    }

    static error(msg, ...args) {
        if (this.getLogLevel(space, level) > LogLevel.ERROR) {
            return;
        }
        console.info("ERROR: " + msg + Log.dump(...args), LogLevel.getLogLevelConsoleColor(level));
    }
    
    static warning(msg, ...args) {
        if (this.getLogLevel(space, level) > LogLevel.WARNING) {
            return;
        }
        console.info("WARNING: " + msg + Log.dump(...args), LogLevel.getLogLevelConsoleColor(level));
    }
    
    static info(msg, ...args) {
        if (this.getLogLevel(space, level) > LogLevel.INFO) {
            return;
        }
        console.info("INFO: " + msg + Log.dump(...args), LogLevel.getLogLevelConsoleColor(level));
    }

    static debug(msg, ...args) {
        if (this.getLogLevel(space, level) > LogLevel.DEBUG) {
            return;
        }
        console.info("DEBUG: " + msg + Log.dump(...args), LogLevel.getLogLevelConsoleColor(level));
    }
    
    static debug_logic(msg, ...args) {
        if (this.getLogLevel(space, level) > LogLevel.DEBUG_LOGIC) {
            return;
        }
        console.info("DEBUG_LOGIC: " + msg + Log.dump(...args), LogLevel.getLogLevelConsoleColor(level));
    }

    static debug_data(msg, ...args) {
        if (this.getLogLevel(space, level) > LogLevel.DEBUG_DATA) {
            return;
        }
        console.info("DEBUG_DATA: " + msg + Log.dump(...args), LogLevel.getLogLevelConsoleColor(level));
    }

    static trace(msg, ...args) {
        if (this.getLogLevel(space, level) > LogLevel.TRACE) {
            return;
        }
        console.info("TRACE: " + msg + Log.dump(...args), LogLevel.getLogLevelConsoleColor(level));
    }

    static trace_logic(msg, ...args) {
        if (this.getLogLevel(space, level) > LogLevel.TRACE_LOGIC) {
            return;
        }
        console.info("TRACE_LOGIC: " + msg + Log.dump(...args), LogLevel.getLogLevelConsoleColor(level));
    }
    
    static trace_data(msg, ...args) {
        if (this.getLogLevel(space, level) > LogLevel.TRACE_DATA) {
            return;
        }
        console.info("TRACE_DATA: " + msg + Log.dump(...args), LogLevel.getLogLevelConsoleColor(level));
    }

    static getLogLevel(log_level_name) {
        LogLevel.getLogLevel(log_level_name);
    }

    static dump(...args) {
        if (args == null || args.length == 0) {
            return "";
        }
        let obj = {};
        let key = args[0].split(",");
        for (let i = 1; i < args.length; i++) {
            if (Array.isArray(args[i]) == true) {
                for (let x = 0; x < args[i].length; x++) {
                    obj[key[i-1].trim()+"_"+x] = args[i][x];
                }
            } else {
                obj[key[i-1].trim()] = args[i];
            }
        }
        return JSON.stringify(obj);
    }
}