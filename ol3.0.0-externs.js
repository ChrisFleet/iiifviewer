/**
 * @type {Object}
 */
var olx;


/**
 * @constructor
 */
var GeoJSONObject = function() {};


/**
 * @type {string}
 */
GeoJSONObject.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONObject.prototype.crs;


/**
 * @constructor
 * @extends {GeoJSONObject}
 */
var GeoJSONCRS = function() {};


/**
 * @type {GeoJSONCRSCode|GeoJSONCRSName|GeoJSONLink}
 */
GeoJSONCRS.prototype.properties;


/**
 * @constructor
 */
var GeoJSONCRSCode = function() {};


/**
 * @constructor
 */
var GeoJSONCRSName = function() {};


/**
 * @type {string}
 */
GeoJSONCRSName.prototype.code;


/**
 * @type {string}
 */
GeoJSONCRSName.prototype.name;


/**
 * @constructor
 * @extends {GeoJSONObject}
 */
var GeoJSONGeometry = function() {};


/**
 * @type {!Array.<number>|!Array.<!Array.<number>>|!Array.<!Array.<!Array.<number>>>}
 */
GeoJSONGeometry.prototype.coordinates;


/**
 * @constructor
 * @extends {GeoJSONObject}
 */
var GeoJSONGeometryCollection = function() {};


/**
 * @type {Array.<GeoJSONGeometry>}
 */
GeoJSONGeometryCollection.prototype.geometries;


/**
 * @constructor
 * @extends {GeoJSONObject}
 */
var GeoJSONFeature = function() {};


/**
 * @type {GeoJSONGeometry}
 */
GeoJSONFeature.prototype.geometry;


/**
 * @type {number|string|undefined}
 */
GeoJSONFeature.prototype.id;


/**
 * @type {Object.<string, *>}
 */
GeoJSONFeature.prototype.properties;


/**
 * @constructor
 * @extends {GeoJSONObject}
 */
var GeoJSONFeatureCollection = function() {};


/**
 * @type {Array.<GeoJSONFeature>}
 */
GeoJSONFeatureCollection.prototype.features;


/**
 * @type {!Array.<number>|undefined}
 */
GeoJSONFeatureCollection.prototype.bbox;


/**
 * @constructor
 * @extends {GeoJSONObject}
 */
var GeoJSONLink = function() {};


/**
 * @type {string}
 */
GeoJSONLink.prototype.href;


/**
 * @type {string}
 */
GeoJSONCRS.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONCRS.prototype.crs;


/**
 * @type {string}
 */
GeoJSONGeometry.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONGeometry.prototype.crs;


/**
 * @type {string}
 */
GeoJSONGeometryCollection.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONGeometryCollection.prototype.crs;


/**
 * @type {string}
 */
GeoJSONFeature.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONFeature.prototype.crs;


/**
 * @type {string}
 */
GeoJSONFeatureCollection.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONFeatureCollection.prototype.crs;


/**
 * @type {string}
 */
GeoJSONLink.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONLink.prototype.crs;


/**
 * @type {Object}
 */
var ol;


/**
 * @type {Object}
 */
ol.binary;


/**
 * @constructor
 */
ol.binary.IReader = function() {};


/**
 * @type {Object}
 */
ol.style;


/**
 * @constructor
 * @param {*} options
 */
ol.style.Image = function(options) {};


/**
 * @type {Object}
 */
ol.render;


/**
 * @constructor
 */
ol.render.IReplayGroup = function() {};


/**
 * @constructor
 */
ol.render.IVectorContext = function() {};


/**
 * @type {Object}
 */
ol.format;


/**
 * @constructor
 */
ol.format.XML = function() {};


/**
 * @type {Object}
 */
ol.animation;


/**
 * @param {olx.animation.BounceOptions} options
 * @return {ol.PreRenderFunction}
 */
ol.animation.bounce = function(options) {};


/**
 * @param {olx.animation.PanOptions} options
 * @return {ol.PreRenderFunction}
 */
ol.animation.pan = function(options) {};


/**
 * @param {olx.animation.RotateOptions} options
 * @return {ol.PreRenderFunction}
 */
ol.animation.rotate = function(options) {};


/**
 * @param {olx.animation.ZoomOptions} options
 * @return {ol.PreRenderFunction}
 */
ol.animation.zoom = function(options) {};


/**
 * @constructor
 * @param {olx.AttributionOptions} options
 */
ol.Attribution = function(options) {};


/**
 * @return {string}
 */
ol.Attribution.prototype.getHTML = function() {};


/**
 * @constructor
 */
ol.CollectionEvent = function() {};


/**
 * @type {*}
 */
ol.CollectionEvent.prototype.element;


/**
 * @constructor
 * @extends {ol.Object}
 * @param {Array.<T>=} opt_array
 * @template T
 */
ol.Collection = function(opt_array) {};


/**
 */
ol.Collection.prototype.clear = function() {};


/**
 * @param {Array.<T>} arr
 * @return {ol.Collection.<T>}
 */
ol.Collection.prototype.extend = function(arr) {};


/**
 * @param {Function} f
 * @param {S=} opt_this
 * @template S
 */
ol.Collection.prototype.forEach = function(f, opt_this) {};


/**
 * @return {Array.<T>}
 */
ol.Collection.prototype.getArray = function() {};


/**
 * @param {number} index
 * @return {T}
 */
ol.Collection.prototype.item = function(index) {};


/**
 * @return {number}
 */
ol.Collection.prototype.getLength = function() {};


/**
 * @param {number} index
 * @param {T} elem
 */
ol.Collection.prototype.insertAt = function(index, elem) {};


/**
 * @return {T|undefined}
 */
ol.Collection.prototype.pop = function() {};


/**
 * @param {T} elem
 * @return {number}
 */
ol.Collection.prototype.push = function(elem) {};


/**
 * @param {T} elem
 * @return {T|undefined}
 */
ol.Collection.prototype.remove = function(elem) {};


/**
 * @param {number} index
 * @return {T|undefined}
 */
ol.Collection.prototype.removeAt = function(index) {};


/**
 * @param {number} index
 * @param {T} elem
 */
ol.Collection.prototype.setAt = function(index, elem) {};


/**
 * @type {Object}
 */
ol.coordinate;


/**
 * @param {ol.Coordinate} coordinate
 * @param {ol.Coordinate} delta
 * @return {ol.Coordinate}
 */
ol.coordinate.add = function(coordinate, delta) {};


/**
 * @param {number=} opt_fractionDigits
 * @return {ol.CoordinateFormatType}
 */
ol.coordinate.createStringXY = function(opt_fractionDigits) {};


/**
 * @param {ol.Coordinate|undefined} coordinate
 * @param {string} template
 * @param {number=} opt_fractionDigits
 * @return {string}
 */
ol.coordinate.format = function(coordinate, template, opt_fractionDigits) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {number} angle
 * @return {ol.Coordinate}
 */
ol.coordinate.rotate = function(coordinate, angle) {};


/**
 * @param {ol.Coordinate|undefined} coordinate
 * @return {string}
 */
ol.coordinate.toStringHDMS = function(coordinate) {};


/**
 * @param {ol.Coordinate|undefined} coordinate
 * @param {number=} opt_fractionDigits
 * @return {string}
 */
ol.coordinate.toStringXY = function(coordinate, opt_fractionDigits) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.DeviceOrientationOptions=} opt_options
 */
ol.DeviceOrientation = function(opt_options) {};


/**
 * @return {number|undefined}
 */
ol.DeviceOrientation.prototype.getAlpha = function() {};


/**
 * @return {number|undefined}
 */
ol.DeviceOrientation.prototype.getBeta = function() {};


/**
 * @return {number|undefined}
 */
ol.DeviceOrientation.prototype.getGamma = function() {};


/**
 * @return {number|undefined}
 */
ol.DeviceOrientation.prototype.getHeading = function() {};


/**
 * @return {boolean}
 */
ol.DeviceOrientation.prototype.getTracking = function() {};


/**
 * @param {boolean} tracking
 */
ol.DeviceOrientation.prototype.setTracking = function(tracking) {};


/**
 * @type {Object}
 */
ol.easing;


/**
 * @param {number} t
 * @return {number}
 */
ol.easing.easeIn = function(t) {};


/**
 * @param {number} t
 * @return {number}
 */
ol.easing.easeOut = function(t) {};


/**
 * @param {number} t
 * @return {number}
 */
ol.easing.inAndOut = function(t) {};


/**
 * @param {number} t
 * @return {number}
 */
ol.easing.linear = function(t) {};


/**
 * @param {number} t
 * @return {number}
 */
ol.easing.upAndDown = function(t) {};


/**
 * @type {Object}
 */
ol.extent;


/**
 * @param {Array.<ol.Coordinate>} coordinates
 * @return {ol.Extent}
 */
ol.extent.boundingExtent = function(coordinates) {};


/**
 * @param {ol.Extent} extent
 * @param {number} value
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.extent.buffer = function(extent, value, opt_extent) {};


/**
 * @param {ol.Extent} extent
 * @param {ol.Coordinate} coordinate
 * @return {boolean}
 */
ol.extent.containsCoordinate = function(extent, coordinate) {};


/**
 * @param {ol.Extent} extent1
 * @param {ol.Extent} extent2
 * @return {boolean}
 */
ol.extent.containsExtent = function(extent1, extent2) {};


/**
 * @return {ol.Extent}
 */
ol.extent.createEmpty = function() {};


/**
 * @param {ol.Extent} extent1
 * @param {ol.Extent} extent2
 * @return {boolean}
 */
ol.extent.equals = function(extent1, extent2) {};


/**
 * @param {ol.Extent} extent1
 * @param {ol.Extent} extent2
 * @return {ol.Extent}
 */
ol.extent.extend = function(extent1, extent2) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Coordinate}
 */
ol.extent.getBottomLeft = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Coordinate}
 */
ol.extent.getBottomRight = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Coordinate}
 */
ol.extent.getCenter = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {number}
 */
ol.extent.getHeight = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Size}
 */
ol.extent.getSize = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Coordinate}
 */
ol.extent.getTopLeft = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Coordinate}
 */
ol.extent.getTopRight = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {number}
 */
ol.extent.getWidth = function(extent) {};


/**
 * @param {ol.Extent} extent1
 * @param {ol.Extent} extent2
 * @return {boolean}
 */
ol.extent.intersects = function(extent1, extent2) {};


/**
 * @param {ol.Extent} extent
 * @return {boolean}
 */
ol.extent.isEmpty = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @param {ol.TransformFunction} transformFn
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.extent.applyTransform = function(extent, transformFn, opt_extent) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {ol.geom.Geometry|Object.<string, *>=} opt_geometryOrProperties
 */
ol.Feature = function(opt_geometryOrProperties) {};


/**
 * @return {ol.Feature}
 */
ol.Feature.prototype.clone = function() {};


/**
 * @return {ol.geom.Geometry|undefined}
 */
ol.Feature.prototype.getGeometry = function() {};


/**
 * @return {number|string|undefined}
 */
ol.Feature.prototype.getId = function() {};


/**
 * @return {string}
 */
ol.Feature.prototype.getGeometryName = function() {};


/**
 * @return {ol.style.Style|Array.<ol.style.Style>|ol.feature.FeatureStyleFunction}
 */
ol.Feature.prototype.getStyle = function() {};


/**
 * @return {ol.feature.FeatureStyleFunction|undefined}
 */
ol.Feature.prototype.getStyleFunction = function() {};


/**
 * @param {ol.geom.Geometry|undefined} geometry
 */
ol.Feature.prototype.setGeometry = function(geometry) {};


/**
 * @param {ol.style.Style|Array.<ol.style.Style>|ol.feature.FeatureStyleFunction} style
 */
ol.Feature.prototype.setStyle = function(style) {};


/**
 * @param {number|string|undefined} id
 */
ol.Feature.prototype.setId = function(id) {};


/**
 * @param {string} name
 */
ol.Feature.prototype.setGeometryName = function(name) {};


/**
 * @constructor
 * @param {olx.FeatureOverlayOptions=} opt_options
 */
ol.FeatureOverlay = function(opt_options) {};


/**
 * @param {ol.Feature} feature
 */
ol.FeatureOverlay.prototype.addFeature = function(feature) {};


/**
 * @return {ol.Collection.<ol.Feature>}
 */
ol.FeatureOverlay.prototype.getFeatures = function() {};


/**
 * @param {ol.Feature} feature
 */
ol.FeatureOverlay.prototype.removeFeature = function(feature) {};


/**
 * @param {ol.Collection.<ol.Feature>} features
 */
ol.FeatureOverlay.prototype.setFeatures = function(features) {};


/**
 * @param {ol.Map} map
 */
ol.FeatureOverlay.prototype.setMap = function(map) {};


/**
 * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction} style
 */
ol.FeatureOverlay.prototype.setStyle = function(style) {};


/**
 * @return {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction}
 */
ol.FeatureOverlay.prototype.getStyle = function() {};


/**
 * @return {ol.style.StyleFunction|undefined}
 */
ol.FeatureOverlay.prototype.getStyleFunction = function() {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.GeolocationOptions=} opt_options
 */
ol.Geolocation = function(opt_options) {};


/**
 * @return {number|undefined}
 */
ol.Geolocation.prototype.getAccuracy = function() {};


/**
 * @return {!ol.geom.Geometry}
 */
ol.Geolocation.prototype.getAccuracyGeometry = function() {};


/**
 * @return {number|undefined}
 */
ol.Geolocation.prototype.getAltitude = function() {};


/**
 * @return {number|undefined}
 */
ol.Geolocation.prototype.getAltitudeAccuracy = function() {};


/**
 * @return {number|undefined}
 */
ol.Geolocation.prototype.getHeading = function() {};


/**
 * @return {ol.Coordinate|undefined}
 */
ol.Geolocation.prototype.getPosition = function() {};


/**
 * @return {ol.proj.Projection|undefined}
 */
ol.Geolocation.prototype.getProjection = function() {};


/**
 * @return {number|undefined}
 */
ol.Geolocation.prototype.getSpeed = function() {};


/**
 * @return {boolean}
 */
ol.Geolocation.prototype.getTracking = function() {};


/**
 * @return {GeolocationPositionOptions|undefined}
 */
ol.Geolocation.prototype.getTrackingOptions = function() {};


/**
 * @param {ol.proj.Projection} projection
 */
ol.Geolocation.prototype.setProjection = function(projection) {};


/**
 * @param {boolean} tracking
 */
ol.Geolocation.prototype.setTracking = function(tracking) {};


/**
 * @param {GeolocationPositionOptions} options
 */
ol.Geolocation.prototype.setTrackingOptions = function(options) {};


/**
 * @constructor
 * @param {olx.GraticuleOptions=} opt_options
 */
ol.Graticule = function(opt_options) {};


/**
 * @return {ol.Map}
 */
ol.Graticule.prototype.getMap = function() {};


/**
 * @return {Array.<ol.geom.LineString>}
 */
ol.Graticule.prototype.getMeridians = function() {};


/**
 * @return {Array.<ol.geom.LineString>}
 */
ol.Graticule.prototype.getParallels = function() {};


/**
 * @param {ol.Map} map
 */
ol.Graticule.prototype.setMap = function(map) {};


/**
 * @type {Object}
 */
ol.has;


/**
 * @type {number}
 */
ol.has.DEVICE_PIXEL_RATIO;


/**
 * @type {boolean}
 */
ol.has.CANVAS;


/**
 * @type {boolean}
 */
ol.has.DEVICE_ORIENTATION;


/**
 * @type {boolean}
 */
ol.has.GEOLOCATION;


/**
 * @type {boolean}
 */
ol.has.TOUCH;


/**
 * @type {boolean}
 */
ol.has.WEBGL;


/**
 * @constructor
 */
ol.ImageTile = function() {};


/**
 */
ol.ImageTile.prototype.getImage = function() {};


/**
 * @constructor
 * @param {number} decay
 * @param {number} minVelocity
 * @param {number} delay
 */
ol.Kinetic = function(decay, minVelocity, delay) {};


/**
 * @type {Object}
 */
ol.loadingstrategy;


/**
 * @param {ol.Extent} extent
 * @param {number} resolution
 * @return {Array.<ol.Extent>}
 */
ol.loadingstrategy.all = function(extent, resolution) {};


/**
 * @param {ol.Extent} extent
 * @param {number} resolution
 * @return {Array.<ol.Extent>}
 */
ol.loadingstrategy.bbox = function(extent, resolution) {};


/**
 * @param {ol.tilegrid.TileGrid} tileGrid
 * @return {Function}
 */
ol.loadingstrategy.createTile = function(tileGrid) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.MapOptions} options
 */
ol.Map = function(options) {};


/**
 * @param {ol.control.Control} control
 */
ol.Map.prototype.addControl = function(control) {};


/**
 * @param {ol.interaction.Interaction} interaction
 */
ol.Map.prototype.addInteraction = function(interaction) {};


/**
 * @param {ol.layer.Base} layer
 */
ol.Map.prototype.addLayer = function(layer) {};


/**
 * @param {ol.Overlay} overlay
 */
ol.Map.prototype.addOverlay = function(overlay) {};


/**
 * @param {...ol.PreRenderFunction} var_args
 */
ol.Map.prototype.beforeRender = function(var_args) {};


/**
 * @param {ol.Pixel} pixel
 * @param {Function} callback
 * @param {S=} opt_this
 * @param {Function=} opt_layerFilter
 * @param {U=} opt_this2
 * @return {T|undefined}
 * @template S,T,U
 */
ol.Map.prototype.forEachFeatureAtPixel = function(pixel, callback, opt_this, opt_layerFilter, opt_this2) {};


/**
 * @param {Event} event
 * @return {ol.Coordinate}
 */
ol.Map.prototype.getEventCoordinate = function(event) {};


/**
 * @param {Event} event
 * @return {ol.Pixel}
 */
ol.Map.prototype.getEventPixel = function(event) {};


/**
 * @return {Element|string|undefined}
 */
ol.Map.prototype.getTarget = function() {};


/**
 * @param {ol.Pixel} pixel
 * @return {ol.Coordinate}
 */
ol.Map.prototype.getCoordinateFromPixel = function(pixel) {};


/**
 * @return {ol.Collection.<ol.control.Control>}
 */
ol.Map.prototype.getControls = function() {};


/**
 * @return {ol.Collection.<ol.Overlay>}
 */
ol.Map.prototype.getOverlays = function() {};


/**
 * @return {ol.Collection.<ol.interaction.Interaction>}
 */
ol.Map.prototype.getInteractions = function() {};


/**
 * @return {ol.layer.Group}
 */
ol.Map.prototype.getLayerGroup = function() {};


/**
 * @return {ol.Collection.<ol.layer.Base>|undefined}
 */
ol.Map.prototype.getLayers = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Pixel}
 */
ol.Map.prototype.getPixelFromCoordinate = function(coordinate) {};


/**
 * @return {ol.Size|undefined}
 */
ol.Map.prototype.getSize = function() {};


/**
 * @return {ol.View|undefined}
 */
ol.Map.prototype.getView = function() {};


/**
 * @return {Element}
 */
ol.Map.prototype.getViewport = function() {};


/**
 */
ol.Map.prototype.renderSync = function() {};


/**
 */
ol.Map.prototype.render = function() {};


/**
 * @param {ol.control.Control} control
 * @return {ol.control.Control|undefined}
 */
ol.Map.prototype.removeControl = function(control) {};


/**
 * @param {ol.interaction.Interaction} interaction
 * @return {ol.interaction.Interaction|undefined}
 */
ol.Map.prototype.removeInteraction = function(interaction) {};


/**
 * @param {ol.layer.Base} layer
 * @return {ol.layer.Base|undefined}
 */
ol.Map.prototype.removeLayer = function(layer) {};


/**
 * @param {ol.Overlay} overlay
 * @return {ol.Overlay|undefined}
 */
ol.Map.prototype.removeOverlay = function(overlay) {};


/**
 * @param {ol.layer.Group} layerGroup
 */
ol.Map.prototype.setLayerGroup = function(layerGroup) {};


/**
 * @param {ol.Size|undefined} size
 */
ol.Map.prototype.setSize = function(size) {};


/**
 * @param {Element|string|undefined} target
 */
ol.Map.prototype.setTarget = function(target) {};


/**
 * @param {ol.View} view
 */
ol.Map.prototype.setView = function(view) {};


/**
 */
ol.Map.prototype.updateSize = function() {};


/**
 * @constructor
 */
ol.MapBrowserEvent = function() {};


/**
 * @type {Event}
 */
ol.MapBrowserEvent.prototype.originalEvent;


/**
 * @type {ol.Pixel}
 */
ol.MapBrowserEvent.prototype.pixel;


/**
 * @type {ol.Coordinate}
 */
ol.MapBrowserEvent.prototype.coordinate;


/**
 */
ol.MapBrowserEvent.prototype.preventDefault = function() {};


/**
 */
ol.MapBrowserEvent.prototype.stopPropagation = function() {};


/**
 * @constructor
 */
ol.MapEvent = function() {};


/**
 * @type {ol.Map}
 */
ol.MapEvent.prototype.map;


/**
 * @type {olx.FrameState}
 */
ol.MapEvent.prototype.frameState;


/**
 * @constructor
 */
ol.ObjectEvent = function() {};


/**
 * @type {string}
 */
ol.ObjectEvent.prototype.key;


/**
 * @constructor
 */
ol.ObjectAccessor = function() {};


/**
 * @param {Function} from
 * @param {Function} to
 */
ol.ObjectAccessor.prototype.transform = function(from, to) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {Object.<string, *>=} opt_values
 */
ol.Object = function(opt_values) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.Object.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Object.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Object.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Object.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.Object.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.Object.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.Object.prototype.unbind = function(key) {};


/**
 */
ol.Object.prototype.unbindAll = function() {};


/**
 * @constructor
 */
ol.Observable = function() {};


/**
 */
ol.Observable.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.Observable.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Observable.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Observable.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Observable.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.Observable.prototype.unByKey = function(key) {};


/**
 * @param {Function} childCtor
 * @param {Function} parentCtor
 */
ol.inherits = function(childCtor, parentCtor) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.OverlayOptions} options
 */
ol.Overlay = function(options) {};


/**
 * @return {Element|undefined}
 */
ol.Overlay.prototype.getElement = function() {};


/**
 * @return {ol.Map|undefined}
 */
ol.Overlay.prototype.getMap = function() {};


/**
 * @return {Array.<number>}
 */
ol.Overlay.prototype.getOffset = function() {};


/**
 * @return {ol.Coordinate|undefined}
 */
ol.Overlay.prototype.getPosition = function() {};


/**
 * @return {ol.OverlayPositioning}
 */
ol.Overlay.prototype.getPositioning = function() {};


/**
 * @param {Element|undefined} element
 */
ol.Overlay.prototype.setElement = function(element) {};


/**
 * @param {ol.Map|undefined} map
 */
ol.Overlay.prototype.setMap = function(map) {};


/**
 * @param {Array.<number>} offset
 */
ol.Overlay.prototype.setOffset = function(offset) {};


/**
 * @param {ol.Coordinate|undefined} position
 */
ol.Overlay.prototype.setPosition = function(position) {};


/**
 * @param {ol.OverlayPositioning} positioning
 */
ol.Overlay.prototype.setPositioning = function(positioning) {};


/**
 * @constructor
 */
ol.Tile = function() {};


/**
 * @return {ol.TileCoord}
 */
ol.Tile.prototype.getTileCoord = function() {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.ViewOptions=} opt_options
 */
ol.View = function(opt_options) {};


/**
 * @param {ol.Coordinate|undefined} center
 * @return {ol.Coordinate|undefined}
 */
ol.View.prototype.constrainCenter = function(center) {};


/**
 * @param {number|undefined} resolution
 * @param {number=} opt_delta
 * @param {number=} opt_direction
 * @return {number|undefined}
 */
ol.View.prototype.constrainResolution = function(resolution, opt_delta, opt_direction) {};


/**
 * @param {number|undefined} rotation
 * @param {number=} opt_delta
 * @return {number|undefined}
 */
ol.View.prototype.constrainRotation = function(rotation, opt_delta) {};


/**
 * @return {ol.Coordinate|undefined}
 */
ol.View.prototype.getCenter = function() {};


/**
 * @param {ol.Size} size
 * @return {ol.Extent}
 */
ol.View.prototype.calculateExtent = function(size) {};


/**
 * @return {ol.proj.Projection}
 */
ol.View.prototype.getProjection = function() {};


/**
 * @return {number|undefined}
 */
ol.View.prototype.getResolution = function() {};


/**
 * @param {ol.Extent} extent
 * @param {ol.Size} size
 * @return {number}
 */
ol.View.prototype.getResolutionForExtent = function(extent, size) {};


/**
 * @return {number|undefined}
 */
ol.View.prototype.getRotation = function() {};


/**
 * @return {number|undefined}
 */
ol.View.prototype.getZoom = function() {};


/**
 * @param {ol.Extent} extent
 * @param {ol.Size} size
 */
ol.View.prototype.fitExtent = function(extent, size) {};


/**
 * @param {ol.geom.SimpleGeometry} geometry
 * @param {ol.Size} size
 * @param {olx.View.fitGeometryOptions=} opt_options
 */
ol.View.prototype.fitGeometry = function(geometry, size, opt_options) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {ol.Size} size
 * @param {ol.Pixel} position
 */
ol.View.prototype.centerOn = function(coordinate, size, position) {};


/**
 * @param {number} rotation
 * @param {ol.Coordinate=} opt_anchor
 */
ol.View.prototype.rotate = function(rotation, opt_anchor) {};


/**
 * @param {ol.Coordinate|undefined} center
 */
ol.View.prototype.setCenter = function(center) {};


/**
 * @param {number|undefined} resolution
 */
ol.View.prototype.setResolution = function(resolution) {};


/**
 * @param {number|undefined} rotation
 */
ol.View.prototype.setRotation = function(rotation) {};


/**
 * @param {number} zoom
 */
ol.View.prototype.setZoom = function(zoom) {};


/**
 * @type {Object}
 */
ol.webgl;


/**
 * @constructor
 * @param {HTMLCanvasElement} canvas
 * @param {WebGLRenderingContext} gl
 */
ol.webgl.Context = function(canvas, gl) {};


/**
 * @return {WebGLRenderingContext}
 */
ol.webgl.Context.prototype.getGL = function() {};


/**
 * @param {WebGLProgram} program
 * @return {boolean}
 */
ol.webgl.Context.prototype.useProgram = function(program) {};


/**
 * @type {Object}
 */
ol.tilegrid;


/**
 * @constructor
 * @param {olx.tilegrid.TileGridOptions} options
 */
ol.tilegrid.TileGrid = function(options) {};


/**
 * @return {number}
 */
ol.tilegrid.TileGrid.prototype.getMaxZoom = function() {};


/**
 * @return {number}
 */
ol.tilegrid.TileGrid.prototype.getMinZoom = function() {};


/**
 * @param {number} z
 * @return {ol.Coordinate}
 */
ol.tilegrid.TileGrid.prototype.getOrigin = function(z) {};


/**
 * @param {number} z
 * @return {number}
 */
ol.tilegrid.TileGrid.prototype.getResolution = function(z) {};


/**
 * @return {Array.<number>}
 */
ol.tilegrid.TileGrid.prototype.getResolutions = function() {};


/**
 * @param {number} z
 * @return {number}
 */
ol.tilegrid.TileGrid.prototype.getTileSize = function(z) {};


/**
 * @constructor
 * @extends {ol.tilegrid.TileGrid}
 * @param {olx.tilegrid.WMTSOptions} options
 */
ol.tilegrid.WMTS = function(options) {};


/**
 * @return {Array.<string>}
 */
ol.tilegrid.WMTS.prototype.getMatrixIds = function() {};


/**
 * @constructor
 * @extends {ol.tilegrid.TileGrid}
 * @param {olx.tilegrid.XYZOptions} options
 */
ol.tilegrid.XYZ = function(options) {};


/**
 * @constructor
 * @extends {ol.tilegrid.TileGrid}
 * @param {olx.tilegrid.ZoomifyOptions=} opt_options
 */
ol.tilegrid.Zoomify = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.style.Image}
 * @param {olx.style.CircleOptions=} opt_options
 */
ol.style.Circle = function(opt_options) {};


/**
 */
ol.style.Circle.prototype.getAnchor = function() {};


/**
 * @return {ol.style.Fill}
 */
ol.style.Circle.prototype.getFill = function() {};


/**
 */
ol.style.Circle.prototype.getImage = function() {};


/**
 */
ol.style.Circle.prototype.getOrigin = function() {};


/**
 * @return {number}
 */
ol.style.Circle.prototype.getRadius = function() {};


/**
 */
ol.style.Circle.prototype.getSize = function() {};


/**
 * @return {ol.style.Stroke}
 */
ol.style.Circle.prototype.getStroke = function() {};


/**
 * @constructor
 * @param {olx.style.FillOptions=} opt_options
 */
ol.style.Fill = function(opt_options) {};


/**
 * @return {ol.Color|string}
 */
ol.style.Fill.prototype.getColor = function() {};


/**
 * @constructor
 * @extends {ol.style.Image}
 * @param {olx.style.IconOptions=} opt_options
 */
ol.style.Icon = function(opt_options) {};


/**
 */
ol.style.Icon.prototype.getAnchor = function() {};


/**
 */
ol.style.Icon.prototype.getImage = function() {};


/**
 */
ol.style.Icon.prototype.getOrigin = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Icon.prototype.getSrc = function() {};


/**
 */
ol.style.Icon.prototype.getSize = function() {};


/**
 * @return {number}
 */
ol.style.Image.prototype.getRotation = function() {};


/**
 * @return {number}
 */
ol.style.Image.prototype.getScale = function() {};


/**
 * @constructor
 * @param {olx.style.StrokeOptions=} opt_options
 */
ol.style.Stroke = function(opt_options) {};


/**
 * @return {ol.Color|string}
 */
ol.style.Stroke.prototype.getColor = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Stroke.prototype.getLineCap = function() {};


/**
 * @return {Array.<number>}
 */
ol.style.Stroke.prototype.getLineDash = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Stroke.prototype.getLineJoin = function() {};


/**
 * @return {number|undefined}
 */
ol.style.Stroke.prototype.getMiterLimit = function() {};


/**
 * @return {number|undefined}
 */
ol.style.Stroke.prototype.getWidth = function() {};


/**
 * @constructor
 * @param {olx.style.StyleOptions=} opt_options
 */
ol.style.Style = function(opt_options) {};


/**
 * @return {ol.style.Fill}
 */
ol.style.Style.prototype.getFill = function() {};


/**
 * @return {ol.style.Image}
 */
ol.style.Style.prototype.getImage = function() {};


/**
 * @return {ol.style.Stroke}
 */
ol.style.Style.prototype.getStroke = function() {};


/**
 * @return {ol.style.Text}
 */
ol.style.Style.prototype.getText = function() {};


/**
 * @return {number|undefined}
 */
ol.style.Style.prototype.getZIndex = function() {};


/**
 * @constructor
 * @param {olx.style.TextOptions=} opt_options
 */
ol.style.Text = function(opt_options) {};


/**
 * @return {string|undefined}
 */
ol.style.Text.prototype.getFont = function() {};


/**
 * @return {ol.style.Fill}
 */
ol.style.Text.prototype.getFill = function() {};


/**
 * @return {number|undefined}
 */
ol.style.Text.prototype.getRotation = function() {};


/**
 * @return {number|undefined}
 */
ol.style.Text.prototype.getScale = function() {};


/**
 * @return {ol.style.Stroke}
 */
ol.style.Text.prototype.getStroke = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Text.prototype.getText = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Text.prototype.getTextAlign = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Text.prototype.getTextBaseline = function() {};


/**
 * @constructor
 * @param {number} radius
 */
ol.Sphere = function(radius) {};


/**
 * @type {Object}
 */
ol.source;


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.BingMapsOptions} options
 */
ol.source.BingMaps = function(options) {};


/**
 * @type {ol.Attribution}
 */
ol.source.BingMaps.TOS_ATTRIBUTION;


/**
 * @constructor
 * @extends {ol.source.Vector}
 * @param {olx.source.ClusterOptions} options
 */
ol.source.Cluster = function(options) {};


/**
 * @constructor
 */
ol.source.FormatVector = function() {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.source.FormatVector.prototype.readFeatures = function(source) {};


/**
 * @constructor
 * @extends {ol.source.StaticVector}
 * @param {olx.source.GeoJSONOptions=} opt_options
 */
ol.source.GeoJSON = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.source.StaticVector}
 * @param {olx.source.GPXOptions=} opt_options
 */
ol.source.GPX = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.source.StaticVector}
 * @param {olx.source.IGCOptions=} opt_options
 */
ol.source.IGC = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.source.ImageCanvasOptions} options
 */
ol.source.ImageCanvas = function(options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.source.ImageMapGuideOptions} options
 */
ol.source.ImageMapGuide = function(options) {};


/**
 * @return {Object}
 */
ol.source.ImageMapGuide.prototype.getParams = function() {};


/**
 * @param {Object} params
 */
ol.source.ImageMapGuide.prototype.updateParams = function(params) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.source.ImageStaticOptions} options
 */
ol.source.ImageStatic = function(options) {};


/**
 * @constructor
 * @extends {ol.source.ImageCanvas}
 * @param {olx.source.ImageVectorOptions} options
 */
ol.source.ImageVector = function(options) {};


/**
 * @return {ol.source.Vector}
 */
ol.source.ImageVector.prototype.getSource = function() {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.source.ImageWMSOptions=} opt_options
 */
ol.source.ImageWMS = function(opt_options) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {number} resolution
 * @param {ol.proj.ProjectionLike} projection
 * @param {Object} params
 * @return {string|undefined}
 */
ol.source.ImageWMS.prototype.getGetFeatureInfoUrl = function(coordinate, resolution, projection, params) {};


/**
 * @return {Object}
 */
ol.source.ImageWMS.prototype.getParams = function() {};


/**
 * @return {string|undefined}
 */
ol.source.ImageWMS.prototype.getUrl = function() {};


/**
 * @param {string|undefined} url
 */
ol.source.ImageWMS.prototype.setUrl = function(url) {};


/**
 * @param {Object} params
 */
ol.source.ImageWMS.prototype.updateParams = function(params) {};


/**
 * @constructor
 * @extends {ol.source.StaticVector}
 * @param {olx.source.KMLOptions=} opt_options
 */
ol.source.KML = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.source.XYZ}
 * @param {olx.source.MapQuestOptions=} opt_options
 */
ol.source.MapQuest = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.source.XYZ}
 * @param {olx.source.OSMOptions=} opt_options
 */
ol.source.OSM = function(opt_options) {};


/**
 * @type {ol.Attribution}
 */
ol.source.OSM.DATA_ATTRIBUTION;


/**
 * @type {ol.Attribution}
 */
ol.source.OSM.TILE_ATTRIBUTION;


/**
 * @constructor
 * @extends {ol.source.StaticVector}
 * @param {olx.source.OSMXMLOptions=} opt_options
 */
ol.source.OSMXML = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.source.Vector}
 * @param {olx.source.ServerVectorOptions} options
 */
ol.source.ServerVector = function(options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.source.ServerVector.prototype.readFeatures = function(source) {};


/**
 * @constructor
 */
ol.source.Source = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Source.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Source.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Source.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Source.prototype.getState = function() {};


/**
 * @constructor
 * @extends {ol.source.XYZ}
 * @param {olx.source.StamenOptions} options
 */
ol.source.Stamen = function(options) {};


/**
 * @constructor
 * @extends {ol.source.Vector}
 * @param {olx.source.StaticVectorOptions} options
 */
ol.source.StaticVector = function(options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.source.TileDebugOptions} options
 */
ol.source.TileDebug = function(options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.source.TileImageOptions} options
 */
ol.source.TileImage = function(options) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.TileImage.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.TileImage.prototype.getTileUrlFunction = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.TileImage.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 */
ol.source.TileImage.prototype.setTileUrlFunction = function(tileUrlFunction) {};


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.TileJSONOptions} options
 */
ol.source.TileJSON = function(options) {};


/**
 * @constructor
 */
ol.source.Tile = function() {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.Tile.prototype.getTileGrid = function() {};


/**
 * @constructor
 * @extends {ol.source.Vector}
 * @param {olx.source.TileVectorOptions} options
 */
ol.source.TileVector = function(options) {};


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.TileWMSOptions=} opt_options
 */
ol.source.TileWMS = function(opt_options) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {number} resolution
 * @param {ol.proj.ProjectionLike} projection
 * @param {Object} params
 * @return {string|undefined}
 */
ol.source.TileWMS.prototype.getGetFeatureInfoUrl = function(coordinate, resolution, projection, params) {};


/**
 * @return {Object}
 */
ol.source.TileWMS.prototype.getParams = function() {};


/**
 * @return {Array.<string>}
 */
ol.source.TileWMS.prototype.getUrls = function() {};


/**
 * @param {string|undefined} url
 */
ol.source.TileWMS.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>|undefined} urls
 */
ol.source.TileWMS.prototype.setUrls = function(urls) {};


/**
 * @param {Object} params
 */
ol.source.TileWMS.prototype.updateParams = function(params) {};


/**
 * @constructor
 * @extends {ol.source.StaticVector}
 * @param {olx.source.TopoJSONOptions=} opt_options
 */
ol.source.TopoJSON = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.source.VectorOptions=} opt_options
 */
ol.source.Vector = function(opt_options) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.Vector.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.Vector.prototype.addFeatures = function(features) {};


/**
 */
ol.source.Vector.prototype.clear = function() {};


/**
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.Vector.prototype.forEachFeature = function(f, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.Vector.prototype.forEachFeatureInExtent = function(extent, f, opt_this) {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.Vector.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.Vector.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Feature}
 */
ol.source.Vector.prototype.getClosestFeatureToCoordinate = function(coordinate) {};


/**
 * @return {ol.Extent}
 */
ol.source.Vector.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.Vector.prototype.getFeatureById = function(id) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.Vector.prototype.removeFeature = function(feature) {};


/**
 * @constructor
 */
ol.source.VectorEvent = function() {};


/**
 * @type {ol.Feature|undefined}
 */
ol.source.VectorEvent.prototype.feature;


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.WMTSOptions} options
 */
ol.source.WMTS = function(options) {};


/**
 * @return {Object}
 */
ol.source.WMTS.prototype.getDimensions = function() {};


/**
 * @param {Object} dimensions
 */
ol.source.WMTS.prototype.updateDimensions = function(dimensions) {};


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.XYZOptions} options
 */
ol.source.XYZ = function(options) {};


/**
 */
ol.source.XYZ.prototype.setTileUrlFunction = function() {};


/**
 * @param {string} url
 */
ol.source.XYZ.prototype.setUrl = function(url) {};


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.ZoomifyOptions=} opt_options
 */
ol.source.Zoomify = function(opt_options) {};


/**
 * @constructor
 */
ol.render.Event = function() {};


/**
 * @type {ol.render.IVectorContext|undefined}
 */
ol.render.Event.prototype.vectorContext;


/**
 * @type {olx.FrameState|undefined}
 */
ol.render.Event.prototype.frameState;


/**
 * @type {CanvasRenderingContext2D|null|undefined}
 */
ol.render.Event.prototype.context;


/**
 * @type {ol.webgl.Context|null|undefined}
 */
ol.render.Event.prototype.glContext;


/**
 * @type {Object}
 */
ol.render.canvas;


/**
 * @constructor
 */
ol.render.canvas.Immediate = function() {};


/**
 * @param {number} zIndex
 * @param {Function} callback
 */
ol.render.canvas.Immediate.prototype.drawAsync = function(zIndex, callback) {};


/**
 * @param {ol.geom.Circle} circleGeometry
 * @param {Object} data
 */
ol.render.canvas.Immediate.prototype.drawCircleGeometry = function(circleGeometry, data) {};


/**
 * @param {ol.Feature} feature
 * @param {ol.style.Style} style
 */
ol.render.canvas.Immediate.prototype.drawFeature = function(feature, style) {};


/**
 * @param {ol.geom.Point} pointGeometry
 * @param {Object} data
 */
ol.render.canvas.Immediate.prototype.drawPointGeometry = function(pointGeometry, data) {};


/**
 * @param {ol.geom.MultiPoint} multiPointGeometry
 * @param {Object} data
 */
ol.render.canvas.Immediate.prototype.drawMultiPointGeometry = function(multiPointGeometry, data) {};


/**
 * @param {ol.geom.LineString} lineStringGeometry
 * @param {Object} data
 */
ol.render.canvas.Immediate.prototype.drawLineStringGeometry = function(lineStringGeometry, data) {};


/**
 * @param {ol.geom.MultiLineString} multiLineStringGeometry
 * @param {Object} data
 */
ol.render.canvas.Immediate.prototype.drawMultiLineStringGeometry = function(multiLineStringGeometry, data) {};


/**
 * @param {ol.geom.Polygon} polygonGeometry
 * @param {Object} data
 */
ol.render.canvas.Immediate.prototype.drawPolygonGeometry = function(polygonGeometry, data) {};


/**
 * @param {ol.geom.MultiPolygon} multiPolygonGeometry
 * @param {Object} data
 */
ol.render.canvas.Immediate.prototype.drawMultiPolygonGeometry = function(multiPolygonGeometry, data) {};


/**
 * @param {ol.style.Fill} fillStyle
 * @param {ol.style.Stroke} strokeStyle
 */
ol.render.canvas.Immediate.prototype.setFillStrokeStyle = function(fillStyle, strokeStyle) {};


/**
 * @param {ol.style.Image} imageStyle
 */
ol.render.canvas.Immediate.prototype.setImageStyle = function(imageStyle) {};


/**
 * @param {ol.style.Text} textStyle
 */
ol.render.canvas.Immediate.prototype.setTextStyle = function(textStyle) {};


/**
 * @type {Object}
 */
ol.proj;


/**
 * @type {Object}
 */
ol.proj.common;


/**
 */
ol.proj.common.add = function() {};


/**
 * @type {Object.<ol.proj.Units, number>}
 */
ol.proj.METERS_PER_UNIT;


/**
 * @constructor
 * @param {olx.ProjectionOptions} options
 */
ol.proj.Projection = function(options) {};


/**
 * @return {string}
 */
ol.proj.Projection.prototype.getCode = function() {};


/**
 * @return {ol.Extent}
 */
ol.proj.Projection.prototype.getExtent = function() {};


/**
 * @return {ol.proj.Units}
 */
ol.proj.Projection.prototype.getUnits = function() {};


/**
 * @return {number|undefined}
 */
ol.proj.Projection.prototype.getMetersPerUnit = function() {};


/**
 * @return {ol.Extent}
 */
ol.proj.Projection.prototype.getWorldExtent = function() {};


/**
 * @return {boolean}
 */
ol.proj.Projection.prototype.isGlobal = function() {};


/**
 * @param {ol.Extent} extent
 */
ol.proj.Projection.prototype.setExtent = function(extent) {};


/**
 * @param {ol.Extent} worldExtent
 */
ol.proj.Projection.prototype.setWorldExtent = function(worldExtent) {};


/**
 * @param {Array.<ol.proj.Projection>} projections
 */
ol.proj.addEquivalentProjections = function(projections) {};


/**
 * @param {ol.proj.Projection} projection
 */
ol.proj.addProjection = function(projection) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @param {Function} forward
 * @param {Function} inverse
 */
ol.proj.addCoordinateTransforms = function(source, destination, forward, inverse) {};


/**
 * @param {ol.proj.ProjectionLike} projectionLike
 * @return {ol.proj.Projection}
 */
ol.proj.get = function(projectionLike) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.TransformFunction}
 */
ol.proj.getTransform = function(source, destination) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.Coordinate}
 */
ol.proj.transform = function(coordinate, source, destination) {};


/**
 * @param {ol.Extent} extent
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.Extent}
 */
ol.proj.transformExtent = function(extent, source, destination) {};


/**
 * @type {Object}
 */
ol.layer;


/**
 * @constructor
 * @extends {ol.layer.Vector}
 * @param {olx.layer.HeatmapOptions=} opt_options
 */
ol.layer.Heatmap = function(opt_options) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Heatmap.prototype.getGradient = function() {};


/**
 * @param {Array.<string>} colors
 */
ol.layer.Heatmap.prototype.setGradient = function(colors) {};


/**
 * @constructor
 * @extends {ol.layer.Layer}
 * @param {olx.layer.LayerOptions} options
 */
ol.layer.Image = function(options) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.layer.LayerOptions} options
 */
ol.layer.Layer = function(options) {};


/**
 * @return {ol.source.Source}
 */
ol.layer.Layer.prototype.getSource = function() {};


/**
 * @constructor
 */
ol.layer.Base = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Base.prototype.getBrightness = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Base.prototype.getContrast = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Base.prototype.getHue = function() {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Base.prototype.getExtent = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Base.prototype.getMaxResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Base.prototype.getMinResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Base.prototype.getOpacity = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Base.prototype.getSaturation = function() {};


/**
 * @return {boolean|undefined}
 */
ol.layer.Base.prototype.getVisible = function() {};


/**
 * @param {number|undefined} brightness
 */
ol.layer.Base.prototype.setBrightness = function(brightness) {};


/**
 * @param {number|undefined} contrast
 */
ol.layer.Base.prototype.setContrast = function(contrast) {};


/**
 * @param {number|undefined} hue
 */
ol.layer.Base.prototype.setHue = function(hue) {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Base.prototype.setExtent = function(extent) {};


/**
 * @param {number|undefined} maxResolution
 */
ol.layer.Base.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number|undefined} minResolution
 */
ol.layer.Base.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number|undefined} opacity
 */
ol.layer.Base.prototype.setOpacity = function(opacity) {};


/**
 * @param {number|undefined} saturation
 */
ol.layer.Base.prototype.setSaturation = function(saturation) {};


/**
 * @param {boolean|undefined} visible
 */
ol.layer.Base.prototype.setVisible = function(visible) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.layer.GroupOptions=} opt_options
 */
ol.layer.Group = function(opt_options) {};


/**
 * @return {ol.Collection.<ol.layer.Base>|undefined}
 */
ol.layer.Group.prototype.getLayers = function() {};


/**
 * @param {ol.Collection.<ol.layer.Base>|undefined} layers
 */
ol.layer.Group.prototype.setLayers = function(layers) {};


/**
 * @constructor
 * @extends {ol.layer.Layer}
 * @param {olx.layer.TileOptions} options
 */
ol.layer.Tile = function(options) {};


/**
 * @return {number|undefined}
 */
ol.layer.Tile.prototype.getPreload = function() {};


/**
 * @param {number} preload
 */
ol.layer.Tile.prototype.setPreload = function(preload) {};


/**
 * @return {boolean|undefined}
 */
ol.layer.Tile.prototype.getUseInterimTilesOnError = function() {};


/**
 * @param {boolean|undefined} useInterimTilesOnError
 */
ol.layer.Tile.prototype.setUseInterimTilesOnError = function(useInterimTilesOnError) {};


/**
 * @constructor
 * @extends {ol.layer.Layer}
 * @param {olx.layer.VectorOptions=} opt_options
 */
ol.layer.Vector = function(opt_options) {};


/**
 * @return {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction}
 */
ol.layer.Vector.prototype.getStyle = function() {};


/**
 * @return {ol.style.StyleFunction|undefined}
 */
ol.layer.Vector.prototype.getStyleFunction = function() {};


/**
 * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined} style
 */
ol.layer.Vector.prototype.setStyle = function(style) {};


/**
 * @type {Object}
 */
ol.interaction;


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.DoubleClickZoomOptions=} opt_options
 */
ol.interaction.DoubleClickZoom = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.DragAndDropOptions=} opt_options
 */
ol.interaction.DragAndDrop = function(opt_options) {};


/**
 * @constructor
 */
ol.interaction.DragAndDropEvent = function() {};


/**
 * @type {Array.<ol.Feature>|undefined}
 */
ol.interaction.DragAndDropEvent.prototype.features;


/**
 * @type {File}
 */
ol.interaction.DragAndDropEvent.prototype.file;


/**
 * @type {ol.proj.Projection|undefined}
 */
ol.interaction.DragAndDropEvent.prototype.projection;


/**
 * @constructor
 */
ol.DragBoxEvent = function() {};


/**
 * @type {ol.Coordinate}
 */
ol.DragBoxEvent.prototype.coordinate;


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.DragBoxOptions=} opt_options
 */
ol.interaction.DragBox = function(opt_options) {};


/**
 * @return {ol.geom.Geometry}
 */
ol.interaction.DragBox.prototype.getGeometry = function() {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.DragPanOptions=} opt_options
 */
ol.interaction.DragPan = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.DragRotateAndZoomOptions=} opt_options
 */
ol.interaction.DragRotateAndZoom = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.DragRotateOptions=} opt_options
 */
ol.interaction.DragRotate = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.interaction.DragBox}
 * @param {olx.interaction.DragZoomOptions=} opt_options
 */
ol.interaction.DragZoom = function(opt_options) {};


/**
 * @constructor
 */
ol.DrawEvent = function() {};


/**
 * @type {ol.Feature}
 */
ol.DrawEvent.prototype.feature;


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.DrawOptions} options
 */
ol.interaction.Draw = function(options) {};


/**
 * @param {olx.interaction.DefaultsOptions=} opt_options
 * @return {ol.Collection.<ol.interaction.Interaction>}
 */
ol.interaction.defaults = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.KeyboardPanOptions=} opt_options
 */
ol.interaction.KeyboardPan = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.KeyboardZoomOptions=} opt_options
 */
ol.interaction.KeyboardZoom = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.ModifyOptions} options
 */
ol.interaction.Modify = function(options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.MouseWheelZoomOptions=} opt_options
 */
ol.interaction.MouseWheelZoom = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.PinchRotateOptions=} opt_options
 */
ol.interaction.PinchRotate = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.PinchZoomOptions=} opt_options
 */
ol.interaction.PinchZoom = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {olx.interaction.SelectOptions=} opt_options
 */
ol.interaction.Select = function(opt_options) {};


/**
 * @return {ol.Collection.<ol.Feature>}
 */
ol.interaction.Select.prototype.getFeatures = function() {};


/**
 * @param {ol.Map} map
 */
ol.interaction.Select.prototype.setMap = function(map) {};


/**
 * @type {Object}
 */
ol.geom;


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {ol.Coordinate} center
 * @param {number=} opt_radius
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Circle = function(center, opt_radius, opt_layout) {};


/**
 * @return {ol.geom.Circle}
 */
ol.geom.Circle.prototype.clone = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Circle.prototype.getCenter = function() {};


/**
 */
ol.geom.Circle.prototype.getExtent = function() {};


/**
 * @return {number}
 */
ol.geom.Circle.prototype.getRadius = function() {};


/**
 */
ol.geom.Circle.prototype.getType = function() {};


/**
 * @param {ol.Coordinate} center
 */
ol.geom.Circle.prototype.setCenter = function(center) {};


/**
 * @param {ol.Coordinate} center
 * @param {number} radius
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Circle.prototype.setCenterAndRadius = function(center, radius, opt_layout) {};


/**
 * @param {number} radius
 */
ol.geom.Circle.prototype.setRadius = function(radius) {};


/**
 * @constructor
 * @extends {ol.Observable}
 */
ol.geom.Geometry = function() {};


/**
 * @return {ol.geom.Geometry}
 */
ol.geom.Geometry.prototype.clone = function() {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.Geometry.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.Geometry.prototype.getExtent = function(opt_extent) {};


/**
 * @return {ol.geom.GeometryType}
 */
ol.geom.Geometry.prototype.getType = function() {};


/**
 * @param {ol.TransformFunction} transformFn
 */
ol.geom.Geometry.prototype.applyTransform = function(transformFn) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.Geometry.prototype.transform = function(source, destination) {};


/**
 * @constructor
 * @extends {ol.geom.Geometry}
 * @param {Array.<ol.geom.Geometry>=} opt_geometries
 */
ol.geom.GeometryCollection = function(opt_geometries) {};


/**
 * @return {ol.geom.GeometryCollection}
 */
ol.geom.GeometryCollection.prototype.clone = function() {};


/**
 */
ol.geom.GeometryCollection.prototype.getExtent = function() {};


/**
 * @return {Array.<ol.geom.Geometry>}
 */
ol.geom.GeometryCollection.prototype.getGeometries = function() {};


/**
 */
ol.geom.GeometryCollection.prototype.getType = function() {};


/**
 * @param {Array.<ol.geom.Geometry>} geometries
 */
ol.geom.GeometryCollection.prototype.setGeometries = function(geometries) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.LinearRing = function(coordinates, opt_layout) {};


/**
 * @return {ol.geom.LinearRing}
 */
ol.geom.LinearRing.prototype.clone = function() {};


/**
 * @return {number}
 */
ol.geom.LinearRing.prototype.getArea = function() {};


/**
 * @return {Array.<ol.Coordinate>}
 */
ol.geom.LinearRing.prototype.getCoordinates = function() {};


/**
 */
ol.geom.LinearRing.prototype.getType = function() {};


/**
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.LinearRing.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.LineString = function(coordinates, opt_layout) {};


/**
 * @param {ol.Coordinate} coordinate
 */
ol.geom.LineString.prototype.appendCoordinate = function(coordinate) {};


/**
 * @return {ol.geom.LineString}
 */
ol.geom.LineString.prototype.clone = function() {};


/**
 * @param {number} m
 * @param {boolean=} opt_extrapolate
 * @return {ol.Coordinate}
 */
ol.geom.LineString.prototype.getCoordinateAtM = function(m, opt_extrapolate) {};


/**
 * @return {Array.<ol.Coordinate>}
 */
ol.geom.LineString.prototype.getCoordinates = function() {};


/**
 * @return {number}
 */
ol.geom.LineString.prototype.getLength = function() {};


/**
 */
ol.geom.LineString.prototype.getType = function() {};


/**
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.LineString.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<Array.<ol.Coordinate>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiLineString = function(coordinates, opt_layout) {};


/**
 * @param {ol.geom.LineString} lineString
 */
ol.geom.MultiLineString.prototype.appendLineString = function(lineString) {};


/**
 * @return {ol.geom.MultiLineString}
 */
ol.geom.MultiLineString.prototype.clone = function() {};


/**
 * @param {number} m
 * @param {boolean=} opt_extrapolate
 * @param {boolean=} opt_interpolate
 * @return {ol.Coordinate}
 */
ol.geom.MultiLineString.prototype.getCoordinateAtM = function(m, opt_extrapolate, opt_interpolate) {};


/**
 * @return {Array.<Array.<ol.Coordinate>>}
 */
ol.geom.MultiLineString.prototype.getCoordinates = function() {};


/**
 * @param {number} index
 * @return {ol.geom.LineString}
 */
ol.geom.MultiLineString.prototype.getLineString = function(index) {};


/**
 * @return {Array.<ol.geom.LineString>}
 */
ol.geom.MultiLineString.prototype.getLineStrings = function() {};


/**
 */
ol.geom.MultiLineString.prototype.getType = function() {};


/**
 * @param {Array.<Array.<ol.Coordinate>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiLineString.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiPoint = function(coordinates, opt_layout) {};


/**
 * @param {ol.geom.Point} point
 */
ol.geom.MultiPoint.prototype.appendPoint = function(point) {};


/**
 * @return {ol.geom.MultiPoint}
 */
ol.geom.MultiPoint.prototype.clone = function() {};


/**
 * @return {Array.<ol.Coordinate>}
 */
ol.geom.MultiPoint.prototype.getCoordinates = function() {};


/**
 * @param {number} index
 * @return {ol.geom.Point}
 */
ol.geom.MultiPoint.prototype.getPoint = function(index) {};


/**
 * @return {Array.<ol.geom.Point>}
 */
ol.geom.MultiPoint.prototype.getPoints = function() {};


/**
 */
ol.geom.MultiPoint.prototype.getType = function() {};


/**
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiPoint.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<Array.<Array.<ol.Coordinate>>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiPolygon = function(coordinates, opt_layout) {};


/**
 * @param {ol.geom.Polygon} polygon
 */
ol.geom.MultiPolygon.prototype.appendPolygon = function(polygon) {};


/**
 * @return {ol.geom.MultiPolygon}
 */
ol.geom.MultiPolygon.prototype.clone = function() {};


/**
 * @return {number}
 */
ol.geom.MultiPolygon.prototype.getArea = function() {};


/**
 * @return {Array.<Array.<Array.<ol.Coordinate>>>}
 */
ol.geom.MultiPolygon.prototype.getCoordinates = function() {};


/**
 * @return {ol.geom.MultiPoint}
 */
ol.geom.MultiPolygon.prototype.getInteriorPoints = function() {};


/**
 * @param {number} index
 * @return {ol.geom.Polygon}
 */
ol.geom.MultiPolygon.prototype.getPolygon = function(index) {};


/**
 * @return {Array.<ol.geom.Polygon>}
 */
ol.geom.MultiPolygon.prototype.getPolygons = function() {};


/**
 */
ol.geom.MultiPolygon.prototype.getType = function() {};


/**
 * @param {Array.<Array.<Array.<ol.Coordinate>>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiPolygon.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {ol.Coordinate} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Point = function(coordinates, opt_layout) {};


/**
 * @return {ol.geom.Point}
 */
ol.geom.Point.prototype.clone = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Point.prototype.getCoordinates = function() {};


/**
 */
ol.geom.Point.prototype.getType = function() {};


/**
 * @param {ol.Coordinate} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Point.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<Array.<ol.Coordinate>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Polygon = function(coordinates, opt_layout) {};


/**
 * @param {ol.geom.LinearRing} linearRing
 */
ol.geom.Polygon.prototype.appendLinearRing = function(linearRing) {};


/**
 * @return {ol.geom.Polygon}
 */
ol.geom.Polygon.prototype.clone = function() {};


/**
 * @return {number}
 */
ol.geom.Polygon.prototype.getArea = function() {};


/**
 * @return {Array.<Array.<ol.Coordinate>>}
 */
ol.geom.Polygon.prototype.getCoordinates = function() {};


/**
 * @return {ol.geom.Point}
 */
ol.geom.Polygon.prototype.getInteriorPoint = function() {};


/**
 * @param {number} index
 * @return {ol.geom.LinearRing}
 */
ol.geom.Polygon.prototype.getLinearRing = function(index) {};


/**
 * @return {Array.<ol.geom.LinearRing>}
 */
ol.geom.Polygon.prototype.getLinearRings = function() {};


/**
 */
ol.geom.Polygon.prototype.getType = function() {};


/**
 * @param {Array.<Array.<ol.Coordinate>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Polygon.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @param {ol.Sphere} sphere
 * @param {ol.Coordinate} center
 * @param {number} radius
 * @param {number=} opt_n
 * @return {ol.geom.Polygon}
 */
ol.geom.Polygon.circular = function(sphere, center, radius, opt_n) {};


/**
 * @constructor
 * @extends {ol.geom.Geometry}
 */
ol.geom.SimpleGeometry = function() {};


/**
 */
ol.geom.SimpleGeometry.prototype.getExtent = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.SimpleGeometry.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.SimpleGeometry.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.SimpleGeometry.prototype.getLayout = function() {};


/**
 * @constructor
 */
ol.format.Feature = function() {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.GeoJSONOptions=} opt_options
 */
ol.format.GeoJSON = function(opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.GeoJSON.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.GeoJSON.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.geom.Geometry}
 */
ol.format.GeoJSON.prototype.readGeometry = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.GeoJSON.prototype.readProjection = function(source) {};


/**
 * @param {ol.Feature} feature
 * @param {olx.format.WriteOptions} options
 * @return {GeoJSONFeature}
 */
ol.format.GeoJSON.prototype.writeFeature = function(feature, options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions} options
 * @return {GeoJSONObject}
 */
ol.format.GeoJSON.prototype.writeFeatures = function(features, options) {};


/**
 * @param {ol.geom.Geometry} geometry
 * @param {olx.format.WriteOptions} options
 * @return {GeoJSONGeometry|GeoJSONGeometryCollection}
 */
ol.format.GeoJSON.prototype.writeGeometry = function(geometry, options) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.GMLOptions=} opt_options
 */
ol.format.GML = function(opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.GML.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {Node}
 */
ol.format.GML.prototype.writeFeatures = function(features, opt_options) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.GPXOptions=} opt_options
 */
ol.format.GPX = function(opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.GPX.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.GPX.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.GPX.prototype.readProjection = function(source) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {Node}
 */
ol.format.GPX.prototype.writeFeatures = function(features, opt_options) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.IGCOptions=} opt_options
 */
ol.format.IGC = function(opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.IGC.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.IGC.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.IGC.prototype.readProjection = function(source) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.KMLOptions=} opt_options
 */
ol.format.KML = function(opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.KML.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.KML.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Document|Node|string} source
 * @return {string|undefined}
 */
ol.format.KML.prototype.readName = function(source) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.KML.prototype.readProjection = function(source) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {Node}
 */
ol.format.KML.prototype.writeFeatures = function(features, opt_options) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 */
ol.format.OSMXML = function() {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.OSMXML.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.OSMXML.prototype.readProjection = function(source) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.PolylineOptions=} opt_options
 */
ol.format.Polyline = function(opt_options) {};


/**
 * @param {Array.<number>} numbers
 * @param {number} stride
 * @param {number=} opt_factor
 * @return {string}
 */
ol.format.Polyline.encodeDeltas = function(numbers, stride, opt_factor) {};


/**
 * @param {string} encoded
 * @param {number} stride
 * @param {number=} opt_factor
 * @return {Array.<number>}
 */
ol.format.Polyline.decodeDeltas = function(encoded, stride, opt_factor) {};


/**
 * @param {Array.<number>} numbers
 * @param {number=} opt_factor
 * @return {string}
 */
ol.format.Polyline.encodeFloats = function(numbers, opt_factor) {};


/**
 * @param {string} encoded
 * @param {number=} opt_factor
 * @return {Array.<number>}
 */
ol.format.Polyline.decodeFloats = function(encoded, opt_factor) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.Polyline.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.Polyline.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.geom.Geometry}
 */
ol.format.Polyline.prototype.readGeometry = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.Polyline.prototype.readProjection = function(source) {};


/**
 * @param {ol.geom.Geometry} geometry
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.Polyline.prototype.writeGeometry = function(geometry, opt_options) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.TopoJSONOptions=} opt_options
 */
ol.format.TopoJSON = function(opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.format.TopoJSON.prototype.readFeatures = function(source) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} object
 * @return {ol.proj.Projection}
 */
ol.format.TopoJSON.prototype.readProjection = function(object) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.WFSOptions=} opt_options
 */
ol.format.WFS = function(opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.WFS.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {ol.format.WFS.TransactionResponse|undefined}
 */
ol.format.WFS.prototype.readTransactionResponse = function(source) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {ol.format.WFS.FeatureCollectionMetadata|undefined}
 */
ol.format.WFS.prototype.readFeatureCollectionMetadata = function(source) {};


/**
 * @param {olx.format.WFSWriteGetFeatureOptions} options
 * @return {Node}
 */
ol.format.WFS.prototype.writeGetFeature = function(options) {};


/**
 * @param {Array.<ol.Feature>} inserts
 * @param {Array.<ol.Feature>} updates
 * @param {Array.<ol.Feature>} deletes
 * @param {olx.format.WFSWriteTransactionOptions} options
 * @return {Node}
 */
ol.format.WFS.prototype.writeTransaction = function(inserts, updates, deletes, options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {!ol.proj.Projection}
 */
ol.format.WFS.prototype.readProjection = function(source) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.WKTOptions=} opt_options
 */
ol.format.WKT = function(opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.WKT.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.WKT.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.geom.Geometry}
 */
ol.format.WKT.prototype.readGeometry = function(source, opt_options) {};


/**
 * @param {ol.Feature} feature
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.WKT.prototype.writeFeature = function(feature, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.WKT.prototype.writeFeatures = function(features, opt_options) {};


/**
 * @param {ol.geom.Geometry} geometry
 * @return {string}
 */
ol.format.WKT.prototype.writeGeometry = function(geometry) {};


/**
 * @constructor
 * @extends {ol.format.XML}
 */
ol.format.WMSCapabilities = function() {};


/**
 * @param {Document|Node|string} source
 * @return {Object}
 */
ol.format.WMSCapabilities.prototype.read = function(source) {};


/**
 * @type {Object}
 */
ol.events;


/**
 * @type {Object}
 */
ol.events.condition;


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.altKeyOnly = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.altShiftKeysOnly = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.always = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.click = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.mouseMove = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.never = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.singleClick = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.noModifierKeys = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.platformModifierKeyOnly = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.shiftKeyOnly = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.targetNotEditable = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.mouseOnly = function(mapBrowserEvent) {};


/**
 * @type {Object}
 */
ol.dom;


/**
 * @constructor
 * @extends {ol.Object}
 * @param {Element} target
 */
ol.dom.Input = function(target) {};


/**
 * @return {boolean|undefined}
 */
ol.dom.Input.prototype.getChecked = function() {};


/**
 * @return {string|undefined}
 */
ol.dom.Input.prototype.getValue = function() {};


/**
 * @param {string} value
 */
ol.dom.Input.prototype.setValue = function(value) {};


/**
 * @param {boolean} checked
 */
ol.dom.Input.prototype.setChecked = function(checked) {};


/**
 * @type {Object}
 */
ol.control;


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.AttributionOptions=} opt_options
 */
ol.control.Attribution = function(opt_options) {};


/**
 * @return {boolean}
 */
ol.control.Attribution.prototype.getCollapsible = function() {};


/**
 * @param {boolean} collapsible
 */
ol.control.Attribution.prototype.setCollapsible = function(collapsible) {};


/**
 * @param {boolean} collapsed
 */
ol.control.Attribution.prototype.setCollapsed = function(collapsed) {};


/**
 * @return {boolean}
 */
ol.control.Attribution.prototype.getCollapsed = function() {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.control.ControlOptions} options
 */
ol.control.Control = function(options) {};


/**
 * @return {ol.Map}
 */
ol.control.Control.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.Control.prototype.setMap = function(map) {};


/**
 * @param {olx.control.DefaultsOptions=} opt_options
 * @return {ol.Collection.<ol.control.Control>}
 */
ol.control.defaults = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.FullScreenOptions=} opt_options
 */
ol.control.FullScreen = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.MousePositionOptions=} opt_options
 */
ol.control.MousePosition = function(opt_options) {};


/**
 * @return {ol.CoordinateFormatType|undefined}
 */
ol.control.MousePosition.prototype.getCoordinateFormat = function() {};


/**
 * @return {ol.proj.Projection|undefined}
 */
ol.control.MousePosition.prototype.getProjection = function() {};


/**
 */
ol.control.MousePosition.prototype.setMap = function() {};


/**
 * @param {ol.CoordinateFormatType} format
 */
ol.control.MousePosition.prototype.setCoordinateFormat = function(format) {};


/**
 * @param {ol.proj.Projection} projection
 */
ol.control.MousePosition.prototype.setProjection = function(projection) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.RotateOptions=} opt_options
 */
ol.control.Rotate = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.ScaleLineOptions=} opt_options
 */
ol.control.ScaleLine = function(opt_options) {};


/**
 * @return {ol.control.ScaleLineUnits|undefined}
 */
ol.control.ScaleLine.prototype.getUnits = function() {};


/**
 * @param {ol.control.ScaleLineUnits} units
 */
ol.control.ScaleLine.prototype.setUnits = function(units) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.ZoomOptions=} opt_options
 */
ol.control.Zoom = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.ZoomSliderOptions=} opt_options
 */
ol.control.ZoomSlider = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.ZoomToExtentOptions=} opt_options
 */
ol.control.ZoomToExtent = function(opt_options) {};


/**
 * @type {Object}
 */
ol.color;


/**
 * @param {ol.Color|string} color
 * @return {ol.Color}
 */
ol.color.asArray = function(color) {};


/**
 * @param {ol.Color|string} color
 * @return {string}
 */
ol.color.asString = function(color) {};


/**
 */
ol.Object.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.Object.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Object.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Object.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Object.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.Object.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.Collection.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Collection.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Collection.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Collection.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.Collection.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.Collection.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.Collection.prototype.unbind = function(key) {};


/**
 */
ol.Collection.prototype.unbindAll = function() {};


/**
 */
ol.Collection.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.Collection.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Collection.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Collection.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Collection.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.Collection.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.DeviceOrientation.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.DeviceOrientation.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.DeviceOrientation.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.DeviceOrientation.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.DeviceOrientation.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.DeviceOrientation.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.DeviceOrientation.prototype.unbind = function(key) {};


/**
 */
ol.DeviceOrientation.prototype.unbindAll = function() {};


/**
 */
ol.DeviceOrientation.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.DeviceOrientation.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.DeviceOrientation.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.DeviceOrientation.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.DeviceOrientation.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.DeviceOrientation.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.Feature.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Feature.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Feature.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Feature.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.Feature.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.Feature.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.Feature.prototype.unbind = function(key) {};


/**
 */
ol.Feature.prototype.unbindAll = function() {};


/**
 */
ol.Feature.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.Feature.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Feature.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Feature.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Feature.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.Feature.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.Geolocation.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Geolocation.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Geolocation.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Geolocation.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.Geolocation.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.Geolocation.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.Geolocation.prototype.unbind = function(key) {};


/**
 */
ol.Geolocation.prototype.unbindAll = function() {};


/**
 */
ol.Geolocation.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.Geolocation.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Geolocation.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Geolocation.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Geolocation.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.Geolocation.prototype.unByKey = function(key) {};


/**
 * @return {ol.TileCoord}
 */
ol.ImageTile.prototype.getTileCoord = function() {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.Map.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Map.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Map.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Map.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.Map.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.Map.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.Map.prototype.unbind = function(key) {};


/**
 */
ol.Map.prototype.unbindAll = function() {};


/**
 */
ol.Map.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.Map.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Map.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Map.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Map.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.Map.prototype.unByKey = function(key) {};


/**
 * @type {ol.Map}
 */
ol.MapBrowserEvent.prototype.map;


/**
 * @type {olx.FrameState}
 */
ol.MapBrowserEvent.prototype.frameState;


/**
 * @constructor
 */
ol.MapBrowserPointerEvent = function() {};


/**
 * @type {Event}
 */
ol.MapBrowserPointerEvent.prototype.originalEvent;


/**
 * @type {ol.Pixel}
 */
ol.MapBrowserPointerEvent.prototype.pixel;


/**
 * @type {ol.Coordinate}
 */
ol.MapBrowserPointerEvent.prototype.coordinate;


/**
 */
ol.MapBrowserPointerEvent.prototype.preventDefault = function() {};


/**
 */
ol.MapBrowserPointerEvent.prototype.stopPropagation = function() {};


/**
 * @type {ol.Map}
 */
ol.MapBrowserPointerEvent.prototype.map;


/**
 * @type {olx.FrameState}
 */
ol.MapBrowserPointerEvent.prototype.frameState;


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.Overlay.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Overlay.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Overlay.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Overlay.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.Overlay.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.Overlay.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.Overlay.prototype.unbind = function(key) {};


/**
 */
ol.Overlay.prototype.unbindAll = function() {};


/**
 */
ol.Overlay.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.Overlay.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Overlay.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.Overlay.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Overlay.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.Overlay.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.View.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.View.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.View.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.View.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.View.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.View.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.View.prototype.unbind = function(key) {};


/**
 */
ol.View.prototype.unbindAll = function() {};


/**
 */
ol.View.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.View.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.View.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.View.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.View.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.View.prototype.unByKey = function(key) {};


/**
 * @return {number}
 */
ol.tilegrid.WMTS.prototype.getMaxZoom = function() {};


/**
 * @return {number}
 */
ol.tilegrid.WMTS.prototype.getMinZoom = function() {};


/**
 * @param {number} z
 * @return {ol.Coordinate}
 */
ol.tilegrid.WMTS.prototype.getOrigin = function(z) {};


/**
 * @param {number} z
 * @return {number}
 */
ol.tilegrid.WMTS.prototype.getResolution = function(z) {};


/**
 * @return {Array.<number>}
 */
ol.tilegrid.WMTS.prototype.getResolutions = function() {};


/**
 * @param {number} z
 * @return {number}
 */
ol.tilegrid.WMTS.prototype.getTileSize = function(z) {};


/**
 * @return {number}
 */
ol.tilegrid.XYZ.prototype.getMaxZoom = function() {};


/**
 * @return {number}
 */
ol.tilegrid.XYZ.prototype.getMinZoom = function() {};


/**
 * @param {number} z
 * @return {ol.Coordinate}
 */
ol.tilegrid.XYZ.prototype.getOrigin = function(z) {};


/**
 * @param {number} z
 * @return {number}
 */
ol.tilegrid.XYZ.prototype.getResolution = function(z) {};


/**
 * @return {Array.<number>}
 */
ol.tilegrid.XYZ.prototype.getResolutions = function() {};


/**
 * @param {number} z
 * @return {number}
 */
ol.tilegrid.XYZ.prototype.getTileSize = function(z) {};


/**
 * @return {number}
 */
ol.tilegrid.Zoomify.prototype.getMaxZoom = function() {};


/**
 * @return {number}
 */
ol.tilegrid.Zoomify.prototype.getMinZoom = function() {};


/**
 * @param {number} z
 * @return {ol.Coordinate}
 */
ol.tilegrid.Zoomify.prototype.getOrigin = function(z) {};


/**
 * @param {number} z
 * @return {number}
 */
ol.tilegrid.Zoomify.prototype.getResolution = function(z) {};


/**
 * @return {Array.<number>}
 */
ol.tilegrid.Zoomify.prototype.getResolutions = function() {};


/**
 * @param {number} z
 * @return {number}
 */
ol.tilegrid.Zoomify.prototype.getTileSize = function(z) {};


/**
 * @return {number}
 */
ol.style.Circle.prototype.getRotation = function() {};


/**
 * @return {number}
 */
ol.style.Circle.prototype.getScale = function() {};


/**
 * @return {number}
 */
ol.style.Icon.prototype.getRotation = function() {};


/**
 * @return {number}
 */
ol.style.Icon.prototype.getScale = function() {};


/**
 */
ol.source.Source.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.Source.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Source.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Source.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Source.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.Source.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Tile.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Tile.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Tile.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Tile.prototype.getState = function() {};


/**
 */
ol.source.Tile.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.Tile.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Tile.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Tile.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Tile.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.Tile.prototype.unByKey = function(key) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.TileImage.prototype.getTileGrid = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TileImage.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TileImage.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TileImage.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TileImage.prototype.getState = function() {};


/**
 */
ol.source.TileImage.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.TileImage.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TileImage.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TileImage.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TileImage.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.TileImage.prototype.unByKey = function(key) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.BingMaps.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.BingMaps.prototype.getTileUrlFunction = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.BingMaps.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 */
ol.source.BingMaps.prototype.setTileUrlFunction = function(tileUrlFunction) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.BingMaps.prototype.getTileGrid = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.BingMaps.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.BingMaps.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.BingMaps.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.BingMaps.prototype.getState = function() {};


/**
 */
ol.source.BingMaps.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.BingMaps.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.BingMaps.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.BingMaps.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.BingMaps.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.BingMaps.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Vector.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Vector.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Vector.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Vector.prototype.getState = function() {};


/**
 */
ol.source.Vector.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.Vector.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Vector.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Vector.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Vector.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.Vector.prototype.unByKey = function(key) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.Cluster.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.Cluster.prototype.addFeatures = function(features) {};


/**
 */
ol.source.Cluster.prototype.clear = function() {};


/**
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.Cluster.prototype.forEachFeature = function(f, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.Cluster.prototype.forEachFeatureInExtent = function(extent, f, opt_this) {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.Cluster.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.Cluster.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Feature}
 */
ol.source.Cluster.prototype.getClosestFeatureToCoordinate = function(coordinate) {};


/**
 * @return {ol.Extent}
 */
ol.source.Cluster.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.Cluster.prototype.getFeatureById = function(id) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.Cluster.prototype.removeFeature = function(feature) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Cluster.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Cluster.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Cluster.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Cluster.prototype.getState = function() {};


/**
 */
ol.source.Cluster.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.Cluster.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Cluster.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Cluster.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Cluster.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.Cluster.prototype.unByKey = function(key) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.FormatVector.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.FormatVector.prototype.addFeatures = function(features) {};


/**
 */
ol.source.FormatVector.prototype.clear = function() {};


/**
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.FormatVector.prototype.forEachFeature = function(f, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.FormatVector.prototype.forEachFeatureInExtent = function(extent, f, opt_this) {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.FormatVector.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.FormatVector.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Feature}
 */
ol.source.FormatVector.prototype.getClosestFeatureToCoordinate = function(coordinate) {};


/**
 * @return {ol.Extent}
 */
ol.source.FormatVector.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.FormatVector.prototype.getFeatureById = function(id) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.FormatVector.prototype.removeFeature = function(feature) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.FormatVector.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.FormatVector.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.FormatVector.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.FormatVector.prototype.getState = function() {};


/**
 */
ol.source.FormatVector.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.FormatVector.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.FormatVector.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.FormatVector.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.FormatVector.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.FormatVector.prototype.unByKey = function(key) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.source.StaticVector.prototype.readFeatures = function(source) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.StaticVector.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.StaticVector.prototype.addFeatures = function(features) {};


/**
 */
ol.source.StaticVector.prototype.clear = function() {};


/**
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.StaticVector.prototype.forEachFeature = function(f, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.StaticVector.prototype.forEachFeatureInExtent = function(extent, f, opt_this) {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.StaticVector.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.StaticVector.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Feature}
 */
ol.source.StaticVector.prototype.getClosestFeatureToCoordinate = function(coordinate) {};


/**
 * @return {ol.Extent}
 */
ol.source.StaticVector.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.StaticVector.prototype.getFeatureById = function(id) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.StaticVector.prototype.removeFeature = function(feature) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.StaticVector.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.StaticVector.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.StaticVector.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.StaticVector.prototype.getState = function() {};


/**
 */
ol.source.StaticVector.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.StaticVector.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.StaticVector.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.StaticVector.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.StaticVector.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.StaticVector.prototype.unByKey = function(key) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.source.GeoJSON.prototype.readFeatures = function(source) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.GeoJSON.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.GeoJSON.prototype.addFeatures = function(features) {};


/**
 */
ol.source.GeoJSON.prototype.clear = function() {};


/**
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.GeoJSON.prototype.forEachFeature = function(f, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.GeoJSON.prototype.forEachFeatureInExtent = function(extent, f, opt_this) {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.GeoJSON.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.GeoJSON.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Feature}
 */
ol.source.GeoJSON.prototype.getClosestFeatureToCoordinate = function(coordinate) {};


/**
 * @return {ol.Extent}
 */
ol.source.GeoJSON.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.GeoJSON.prototype.getFeatureById = function(id) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.GeoJSON.prototype.removeFeature = function(feature) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.GeoJSON.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.GeoJSON.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.GeoJSON.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.GeoJSON.prototype.getState = function() {};


/**
 */
ol.source.GeoJSON.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.GeoJSON.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.GeoJSON.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.GeoJSON.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.GeoJSON.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.GeoJSON.prototype.unByKey = function(key) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.source.GPX.prototype.readFeatures = function(source) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.GPX.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.GPX.prototype.addFeatures = function(features) {};


/**
 */
ol.source.GPX.prototype.clear = function() {};


/**
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.GPX.prototype.forEachFeature = function(f, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.GPX.prototype.forEachFeatureInExtent = function(extent, f, opt_this) {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.GPX.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.GPX.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Feature}
 */
ol.source.GPX.prototype.getClosestFeatureToCoordinate = function(coordinate) {};


/**
 * @return {ol.Extent}
 */
ol.source.GPX.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.GPX.prototype.getFeatureById = function(id) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.GPX.prototype.removeFeature = function(feature) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.GPX.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.GPX.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.GPX.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.GPX.prototype.getState = function() {};


/**
 */
ol.source.GPX.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.GPX.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.GPX.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.GPX.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.GPX.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.GPX.prototype.unByKey = function(key) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.source.IGC.prototype.readFeatures = function(source) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.IGC.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.IGC.prototype.addFeatures = function(features) {};


/**
 */
ol.source.IGC.prototype.clear = function() {};


/**
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.IGC.prototype.forEachFeature = function(f, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.IGC.prototype.forEachFeatureInExtent = function(extent, f, opt_this) {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.IGC.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.IGC.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Feature}
 */
ol.source.IGC.prototype.getClosestFeatureToCoordinate = function(coordinate) {};


/**
 * @return {ol.Extent}
 */
ol.source.IGC.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.IGC.prototype.getFeatureById = function(id) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.IGC.prototype.removeFeature = function(feature) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.IGC.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.IGC.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.IGC.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.IGC.prototype.getState = function() {};


/**
 */
ol.source.IGC.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.IGC.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.IGC.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.IGC.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.IGC.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.IGC.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.source.Image = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Image.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Image.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Image.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Image.prototype.getState = function() {};


/**
 */
ol.source.Image.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.Image.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Image.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Image.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Image.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.Image.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ImageCanvas.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ImageCanvas.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ImageCanvas.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ImageCanvas.prototype.getState = function() {};


/**
 */
ol.source.ImageCanvas.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.ImageCanvas.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ImageCanvas.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ImageCanvas.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ImageCanvas.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.ImageCanvas.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ImageMapGuide.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ImageMapGuide.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ImageMapGuide.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ImageMapGuide.prototype.getState = function() {};


/**
 */
ol.source.ImageMapGuide.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.ImageMapGuide.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ImageMapGuide.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ImageMapGuide.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ImageMapGuide.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.ImageMapGuide.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ImageStatic.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ImageStatic.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ImageStatic.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ImageStatic.prototype.getState = function() {};


/**
 */
ol.source.ImageStatic.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.ImageStatic.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ImageStatic.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ImageStatic.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ImageStatic.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.ImageStatic.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ImageVector.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ImageVector.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ImageVector.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ImageVector.prototype.getState = function() {};


/**
 */
ol.source.ImageVector.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.ImageVector.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ImageVector.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ImageVector.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ImageVector.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.ImageVector.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ImageWMS.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ImageWMS.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ImageWMS.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ImageWMS.prototype.getState = function() {};


/**
 */
ol.source.ImageWMS.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.ImageWMS.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ImageWMS.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ImageWMS.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ImageWMS.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.ImageWMS.prototype.unByKey = function(key) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.source.KML.prototype.readFeatures = function(source) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.KML.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.KML.prototype.addFeatures = function(features) {};


/**
 */
ol.source.KML.prototype.clear = function() {};


/**
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.KML.prototype.forEachFeature = function(f, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.KML.prototype.forEachFeatureInExtent = function(extent, f, opt_this) {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.KML.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.KML.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Feature}
 */
ol.source.KML.prototype.getClosestFeatureToCoordinate = function(coordinate) {};


/**
 * @return {ol.Extent}
 */
ol.source.KML.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.KML.prototype.getFeatureById = function(id) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.KML.prototype.removeFeature = function(feature) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.KML.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.KML.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.KML.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.KML.prototype.getState = function() {};


/**
 */
ol.source.KML.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.KML.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.KML.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.KML.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.KML.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.KML.prototype.unByKey = function(key) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.XYZ.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.XYZ.prototype.getTileUrlFunction = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.XYZ.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.XYZ.prototype.getTileGrid = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.XYZ.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.XYZ.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.XYZ.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.XYZ.prototype.getState = function() {};


/**
 */
ol.source.XYZ.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.XYZ.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.XYZ.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.XYZ.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.XYZ.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.XYZ.prototype.unByKey = function(key) {};


/**
 */
ol.source.MapQuest.prototype.setTileUrlFunction = function() {};


/**
 * @param {string} url
 */
ol.source.MapQuest.prototype.setUrl = function(url) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.MapQuest.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.MapQuest.prototype.getTileUrlFunction = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.MapQuest.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.MapQuest.prototype.getTileGrid = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.MapQuest.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.MapQuest.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.MapQuest.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.MapQuest.prototype.getState = function() {};


/**
 */
ol.source.MapQuest.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.MapQuest.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.MapQuest.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.MapQuest.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.MapQuest.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.MapQuest.prototype.unByKey = function(key) {};


/**
 */
ol.source.OSM.prototype.setTileUrlFunction = function() {};


/**
 * @param {string} url
 */
ol.source.OSM.prototype.setUrl = function(url) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.OSM.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.OSM.prototype.getTileUrlFunction = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.OSM.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.OSM.prototype.getTileGrid = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.OSM.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.OSM.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.OSM.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.OSM.prototype.getState = function() {};


/**
 */
ol.source.OSM.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.OSM.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.OSM.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.OSM.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.OSM.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.OSM.prototype.unByKey = function(key) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.source.OSMXML.prototype.readFeatures = function(source) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.OSMXML.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.OSMXML.prototype.addFeatures = function(features) {};


/**
 */
ol.source.OSMXML.prototype.clear = function() {};


/**
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.OSMXML.prototype.forEachFeature = function(f, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.OSMXML.prototype.forEachFeatureInExtent = function(extent, f, opt_this) {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.OSMXML.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.OSMXML.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Feature}
 */
ol.source.OSMXML.prototype.getClosestFeatureToCoordinate = function(coordinate) {};


/**
 * @return {ol.Extent}
 */
ol.source.OSMXML.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.OSMXML.prototype.getFeatureById = function(id) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.OSMXML.prototype.removeFeature = function(feature) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.OSMXML.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.OSMXML.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.OSMXML.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.OSMXML.prototype.getState = function() {};


/**
 */
ol.source.OSMXML.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.OSMXML.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.OSMXML.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.OSMXML.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.OSMXML.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.OSMXML.prototype.unByKey = function(key) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.ServerVector.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.ServerVector.prototype.addFeatures = function(features) {};


/**
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.ServerVector.prototype.forEachFeature = function(f, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.ServerVector.prototype.forEachFeatureInExtent = function(extent, f, opt_this) {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.ServerVector.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.ServerVector.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Feature}
 */
ol.source.ServerVector.prototype.getClosestFeatureToCoordinate = function(coordinate) {};


/**
 * @return {ol.Extent}
 */
ol.source.ServerVector.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.ServerVector.prototype.getFeatureById = function(id) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.ServerVector.prototype.removeFeature = function(feature) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ServerVector.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ServerVector.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ServerVector.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ServerVector.prototype.getState = function() {};


/**
 */
ol.source.ServerVector.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.ServerVector.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ServerVector.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.ServerVector.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ServerVector.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.ServerVector.prototype.unByKey = function(key) {};


/**
 */
ol.source.Stamen.prototype.setTileUrlFunction = function() {};


/**
 * @param {string} url
 */
ol.source.Stamen.prototype.setUrl = function(url) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.Stamen.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.Stamen.prototype.getTileUrlFunction = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.Stamen.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.Stamen.prototype.getTileGrid = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Stamen.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Stamen.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Stamen.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Stamen.prototype.getState = function() {};


/**
 */
ol.source.Stamen.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.Stamen.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Stamen.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Stamen.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Stamen.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.Stamen.prototype.unByKey = function(key) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.TileDebug.prototype.getTileGrid = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TileDebug.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TileDebug.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TileDebug.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TileDebug.prototype.getState = function() {};


/**
 */
ol.source.TileDebug.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.TileDebug.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TileDebug.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TileDebug.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TileDebug.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.TileDebug.prototype.unByKey = function(key) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.TileJSON.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.TileJSON.prototype.getTileUrlFunction = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.TileJSON.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 */
ol.source.TileJSON.prototype.setTileUrlFunction = function(tileUrlFunction) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.TileJSON.prototype.getTileGrid = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TileJSON.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TileJSON.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TileJSON.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TileJSON.prototype.getState = function() {};


/**
 */
ol.source.TileJSON.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.TileJSON.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TileJSON.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TileJSON.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TileJSON.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.TileJSON.prototype.unByKey = function(key) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.source.TileVector.prototype.readFeatures = function(source) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.TileVector.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.TileVector.prototype.getFeatureById = function(id) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TileVector.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TileVector.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TileVector.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TileVector.prototype.getState = function() {};


/**
 */
ol.source.TileVector.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.TileVector.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TileVector.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TileVector.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TileVector.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.TileVector.prototype.unByKey = function(key) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.TileWMS.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.TileWMS.prototype.getTileUrlFunction = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.TileWMS.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 */
ol.source.TileWMS.prototype.setTileUrlFunction = function(tileUrlFunction) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.TileWMS.prototype.getTileGrid = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TileWMS.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TileWMS.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TileWMS.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TileWMS.prototype.getState = function() {};


/**
 */
ol.source.TileWMS.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.TileWMS.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TileWMS.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TileWMS.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TileWMS.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.TileWMS.prototype.unByKey = function(key) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.source.TopoJSON.prototype.readFeatures = function(source) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.TopoJSON.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.TopoJSON.prototype.addFeatures = function(features) {};


/**
 */
ol.source.TopoJSON.prototype.clear = function() {};


/**
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.TopoJSON.prototype.forEachFeature = function(f, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} f
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.TopoJSON.prototype.forEachFeatureInExtent = function(extent, f, opt_this) {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.TopoJSON.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.TopoJSON.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Feature}
 */
ol.source.TopoJSON.prototype.getClosestFeatureToCoordinate = function(coordinate) {};


/**
 * @return {ol.Extent}
 */
ol.source.TopoJSON.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.TopoJSON.prototype.getFeatureById = function(id) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.TopoJSON.prototype.removeFeature = function(feature) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TopoJSON.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TopoJSON.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TopoJSON.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TopoJSON.prototype.getState = function() {};


/**
 */
ol.source.TopoJSON.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.TopoJSON.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TopoJSON.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.TopoJSON.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TopoJSON.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.TopoJSON.prototype.unByKey = function(key) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.WMTS.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.WMTS.prototype.getTileUrlFunction = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.WMTS.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 */
ol.source.WMTS.prototype.setTileUrlFunction = function(tileUrlFunction) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.WMTS.prototype.getTileGrid = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.WMTS.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.WMTS.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.WMTS.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.WMTS.prototype.getState = function() {};


/**
 */
ol.source.WMTS.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.WMTS.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.WMTS.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.WMTS.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.WMTS.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.WMTS.prototype.unByKey = function(key) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.Zoomify.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.Zoomify.prototype.getTileUrlFunction = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.Zoomify.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 */
ol.source.Zoomify.prototype.setTileUrlFunction = function(tileUrlFunction) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.Zoomify.prototype.getTileGrid = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Zoomify.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Zoomify.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Zoomify.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Zoomify.prototype.getState = function() {};


/**
 */
ol.source.Zoomify.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.source.Zoomify.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Zoomify.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.source.Zoomify.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Zoomify.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.source.Zoomify.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.layer.Base.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Base.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Base.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Base.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.layer.Base.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.layer.Base.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.layer.Base.prototype.unbind = function(key) {};


/**
 */
ol.layer.Base.prototype.unbindAll = function() {};


/**
 */
ol.layer.Base.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.layer.Base.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Base.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Base.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Base.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.layer.Base.prototype.unByKey = function(key) {};


/**
 * @return {number|undefined}
 */
ol.layer.Layer.prototype.getBrightness = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Layer.prototype.getContrast = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Layer.prototype.getHue = function() {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Layer.prototype.getExtent = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Layer.prototype.getMaxResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Layer.prototype.getMinResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Layer.prototype.getOpacity = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Layer.prototype.getSaturation = function() {};


/**
 * @return {boolean|undefined}
 */
ol.layer.Layer.prototype.getVisible = function() {};


/**
 * @param {number|undefined} brightness
 */
ol.layer.Layer.prototype.setBrightness = function(brightness) {};


/**
 * @param {number|undefined} contrast
 */
ol.layer.Layer.prototype.setContrast = function(contrast) {};


/**
 * @param {number|undefined} hue
 */
ol.layer.Layer.prototype.setHue = function(hue) {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Layer.prototype.setExtent = function(extent) {};


/**
 * @param {number|undefined} maxResolution
 */
ol.layer.Layer.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number|undefined} minResolution
 */
ol.layer.Layer.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number|undefined} opacity
 */
ol.layer.Layer.prototype.setOpacity = function(opacity) {};


/**
 * @param {number|undefined} saturation
 */
ol.layer.Layer.prototype.setSaturation = function(saturation) {};


/**
 * @param {boolean|undefined} visible
 */
ol.layer.Layer.prototype.setVisible = function(visible) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.layer.Layer.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Layer.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Layer.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Layer.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.layer.Layer.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.layer.Layer.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.layer.Layer.prototype.unbind = function(key) {};


/**
 */
ol.layer.Layer.prototype.unbindAll = function() {};


/**
 */
ol.layer.Layer.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.layer.Layer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Layer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Layer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Layer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.layer.Layer.prototype.unByKey = function(key) {};


/**
 * @return {ol.source.Source}
 */
ol.layer.Vector.prototype.getSource = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Vector.prototype.getBrightness = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Vector.prototype.getContrast = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Vector.prototype.getHue = function() {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Vector.prototype.getExtent = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Vector.prototype.getMaxResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Vector.prototype.getMinResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Vector.prototype.getOpacity = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Vector.prototype.getSaturation = function() {};


/**
 * @return {boolean|undefined}
 */
ol.layer.Vector.prototype.getVisible = function() {};


/**
 * @param {number|undefined} brightness
 */
ol.layer.Vector.prototype.setBrightness = function(brightness) {};


/**
 * @param {number|undefined} contrast
 */
ol.layer.Vector.prototype.setContrast = function(contrast) {};


/**
 * @param {number|undefined} hue
 */
ol.layer.Vector.prototype.setHue = function(hue) {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Vector.prototype.setExtent = function(extent) {};


/**
 * @param {number|undefined} maxResolution
 */
ol.layer.Vector.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number|undefined} minResolution
 */
ol.layer.Vector.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number|undefined} opacity
 */
ol.layer.Vector.prototype.setOpacity = function(opacity) {};


/**
 * @param {number|undefined} saturation
 */
ol.layer.Vector.prototype.setSaturation = function(saturation) {};


/**
 * @param {boolean|undefined} visible
 */
ol.layer.Vector.prototype.setVisible = function(visible) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.layer.Vector.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Vector.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Vector.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Vector.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.layer.Vector.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.layer.Vector.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.layer.Vector.prototype.unbind = function(key) {};


/**
 */
ol.layer.Vector.prototype.unbindAll = function() {};


/**
 */
ol.layer.Vector.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.layer.Vector.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Vector.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Vector.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Vector.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.layer.Vector.prototype.unByKey = function(key) {};


/**
 * @return {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction}
 */
ol.layer.Heatmap.prototype.getStyle = function() {};


/**
 * @return {ol.style.StyleFunction|undefined}
 */
ol.layer.Heatmap.prototype.getStyleFunction = function() {};


/**
 * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined} style
 */
ol.layer.Heatmap.prototype.setStyle = function(style) {};


/**
 * @return {ol.source.Source}
 */
ol.layer.Heatmap.prototype.getSource = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Heatmap.prototype.getBrightness = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Heatmap.prototype.getContrast = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Heatmap.prototype.getHue = function() {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Heatmap.prototype.getExtent = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Heatmap.prototype.getMaxResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Heatmap.prototype.getMinResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Heatmap.prototype.getOpacity = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Heatmap.prototype.getSaturation = function() {};


/**
 * @return {boolean|undefined}
 */
ol.layer.Heatmap.prototype.getVisible = function() {};


/**
 * @param {number|undefined} brightness
 */
ol.layer.Heatmap.prototype.setBrightness = function(brightness) {};


/**
 * @param {number|undefined} contrast
 */
ol.layer.Heatmap.prototype.setContrast = function(contrast) {};


/**
 * @param {number|undefined} hue
 */
ol.layer.Heatmap.prototype.setHue = function(hue) {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Heatmap.prototype.setExtent = function(extent) {};


/**
 * @param {number|undefined} maxResolution
 */
ol.layer.Heatmap.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number|undefined} minResolution
 */
ol.layer.Heatmap.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number|undefined} opacity
 */
ol.layer.Heatmap.prototype.setOpacity = function(opacity) {};


/**
 * @param {number|undefined} saturation
 */
ol.layer.Heatmap.prototype.setSaturation = function(saturation) {};


/**
 * @param {boolean|undefined} visible
 */
ol.layer.Heatmap.prototype.setVisible = function(visible) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.layer.Heatmap.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Heatmap.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Heatmap.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Heatmap.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.layer.Heatmap.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.layer.Heatmap.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.layer.Heatmap.prototype.unbind = function(key) {};


/**
 */
ol.layer.Heatmap.prototype.unbindAll = function() {};


/**
 */
ol.layer.Heatmap.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.layer.Heatmap.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Heatmap.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Heatmap.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Heatmap.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.layer.Heatmap.prototype.unByKey = function(key) {};


/**
 * @return {ol.source.Source}
 */
ol.layer.Image.prototype.getSource = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Image.prototype.getBrightness = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Image.prototype.getContrast = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Image.prototype.getHue = function() {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Image.prototype.getExtent = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Image.prototype.getMaxResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Image.prototype.getMinResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Image.prototype.getOpacity = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Image.prototype.getSaturation = function() {};


/**
 * @return {boolean|undefined}
 */
ol.layer.Image.prototype.getVisible = function() {};


/**
 * @param {number|undefined} brightness
 */
ol.layer.Image.prototype.setBrightness = function(brightness) {};


/**
 * @param {number|undefined} contrast
 */
ol.layer.Image.prototype.setContrast = function(contrast) {};


/**
 * @param {number|undefined} hue
 */
ol.layer.Image.prototype.setHue = function(hue) {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Image.prototype.setExtent = function(extent) {};


/**
 * @param {number|undefined} maxResolution
 */
ol.layer.Image.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number|undefined} minResolution
 */
ol.layer.Image.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number|undefined} opacity
 */
ol.layer.Image.prototype.setOpacity = function(opacity) {};


/**
 * @param {number|undefined} saturation
 */
ol.layer.Image.prototype.setSaturation = function(saturation) {};


/**
 * @param {boolean|undefined} visible
 */
ol.layer.Image.prototype.setVisible = function(visible) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.layer.Image.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Image.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Image.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Image.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.layer.Image.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.layer.Image.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.layer.Image.prototype.unbind = function(key) {};


/**
 */
ol.layer.Image.prototype.unbindAll = function() {};


/**
 */
ol.layer.Image.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.layer.Image.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Image.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Image.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Image.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.layer.Image.prototype.unByKey = function(key) {};


/**
 * @return {number|undefined}
 */
ol.layer.Group.prototype.getBrightness = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Group.prototype.getContrast = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Group.prototype.getHue = function() {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Group.prototype.getExtent = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Group.prototype.getMaxResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Group.prototype.getMinResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Group.prototype.getOpacity = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Group.prototype.getSaturation = function() {};


/**
 * @return {boolean|undefined}
 */
ol.layer.Group.prototype.getVisible = function() {};


/**
 * @param {number|undefined} brightness
 */
ol.layer.Group.prototype.setBrightness = function(brightness) {};


/**
 * @param {number|undefined} contrast
 */
ol.layer.Group.prototype.setContrast = function(contrast) {};


/**
 * @param {number|undefined} hue
 */
ol.layer.Group.prototype.setHue = function(hue) {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Group.prototype.setExtent = function(extent) {};


/**
 * @param {number|undefined} maxResolution
 */
ol.layer.Group.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number|undefined} minResolution
 */
ol.layer.Group.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number|undefined} opacity
 */
ol.layer.Group.prototype.setOpacity = function(opacity) {};


/**
 * @param {number|undefined} saturation
 */
ol.layer.Group.prototype.setSaturation = function(saturation) {};


/**
 * @param {boolean|undefined} visible
 */
ol.layer.Group.prototype.setVisible = function(visible) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.layer.Group.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Group.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Group.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Group.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.layer.Group.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.layer.Group.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.layer.Group.prototype.unbind = function(key) {};


/**
 */
ol.layer.Group.prototype.unbindAll = function() {};


/**
 */
ol.layer.Group.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.layer.Group.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Group.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Group.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Group.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.layer.Group.prototype.unByKey = function(key) {};


/**
 * @return {ol.source.Source}
 */
ol.layer.Tile.prototype.getSource = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Tile.prototype.getBrightness = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Tile.prototype.getContrast = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Tile.prototype.getHue = function() {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Tile.prototype.getExtent = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Tile.prototype.getMaxResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Tile.prototype.getMinResolution = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Tile.prototype.getOpacity = function() {};


/**
 * @return {number|undefined}
 */
ol.layer.Tile.prototype.getSaturation = function() {};


/**
 * @return {boolean|undefined}
 */
ol.layer.Tile.prototype.getVisible = function() {};


/**
 * @param {number|undefined} brightness
 */
ol.layer.Tile.prototype.setBrightness = function(brightness) {};


/**
 * @param {number|undefined} contrast
 */
ol.layer.Tile.prototype.setContrast = function(contrast) {};


/**
 * @param {number|undefined} hue
 */
ol.layer.Tile.prototype.setHue = function(hue) {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Tile.prototype.setExtent = function(extent) {};


/**
 * @param {number|undefined} maxResolution
 */
ol.layer.Tile.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number|undefined} minResolution
 */
ol.layer.Tile.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number|undefined} opacity
 */
ol.layer.Tile.prototype.setOpacity = function(opacity) {};


/**
 * @param {number|undefined} saturation
 */
ol.layer.Tile.prototype.setSaturation = function(saturation) {};


/**
 * @param {boolean|undefined} visible
 */
ol.layer.Tile.prototype.setVisible = function(visible) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.layer.Tile.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Tile.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Tile.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Tile.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.layer.Tile.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.layer.Tile.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.layer.Tile.prototype.unbind = function(key) {};


/**
 */
ol.layer.Tile.prototype.unbindAll = function() {};


/**
 */
ol.layer.Tile.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.layer.Tile.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Tile.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.layer.Tile.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Tile.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.layer.Tile.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.interaction.Interaction = function() {};


/**
 */
ol.interaction.Interaction.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.Interaction.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.Interaction.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.Interaction.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Interaction.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.Interaction.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.DoubleClickZoom.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.DoubleClickZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DoubleClickZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DoubleClickZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DoubleClickZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.DoubleClickZoom.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.DragAndDrop.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.DragAndDrop.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragAndDrop.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragAndDrop.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragAndDrop.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.DragAndDrop.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.interaction.Pointer = function() {};


/**
 */
ol.interaction.Pointer.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.Pointer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.Pointer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.Pointer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Pointer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.Pointer.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.DragBox.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.DragBox.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragBox.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragBox.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragBox.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.DragBox.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.DragPan.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.DragPan.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragPan.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragPan.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragPan.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.DragPan.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.DragRotateAndZoom.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.DragRotateAndZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragRotateAndZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragRotateAndZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragRotateAndZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.DragRotateAndZoom.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.DragRotate.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.DragRotate.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragRotate.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragRotate.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragRotate.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.DragRotate.prototype.unByKey = function(key) {};


/**
 * @return {ol.geom.Geometry}
 */
ol.interaction.DragZoom.prototype.getGeometry = function() {};


/**
 */
ol.interaction.DragZoom.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.DragZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.DragZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.DragZoom.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.Draw.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.Draw.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.Draw.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.Draw.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Draw.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.Draw.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.KeyboardPan.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.KeyboardPan.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.KeyboardPan.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.KeyboardPan.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.KeyboardPan.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.KeyboardPan.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.KeyboardZoom.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.KeyboardZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.KeyboardZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.KeyboardZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.KeyboardZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.KeyboardZoom.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.Modify.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.Modify.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.Modify.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.Modify.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Modify.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.Modify.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.MouseWheelZoom.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.MouseWheelZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.MouseWheelZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.MouseWheelZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.MouseWheelZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.MouseWheelZoom.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.PinchRotate.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.PinchRotate.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.PinchRotate.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.PinchRotate.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.PinchRotate.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.PinchRotate.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.PinchZoom.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.PinchZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.PinchZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.PinchZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.PinchZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.PinchZoom.prototype.unByKey = function(key) {};


/**
 */
ol.interaction.Select.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.interaction.Select.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.Select.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.interaction.Select.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Select.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.interaction.Select.prototype.unByKey = function(key) {};


/**
 */
ol.geom.Geometry.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.geom.Geometry.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.Geometry.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.Geometry.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.Geometry.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.geom.Geometry.prototype.unByKey = function(key) {};


/**
 * @return {ol.geom.Geometry}
 */
ol.geom.SimpleGeometry.prototype.clone = function() {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.SimpleGeometry.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @return {ol.geom.GeometryType}
 */
ol.geom.SimpleGeometry.prototype.getType = function() {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.SimpleGeometry.prototype.transform = function(source, destination) {};


/**
 */
ol.geom.SimpleGeometry.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.geom.SimpleGeometry.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.SimpleGeometry.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.SimpleGeometry.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.SimpleGeometry.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.geom.SimpleGeometry.prototype.unByKey = function(key) {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Circle.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Circle.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.Circle.prototype.getLayout = function() {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.Circle.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.Circle.prototype.transform = function(source, destination) {};


/**
 */
ol.geom.Circle.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.geom.Circle.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.Circle.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.Circle.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.Circle.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.geom.Circle.prototype.unByKey = function(key) {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.GeometryCollection.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.GeometryCollection.prototype.transform = function(source, destination) {};


/**
 */
ol.geom.GeometryCollection.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.geom.GeometryCollection.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.GeometryCollection.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.GeometryCollection.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.GeometryCollection.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.geom.GeometryCollection.prototype.unByKey = function(key) {};


/**
 */
ol.geom.LinearRing.prototype.getExtent = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.LinearRing.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.LinearRing.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.LinearRing.prototype.getLayout = function() {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.LinearRing.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.LinearRing.prototype.transform = function(source, destination) {};


/**
 */
ol.geom.LinearRing.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.geom.LinearRing.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.LinearRing.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.LinearRing.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.LinearRing.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.geom.LinearRing.prototype.unByKey = function(key) {};


/**
 */
ol.geom.LineString.prototype.getExtent = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.LineString.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.LineString.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.LineString.prototype.getLayout = function() {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.LineString.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.LineString.prototype.transform = function(source, destination) {};


/**
 */
ol.geom.LineString.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.geom.LineString.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.LineString.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.LineString.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.LineString.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.geom.LineString.prototype.unByKey = function(key) {};


/**
 */
ol.geom.MultiLineString.prototype.getExtent = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiLineString.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiLineString.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.MultiLineString.prototype.getLayout = function() {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.MultiLineString.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.MultiLineString.prototype.transform = function(source, destination) {};


/**
 */
ol.geom.MultiLineString.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.geom.MultiLineString.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.MultiLineString.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.MultiLineString.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.MultiLineString.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.geom.MultiLineString.prototype.unByKey = function(key) {};


/**
 */
ol.geom.MultiPoint.prototype.getExtent = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiPoint.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiPoint.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.MultiPoint.prototype.getLayout = function() {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.MultiPoint.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.MultiPoint.prototype.transform = function(source, destination) {};


/**
 */
ol.geom.MultiPoint.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.geom.MultiPoint.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.MultiPoint.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.MultiPoint.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.MultiPoint.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.geom.MultiPoint.prototype.unByKey = function(key) {};


/**
 */
ol.geom.MultiPolygon.prototype.getExtent = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiPolygon.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiPolygon.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.MultiPolygon.prototype.getLayout = function() {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.MultiPolygon.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.MultiPolygon.prototype.transform = function(source, destination) {};


/**
 */
ol.geom.MultiPolygon.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.geom.MultiPolygon.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.MultiPolygon.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.MultiPolygon.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.MultiPolygon.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.geom.MultiPolygon.prototype.unByKey = function(key) {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Point.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Point.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.Point.prototype.getLayout = function() {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.Point.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.Point.prototype.transform = function(source, destination) {};


/**
 */
ol.geom.Point.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.geom.Point.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.Point.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.Point.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.Point.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.geom.Point.prototype.unByKey = function(key) {};


/**
 */
ol.geom.Polygon.prototype.getExtent = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Polygon.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Polygon.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.Polygon.prototype.getLayout = function() {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.Polygon.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.Polygon.prototype.transform = function(source, destination) {};


/**
 */
ol.geom.Polygon.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.geom.Polygon.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.Polygon.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.geom.Polygon.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.Polygon.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.geom.Polygon.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.dom.Input.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.dom.Input.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.dom.Input.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.dom.Input.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.dom.Input.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.dom.Input.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.dom.Input.prototype.unbind = function(key) {};


/**
 */
ol.dom.Input.prototype.unbindAll = function() {};


/**
 */
ol.dom.Input.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.dom.Input.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.dom.Input.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.dom.Input.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.dom.Input.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.dom.Input.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.control.Control.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.Control.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.Control.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.Control.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.control.Control.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.control.Control.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.control.Control.prototype.unbind = function(key) {};


/**
 */
ol.control.Control.prototype.unbindAll = function() {};


/**
 */
ol.control.Control.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.control.Control.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.Control.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.Control.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.Control.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.control.Control.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.Attribution.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.Attribution.prototype.setMap = function(map) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.control.Attribution.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.Attribution.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.Attribution.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.Attribution.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.control.Attribution.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.control.Attribution.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.control.Attribution.prototype.unbind = function(key) {};


/**
 */
ol.control.Attribution.prototype.unbindAll = function() {};


/**
 */
ol.control.Attribution.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.control.Attribution.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.Attribution.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.Attribution.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.Attribution.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.control.Attribution.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.FullScreen.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.FullScreen.prototype.setMap = function(map) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.control.FullScreen.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.FullScreen.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.FullScreen.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.FullScreen.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.control.FullScreen.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.control.FullScreen.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.control.FullScreen.prototype.unbind = function(key) {};


/**
 */
ol.control.FullScreen.prototype.unbindAll = function() {};


/**
 */
ol.control.FullScreen.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.control.FullScreen.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.FullScreen.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.FullScreen.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.FullScreen.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.control.FullScreen.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.MousePosition.prototype.getMap = function() {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.control.MousePosition.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.MousePosition.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.MousePosition.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.MousePosition.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.control.MousePosition.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.control.MousePosition.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.control.MousePosition.prototype.unbind = function(key) {};


/**
 */
ol.control.MousePosition.prototype.unbindAll = function() {};


/**
 */
ol.control.MousePosition.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.control.MousePosition.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.MousePosition.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.MousePosition.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.MousePosition.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.control.MousePosition.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.Rotate.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.Rotate.prototype.setMap = function(map) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.control.Rotate.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.Rotate.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.Rotate.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.Rotate.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.control.Rotate.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.control.Rotate.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.control.Rotate.prototype.unbind = function(key) {};


/**
 */
ol.control.Rotate.prototype.unbindAll = function() {};


/**
 */
ol.control.Rotate.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.control.Rotate.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.Rotate.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.Rotate.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.Rotate.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.control.Rotate.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.ScaleLine.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.ScaleLine.prototype.setMap = function(map) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.control.ScaleLine.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.ScaleLine.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.ScaleLine.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.ScaleLine.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.control.ScaleLine.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.control.ScaleLine.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.control.ScaleLine.prototype.unbind = function(key) {};


/**
 */
ol.control.ScaleLine.prototype.unbindAll = function() {};


/**
 */
ol.control.ScaleLine.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.control.ScaleLine.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.ScaleLine.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.ScaleLine.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.ScaleLine.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.control.ScaleLine.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.Zoom.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.Zoom.prototype.setMap = function(map) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.control.Zoom.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.Zoom.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.Zoom.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.Zoom.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.control.Zoom.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.control.Zoom.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.control.Zoom.prototype.unbind = function(key) {};


/**
 */
ol.control.Zoom.prototype.unbindAll = function() {};


/**
 */
ol.control.Zoom.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.control.Zoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.Zoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.Zoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.Zoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.control.Zoom.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.ZoomSlider.prototype.getMap = function() {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.control.ZoomSlider.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.ZoomSlider.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.ZoomSlider.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.ZoomSlider.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.control.ZoomSlider.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.control.ZoomSlider.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.control.ZoomSlider.prototype.unbind = function(key) {};


/**
 */
ol.control.ZoomSlider.prototype.unbindAll = function() {};


/**
 */
ol.control.ZoomSlider.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.control.ZoomSlider.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.ZoomSlider.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.ZoomSlider.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.ZoomSlider.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.control.ZoomSlider.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.ZoomToExtent.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.ZoomToExtent.prototype.setMap = function(map) {};


/**
 * @param {string} key
 * @param {ol.Object} target
 * @param {string=} opt_targetKey
 * @return {ol.ObjectAccessor}
 */
ol.control.ZoomToExtent.prototype.bindTo = function(key, target, opt_targetKey) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.ZoomToExtent.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.ZoomToExtent.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.ZoomToExtent.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 */
ol.control.ZoomToExtent.prototype.set = function(key, value) {};


/**
 * @param {Object.<string, *>} values
 */
ol.control.ZoomToExtent.prototype.setProperties = function(values) {};


/**
 * @param {string} key
 */
ol.control.ZoomToExtent.prototype.unbind = function(key) {};


/**
 */
ol.control.ZoomToExtent.prototype.unbindAll = function() {};


/**
 */
ol.control.ZoomToExtent.prototype.dispatchChangeEvent = function() {};


/**
 * @return {number}
 */
ol.control.ZoomToExtent.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.ZoomToExtent.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {*}
 */
ol.control.ZoomToExtent.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.ZoomToExtent.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {*} key
 */
ol.control.ZoomToExtent.prototype.unByKey = function(key) {};


/**
 * @typedef {{html: (string)}}
 */
olx.AttributionOptions;


/**
 * @typedef {{loadTilesWhileAnimating: (boolean|undefined), loadTilesWhileInteracting: (boolean|undefined)}}
 */
olx.DeviceOptions;


/**
 * @typedef {{tracking: (boolean|undefined)}}
 */
olx.DeviceOrientationOptions;


/**
 * @typedef {{tracking: (boolean|undefined), trackingOptions: (GeolocationPositionOptions|undefined), projection: (ol.proj.ProjectionLike)}}
 */
olx.GeolocationOptions;


/**
 * @typedef {{href: (string), src: (string)}}
 */
olx.LogoOptions;


/**
 * @typedef {{map: (ol.Map|undefined), maxLines: (number|undefined), strokeStyle: (ol.style.Stroke|undefined), targetSize: (number|undefined)}}
 */
olx.GraticuleOptions;


/**
 * @typedef {{controls: (ol.Collection.<ol.control.Control>|Array.<ol.control.Control>|undefined), deviceOptions: (olx.DeviceOptions|undefined), pixelRatio: (number|undefined), interactions: (ol.Collection.<ol.interaction.Interaction>|Array.<ol.interaction.Interaction>|undefined), keyboardEventTarget: (Element|Document|string|undefined), layers: (Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined), logo: (boolean|string|olx.LogoOptions|undefined), overlays: (ol.Collection.<ol.Overlay>|Array.<ol.Overlay>|undefined), renderer: (ol.RendererType|Array.<(ol.RendererType|string)>|string|undefined), target: (Element|string|undefined), view: (ol.View|undefined)}}
 */
olx.MapOptions;


/**
 * @typedef {{element: (Element|undefined), offset: (Array.<number>|undefined), position: (ol.Coordinate|undefined), positioning: (ol.OverlayPositioning|string|undefined), stopEvent: (boolean|undefined), insertFirst: (boolean|undefined)}}
 */
olx.OverlayOptions;


/**
 * @typedef {{code: (string), units: (ol.proj.Units|string), extent: (ol.Extent|undefined), axisOrientation: (string|undefined), global: (boolean|undefined), worldExtent: (ol.Extent|undefined)}}
 */
olx.ProjectionOptions;


/**
 * @typedef {{center: (ol.Coordinate|undefined), constrainRotation: (boolean|number|undefined), enableRotation: (boolean|undefined), extent: (ol.Extent|undefined), maxResolution: (number|undefined), minResolution: (number|undefined), maxZoom: (number|undefined), minZoom: (number|undefined), projection: (ol.proj.ProjectionLike), resolution: (number|undefined), resolutions: (Array.<number>|undefined), rotation: (number|undefined), zoom: (number|undefined), zoomFactor: (number|undefined)}}
 */
olx.ViewOptions;


/**
 * @type {Object}
 */
olx.animation;


/**
 * @typedef {{resolution: (number), start: (number|undefined), duration: (number|undefined), easing: (Function)}}
 */
olx.animation.BounceOptions;


/**
 * @typedef {{source: (ol.Coordinate), start: (number|undefined), duration: (number|undefined), easing: (Function)}}
 */
olx.animation.PanOptions;


/**
 * @typedef {{rotation: (number|undefined), anchor: (ol.Coordinate|undefined), start: (number|undefined), duration: (number|undefined), easing: (Function)}}
 */
olx.animation.RotateOptions;


/**
 * @typedef {{resolution: (number), start: (number|undefined), duration: (number|undefined), easing: (Function)}}
 */
olx.animation.ZoomOptions;


/**
 * @type {Object}
 */
olx.control;


/**
 * @typedef {{className: (string|undefined), target: (Element|undefined), collapsible: (boolean|undefined), collapsed: (boolean|undefined), tipLabel: (string|undefined), label: (string|undefined), collapseLabel: (string|undefined)}}
 */
olx.control.AttributionOptions;


/**
 * @typedef {{element: (Element|undefined), target: (Element|string|undefined)}}
 */
olx.control.ControlOptions;


/**
 * @typedef {{attribution: (boolean|undefined), attributionOptions: (olx.control.AttributionOptions|undefined), rotate: (boolean|undefined), rotateOptions: (olx.control.RotateOptions|undefined), zoom: (boolean|undefined), zoomOptions: (olx.control.ZoomOptions|undefined)}}
 */
olx.control.DefaultsOptions;


/**
 * @typedef {{className: (string|undefined), tipLabel: (string|undefined), keys: (boolean|undefined), target: (Element|undefined)}}
 */
olx.control.FullScreenOptions;


/**
 * @typedef {{className: (string|undefined), coordinateFormat: (ol.CoordinateFormatType|undefined), projection: (ol.proj.ProjectionLike), target: (Element|undefined), undefinedHTML: (string|undefined)}}
 */
olx.control.MousePositionOptions;


/**
 * @typedef {{className: (string|undefined), minWidth: (number|undefined), target: (Element|undefined), units: (ol.control.ScaleLineUnits|string|undefined)}}
 */
olx.control.ScaleLineOptions;


/**
 * @typedef {{className: (string|undefined), label: (string|undefined), tipLabel: (string|undefined), duration: (number|undefined), autoHide: (boolean|undefined), target: (Element|undefined)}}
 */
olx.control.RotateOptions;


/**
 * @typedef {{duration: (number|undefined), className: (string|undefined), zoomInLabel: (string|undefined), zoomOutLabel: (string|undefined), zoomInTipLabel: (string|undefined), zoomOutTipLabel: (string|undefined), delta: (number|undefined), target: (Element|undefined)}}
 */
olx.control.ZoomOptions;


/**
 * @typedef {{className: (string|undefined), maxResolution: (number|undefined), minResolution: (number|undefined)}}
 */
olx.control.ZoomSliderOptions;


/**
 * @typedef {{className: (string|undefined), target: (Element|undefined), tipLabel: (string|undefined), extent: (ol.Extent|undefined)}}
 */
olx.control.ZoomToExtentOptions;


/**
 * @type {Object}
 */
olx.format;


/**
 * @typedef {{dataProjection: (ol.proj.ProjectionLike|undefined), featureProjection: (ol.proj.ProjectionLike|undefined)}}
 */
olx.format.ReadOptions;


/**
 * @typedef {{dataProjection: (ol.proj.ProjectionLike|undefined), featureProjection: (ol.proj.ProjectionLike)}}
 */
olx.format.WriteOptions;


/**
 * @typedef {{defaultDataProjection: (ol.proj.ProjectionLike), geometryName: (string|undefined)}}
 */
olx.format.GeoJSONOptions;


/**
 * @typedef {{factor: (number)}}
 */
olx.format.PolylineOptions;


/**
 * @typedef {{defaultDataProjection: (ol.proj.ProjectionLike)}}
 */
olx.format.TopoJSONOptions;


/**
 * @typedef {{altitudeMode: (ol.format.IGCZ|undefined)}}
 */
olx.format.IGCOptions;


/**
 * @typedef {{extractStyles: (boolean|undefined), defaultStyle: (Array.<ol.style.Style>|undefined)}}
 */
olx.format.KMLOptions;


/**
 * @typedef {{featureNS: (string), featureType: (string), srsName: (string), surface: (boolean|undefined), curve: (boolean|undefined), multiCurve: (boolean|undefined), multiSurface: (boolean|undefined), schemaLocation: (string|undefined)}}
 */
olx.format.GMLOptions;


/**
 * @typedef {{readExtensions: (Function)}}
 */
olx.format.GPXOptions;


/**
 * @typedef {{featureNS: (string), featureType: (string), schemaLocation: (string|undefined)}}
 */
olx.format.WFSOptions;


/**
 * @typedef {{featureNS: (string), featurePrefix: (string), featureTypes: (Array.<string>), srsName: (string|undefined), handle: (string|undefined), outputFormat: (string|undefined), maxFeatures: (number|undefined), geometryName: (string|undefined), bbox: (ol.Extent|undefined)}}
 */
olx.format.WFSWriteGetFeatureOptions;


/**
 * @typedef {{featureNS: (string), featurePrefix: (string), featureType: (string), srsName: (string|undefined), handle: (string|undefined), nativeElements: (Array.<Object>), gmlOptions: (olx.format.GMLOptions|undefined)}}
 */
olx.format.WFSWriteTransactionOptions;


/**
 * @typedef {{splitCollection: (boolean|undefined)}}
 */
olx.format.WKTOptions;


/**
 * @type {Object}
 */
olx.interaction;


/**
 * @typedef {{altShiftDragRotate: (boolean|undefined), doubleClickZoom: (boolean|undefined), keyboard: (boolean|undefined), mouseWheelZoom: (boolean|undefined), shiftDragZoom: (boolean|undefined), dragPan: (boolean|undefined), pinchRotate: (boolean|undefined), pinchZoom: (boolean|undefined), zoomDelta: (number|undefined), zoomDuration: (number|undefined)}}
 */
olx.interaction.DefaultsOptions;


/**
 * @typedef {{duration: (number|undefined), delta: (number|undefined)}}
 */
olx.interaction.DoubleClickZoomOptions;


/**
 * @typedef {{formatConstructors: (Array.<function(new:ol.format.Feature)>|undefined), reprojectTo: (ol.proj.ProjectionLike)}}
 */
olx.interaction.DragAndDropOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined), style: (ol.style.Style)}}
 */
olx.interaction.DragBoxOptions;


/**
 * @typedef {{kinetic: (ol.Kinetic|undefined)}}
 */
olx.interaction.DragPanOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined)}}
 */
olx.interaction.DragRotateAndZoomOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined)}}
 */
olx.interaction.DragRotateOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined), style: (ol.style.Style)}}
 */
olx.interaction.DragZoomOptions;


/**
 * @typedef {{features: (ol.Collection.<ol.Feature>|undefined), source: (ol.source.Vector|undefined), snapTolerance: (number|undefined), type: (ol.geom.GeometryType), minPointsPerRing: (number|undefined), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined), geometryName: (string|undefined), condition: (ol.events.ConditionType|undefined)}}
 */
olx.interaction.DrawOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined), pixelDelta: (number|undefined)}}
 */
olx.interaction.KeyboardPanOptions;


/**
 * @typedef {{duration: (number|undefined), condition: (ol.events.ConditionType|undefined), delta: (number|undefined)}}
 */
olx.interaction.KeyboardZoomOptions;


/**
 * @typedef {{deleteCondition: (ol.events.ConditionType|undefined), pixelTolerance: (number|undefined), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined), features: (ol.Collection.<ol.Feature>)}}
 */
olx.interaction.ModifyOptions;


/**
 * @typedef {{duration: (number|undefined)}}
 */
olx.interaction.MouseWheelZoomOptions;


/**
 * @typedef {{threshold: (number|undefined)}}
 */
olx.interaction.PinchRotateOptions;


/**
 * @typedef {{duration: (number|undefined)}}
 */
olx.interaction.PinchZoomOptions;


/**
 * @typedef {{addCondition: (ol.events.ConditionType|undefined), condition: (ol.events.ConditionType|undefined), layers: (Array.<ol.layer.Layer>|Function), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined), removeCondition: (ol.events.ConditionType|undefined), toggleCondition: (ol.events.ConditionType|undefined)}}
 */
olx.interaction.SelectOptions;


/**
 * @type {Object}
 */
olx.layer;


/**
 * @typedef {{brightness: (number|undefined), contrast: (number|undefined), hue: (number|undefined), opacity: (number|undefined), saturation: (number|undefined), visible: (boolean|undefined), extent: (ol.Extent|undefined), minResolution: (number|undefined), maxResolution: (number|undefined)}}
 */
olx.layer.BaseOptions;


/**
 * @typedef {{brightness: (number|undefined), contrast: (number|undefined), hue: (number|undefined), opacity: (number|undefined), saturation: (number|undefined), source: (ol.source.Source), visible: (boolean|undefined), extent: (ol.Extent|undefined), minResolution: (number|undefined), maxResolution: (number|undefined)}}
 */
olx.layer.LayerOptions;


/**
 * @typedef {{brightness: (number|undefined), contrast: (number|undefined), hue: (number|undefined), opacity: (number|undefined), saturation: (number|undefined), visible: (boolean|undefined), extent: (ol.Extent|undefined), minResolution: (number|undefined), maxResolution: (number|undefined), layers: (Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined)}}
 */
olx.layer.GroupOptions;


/**
 * @typedef {{brightness: (number|undefined), contrast: (number|undefined), hue: (number|undefined), gradient: (Array.<string>|undefined), radius: (number|undefined), blur: (number|undefined), shadow: (number|undefined), weight: (string|Function), extent: (ol.Extent|undefined), minResolution: (number|undefined), maxResolution: (number|undefined), opacity: (number|undefined), saturation: (number|undefined), source: (ol.source.Vector), visible: (boolean|undefined)}}
 */
olx.layer.HeatmapOptions;


/**
 * @typedef {{brightness: (number|undefined), contrast: (number|undefined), hue: (number|undefined), opacity: (number|undefined), preload: (number|undefined), saturation: (number|undefined), source: (ol.source.Source), visible: (boolean|undefined), extent: (ol.Extent|undefined), minResolution: (number|undefined), maxResolution: (number|undefined), useInterimTilesOnError: (boolean|undefined)}}
 */
olx.layer.TileOptions;


/**
 * @typedef {{brightness: (number|undefined), contrast: (number|undefined), renderOrder: (Function), hue: (number|undefined), extent: (ol.Extent|undefined), minResolution: (number|undefined), maxResolution: (number|undefined), opacity: (number|undefined), saturation: (number|undefined), source: (ol.source.Vector), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined), visible: (boolean|undefined)}}
 */
olx.layer.VectorOptions;


/**
 * @typedef {{features: (Array.<ol.Feature>|ol.Collection.<ol.Feature>|undefined), map: (ol.Map|undefined), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined)}}
 */
olx.FeatureOverlayOptions;


/**
 * @type {Object}
 */
olx.source;


/**
 * @typedef {{culture: (string|undefined), key: (string), imagerySet: (string), tileLoadFunction: (ol.TileLoadFunctionType|undefined)}}
 */
olx.source.BingMapsOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), distance: (number|undefined), extent: (ol.Extent|undefined), format: (ol.format.Feature|undefined), logo: (string|undefined), projection: (ol.proj.ProjectionLike), source: (ol.source.Vector)}}
 */
olx.source.ClusterOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), format: (ol.format.Feature), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike)}}
 */
olx.source.FormatVectorOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), defaultProjection: (ol.proj.ProjectionLike), logo: (string|olx.LogoOptions|undefined), object: (GeoJSONObject|undefined), projection: (ol.proj.ProjectionLike), text: (string|undefined), url: (string|undefined), urls: (Array.<string>|undefined)}}
 */
olx.source.GeoJSONOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), doc: (Document|undefined), logo: (string|olx.LogoOptions|undefined), node: (Node|undefined), projection: (ol.proj.ProjectionLike), text: (string|undefined), url: (string|undefined), urls: (Array.<string>|undefined)}}
 */
olx.source.GPXOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), crossOrigin: (null|string|undefined), logo: (string|olx.LogoOptions|undefined), opaque: (boolean|undefined), projection: (ol.proj.ProjectionLike), state: (ol.source.State|string|undefined), tileClass: (Function|undefined), tileGrid: (ol.tilegrid.TileGrid|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), tilePixelRatio: (number|undefined), tileUrlFunction: (ol.TileUrlFunctionType|undefined)}}
 */
olx.source.TileImageOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), defaultProjection: (ol.proj.ProjectionLike), format: (ol.format.Feature), logo: (string|olx.LogoOptions|undefined), object: (GeoJSONObject|undefined), projection: (ol.proj.ProjectionLike), tileGrid: (ol.tilegrid.TileGrid), tileUrlFunction: (ol.TileUrlFunctionType|undefined), url: (string|undefined), urls: (Array.<string>|undefined)}}
 */
olx.source.TileVectorOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), defaultProjection: (ol.proj.ProjectionLike), logo: (string|olx.LogoOptions|undefined), object: (GeoJSONObject|undefined), projection: (ol.proj.ProjectionLike), text: (string|undefined), url: (string|undefined)}}
 */
olx.source.TopoJSONOptions;


/**
 * @typedef {{altitudeMode: (ol.format.IGCZ|undefined), projection: (ol.proj.ProjectionLike), text: (string|undefined), url: (string|undefined), urls: (Array.<string>|undefined)}}
 */
olx.source.IGCOptions;


/**
 * @typedef {{url: (string|undefined), displayDpi: (number|undefined), metersPerUnit: (number|undefined), hidpi: (boolean|undefined), useOverlay: (boolean|undefined), projection: (ol.proj.ProjectionLike), ratio: (number|undefined), resolutions: (Array.<number>|undefined), params: (Object|undefined)}}
 */
olx.source.ImageMapGuideOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), defaultStyle: (Array.<ol.style.Style>|undefined), doc: (Document|undefined), extractStyles: (boolean|undefined), logo: (string|olx.LogoOptions|undefined), node: (Node|undefined), projection: (ol.proj.ProjectionLike), text: (string|undefined), url: (string|undefined), urls: (Array.<string>|undefined)}}
 */
olx.source.KMLOptions;


/**
 * @typedef {{layer: (string), tileLoadFunction: (ol.TileLoadFunctionType|undefined)}}
 */
olx.source.MapQuestOptions;


/**
 * @typedef {{projection: (ol.proj.ProjectionLike), tileGrid: (ol.tilegrid.TileGrid|undefined)}}
 */
olx.source.TileDebugOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), crossOrigin: (null|string|undefined), maxZoom: (number|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), url: (string|undefined)}}
 */
olx.source.OSMOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), doc: (Document|undefined), logo: (string|olx.LogoOptions|undefined), node: (Node|undefined), projection: (ol.proj.ProjectionLike), reprojectTo: (ol.proj.ProjectionLike), text: (string|undefined), url: (string|undefined), urls: (Array.<string>|undefined)}}
 */
olx.source.OSMXMLOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), canvasFunction: (ol.CanvasFunctionType), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike), ratio: (number|undefined), resolutions: (Array.<number>|undefined), state: (ol.source.State|string|undefined)}}
 */
olx.source.ImageCanvasOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike), ratio: (number|undefined), resolutions: (Array.<number>|undefined), source: (ol.source.Vector), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined)}}
 */
olx.source.ImageVectorOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), crossOrigin: (null|string|undefined), hidpi: (boolean|undefined), serverType: (ol.source.wms.ServerType|string|undefined), logo: (string|olx.LogoOptions|undefined), params: (Object.<string, *>), projection: (ol.proj.ProjectionLike), ratio: (number|undefined), resolutions: (Array.<number>|undefined), url: (string|undefined)}}
 */
olx.source.ImageWMSOptions;


/**
 * @typedef {{layer: (string), minZoom: (number|undefined), maxZoom: (number|undefined), opaque: (boolean|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), url: (string|undefined)}}
 */
olx.source.StamenOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), crossOrigin: (null|string|undefined), imageExtent: (ol.Extent|undefined), imageSize: (ol.Size|undefined), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike), url: (string)}}
 */
olx.source.ImageStaticOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), format: (ol.format.Feature), loader: (Function), strategy: (Function), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike)}}
 */
olx.source.ServerVectorOptions;


/**
 * @typedef {{crossOrigin: (null|string|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), url: (string)}}
 */
olx.source.TileJSONOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), params: (Object.<string, *>), crossOrigin: (null|string|undefined), gutter: (number|undefined), hidpi: (boolean|undefined), logo: (string|olx.LogoOptions|undefined), tileGrid: (ol.tilegrid.TileGrid|undefined), maxZoom: (number|undefined), projection: (ol.proj.ProjectionLike), serverType: (ol.source.wms.ServerType|string|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), url: (string|undefined), urls: (Array.<string>|undefined)}}
 */
olx.source.TileWMSOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), features: (Array.<ol.Feature>|undefined), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike), state: (ol.source.State|string|undefined)}}
 */
olx.source.VectorOptions;


/**
 * @typedef {{arrayBuffer: (ArrayBuffer|undefined), attributions: (Array.<ol.Attribution>|undefined), doc: (Document|undefined), format: (ol.format.Feature), logo: (string|olx.LogoOptions|undefined), node: (Node|undefined), object: (Object|undefined), projection: (ol.proj.ProjectionLike), text: (string|undefined), url: (string|undefined), urls: (Array.<string>|undefined)}}
 */
olx.source.StaticVectorOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), crossOrigin: (string|null|undefined), logo: (string|olx.LogoOptions|undefined), tileGrid: (ol.tilegrid.WMTS), projection: (ol.proj.ProjectionLike), requestEncoding: (ol.source.WMTSRequestEncoding|undefined), layer: (string), style: (string), tilePixelRatio: (number|undefined), version: (string|undefined), format: (string|undefined), matrixSet: (string), dimensions: (Object|undefined), url: (string|undefined), maxZoom: (number|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), urls: (Array.<string>|undefined)}}
 */
olx.source.WMTSOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), crossOrigin: (null|string|undefined), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike), maxZoom: (number|undefined), minZoom: (number|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), tilePixelRatio: (number|undefined), tileUrlFunction: (ol.TileUrlFunctionType|undefined), url: (string|undefined), urls: (Array.<string>|undefined), wrapX: (boolean|undefined)}}
 */
olx.source.XYZOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), crossOrigin: (null|string|undefined), logo: (string|olx.LogoOptions|undefined), url: (string), tierSizeCalculation: (string|undefined), size: (ol.Size)}}
 */
olx.source.ZoomifyOptions;


/**
 * @type {Object}
 */
olx.style;


/**
 * @typedef {{fill: (ol.style.Fill|undefined), radius: (number), snapToPixel: (boolean|undefined), stroke: (ol.style.Stroke|undefined)}}
 */
olx.style.CircleOptions;


/**
 * @typedef {{color: (ol.Color|string|undefined)}}
 */
olx.style.FillOptions;


/**
 * @typedef {{anchor: (Array.<number>|undefined), anchorOrigin: (ol.style.IconOrigin|undefined), anchorXUnits: (ol.style.IconAnchorUnits|undefined), anchorYUnits: (ol.style.IconAnchorUnits|undefined), crossOrigin: (null|string|undefined), img: (Image|undefined), offset: (Array.<number>|undefined), offsetOrigin: (ol.style.IconOrigin|undefined), scale: (number|undefined), snapToPixel: (boolean|undefined), rotateWithView: (boolean|undefined), rotation: (number|undefined), size: (ol.Size|undefined), src: (string)}}
 */
olx.style.IconOptions;


/**
 * @typedef {{color: (ol.Color|string|undefined), lineCap: (string|undefined), lineJoin: (string|undefined), lineDash: (Array.<number>|undefined), miterLimit: (number|undefined), width: (number|undefined)}}
 */
olx.style.StrokeOptions;


/**
 * @typedef {{font: (string|undefined), offsetX: (number|undefined), offsetY: (number|undefined), scale: (number|undefined), rotation: (number|undefined), text: (string|undefined), textAlign: (string|undefined), textBaseline: (string|undefined), fill: (ol.style.Fill|undefined), stroke: (ol.style.Stroke|undefined)}}
 */
olx.style.TextOptions;


/**
 * @typedef {{fill: (ol.style.Fill|undefined), image: (ol.style.Image|undefined), stroke: (ol.style.Stroke|undefined), text: (ol.style.Text|undefined), zIndex: (number|undefined)}}
 */
olx.style.StyleOptions;


/**
 * @type {Object}
 */
olx.tilegrid;


/**
 * @typedef {{minZoom: (number|undefined), origin: (ol.Coordinate|undefined), origins: (Array.<ol.Coordinate>|undefined), resolutions: (Array.<number>), tileSize: (number|undefined), tileSizes: (Array.<number>|undefined)}}
 */
olx.tilegrid.TileGridOptions;


/**
 * @typedef {{origin: (ol.Coordinate|undefined), origins: (Array.<ol.Coordinate>|undefined), resolutions: (Array.<number>), matrixIds: (Array.<string>), tileSize: (number|undefined), tileSizes: (Array.<number>|undefined)}}
 */
olx.tilegrid.WMTSOptions;


/**
 * @typedef {{extent: (ol.Extent|undefined), maxZoom: (number|undefined), minZoom: (number|undefined), tileSize: (number|undefined)}}
 */
olx.tilegrid.XYZOptions;


/**
 * @typedef {{resolutions: (Array.<number>)}}
 */
olx.tilegrid.ZoomifyOptions;


/**
 * @type {Object}
 */
olx.View;


/**
 * @typedef {{padding: (Array.<number>), constrainResolution: (boolean|undefined), nearest: (boolean|undefined), minResolution: (number|undefined), maxZoom: (number|undefined)}}
 */
olx.View.fitGeometryOptions;


/**
 * @typedef {{pixelRatio: (number), time: (number), viewState: (olx.ViewState)}}
 */
olx.FrameState;


/**
 * @typedef {{center: (ol.Coordinate), resolution: (number), rotation: (number)}}
 */
olx.ViewState;


/**
 * @typedef {Function}
 */
ol.CanvasFunctionType;


/**
 * @typedef {Function}
 */
ol.CoordinateFormatType;


/**
 * @typedef {Array.<number>}
 */
ol.Coordinate;


/**
 * @typedef {Array.<number>}
 */
ol.Extent;


/**
 * @type {Object}
 */
ol.feature;


/**
 * @typedef {Function}
 */
ol.feature.FeatureStyleFunction;


/**
 * @typedef {Function}
 */
ol.PreRenderFunction;


/**
 * @typedef {string}
 */
ol.OverlayPositioning;


/**
 * @typedef {Array.<number>}
 */
ol.Pixel;


/**
 * @typedef {Array.<number>}
 */
ol.Size;


/**
 * @typedef {Array.<number>}
 */
ol.TileCoord;


/**
 * @typedef {Function}
 */
ol.TileLoadFunctionType;


/**
 * @typedef {Function}
 */
ol.TileUrlFunctionType;


/**
 * @typedef {Function}
 */
ol.TransformFunction;


/**
 * @typedef {string}
 */
ol.style.IconAnchorUnits;


/**
 * @typedef {string}
 */
ol.style.IconOrigin;


/**
 * @typedef {Function}
 */
ol.style.StyleFunction;


/**
 * @typedef {string}
 */
ol.source.State;


/**
 * @type {Object}
 */
ol.source.wms;


/**
 * @typedef {string}
 */
ol.source.wms.ServerType;


/**
 * @typedef {string}
 */
ol.source.WMTSRequestEncoding;


/**
 * @typedef {string}
 */
ol.RendererType;


/**
 * @typedef {ol.proj.Projection|string|undefined}
 */
ol.proj.ProjectionLike;


/**
 * @typedef {string}
 */
ol.proj.Units;


/**
 * @typedef {string}
 */
ol.geom.GeometryType;


/**
 * @typedef {string}
 */
ol.geom.GeometryLayout;


/**
 * @typedef {string}
 */
ol.format.IGCZ;


/**
 * @typedef {Object}
 */
ol.format.WFS.FeatureCollectionMetadata;


/**
 * @typedef {Object}
 */
ol.format.WFS.TransactionResponse;


/**
 * @typedef {Function}
 */
ol.events.ConditionType;


/**
 * @typedef {string}
 */
ol.control.ScaleLineUnits;


/**
 * @typedef {Array.<number>}
 */
ol.Color;

