'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">precious-memories-app documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-4b507a7544137203405d79dd20e4889a"' : 'data-target="#xs-components-links-module-AppModule-4b507a7544137203405d79dd20e4889a"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-4b507a7544137203405d79dd20e4889a"' : 'id="xs-components-links-module-AppModule-4b507a7544137203405d79dd20e4889a"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AuthLayoutComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthLayoutComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MainLayoutComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MainLayoutComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SidebarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SidebarComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AuthModule-c731e74ff16890c21a206d146829b484"' : 'data-target="#xs-components-links-module-AuthModule-c731e74ff16890c21a206d146829b484"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AuthModule-c731e74ff16890c21a206d146829b484"' : 'id="xs-components-links-module-AuthModule-c731e74ff16890c21a206d146829b484"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RegistrationComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RegistrationComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthRoutingModule.html\" data-type=\"entity-link\" >AuthRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CoreModule.html\" data-type=\"entity-link\" >CoreModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-CoreModule-58eeee8353ce4218863bf2b2a8548133"' : 'data-target="#xs-injectables-links-module-CoreModule-58eeee8353ce4218863bf2b2a8548133"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-CoreModule-58eeee8353ce4218863bf2b2a8548133"' : 'id="xs-injectables-links-module-CoreModule-58eeee8353ce4218863bf2b2a8548133"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/FileUploaderService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FileUploaderService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/FileUploaderModule.html\" data-type=\"entity-link\" >FileUploaderModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-FileUploaderModule-da4f5c0e8cce10659f92801b73ee8c9a"' : 'data-target="#xs-components-links-module-FileUploaderModule-da4f5c0e8cce10659f92801b73ee8c9a"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-FileUploaderModule-da4f5c0e8cce10659f92801b73ee8c9a"' : 'id="xs-components-links-module-FileUploaderModule-da4f5c0e8cce10659f92801b73ee8c9a"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FileUploaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FileUploaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UploadStatusComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UploadStatusComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LayoutsModule.html\" data-type=\"entity-link\" >LayoutsModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MediaModule.html\" data-type=\"entity-link\" >MediaModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' : 'data-target="#xs-components-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' : 'id="xs-components-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/MediaActionsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MediaActionsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MediaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MediaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MediaGridListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MediaGridListComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MediaImageComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MediaImageComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MediaVideoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MediaVideoComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' : 'data-target="#xs-pipes-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"', ">\n                                            <span class=\"icon ion-md-add\"></span>\n                                            <span>Pipes</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="pipes-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' : 'id="xs-pipes-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"pipes/MediaTypePipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MediaTypePipe</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MediaRoutingModule.html\" data-type=\"entity-link\" >MediaRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" >AppComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/AuthLayoutComponent.html\" data-type=\"entity-link\" >AuthLayoutComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/FileUploaderComponent.html\" data-type=\"entity-link\" >FileUploaderComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/MainLayoutComponent.html\" data-type=\"entity-link\" >MainLayoutComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/MediaActionsComponent.html\" data-type=\"entity-link\" >MediaActionsComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/MediaComponent.html\" data-type=\"entity-link\" >MediaComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/MediaGridListComponent.html\" data-type=\"entity-link\" >MediaGridListComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/MediaImageComponent.html\" data-type=\"entity-link\" >MediaImageComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/MediaItemComponent.html\" data-type=\"entity-link\" >MediaItemComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/MediaVideoComponent.html\" data-type=\"entity-link\" >MediaVideoComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/UploadStatusComponent.html\" data-type=\"entity-link\" >UploadStatusComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AddItem.html\" data-type=\"entity-link\" >AddItem</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeleteItem.html\" data-type=\"entity-link\" >DeleteItem</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeselectItem.html\" data-type=\"entity-link\" >DeselectItem</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeselectOthers.html\" data-type=\"entity-link\" >DeselectOthers</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/FetchItems.html\" data-type=\"entity-link\" >FetchItems</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MediaItem.html\" data-type=\"entity-link\" >MediaItem</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MediaSelectors.html\" data-type=\"entity-link\" >MediaSelectors</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ResetSelection.html\" data-type=\"entity-link\" >ResetSelection</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/SelectItem.html\" data-type=\"entity-link\" >SelectItem</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/SignIn.html\" data-type=\"entity-link\" >SignIn</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/SignOut.html\" data-type=\"entity-link\" >SignOut</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/SignUp.html\" data-type=\"entity-link\" >SignUp</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthState.html\" data-type=\"entity-link\" >AuthState</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/FileUploaderService.html\" data-type=\"entity-link\" >FileUploaderService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MediaItemAdapter.html\" data-type=\"entity-link\" >MediaItemAdapter</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MediaService.html\" data-type=\"entity-link\" >MediaService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MediaState.html\" data-type=\"entity-link\" >MediaState</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AnonGuard.html\" data-type=\"entity-link\" >AnonGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Adapter.html\" data-type=\"entity-link\" >Adapter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/AuthStateModel.html\" data-type=\"entity-link\" >AuthStateModel</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/FileUploaderConfig.html\" data-type=\"entity-link\" >FileUploaderConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MediaCollection.html\" data-type=\"entity-link\" >MediaCollection</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MediaStateModel.html\" data-type=\"entity-link\" >MediaStateModel</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/UploadData.html\" data-type=\"entity-link\" >UploadData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links"' : 'data-target="#xs-pipes-links"', ">\n                                <span class=\"icon ion-md-add\"></span>\n                                <span>Pipes</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"pipes/MediaTypePipe.html\" data-type=\"entity-link\" >MediaTypePipe</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));