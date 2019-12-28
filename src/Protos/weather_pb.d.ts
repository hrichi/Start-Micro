import * as jspb from "google-protobuf"

export class ForecastResponse extends jspb.Message {
  getCityname(): string;
  setCityname(value: string): void;

  getTemp(): number;
  setTemp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastResponse): ForecastResponse.AsObject;
  static serializeBinaryToWriter(message: ForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastResponse;
  static deserializeBinaryFromReader(message: ForecastResponse, reader: jspb.BinaryReader): ForecastResponse;
}

export namespace ForecastResponse {
  export type AsObject = {
    cityname: string,
    temp: number,
  }
}

export class ForecastsResponse extends jspb.Message {
  getForecastsList(): Array<ForecastResponse>;
  setForecastsList(value: Array<ForecastResponse>): void;
  clearForecastsList(): void;
  addForecasts(value?: ForecastResponse, index?: number): ForecastResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastsResponse): ForecastsResponse.AsObject;
  static serializeBinaryToWriter(message: ForecastsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastsResponse;
  static deserializeBinaryFromReader(message: ForecastsResponse, reader: jspb.BinaryReader): ForecastsResponse;
}

export namespace ForecastsResponse {
  export type AsObject = {
    forecastsList: Array<ForecastResponse.AsObject>,
  }
}

export class ForecastRequest extends jspb.Message {
  getCityname(): string;
  setCityname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastRequest): ForecastRequest.AsObject;
  static serializeBinaryToWriter(message: ForecastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastRequest;
  static deserializeBinaryFromReader(message: ForecastRequest, reader: jspb.BinaryReader): ForecastRequest;
}

export namespace ForecastRequest {
  export type AsObject = {
    cityname: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

