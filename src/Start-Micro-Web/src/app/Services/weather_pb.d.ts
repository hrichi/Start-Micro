import * as jspb from "google-protobuf"

export class ForecastResponse extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getTemp(): number;
  setTemp(value: number): void;

  getDesc(): string;
  setDesc(value: string): void;

  getWind(): string;
  setWind(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastResponse): ForecastResponse.AsObject;
  static serializeBinaryToWriter(message: ForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastResponse;
  static deserializeBinaryFromReader(message: ForecastResponse, reader: jspb.BinaryReader): ForecastResponse;
}

export namespace ForecastResponse {
  export type AsObject = {
    countrycode: string,
    city: string,
    temp: number,
    desc: string,
    wind: string,
    icon: string,
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

