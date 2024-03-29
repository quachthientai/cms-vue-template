import {
  __commonJS
} from "./chunk-Y2F7D3TJ.js";

// node_modules/short-unique-id/dist/short-unique-id.js
var require_short_unique_id = __commonJS({
  "node_modules/short-unique-id/dist/short-unique-id.js"(exports, module) {
    var ShortUniqueId = (() => {
      var __defProp = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames = Object.getOwnPropertyNames;
      var __getOwnPropSymbols = Object.getOwnPropertySymbols;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __propIsEnum = Object.prototype.propertyIsEnumerable;
      var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
      var __spreadValues = (a, b) => {
        for (var prop in b || (b = {}))
          if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        if (__getOwnPropSymbols)
          for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
              __defNormalProp(a, prop, b[prop]);
          }
        return a;
      };
      var __export = (target, all) => {
        for (var name in all)
          __defProp(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
              __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
      var __publicField = (obj, key, value) => {
        __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
        return value;
      };
      var src_exports = {};
      __export(src_exports, {
        DEFAULT_OPTIONS: () => DEFAULT_OPTIONS,
        DEFAULT_UUID_LENGTH: () => DEFAULT_UUID_LENGTH,
        default: () => ShortUniqueId2
      });
      var version = "5.0.3";
      var DEFAULT_UUID_LENGTH = 6;
      var DEFAULT_OPTIONS = {
        dictionary: "alphanum",
        shuffle: true,
        debug: false,
        length: DEFAULT_UUID_LENGTH,
        counter: 0
      };
      var _ShortUniqueId = class _ShortUniqueId {
        constructor(argOptions = {}) {
          __publicField(this, "counter");
          __publicField(this, "debug");
          __publicField(this, "dict");
          __publicField(this, "version");
          __publicField(this, "dictIndex", 0);
          __publicField(this, "dictRange", []);
          __publicField(this, "lowerBound", 0);
          __publicField(this, "upperBound", 0);
          __publicField(this, "dictLength", 0);
          __publicField(this, "uuidLength");
          __publicField(this, "_digit_first_ascii", 48);
          __publicField(this, "_digit_last_ascii", 58);
          __publicField(this, "_alpha_lower_first_ascii", 97);
          __publicField(this, "_alpha_lower_last_ascii", 123);
          __publicField(this, "_hex_last_ascii", 103);
          __publicField(this, "_alpha_upper_first_ascii", 65);
          __publicField(this, "_alpha_upper_last_ascii", 91);
          __publicField(this, "_number_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii]
          });
          __publicField(this, "_alpha_dict_ranges", {
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          });
          __publicField(this, "_alpha_lower_dict_ranges", {
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
          });
          __publicField(this, "_alpha_upper_dict_ranges", {
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          });
          __publicField(this, "_alphanum_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          });
          __publicField(this, "_alphanum_lower_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
          });
          __publicField(this, "_alphanum_upper_dict_ranges", {
            digits: [this._digit_first_ascii, this._digit_last_ascii],
            upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
          });
          __publicField(this, "_hex_dict_ranges", {
            decDigits: [this._digit_first_ascii, this._digit_last_ascii],
            alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
          });
          __publicField(this, "_dict_ranges", {
            _number_dict_ranges: this._number_dict_ranges,
            _alpha_dict_ranges: this._alpha_dict_ranges,
            _alpha_lower_dict_ranges: this._alpha_lower_dict_ranges,
            _alpha_upper_dict_ranges: this._alpha_upper_dict_ranges,
            _alphanum_dict_ranges: this._alphanum_dict_ranges,
            _alphanum_lower_dict_ranges: this._alphanum_lower_dict_ranges,
            _alphanum_upper_dict_ranges: this._alphanum_upper_dict_ranges,
            _hex_dict_ranges: this._hex_dict_ranges
          });
          __publicField(this, "log", (...args) => {
            const finalArgs = [...args];
            finalArgs[0] = `[short-unique-id] ${args[0]}`;
            if (this.debug === true) {
              if (typeof console !== "undefined" && console !== null) {
                return console.log(...finalArgs);
              }
            }
          });
          __publicField(this, "setDictionary", (dictionary2, shuffle2) => {
            let finalDict;
            if (dictionary2 && Array.isArray(dictionary2) && dictionary2.length > 1) {
              finalDict = dictionary2;
            } else {
              finalDict = [];
              let i;
              this.dictIndex = i = 0;
              const rangesName = `_${dictionary2}_dict_ranges`;
              const ranges = this._dict_ranges[rangesName];
              Object.keys(ranges).forEach((rangeType) => {
                const rangeTypeKey = rangeType;
                this.dictRange = ranges[rangeTypeKey];
                this.lowerBound = this.dictRange[0];
                this.upperBound = this.dictRange[1];
                for (this.dictIndex = i = this.lowerBound; this.lowerBound <= this.upperBound ? i < this.upperBound : i > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? i += 1 : i -= 1) {
                  finalDict.push(String.fromCharCode(this.dictIndex));
                }
              });
            }
            if (shuffle2) {
              const PROBABILITY = 0.5;
              finalDict = finalDict.sort(() => Math.random() - PROBABILITY);
            }
            this.dict = finalDict;
            this.dictLength = this.dict.length;
            this.setCounter(0);
          });
          __publicField(this, "seq", () => {
            return this.sequentialUUID();
          });
          __publicField(this, "sequentialUUID", () => {
            let counterDiv;
            let counterRem;
            let id = "";
            counterDiv = this.counter;
            do {
              counterRem = counterDiv % this.dictLength;
              counterDiv = Math.trunc(counterDiv / this.dictLength);
              id += this.dict[counterRem];
            } while (counterDiv !== 0);
            this.counter += 1;
            return id;
          });
          __publicField(this, "rnd", (uuidLength = this.uuidLength || DEFAULT_UUID_LENGTH) => {
            return this.randomUUID(uuidLength);
          });
          __publicField(this, "randomUUID", (uuidLength = this.uuidLength || DEFAULT_UUID_LENGTH) => {
            let id;
            let randomPartIdx;
            let j;
            if (uuidLength === null || typeof uuidLength === "undefined" || uuidLength < 1) {
              throw new Error("Invalid UUID Length Provided");
            }
            const isPositive = uuidLength >= 0;
            id = "";
            for (j = 0; j < uuidLength; j += 1) {
              randomPartIdx = parseInt(
                (Math.random() * this.dictLength).toFixed(0),
                10
              ) % this.dictLength;
              id += this.dict[randomPartIdx];
            }
            return id;
          });
          __publicField(this, "fmt", (format, date) => {
            return this.formattedUUID(format, date);
          });
          __publicField(this, "formattedUUID", (format, date) => {
            const fnMap = {
              "$r": this.randomUUID,
              "$s": this.sequentialUUID,
              "$t": this.stamp
            };
            const result = format.replace(
              /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
              (m) => {
                const fn = m.slice(0, 2);
                const len = parseInt(m.slice(2), 10);
                if (fn === "$s") {
                  return fnMap[fn]().padStart(len, "0");
                }
                if (fn === "$t" && date) {
                  return fnMap[fn](len, date);
                }
                return fnMap[fn](len);
              }
            );
            return result;
          });
          __publicField(this, "availableUUIDs", (uuidLength = this.uuidLength) => {
            return parseFloat(
              Math.pow([...new Set(this.dict)].length, uuidLength).toFixed(0)
            );
          });
          __publicField(this, "approxMaxBeforeCollision", (rounds = this.availableUUIDs(this.uuidLength)) => {
            return parseFloat(
              Math.sqrt(Math.PI / 2 * rounds).toFixed(20)
            );
          });
          __publicField(this, "collisionProbability", (rounds = this.availableUUIDs(this.uuidLength), uuidLength = this.uuidLength) => {
            return parseFloat(
              (this.approxMaxBeforeCollision(rounds) / this.availableUUIDs(uuidLength)).toFixed(20)
            );
          });
          __publicField(this, "uniqueness", (rounds = this.availableUUIDs(this.uuidLength)) => {
            const score = parseFloat(
              (1 - this.approxMaxBeforeCollision(rounds) / rounds).toFixed(20)
            );
            return score > 1 ? 1 : score < 0 ? 0 : score;
          });
          __publicField(this, "getVersion", () => {
            return this.version;
          });
          __publicField(this, "stamp", (finalLength, date) => {
            const hexStamp = Math.floor(+(date || /* @__PURE__ */ new Date()) / 1e3).toString(16);
            if (typeof finalLength === "number" && finalLength === 0) {
              return hexStamp;
            }
            if (typeof finalLength !== "number" || finalLength < 10) {
              throw new Error(
                [
                  "Param finalLength must be a number greater than or equal to 10,",
                  "or 0 if you want the raw hexadecimal timestamp"
                ].join("\n")
              );
            }
            const idLength = finalLength - 9;
            const rndIdx = Math.round(Math.random() * (idLength > 15 ? 15 : idLength));
            const id = this.randomUUID(idLength);
            return `${id.substring(0, rndIdx)}${hexStamp}${id.substring(rndIdx)}${rndIdx.toString(16)}`;
          });
          __publicField(this, "parseStamp", (suid, format) => {
            if (format && !/t0|t[1-9]\d{1,}/.test(format)) {
              throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
            }
            const stamp = format ? format.replace(
              /\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g,
              (m) => {
                const fnMap = {
                  "$r": (len2) => [...Array(len2)].map(() => "r").join(""),
                  "$s": (len2) => [...Array(len2)].map(() => "s").join(""),
                  "$t": (len2) => [...Array(len2)].map(() => "t").join("")
                };
                const fn = m.slice(0, 2);
                const len = parseInt(m.slice(2), 10);
                return fnMap[fn](len);
              }
            ).replace(
              /^(.*?)(t{8,})(.*)$/g,
              (_m, p1, p2) => {
                return suid.substring(p1.length, p1.length + p2.length);
              }
            ) : suid;
            if (stamp.length === 8) {
              return new Date(parseInt(stamp, 16) * 1e3);
            }
            if (stamp.length < 10) {
              throw new Error("Stamp length invalid");
            }
            const rndIdx = parseInt(stamp.substring(stamp.length - 1), 16);
            return new Date(parseInt(stamp.substring(rndIdx, rndIdx + 8), 16) * 1e3);
          });
          __publicField(this, "setCounter", (counter2) => {
            this.counter = counter2;
          });
          const options = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS), argOptions);
          this.counter = 0;
          this.debug = false;
          this.dict = [];
          this.version = version;
          const {
            dictionary,
            shuffle,
            length,
            counter
          } = options;
          this.uuidLength = length;
          this.setDictionary(dictionary, shuffle);
          this.setCounter(counter);
          this.debug = options.debug;
          this.log(this.dict);
          this.log(
            `Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`
          );
          this.log = this.log.bind(this);
          this.setDictionary = this.setDictionary.bind(this);
          this.setCounter = this.setCounter.bind(this);
          this.seq = this.seq.bind(this);
          this.sequentialUUID = this.sequentialUUID.bind(this);
          this.rnd = this.rnd.bind(this);
          this.randomUUID = this.randomUUID.bind(this);
          this.fmt = this.fmt.bind(this);
          this.formattedUUID = this.formattedUUID.bind(this);
          this.availableUUIDs = this.availableUUIDs.bind(this);
          this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this);
          this.collisionProbability = this.collisionProbability.bind(this);
          this.uniqueness = this.uniqueness.bind(this);
          this.getVersion = this.getVersion.bind(this);
          this.stamp = this.stamp.bind(this);
          this.parseStamp = this.parseStamp.bind(this);
          return this;
        }
      };
      __publicField(_ShortUniqueId, "default", _ShortUniqueId);
      var ShortUniqueId2 = _ShortUniqueId;
      return __toCommonJS(src_exports);
    })();
    "undefined" != typeof module && (module.exports = ShortUniqueId.default), "undefined" != typeof window && (ShortUniqueId = ShortUniqueId.default);
  }
});
export default require_short_unique_id();
//# sourceMappingURL=short-unique-id.js.map
