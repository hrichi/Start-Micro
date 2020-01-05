// source: weather.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.weather.Empty', null, global);
goog.exportSymbol('proto.weather.ForecastRequest', null, global);
goog.exportSymbol('proto.weather.ForecastResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weather.ForecastResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weather.ForecastResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weather.ForecastResponse.displayName = 'proto.weather.ForecastResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weather.ForecastRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weather.ForecastRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weather.ForecastRequest.displayName = 'proto.weather.ForecastRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weather.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weather.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weather.Empty.displayName = 'proto.weather.Empty';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weather.ForecastResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.weather.ForecastResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weather.ForecastResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weather.ForecastResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    countrycode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    city: jspb.Message.getFieldWithDefault(msg, 2, ""),
    temp: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    desc: jspb.Message.getFieldWithDefault(msg, 4, ""),
    wind: jspb.Message.getFieldWithDefault(msg, 5, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weather.ForecastResponse}
 */
proto.weather.ForecastResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weather.ForecastResponse;
  return proto.weather.ForecastResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weather.ForecastResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weather.ForecastResponse}
 */
proto.weather.ForecastResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWind(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weather.ForecastResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weather.ForecastResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weather.ForecastResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weather.ForecastResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTemp();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWind();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string countryCode = 1;
 * @return {string}
 */
proto.weather.ForecastResponse.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.weather.ForecastResponse} returns this
 */
proto.weather.ForecastResponse.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string city = 2;
 * @return {string}
 */
proto.weather.ForecastResponse.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.weather.ForecastResponse} returns this
 */
proto.weather.ForecastResponse.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float temp = 3;
 * @return {number}
 */
proto.weather.ForecastResponse.prototype.getTemp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.weather.ForecastResponse} returns this
 */
proto.weather.ForecastResponse.prototype.setTemp = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string desc = 4;
 * @return {string}
 */
proto.weather.ForecastResponse.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.weather.ForecastResponse} returns this
 */
proto.weather.ForecastResponse.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string wind = 5;
 * @return {string}
 */
proto.weather.ForecastResponse.prototype.getWind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.weather.ForecastResponse} returns this
 */
proto.weather.ForecastResponse.prototype.setWind = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string icon = 6;
 * @return {string}
 */
proto.weather.ForecastResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.weather.ForecastResponse} returns this
 */
proto.weather.ForecastResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weather.ForecastRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.weather.ForecastRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weather.ForecastRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weather.ForecastRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cityname: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weather.ForecastRequest}
 */
proto.weather.ForecastRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weather.ForecastRequest;
  return proto.weather.ForecastRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weather.ForecastRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weather.ForecastRequest}
 */
proto.weather.ForecastRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCityname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weather.ForecastRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weather.ForecastRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weather.ForecastRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weather.ForecastRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCityname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cityName = 1;
 * @return {string}
 */
proto.weather.ForecastRequest.prototype.getCityname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.weather.ForecastRequest} returns this
 */
proto.weather.ForecastRequest.prototype.setCityname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weather.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.weather.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weather.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weather.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weather.Empty}
 */
proto.weather.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weather.Empty;
  return proto.weather.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weather.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weather.Empty}
 */
proto.weather.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weather.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weather.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weather.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weather.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.weather);
