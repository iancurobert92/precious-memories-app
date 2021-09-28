'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">precious-memories-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4b507a7544137203405d79dd20e4889a"' : 'data-target="#xs-components-links-module-AppModule-4b507a7544137203405d79dd20e4889a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4b507a7544137203405d79dd20e4889a"' :
                                            'id="xs-components-links-module-AppModule-4b507a7544137203405d79dd20e4889a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-c731e74ff16890c21a206d146829b484"' : 'data-target="#xs-components-links-module-AuthModule-c731e74ff16890c21a206d146829b484"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-c731e74ff16890c21a206d146829b484"' :
                                            'id="xs-components-links-module-AuthModule-c731e74ff16890c21a206d146829b484"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-58eeee8353ce4218863bf2b2a8548133"' : 'data-target="#xs-injectables-links-module-CoreModule-58eeee8353ce4218863bf2b2a8548133"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-58eeee8353ce4218863bf2b2a8548133"' :
                                        'id="xs-injectables-links-module-CoreModule-58eeee8353ce4218863bf2b2a8548133"' }>
                                        <li class="link">
                                            <a href="injectables/FileUploaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUploaderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileUploaderModule.html" data-type="entity-link" >FileUploaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FileUploaderModule-da4f5c0e8cce10659f92801b73ee8c9a"' : 'data-target="#xs-components-links-module-FileUploaderModule-da4f5c0e8cce10659f92801b73ee8c9a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FileUploaderModule-da4f5c0e8cce10659f92801b73ee8c9a"' :
                                            'id="xs-components-links-module-FileUploaderModule-da4f5c0e8cce10659f92801b73ee8c9a"' }>
                                            <li class="link">
                                                <a href="components/FileUploaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUploaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadStatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadStatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutsModule.html" data-type="entity-link" >LayoutsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MediaModule.html" data-type="entity-link" >MediaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' : 'data-target="#xs-components-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' :
                                            'id="xs-components-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' }>
                                            <li class="link">
                                                <a href="components/MediaActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediaActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MediaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MediaGridListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediaGridListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MediaImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediaImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MediaVideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediaVideoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' : 'data-target="#xs-pipes-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' :
                                            'id="xs-pipes-links-module-MediaModule-6a1cc9f70cafbe443d2790b2781e748e"' }>
                                            <li class="link">
                                                <a href="pipes/MediaTypePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediaTypePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MediaRoutingModule.html" data-type="entity-link" >MediaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthLayoutComponent.html" data-type="entity-link" >AuthLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FileUploaderComponent.html" data-type="entity-link" >FileUploaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainLayoutComponent.html" data-type="entity-link" >MainLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MediaActionsComponent.html" data-type="entity-link" >MediaActionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MediaComponent.html" data-type="entity-link" >MediaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MediaGridListComponent.html" data-type="entity-link" >MediaGridListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MediaImageComponent.html" data-type="entity-link" >MediaImageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MediaItemComponent.html" data-type="entity-link" >MediaItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MediaVideoComponent.html" data-type="entity-link" >MediaVideoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UploadStatusComponent.html" data-type="entity-link" >UploadStatusComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddItem.html" data-type="entity-link" >AddItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteItem.html" data-type="entity-link" >DeleteItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeselectItem.html" data-type="entity-link" >DeselectItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeselectOthers.html" data-type="entity-link" >DeselectOthers</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchItems.html" data-type="entity-link" >FetchItems</a>
                            </li>
                            <li class="link">
                                <a href="classes/MediaItem.html" data-type="entity-link" >MediaItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/MediaSelectors.html" data-type="entity-link" >MediaSelectors</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetSelection.html" data-type="entity-link" >ResetSelection</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectItem.html" data-type="entity-link" >SelectItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignIn.html" data-type="entity-link" >SignIn</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignOut.html" data-type="entity-link" >SignOut</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUp.html" data-type="entity-link" >SignUp</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthState.html" data-type="entity-link" >AuthState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileUploaderService.html" data-type="entity-link" >FileUploaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MediaItemAdapter.html" data-type="entity-link" >MediaItemAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MediaService.html" data-type="entity-link" >MediaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MediaState.html" data-type="entity-link" >MediaState</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AnonGuard.html" data-type="entity-link" >AnonGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Adapter.html" data-type="entity-link" >Adapter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthStateModel.html" data-type="entity-link" >AuthStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileUploaderConfig.html" data-type="entity-link" >FileUploaderConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MediaCollection.html" data-type="entity-link" >MediaCollection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MediaStateModel.html" data-type="entity-link" >MediaStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadData.html" data-type="entity-link" >UploadData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/MediaTypePipe.html" data-type="entity-link" >MediaTypePipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});