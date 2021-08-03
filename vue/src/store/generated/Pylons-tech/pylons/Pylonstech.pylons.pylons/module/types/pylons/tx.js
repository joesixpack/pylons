/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { DoubleKeyValue, LongKeyValue, StringKeyValue } from '../pylons/item';
import { Coin } from '../cosmos/base/v1beta1/coin';
import { ItemInput, EntriesList, WeightedOutputs } from '../pylons/recipe';
export const protobufPackage = 'Pylonstech.pylons.pylons';
const baseMsgCreateItem = {
    creator: '',
    ID: '',
    cookbookID: '',
    nodeVersion: '',
    ownerRecipeID: '',
    ownerTradeID: '',
    tradable: false,
    lastUpdate: 0,
    transferFee: 0
};
export const MsgCreateItem = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== '') {
            writer.uint32(18).string(message.ID);
        }
        if (message.cookbookID !== '') {
            writer.uint32(26).string(message.cookbookID);
        }
        if (message.nodeVersion !== '') {
            writer.uint32(34).string(message.nodeVersion);
        }
        for (const v of message.Doubles) {
            DoubleKeyValue.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.Longs) {
            LongKeyValue.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.Strings) {
            StringKeyValue.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.ownerRecipeID !== '') {
            writer.uint32(74).string(message.ownerRecipeID);
        }
        if (message.ownerTradeID !== '') {
            writer.uint32(82).string(message.ownerTradeID);
        }
        if (message.tradable === true) {
            writer.uint32(88).bool(message.tradable);
        }
        if (message.lastUpdate !== 0) {
            writer.uint32(96).uint64(message.lastUpdate);
        }
        if (message.transferFee !== 0) {
            writer.uint32(104).uint64(message.transferFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateItem };
        message.Doubles = [];
        message.Longs = [];
        message.Strings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                case 3:
                    message.cookbookID = reader.string();
                    break;
                case 4:
                    message.nodeVersion = reader.string();
                    break;
                case 5:
                    message.Doubles.push(DoubleKeyValue.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.Longs.push(LongKeyValue.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.Strings.push(StringKeyValue.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.ownerRecipeID = reader.string();
                    break;
                case 10:
                    message.ownerTradeID = reader.string();
                    break;
                case 11:
                    message.tradable = reader.bool();
                    break;
                case 12:
                    message.lastUpdate = longToNumber(reader.uint64());
                    break;
                case 13:
                    message.transferFee = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateItem };
        message.Doubles = [];
        message.Longs = [];
        message.Strings = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = String(object.cookbookID);
        }
        else {
            message.cookbookID = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = String(object.nodeVersion);
        }
        else {
            message.nodeVersion = '';
        }
        if (object.Doubles !== undefined && object.Doubles !== null) {
            for (const e of object.Doubles) {
                message.Doubles.push(DoubleKeyValue.fromJSON(e));
            }
        }
        if (object.Longs !== undefined && object.Longs !== null) {
            for (const e of object.Longs) {
                message.Longs.push(LongKeyValue.fromJSON(e));
            }
        }
        if (object.Strings !== undefined && object.Strings !== null) {
            for (const e of object.Strings) {
                message.Strings.push(StringKeyValue.fromJSON(e));
            }
        }
        if (object.ownerRecipeID !== undefined && object.ownerRecipeID !== null) {
            message.ownerRecipeID = String(object.ownerRecipeID);
        }
        else {
            message.ownerRecipeID = '';
        }
        if (object.ownerTradeID !== undefined && object.ownerTradeID !== null) {
            message.ownerTradeID = String(object.ownerTradeID);
        }
        else {
            message.ownerTradeID = '';
        }
        if (object.tradable !== undefined && object.tradable !== null) {
            message.tradable = Boolean(object.tradable);
        }
        else {
            message.tradable = false;
        }
        if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
            message.lastUpdate = Number(object.lastUpdate);
        }
        else {
            message.lastUpdate = 0;
        }
        if (object.transferFee !== undefined && object.transferFee !== null) {
            message.transferFee = Number(object.transferFee);
        }
        else {
            message.transferFee = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
        message.nodeVersion !== undefined && (obj.nodeVersion = message.nodeVersion);
        if (message.Doubles) {
            obj.Doubles = message.Doubles.map((e) => (e ? DoubleKeyValue.toJSON(e) : undefined));
        }
        else {
            obj.Doubles = [];
        }
        if (message.Longs) {
            obj.Longs = message.Longs.map((e) => (e ? LongKeyValue.toJSON(e) : undefined));
        }
        else {
            obj.Longs = [];
        }
        if (message.Strings) {
            obj.Strings = message.Strings.map((e) => (e ? StringKeyValue.toJSON(e) : undefined));
        }
        else {
            obj.Strings = [];
        }
        message.ownerRecipeID !== undefined && (obj.ownerRecipeID = message.ownerRecipeID);
        message.ownerTradeID !== undefined && (obj.ownerTradeID = message.ownerTradeID);
        message.tradable !== undefined && (obj.tradable = message.tradable);
        message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
        message.transferFee !== undefined && (obj.transferFee = message.transferFee);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateItem };
        message.Doubles = [];
        message.Longs = [];
        message.Strings = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = object.cookbookID;
        }
        else {
            message.cookbookID = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = object.nodeVersion;
        }
        else {
            message.nodeVersion = '';
        }
        if (object.Doubles !== undefined && object.Doubles !== null) {
            for (const e of object.Doubles) {
                message.Doubles.push(DoubleKeyValue.fromPartial(e));
            }
        }
        if (object.Longs !== undefined && object.Longs !== null) {
            for (const e of object.Longs) {
                message.Longs.push(LongKeyValue.fromPartial(e));
            }
        }
        if (object.Strings !== undefined && object.Strings !== null) {
            for (const e of object.Strings) {
                message.Strings.push(StringKeyValue.fromPartial(e));
            }
        }
        if (object.ownerRecipeID !== undefined && object.ownerRecipeID !== null) {
            message.ownerRecipeID = object.ownerRecipeID;
        }
        else {
            message.ownerRecipeID = '';
        }
        if (object.ownerTradeID !== undefined && object.ownerTradeID !== null) {
            message.ownerTradeID = object.ownerTradeID;
        }
        else {
            message.ownerTradeID = '';
        }
        if (object.tradable !== undefined && object.tradable !== null) {
            message.tradable = object.tradable;
        }
        else {
            message.tradable = false;
        }
        if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
            message.lastUpdate = object.lastUpdate;
        }
        else {
            message.lastUpdate = 0;
        }
        if (object.transferFee !== undefined && object.transferFee !== null) {
            message.transferFee = object.transferFee;
        }
        else {
            message.transferFee = 0;
        }
        return message;
    }
};
const baseMsgCreateItemResponse = {};
export const MsgCreateItemResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateItemResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateItemResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateItemResponse };
        return message;
    }
};
const baseMsgUpdateItem = {
    creator: '',
    ID: '',
    cookbookID: '',
    nodeVersion: '',
    ownerRecipeID: '',
    ownerTradeID: '',
    tradable: false,
    lastUpdate: 0,
    transferFee: 0
};
export const MsgUpdateItem = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== '') {
            writer.uint32(18).string(message.ID);
        }
        if (message.cookbookID !== '') {
            writer.uint32(26).string(message.cookbookID);
        }
        if (message.nodeVersion !== '') {
            writer.uint32(34).string(message.nodeVersion);
        }
        for (const v of message.Doubles) {
            DoubleKeyValue.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.Longs) {
            LongKeyValue.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.Strings) {
            StringKeyValue.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.ownerRecipeID !== '') {
            writer.uint32(74).string(message.ownerRecipeID);
        }
        if (message.ownerTradeID !== '') {
            writer.uint32(82).string(message.ownerTradeID);
        }
        if (message.tradable === true) {
            writer.uint32(88).bool(message.tradable);
        }
        if (message.lastUpdate !== 0) {
            writer.uint32(96).uint64(message.lastUpdate);
        }
        if (message.transferFee !== 0) {
            writer.uint32(104).uint64(message.transferFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateItem };
        message.Doubles = [];
        message.Longs = [];
        message.Strings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                case 3:
                    message.cookbookID = reader.string();
                    break;
                case 4:
                    message.nodeVersion = reader.string();
                    break;
                case 5:
                    message.Doubles.push(DoubleKeyValue.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.Longs.push(LongKeyValue.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.Strings.push(StringKeyValue.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.ownerRecipeID = reader.string();
                    break;
                case 10:
                    message.ownerTradeID = reader.string();
                    break;
                case 11:
                    message.tradable = reader.bool();
                    break;
                case 12:
                    message.lastUpdate = longToNumber(reader.uint64());
                    break;
                case 13:
                    message.transferFee = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateItem };
        message.Doubles = [];
        message.Longs = [];
        message.Strings = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = String(object.cookbookID);
        }
        else {
            message.cookbookID = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = String(object.nodeVersion);
        }
        else {
            message.nodeVersion = '';
        }
        if (object.Doubles !== undefined && object.Doubles !== null) {
            for (const e of object.Doubles) {
                message.Doubles.push(DoubleKeyValue.fromJSON(e));
            }
        }
        if (object.Longs !== undefined && object.Longs !== null) {
            for (const e of object.Longs) {
                message.Longs.push(LongKeyValue.fromJSON(e));
            }
        }
        if (object.Strings !== undefined && object.Strings !== null) {
            for (const e of object.Strings) {
                message.Strings.push(StringKeyValue.fromJSON(e));
            }
        }
        if (object.ownerRecipeID !== undefined && object.ownerRecipeID !== null) {
            message.ownerRecipeID = String(object.ownerRecipeID);
        }
        else {
            message.ownerRecipeID = '';
        }
        if (object.ownerTradeID !== undefined && object.ownerTradeID !== null) {
            message.ownerTradeID = String(object.ownerTradeID);
        }
        else {
            message.ownerTradeID = '';
        }
        if (object.tradable !== undefined && object.tradable !== null) {
            message.tradable = Boolean(object.tradable);
        }
        else {
            message.tradable = false;
        }
        if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
            message.lastUpdate = Number(object.lastUpdate);
        }
        else {
            message.lastUpdate = 0;
        }
        if (object.transferFee !== undefined && object.transferFee !== null) {
            message.transferFee = Number(object.transferFee);
        }
        else {
            message.transferFee = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
        message.nodeVersion !== undefined && (obj.nodeVersion = message.nodeVersion);
        if (message.Doubles) {
            obj.Doubles = message.Doubles.map((e) => (e ? DoubleKeyValue.toJSON(e) : undefined));
        }
        else {
            obj.Doubles = [];
        }
        if (message.Longs) {
            obj.Longs = message.Longs.map((e) => (e ? LongKeyValue.toJSON(e) : undefined));
        }
        else {
            obj.Longs = [];
        }
        if (message.Strings) {
            obj.Strings = message.Strings.map((e) => (e ? StringKeyValue.toJSON(e) : undefined));
        }
        else {
            obj.Strings = [];
        }
        message.ownerRecipeID !== undefined && (obj.ownerRecipeID = message.ownerRecipeID);
        message.ownerTradeID !== undefined && (obj.ownerTradeID = message.ownerTradeID);
        message.tradable !== undefined && (obj.tradable = message.tradable);
        message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
        message.transferFee !== undefined && (obj.transferFee = message.transferFee);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateItem };
        message.Doubles = [];
        message.Longs = [];
        message.Strings = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = object.cookbookID;
        }
        else {
            message.cookbookID = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = object.nodeVersion;
        }
        else {
            message.nodeVersion = '';
        }
        if (object.Doubles !== undefined && object.Doubles !== null) {
            for (const e of object.Doubles) {
                message.Doubles.push(DoubleKeyValue.fromPartial(e));
            }
        }
        if (object.Longs !== undefined && object.Longs !== null) {
            for (const e of object.Longs) {
                message.Longs.push(LongKeyValue.fromPartial(e));
            }
        }
        if (object.Strings !== undefined && object.Strings !== null) {
            for (const e of object.Strings) {
                message.Strings.push(StringKeyValue.fromPartial(e));
            }
        }
        if (object.ownerRecipeID !== undefined && object.ownerRecipeID !== null) {
            message.ownerRecipeID = object.ownerRecipeID;
        }
        else {
            message.ownerRecipeID = '';
        }
        if (object.ownerTradeID !== undefined && object.ownerTradeID !== null) {
            message.ownerTradeID = object.ownerTradeID;
        }
        else {
            message.ownerTradeID = '';
        }
        if (object.tradable !== undefined && object.tradable !== null) {
            message.tradable = object.tradable;
        }
        else {
            message.tradable = false;
        }
        if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
            message.lastUpdate = object.lastUpdate;
        }
        else {
            message.lastUpdate = 0;
        }
        if (object.transferFee !== undefined && object.transferFee !== null) {
            message.transferFee = object.transferFee;
        }
        else {
            message.transferFee = 0;
        }
        return message;
    }
};
const baseMsgUpdateItemResponse = {};
export const MsgUpdateItemResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateItemResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateItemResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateItemResponse };
        return message;
    }
};
const baseMsgDeleteItem = { creator: '', ID: '' };
export const MsgDeleteItem = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== '') {
            writer.uint32(18).string(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteItem };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteItem };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteItem };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        return message;
    }
};
const baseMsgDeleteItemResponse = {};
export const MsgDeleteItemResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteItemResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteItemResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteItemResponse };
        return message;
    }
};
const baseMsgCreateRecipe = {
    creator: '',
    cookbookID: '',
    ID: '',
    name: '',
    description: '',
    version: '',
    blockInterval: 0,
    enabled: false,
    extraInfo: ''
};
export const MsgCreateRecipe = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.cookbookID !== '') {
            writer.uint32(18).string(message.cookbookID);
        }
        if (message.ID !== '') {
            writer.uint32(26).string(message.ID);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.version !== '') {
            writer.uint32(50).string(message.version);
        }
        for (const v of message.coinInputs) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.itemInputs) {
            ItemInput.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.entries !== undefined) {
            EntriesList.encode(message.entries, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.outputs) {
            WeightedOutputs.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.blockInterval !== 0) {
            writer.uint32(88).uint64(message.blockInterval);
        }
        if (message.enabled === true) {
            writer.uint32(96).bool(message.enabled);
        }
        if (message.extraInfo !== '') {
            writer.uint32(106).string(message.extraInfo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.outputs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cookbookID = reader.string();
                    break;
                case 3:
                    message.ID = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.version = reader.string();
                    break;
                case 7:
                    message.coinInputs.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.itemInputs.push(ItemInput.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.entries = EntriesList.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.outputs.push(WeightedOutputs.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.blockInterval = longToNumber(reader.uint64());
                    break;
                case 12:
                    message.enabled = reader.bool();
                    break;
                case 13:
                    message.extraInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.outputs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = String(object.cookbookID);
        }
        else {
            message.cookbookID = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.coinInputs !== undefined && object.coinInputs !== null) {
            for (const e of object.coinInputs) {
                message.coinInputs.push(Coin.fromJSON(e));
            }
        }
        if (object.itemInputs !== undefined && object.itemInputs !== null) {
            for (const e of object.itemInputs) {
                message.itemInputs.push(ItemInput.fromJSON(e));
            }
        }
        if (object.entries !== undefined && object.entries !== null) {
            message.entries = EntriesList.fromJSON(object.entries);
        }
        else {
            message.entries = undefined;
        }
        if (object.outputs !== undefined && object.outputs !== null) {
            for (const e of object.outputs) {
                message.outputs.push(WeightedOutputs.fromJSON(e));
            }
        }
        if (object.blockInterval !== undefined && object.blockInterval !== null) {
            message.blockInterval = Number(object.blockInterval);
        }
        else {
            message.blockInterval = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.extraInfo !== undefined && object.extraInfo !== null) {
            message.extraInfo = String(object.extraInfo);
        }
        else {
            message.extraInfo = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
        message.ID !== undefined && (obj.ID = message.ID);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.version !== undefined && (obj.version = message.version);
        if (message.coinInputs) {
            obj.coinInputs = message.coinInputs.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.coinInputs = [];
        }
        if (message.itemInputs) {
            obj.itemInputs = message.itemInputs.map((e) => (e ? ItemInput.toJSON(e) : undefined));
        }
        else {
            obj.itemInputs = [];
        }
        message.entries !== undefined && (obj.entries = message.entries ? EntriesList.toJSON(message.entries) : undefined);
        if (message.outputs) {
            obj.outputs = message.outputs.map((e) => (e ? WeightedOutputs.toJSON(e) : undefined));
        }
        else {
            obj.outputs = [];
        }
        message.blockInterval !== undefined && (obj.blockInterval = message.blockInterval);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.outputs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = object.cookbookID;
        }
        else {
            message.cookbookID = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.coinInputs !== undefined && object.coinInputs !== null) {
            for (const e of object.coinInputs) {
                message.coinInputs.push(Coin.fromPartial(e));
            }
        }
        if (object.itemInputs !== undefined && object.itemInputs !== null) {
            for (const e of object.itemInputs) {
                message.itemInputs.push(ItemInput.fromPartial(e));
            }
        }
        if (object.entries !== undefined && object.entries !== null) {
            message.entries = EntriesList.fromPartial(object.entries);
        }
        else {
            message.entries = undefined;
        }
        if (object.outputs !== undefined && object.outputs !== null) {
            for (const e of object.outputs) {
                message.outputs.push(WeightedOutputs.fromPartial(e));
            }
        }
        if (object.blockInterval !== undefined && object.blockInterval !== null) {
            message.blockInterval = object.blockInterval;
        }
        else {
            message.blockInterval = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.extraInfo !== undefined && object.extraInfo !== null) {
            message.extraInfo = object.extraInfo;
        }
        else {
            message.extraInfo = '';
        }
        return message;
    }
};
const baseMsgCreateRecipeResponse = {};
export const MsgCreateRecipeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateRecipeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateRecipeResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateRecipeResponse };
        return message;
    }
};
const baseMsgUpdateRecipe = {
    creator: '',
    cookbookID: '',
    ID: '',
    name: '',
    description: '',
    version: '',
    blockInterval: 0,
    enabled: false,
    extraInfo: ''
};
export const MsgUpdateRecipe = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.cookbookID !== '') {
            writer.uint32(18).string(message.cookbookID);
        }
        if (message.ID !== '') {
            writer.uint32(26).string(message.ID);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.version !== '') {
            writer.uint32(50).string(message.version);
        }
        for (const v of message.coinInputs) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.itemInputs) {
            ItemInput.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.entries !== undefined) {
            EntriesList.encode(message.entries, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.outputs) {
            WeightedOutputs.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.blockInterval !== 0) {
            writer.uint32(88).uint64(message.blockInterval);
        }
        if (message.enabled === true) {
            writer.uint32(96).bool(message.enabled);
        }
        if (message.extraInfo !== '') {
            writer.uint32(106).string(message.extraInfo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.outputs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.cookbookID = reader.string();
                    break;
                case 3:
                    message.ID = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.version = reader.string();
                    break;
                case 7:
                    message.coinInputs.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.itemInputs.push(ItemInput.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.entries = EntriesList.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.outputs.push(WeightedOutputs.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.blockInterval = longToNumber(reader.uint64());
                    break;
                case 12:
                    message.enabled = reader.bool();
                    break;
                case 13:
                    message.extraInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.outputs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = String(object.cookbookID);
        }
        else {
            message.cookbookID = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.coinInputs !== undefined && object.coinInputs !== null) {
            for (const e of object.coinInputs) {
                message.coinInputs.push(Coin.fromJSON(e));
            }
        }
        if (object.itemInputs !== undefined && object.itemInputs !== null) {
            for (const e of object.itemInputs) {
                message.itemInputs.push(ItemInput.fromJSON(e));
            }
        }
        if (object.entries !== undefined && object.entries !== null) {
            message.entries = EntriesList.fromJSON(object.entries);
        }
        else {
            message.entries = undefined;
        }
        if (object.outputs !== undefined && object.outputs !== null) {
            for (const e of object.outputs) {
                message.outputs.push(WeightedOutputs.fromJSON(e));
            }
        }
        if (object.blockInterval !== undefined && object.blockInterval !== null) {
            message.blockInterval = Number(object.blockInterval);
        }
        else {
            message.blockInterval = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.extraInfo !== undefined && object.extraInfo !== null) {
            message.extraInfo = String(object.extraInfo);
        }
        else {
            message.extraInfo = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
        message.ID !== undefined && (obj.ID = message.ID);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.version !== undefined && (obj.version = message.version);
        if (message.coinInputs) {
            obj.coinInputs = message.coinInputs.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.coinInputs = [];
        }
        if (message.itemInputs) {
            obj.itemInputs = message.itemInputs.map((e) => (e ? ItemInput.toJSON(e) : undefined));
        }
        else {
            obj.itemInputs = [];
        }
        message.entries !== undefined && (obj.entries = message.entries ? EntriesList.toJSON(message.entries) : undefined);
        if (message.outputs) {
            obj.outputs = message.outputs.map((e) => (e ? WeightedOutputs.toJSON(e) : undefined));
        }
        else {
            obj.outputs = [];
        }
        message.blockInterval !== undefined && (obj.blockInterval = message.blockInterval);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateRecipe };
        message.coinInputs = [];
        message.itemInputs = [];
        message.outputs = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.cookbookID !== undefined && object.cookbookID !== null) {
            message.cookbookID = object.cookbookID;
        }
        else {
            message.cookbookID = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.coinInputs !== undefined && object.coinInputs !== null) {
            for (const e of object.coinInputs) {
                message.coinInputs.push(Coin.fromPartial(e));
            }
        }
        if (object.itemInputs !== undefined && object.itemInputs !== null) {
            for (const e of object.itemInputs) {
                message.itemInputs.push(ItemInput.fromPartial(e));
            }
        }
        if (object.entries !== undefined && object.entries !== null) {
            message.entries = EntriesList.fromPartial(object.entries);
        }
        else {
            message.entries = undefined;
        }
        if (object.outputs !== undefined && object.outputs !== null) {
            for (const e of object.outputs) {
                message.outputs.push(WeightedOutputs.fromPartial(e));
            }
        }
        if (object.blockInterval !== undefined && object.blockInterval !== null) {
            message.blockInterval = object.blockInterval;
        }
        else {
            message.blockInterval = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.extraInfo !== undefined && object.extraInfo !== null) {
            message.extraInfo = object.extraInfo;
        }
        else {
            message.extraInfo = '';
        }
        return message;
    }
};
const baseMsgUpdateRecipeResponse = {};
export const MsgUpdateRecipeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateRecipeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateRecipeResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateRecipeResponse };
        return message;
    }
};
const baseMsgCreateCookbook = {
    creator: '',
    ID: '',
    name: '',
    description: '',
    developer: '',
    version: '',
    supportEmail: '',
    tier: 0,
    costPerBlock: 0,
    enabled: false
};
export const MsgCreateCookbook = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== '') {
            writer.uint32(18).string(message.ID);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.developer !== '') {
            writer.uint32(42).string(message.developer);
        }
        if (message.version !== '') {
            writer.uint32(50).string(message.version);
        }
        if (message.supportEmail !== '') {
            writer.uint32(58).string(message.supportEmail);
        }
        if (message.tier !== 0) {
            writer.uint32(64).int64(message.tier);
        }
        if (message.costPerBlock !== 0) {
            writer.uint32(72).uint64(message.costPerBlock);
        }
        if (message.enabled === true) {
            writer.uint32(80).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCookbook };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.developer = reader.string();
                    break;
                case 6:
                    message.version = reader.string();
                    break;
                case 7:
                    message.supportEmail = reader.string();
                    break;
                case 8:
                    message.tier = longToNumber(reader.int64());
                    break;
                case 9:
                    message.costPerBlock = longToNumber(reader.uint64());
                    break;
                case 10:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.developer !== undefined && object.developer !== null) {
            message.developer = String(object.developer);
        }
        else {
            message.developer = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.supportEmail !== undefined && object.supportEmail !== null) {
            message.supportEmail = String(object.supportEmail);
        }
        else {
            message.supportEmail = '';
        }
        if (object.tier !== undefined && object.tier !== null) {
            message.tier = Number(object.tier);
        }
        else {
            message.tier = 0;
        }
        if (object.costPerBlock !== undefined && object.costPerBlock !== null) {
            message.costPerBlock = Number(object.costPerBlock);
        }
        else {
            message.costPerBlock = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.developer !== undefined && (obj.developer = message.developer);
        message.version !== undefined && (obj.version = message.version);
        message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
        message.tier !== undefined && (obj.tier = message.tier);
        message.costPerBlock !== undefined && (obj.costPerBlock = message.costPerBlock);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.developer !== undefined && object.developer !== null) {
            message.developer = object.developer;
        }
        else {
            message.developer = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.supportEmail !== undefined && object.supportEmail !== null) {
            message.supportEmail = object.supportEmail;
        }
        else {
            message.supportEmail = '';
        }
        if (object.tier !== undefined && object.tier !== null) {
            message.tier = object.tier;
        }
        else {
            message.tier = 0;
        }
        if (object.costPerBlock !== undefined && object.costPerBlock !== null) {
            message.costPerBlock = object.costPerBlock;
        }
        else {
            message.costPerBlock = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        return message;
    }
};
const baseMsgCreateCookbookResponse = {};
export const MsgCreateCookbookResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCookbookResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateCookbookResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateCookbookResponse };
        return message;
    }
};
const baseMsgUpdateCookbook = {
    creator: '',
    ID: '',
    name: '',
    description: '',
    developer: '',
    version: '',
    supportEmail: '',
    tier: 0,
    costPerBlock: 0,
    enabled: false
};
export const MsgUpdateCookbook = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ID !== '') {
            writer.uint32(18).string(message.ID);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.developer !== '') {
            writer.uint32(42).string(message.developer);
        }
        if (message.version !== '') {
            writer.uint32(50).string(message.version);
        }
        if (message.supportEmail !== '') {
            writer.uint32(58).string(message.supportEmail);
        }
        if (message.tier !== 0) {
            writer.uint32(64).int64(message.tier);
        }
        if (message.costPerBlock !== 0) {
            writer.uint32(72).uint64(message.costPerBlock);
        }
        if (message.enabled === true) {
            writer.uint32(80).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCookbook };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ID = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.developer = reader.string();
                    break;
                case 6:
                    message.version = reader.string();
                    break;
                case 7:
                    message.supportEmail = reader.string();
                    break;
                case 8:
                    message.tier = longToNumber(reader.int64());
                    break;
                case 9:
                    message.costPerBlock = longToNumber(reader.uint64());
                    break;
                case 10:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = String(object.ID);
        }
        else {
            message.ID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.developer !== undefined && object.developer !== null) {
            message.developer = String(object.developer);
        }
        else {
            message.developer = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.supportEmail !== undefined && object.supportEmail !== null) {
            message.supportEmail = String(object.supportEmail);
        }
        else {
            message.supportEmail = '';
        }
        if (object.tier !== undefined && object.tier !== null) {
            message.tier = Number(object.tier);
        }
        else {
            message.tier = 0;
        }
        if (object.costPerBlock !== undefined && object.costPerBlock !== null) {
            message.costPerBlock = Number(object.costPerBlock);
        }
        else {
            message.costPerBlock = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ID !== undefined && (obj.ID = message.ID);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.developer !== undefined && (obj.developer = message.developer);
        message.version !== undefined && (obj.version = message.version);
        message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
        message.tier !== undefined && (obj.tier = message.tier);
        message.costPerBlock !== undefined && (obj.costPerBlock = message.costPerBlock);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateCookbook };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        }
        else {
            message.ID = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.developer !== undefined && object.developer !== null) {
            message.developer = object.developer;
        }
        else {
            message.developer = '';
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.supportEmail !== undefined && object.supportEmail !== null) {
            message.supportEmail = object.supportEmail;
        }
        else {
            message.supportEmail = '';
        }
        if (object.tier !== undefined && object.tier !== null) {
            message.tier = object.tier;
        }
        else {
            message.tier = 0;
        }
        if (object.costPerBlock !== undefined && object.costPerBlock !== null) {
            message.costPerBlock = object.costPerBlock;
        }
        else {
            message.costPerBlock = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        return message;
    }
};
const baseMsgUpdateCookbookResponse = {};
export const MsgUpdateCookbookResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCookbookResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateCookbookResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateCookbookResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateItem(request) {
        const data = MsgCreateItem.encode(request).finish();
        const promise = this.rpc.request('Pylonstech.pylons.pylons.Msg', 'CreateItem', data);
        return promise.then((data) => MsgCreateItemResponse.decode(new Reader(data)));
    }
    UpdateItem(request) {
        const data = MsgUpdateItem.encode(request).finish();
        const promise = this.rpc.request('Pylonstech.pylons.pylons.Msg', 'UpdateItem', data);
        return promise.then((data) => MsgUpdateItemResponse.decode(new Reader(data)));
    }
    DeleteItem(request) {
        const data = MsgDeleteItem.encode(request).finish();
        const promise = this.rpc.request('Pylonstech.pylons.pylons.Msg', 'DeleteItem', data);
        return promise.then((data) => MsgDeleteItemResponse.decode(new Reader(data)));
    }
    CreateRecipe(request) {
        const data = MsgCreateRecipe.encode(request).finish();
        const promise = this.rpc.request('Pylonstech.pylons.pylons.Msg', 'CreateRecipe', data);
        return promise.then((data) => MsgCreateRecipeResponse.decode(new Reader(data)));
    }
    UpdateRecipe(request) {
        const data = MsgUpdateRecipe.encode(request).finish();
        const promise = this.rpc.request('Pylonstech.pylons.pylons.Msg', 'UpdateRecipe', data);
        return promise.then((data) => MsgUpdateRecipeResponse.decode(new Reader(data)));
    }
    CreateCookbook(request) {
        const data = MsgCreateCookbook.encode(request).finish();
        const promise = this.rpc.request('Pylonstech.pylons.pylons.Msg', 'CreateCookbook', data);
        return promise.then((data) => MsgCreateCookbookResponse.decode(new Reader(data)));
    }
    UpdateCookbook(request) {
        const data = MsgUpdateCookbook.encode(request).finish();
        const promise = this.rpc.request('Pylonstech.pylons.pylons.Msg', 'UpdateCookbook', data);
        return promise.then((data) => MsgUpdateCookbookResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
