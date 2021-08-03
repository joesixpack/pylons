/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Item } from '../pylons/item'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Recipe } from '../pylons/recipe'
import { Cookbook } from '../pylons/cookbook'

export const protobufPackage = 'Pylonstech.pylons.pylons'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetItemRequest {
  index: string
}

export interface QueryGetItemResponse {
  Item: Item | undefined
}

export interface QueryAllItemRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllItemResponse {
  Item: Item[]
  pagination: PageResponse | undefined
}

export interface QueryGetRecipeRequest {
  CookbookID: string
  ID: string
}

export interface QueryGetRecipeResponse {
  Recipe: Recipe | undefined
}

export interface QueryListCookbooksByCreatorRequest {
  creator: string
}

export interface QueryListCookbooksByCreatorResponse {
  Cookbooks: Cookbook[]
}

export interface QueryGetCookbookRequest {
  ID: string
}

export interface QueryGetCookbookResponse {
  Cookbook: Cookbook | undefined
}

const baseQueryGetItemRequest: object = { index: '' }

export const QueryGetItemRequest = {
  encode(message: QueryGetItemRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetItemRequest {
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetItemRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetItemRequest>): QueryGetItemRequest {
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetItemResponse: object = {}

export const QueryGetItemResponse = {
  encode(message: QueryGetItemResponse, writer: Writer = Writer.create()): Writer {
    if (message.Item !== undefined) {
      Item.encode(message.Item, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Item = Item.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetItemResponse {
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse
    if (object.Item !== undefined && object.Item !== null) {
      message.Item = Item.fromJSON(object.Item)
    } else {
      message.Item = undefined
    }
    return message
  },

  toJSON(message: QueryGetItemResponse): unknown {
    const obj: any = {}
    message.Item !== undefined && (obj.Item = message.Item ? Item.toJSON(message.Item) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetItemResponse>): QueryGetItemResponse {
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse
    if (object.Item !== undefined && object.Item !== null) {
      message.Item = Item.fromPartial(object.Item)
    } else {
      message.Item = undefined
    }
    return message
  }
}

const baseQueryAllItemRequest: object = {}

export const QueryAllItemRequest = {
  encode(message: QueryAllItemRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllItemRequest {
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllItemRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllItemRequest>): QueryAllItemRequest {
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllItemResponse: object = {}

export const QueryAllItemResponse = {
  encode(message: QueryAllItemResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Item) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse
    message.Item = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Item.push(Item.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllItemResponse {
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse
    message.Item = []
    if (object.Item !== undefined && object.Item !== null) {
      for (const e of object.Item) {
        message.Item.push(Item.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllItemResponse): unknown {
    const obj: any = {}
    if (message.Item) {
      obj.Item = message.Item.map((e) => (e ? Item.toJSON(e) : undefined))
    } else {
      obj.Item = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllItemResponse>): QueryAllItemResponse {
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse
    message.Item = []
    if (object.Item !== undefined && object.Item !== null) {
      for (const e of object.Item) {
        message.Item.push(Item.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetRecipeRequest: object = { CookbookID: '', ID: '' }

export const QueryGetRecipeRequest = {
  encode(message: QueryGetRecipeRequest, writer: Writer = Writer.create()): Writer {
    if (message.CookbookID !== '') {
      writer.uint32(10).string(message.CookbookID)
    }
    if (message.ID !== '') {
      writer.uint32(18).string(message.ID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRecipeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRecipeRequest } as QueryGetRecipeRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.CookbookID = reader.string()
          break
        case 2:
          message.ID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetRecipeRequest {
    const message = { ...baseQueryGetRecipeRequest } as QueryGetRecipeRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = String(object.CookbookID)
    } else {
      message.CookbookID = ''
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = String(object.ID)
    } else {
      message.ID = ''
    }
    return message
  },

  toJSON(message: QueryGetRecipeRequest): unknown {
    const obj: any = {}
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID)
    message.ID !== undefined && (obj.ID = message.ID)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRecipeRequest>): QueryGetRecipeRequest {
    const message = { ...baseQueryGetRecipeRequest } as QueryGetRecipeRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = object.CookbookID
    } else {
      message.CookbookID = ''
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = object.ID
    } else {
      message.ID = ''
    }
    return message
  }
}

const baseQueryGetRecipeResponse: object = {}

export const QueryGetRecipeResponse = {
  encode(message: QueryGetRecipeResponse, writer: Writer = Writer.create()): Writer {
    if (message.Recipe !== undefined) {
      Recipe.encode(message.Recipe, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRecipeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRecipeResponse } as QueryGetRecipeResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Recipe = Recipe.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetRecipeResponse {
    const message = { ...baseQueryGetRecipeResponse } as QueryGetRecipeResponse
    if (object.Recipe !== undefined && object.Recipe !== null) {
      message.Recipe = Recipe.fromJSON(object.Recipe)
    } else {
      message.Recipe = undefined
    }
    return message
  },

  toJSON(message: QueryGetRecipeResponse): unknown {
    const obj: any = {}
    message.Recipe !== undefined && (obj.Recipe = message.Recipe ? Recipe.toJSON(message.Recipe) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRecipeResponse>): QueryGetRecipeResponse {
    const message = { ...baseQueryGetRecipeResponse } as QueryGetRecipeResponse
    if (object.Recipe !== undefined && object.Recipe !== null) {
      message.Recipe = Recipe.fromPartial(object.Recipe)
    } else {
      message.Recipe = undefined
    }
    return message
  }
}

const baseQueryListCookbooksByCreatorRequest: object = { creator: '' }

export const QueryListCookbooksByCreatorRequest = {
  encode(message: QueryListCookbooksByCreatorRequest, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryListCookbooksByCreatorRequest } as QueryListCookbooksByCreatorRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryListCookbooksByCreatorRequest {
    const message = { ...baseQueryListCookbooksByCreatorRequest } as QueryListCookbooksByCreatorRequest
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: QueryListCookbooksByCreatorRequest): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<QueryListCookbooksByCreatorRequest>): QueryListCookbooksByCreatorRequest {
    const message = { ...baseQueryListCookbooksByCreatorRequest } as QueryListCookbooksByCreatorRequest
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

const baseQueryListCookbooksByCreatorResponse: object = {}

export const QueryListCookbooksByCreatorResponse = {
  encode(message: QueryListCookbooksByCreatorResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Cookbooks) {
      Cookbook.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryListCookbooksByCreatorResponse } as QueryListCookbooksByCreatorResponse
    message.Cookbooks = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Cookbooks.push(Cookbook.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryListCookbooksByCreatorResponse {
    const message = { ...baseQueryListCookbooksByCreatorResponse } as QueryListCookbooksByCreatorResponse
    message.Cookbooks = []
    if (object.Cookbooks !== undefined && object.Cookbooks !== null) {
      for (const e of object.Cookbooks) {
        message.Cookbooks.push(Cookbook.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryListCookbooksByCreatorResponse): unknown {
    const obj: any = {}
    if (message.Cookbooks) {
      obj.Cookbooks = message.Cookbooks.map((e) => (e ? Cookbook.toJSON(e) : undefined))
    } else {
      obj.Cookbooks = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<QueryListCookbooksByCreatorResponse>): QueryListCookbooksByCreatorResponse {
    const message = { ...baseQueryListCookbooksByCreatorResponse } as QueryListCookbooksByCreatorResponse
    message.Cookbooks = []
    if (object.Cookbooks !== undefined && object.Cookbooks !== null) {
      for (const e of object.Cookbooks) {
        message.Cookbooks.push(Cookbook.fromPartial(e))
      }
    }
    return message
  }
}

const baseQueryGetCookbookRequest: object = { ID: '' }

export const QueryGetCookbookRequest = {
  encode(message: QueryGetCookbookRequest, writer: Writer = Writer.create()): Writer {
    if (message.ID !== '') {
      writer.uint32(10).string(message.ID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCookbookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCookbookRequest } as QueryGetCookbookRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCookbookRequest {
    const message = { ...baseQueryGetCookbookRequest } as QueryGetCookbookRequest
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = String(object.ID)
    } else {
      message.ID = ''
    }
    return message
  },

  toJSON(message: QueryGetCookbookRequest): unknown {
    const obj: any = {}
    message.ID !== undefined && (obj.ID = message.ID)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCookbookRequest>): QueryGetCookbookRequest {
    const message = { ...baseQueryGetCookbookRequest } as QueryGetCookbookRequest
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = object.ID
    } else {
      message.ID = ''
    }
    return message
  }
}

const baseQueryGetCookbookResponse: object = {}

export const QueryGetCookbookResponse = {
  encode(message: QueryGetCookbookResponse, writer: Writer = Writer.create()): Writer {
    if (message.Cookbook !== undefined) {
      Cookbook.encode(message.Cookbook, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCookbookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCookbookResponse } as QueryGetCookbookResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Cookbook = Cookbook.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCookbookResponse {
    const message = { ...baseQueryGetCookbookResponse } as QueryGetCookbookResponse
    if (object.Cookbook !== undefined && object.Cookbook !== null) {
      message.Cookbook = Cookbook.fromJSON(object.Cookbook)
    } else {
      message.Cookbook = undefined
    }
    return message
  },

  toJSON(message: QueryGetCookbookResponse): unknown {
    const obj: any = {}
    message.Cookbook !== undefined && (obj.Cookbook = message.Cookbook ? Cookbook.toJSON(message.Cookbook) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCookbookResponse>): QueryGetCookbookResponse {
    const message = { ...baseQueryGetCookbookResponse } as QueryGetCookbookResponse
    if (object.Cookbook !== undefined && object.Cookbook !== null) {
      message.Cookbook = Cookbook.fromPartial(object.Cookbook)
    } else {
      message.Cookbook = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a item by index. */
  Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse>
  /** Queries a list of item items. */
  ItemAll(request: QueryAllItemRequest): Promise<QueryAllItemResponse>
  /** Retrieves a recipe by ID. */
  Recipe(request: QueryGetRecipeRequest): Promise<QueryGetRecipeResponse>
  /** Retrieves the list of cookbooks owned by an address */
  ListCookbooksByCreator(request: QueryListCookbooksByCreatorRequest): Promise<QueryListCookbooksByCreatorResponse>
  /** Retrieves a cookbook by ID. */
  Cookbook(request: QueryGetCookbookRequest): Promise<QueryGetCookbookResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse> {
    const data = QueryGetItemRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'Item', data)
    return promise.then((data) => QueryGetItemResponse.decode(new Reader(data)))
  }

  ItemAll(request: QueryAllItemRequest): Promise<QueryAllItemResponse> {
    const data = QueryAllItemRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'ItemAll', data)
    return promise.then((data) => QueryAllItemResponse.decode(new Reader(data)))
  }

  Recipe(request: QueryGetRecipeRequest): Promise<QueryGetRecipeResponse> {
    const data = QueryGetRecipeRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'Recipe', data)
    return promise.then((data) => QueryGetRecipeResponse.decode(new Reader(data)))
  }

  ListCookbooksByCreator(request: QueryListCookbooksByCreatorRequest): Promise<QueryListCookbooksByCreatorResponse> {
    const data = QueryListCookbooksByCreatorRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'ListCookbooksByCreator', data)
    return promise.then((data) => QueryListCookbooksByCreatorResponse.decode(new Reader(data)))
  }

  Cookbook(request: QueryGetCookbookRequest): Promise<QueryGetCookbookResponse> {
    const data = QueryGetCookbookRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'Cookbook', data)
    return promise.then((data) => QueryGetCookbookResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
