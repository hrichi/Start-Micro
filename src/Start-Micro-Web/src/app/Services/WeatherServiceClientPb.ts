/**
 * @fileoverview gRPC-Web generated client stub for weather
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  ForecastRequest,
  ForecastResponse} from './weather_pb';

export class WeatherClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetForecast = new grpcWeb.AbstractClientBase.MethodInfo(
    ForecastResponse,
    (request: ForecastRequest) => {
      return request.serializeBinary();
    },
    ForecastResponse.deserializeBinary
  );

  getForecast(
    request: ForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ForecastResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/weather.Weather/GetForecast',
      request,
      metadata || {},
      this.methodInfoGetForecast,
      callback);
  }

}

