SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "molviewer/": "src/"
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "build.js": [
        "molviewer/molviewer.tsx",
        "molviewer/_references.d.ts!github:frankwallis/plugin-typescript@5.0.18/plugin.js",
        "npm:typescript@2.0.0/lib/lib.es6.d.ts!github:frankwallis/plugin-typescript@5.0.18/plugin.js",
        "npm:typescript@2.0.0.json",
        "github:frankwallis/plugin-typescript@5.0.18.json",
        "molviewer/component.tsx",
        "molviewer/molcontainer.tsx",
        "npm:@types/react-bootstrap@0.0.31/index.d.ts!github:frankwallis/plugin-typescript@5.0.18/plugin.js",
        "npm:@types/react-bootstrap@0.0.31.json",
        "npm:@types/react@0.14.32/index.d.ts!github:frankwallis/plugin-typescript@5.0.18/plugin.js",
        "npm:@types/react@0.14.32.json",
        "npm:@types/jquery@1.10.30/index.d.ts!github:frankwallis/plugin-typescript@5.0.18/plugin.js",
        "npm:@types/jquery@1.10.30.json",
        "npm:react-bootstrap@0.30.3/lib/index.js",
        "npm:react-bootstrap@0.30.3.json",
        "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
        "github:jspm/nodelibs-process@0.2.0-alpha.json",
        "npm:react-bootstrap@0.30.3/lib/utils/index.js",
        "npm:react-bootstrap@0.30.3/lib/utils/ValidComponentChildren.js",
        "npm:react@15.3.1/react.js",
        "npm:react@15.3.1.json",
        "npm:react@15.3.1/lib/React.js",
        "npm:react@15.3.1/lib/ReactElementValidator.js",
        "npm:fbjs@0.8.4/lib/warning.js",
        "npm:fbjs@0.8.4.json",
        "npm:fbjs@0.8.4/lib/emptyFunction.js",
        "npm:react@15.3.1/lib/getIteratorFn.js",
        "npm:react@15.3.1/lib/canDefineProperty.js",
        "npm:react@15.3.1/lib/checkReactTypeSpec.js",
        "npm:react@15.3.1/lib/ReactComponentTreeHook.js",
        "npm:fbjs@0.8.4/lib/invariant.js",
        "npm:react@15.3.1/lib/ReactCurrentOwner.js",
        "npm:react@15.3.1/lib/reactProdInvariant.js",
        "npm:react@15.3.1/lib/ReactPropTypesSecret.js",
        "npm:react@15.3.1/lib/ReactPropTypeLocationNames.js",
        "npm:react@15.3.1/lib/ReactPropTypeLocations.js",
        "npm:fbjs@0.8.4/lib/keyMirror.js",
        "npm:react@15.3.1/lib/ReactElement.js",
        "npm:object-assign@4.1.0/index.js",
        "npm:object-assign@4.1.0.json",
        "npm:react@15.3.1/lib/onlyChild.js",
        "npm:react@15.3.1/lib/ReactVersion.js",
        "npm:react@15.3.1/lib/ReactPropTypes.js",
        "npm:react@15.3.1/lib/ReactDOMFactories.js",
        "npm:react@15.3.1/lib/ReactClass.js",
        "npm:fbjs@0.8.4/lib/keyOf.js",
        "npm:fbjs@0.8.4/lib/emptyObject.js",
        "npm:react@15.3.1/lib/ReactNoopUpdateQueue.js",
        "npm:react@15.3.1/lib/ReactComponent.js",
        "npm:react@15.3.1/lib/ReactPureComponent.js",
        "npm:react@15.3.1/lib/ReactChildren.js",
        "npm:react@15.3.1/lib/traverseAllChildren.js",
        "npm:react@15.3.1/lib/KeyEscapeUtils.js",
        "npm:react@15.3.1/lib/PooledClass.js",
        "npm:react-bootstrap@0.30.3/lib/utils/createChainedFunction.js",
        "npm:react-bootstrap@0.30.3/lib/utils/bootstrapUtils.js",
        "npm:react-bootstrap@0.30.3/lib/utils/StyleConfig.js",
        "npm:invariant@2.2.1/browser.js",
        "npm:invariant@2.2.1.json",
        "npm:babel-runtime@6.11.6/helpers/extends.js",
        "npm:babel-runtime@6.11.6.json",
        "npm:babel-runtime@6.11.6/core-js/object/assign.js",
        "npm:core-js@2.4.1/library/fn/object/assign.js",
        "npm:core-js@2.4.1.json",
        "npm:core-js@2.4.1/library/modules/_core.js",
        "npm:core-js@2.4.1/library/modules/es6.object.assign.js",
        "npm:core-js@2.4.1/library/modules/_object-assign.js",
        "npm:core-js@2.4.1/library/modules/_fails.js",
        "npm:core-js@2.4.1/library/modules/_iobject.js",
        "npm:core-js@2.4.1/library/modules/_cof.js",
        "npm:core-js@2.4.1/library/modules/_to-object.js",
        "npm:core-js@2.4.1/library/modules/_defined.js",
        "npm:core-js@2.4.1/library/modules/_object-pie.js",
        "npm:core-js@2.4.1/library/modules/_object-gops.js",
        "npm:core-js@2.4.1/library/modules/_object-keys.js",
        "npm:core-js@2.4.1/library/modules/_enum-bug-keys.js",
        "npm:core-js@2.4.1/library/modules/_object-keys-internal.js",
        "npm:core-js@2.4.1/library/modules/_shared-key.js",
        "npm:core-js@2.4.1/library/modules/_uid.js",
        "npm:core-js@2.4.1/library/modules/_shared.js",
        "npm:core-js@2.4.1/library/modules/_global.js",
        "npm:core-js@2.4.1/library/modules/_array-includes.js",
        "npm:core-js@2.4.1/library/modules/_to-index.js",
        "npm:core-js@2.4.1/library/modules/_to-integer.js",
        "npm:core-js@2.4.1/library/modules/_to-length.js",
        "npm:core-js@2.4.1/library/modules/_to-iobject.js",
        "npm:core-js@2.4.1/library/modules/_has.js",
        "npm:core-js@2.4.1/library/modules/_export.js",
        "npm:core-js@2.4.1/library/modules/_hide.js",
        "npm:core-js@2.4.1/library/modules/_descriptors.js",
        "npm:core-js@2.4.1/library/modules/_property-desc.js",
        "npm:core-js@2.4.1/library/modules/_object-dp.js",
        "npm:core-js@2.4.1/library/modules/_to-primitive.js",
        "npm:core-js@2.4.1/library/modules/_is-object.js",
        "npm:core-js@2.4.1/library/modules/_ie8-dom-define.js",
        "npm:core-js@2.4.1/library/modules/_dom-create.js",
        "npm:core-js@2.4.1/library/modules/_an-object.js",
        "npm:core-js@2.4.1/library/modules/_ctx.js",
        "npm:core-js@2.4.1/library/modules/_a-function.js",
        "npm:babel-runtime@6.11.6/core-js/object/entries.js",
        "npm:core-js@2.4.1/library/fn/object/entries.js",
        "npm:core-js@2.4.1/library/modules/es7.object.entries.js",
        "npm:core-js@2.4.1/library/modules/_object-to-array.js",
        "npm:react-bootstrap@0.30.3/lib/Well.js",
        "npm:classnames@2.2.5/index.js",
        "npm:classnames@2.2.5.json",
        "npm:babel-runtime@6.11.6/helpers/inherits.js",
        "npm:babel-runtime@6.11.6/helpers/typeof.js",
        "npm:babel-runtime@6.11.6/core-js/symbol.js",
        "npm:core-js@2.4.1/library/fn/symbol/index.js",
        "npm:core-js@2.4.1/library/modules/es7.symbol.observable.js",
        "npm:core-js@2.4.1/library/modules/_wks-define.js",
        "npm:core-js@2.4.1/library/modules/_wks-ext.js",
        "npm:core-js@2.4.1/library/modules/_wks.js",
        "npm:core-js@2.4.1/library/modules/_library.js",
        "npm:core-js@2.4.1/library/modules/es7.symbol.async-iterator.js",
        "npm:core-js@2.4.1/library/modules/es6.object.to-string.js",
        "npm:core-js@2.4.1/library/modules/es6.symbol.js",
        "npm:core-js@2.4.1/library/modules/_object-gopn.js",
        "npm:core-js@2.4.1/library/modules/_object-gopd.js",
        "npm:core-js@2.4.1/library/modules/_object-gopn-ext.js",
        "npm:core-js@2.4.1/library/modules/_object-create.js",
        "npm:core-js@2.4.1/library/modules/_html.js",
        "npm:core-js@2.4.1/library/modules/_object-dps.js",
        "npm:core-js@2.4.1/library/modules/_is-array.js",
        "npm:core-js@2.4.1/library/modules/_enum-keys.js",
        "npm:core-js@2.4.1/library/modules/_keyof.js",
        "npm:core-js@2.4.1/library/modules/_set-to-string-tag.js",
        "npm:core-js@2.4.1/library/modules/_meta.js",
        "npm:core-js@2.4.1/library/modules/_redefine.js",
        "npm:babel-runtime@6.11.6/core-js/symbol/iterator.js",
        "npm:core-js@2.4.1/library/fn/symbol/iterator.js",
        "npm:core-js@2.4.1/library/modules/web.dom.iterable.js",
        "npm:core-js@2.4.1/library/modules/_iterators.js",
        "npm:core-js@2.4.1/library/modules/es6.array.iterator.js",
        "npm:core-js@2.4.1/library/modules/_iter-define.js",
        "npm:core-js@2.4.1/library/modules/_object-gpo.js",
        "npm:core-js@2.4.1/library/modules/_iter-create.js",
        "npm:core-js@2.4.1/library/modules/_iter-step.js",
        "npm:core-js@2.4.1/library/modules/_add-to-unscopables.js",
        "npm:core-js@2.4.1/library/modules/es6.string.iterator.js",
        "npm:core-js@2.4.1/library/modules/_string-at.js",
        "npm:babel-runtime@6.11.6/core-js/object/create.js",
        "npm:core-js@2.4.1/library/fn/object/create.js",
        "npm:core-js@2.4.1/library/modules/es6.object.create.js",
        "npm:babel-runtime@6.11.6/core-js/object/set-prototype-of.js",
        "npm:core-js@2.4.1/library/fn/object/set-prototype-of.js",
        "npm:core-js@2.4.1/library/modules/es6.object.set-prototype-of.js",
        "npm:core-js@2.4.1/library/modules/_set-proto.js",
        "npm:babel-runtime@6.11.6/helpers/possibleConstructorReturn.js",
        "npm:babel-runtime@6.11.6/helpers/classCallCheck.js",
        "npm:babel-runtime@6.11.6/helpers/objectWithoutProperties.js",
        "npm:react-bootstrap@0.30.3/lib/Tooltip.js",
        "npm:react-prop-types@0.4.0/lib/isRequiredForA11y.js",
        "npm:react-prop-types@0.4.0.json",
        "npm:react-bootstrap@0.30.3/lib/Thumbnail.js",
        "npm:react-bootstrap@0.30.3/lib/SafeAnchor.js",
        "npm:react-prop-types@0.4.0/lib/elementType.js",
        "npm:react-prop-types@0.4.0/lib/utils/createChainableTypeChecker.js",
        "npm:react-bootstrap@0.30.3/lib/Tabs.js",
        "npm:react-bootstrap@0.30.3/lib/TabContent.js",
        "npm:react-bootstrap@0.30.3/lib/TabContainer.js",
        "npm:uncontrollable@4.0.3/index.js",
        "npm:uncontrollable@4.0.3.json",
        "npm:uncontrollable@4.0.3/createUncontrollable.js",
        "npm:uncontrollable@4.0.3/utils.js",
        "npm:react-bootstrap@0.30.3/lib/NavItem.js",
        "npm:react-bootstrap@0.30.3/lib/Nav.js",
        "npm:warning@3.0.0/browser.js",
        "npm:warning@3.0.0.json",
        "npm:react-prop-types@0.4.0/lib/all.js",
        "npm:react-dom@15.3.1/index.js",
        "npm:react-dom@15.3.1.json",
        "npm:react@15.3.1/lib/ReactDOM.js",
        "npm:react@15.3.1/lib/ReactDOMNullInputValuePropHook.js",
        "npm:react@15.3.1/lib/ReactDOMUnknownPropertyHook.js",
        "npm:react@15.3.1/lib/EventPluginRegistry.js",
        "npm:react@15.3.1/lib/DOMProperty.js",
        "npm:react@15.3.1/lib/ReactInstrumentation.js",
        "npm:react@15.3.1/lib/ReactDebugTool.js",
        "npm:fbjs@0.8.4/lib/performanceNow.js",
        "npm:fbjs@0.8.4/lib/performance.js",
        "npm:fbjs@0.8.4/lib/ExecutionEnvironment.js",
        "npm:react@15.3.1/lib/ReactChildrenMutationWarningHook.js",
        "npm:react@15.3.1/lib/ReactHostOperationHistoryHook.js",
        "npm:react@15.3.1/lib/ReactInvalidSetStateWarningHook.js",
        "npm:react@15.3.1/lib/renderSubtreeIntoContainer.js",
        "npm:react@15.3.1/lib/ReactMount.js",
        "npm:react@15.3.1/lib/shouldUpdateReactComponent.js",
        "npm:react@15.3.1/lib/setInnerHTML.js",
        "npm:react@15.3.1/lib/createMicrosoftUnsafeLocalFunction.js",
        "npm:react@15.3.1/lib/DOMNamespaces.js",
        "npm:react@15.3.1/lib/instantiateReactComponent.js",
        "npm:react@15.3.1/lib/ReactHostComponent.js",
        "npm:react@15.3.1/lib/ReactEmptyComponent.js",
        "npm:react@15.3.1/lib/ReactCompositeComponent.js",
        "npm:fbjs@0.8.4/lib/shallowEqual.js",
        "npm:react@15.3.1/lib/ReactReconciler.js",
        "npm:react@15.3.1/lib/ReactRef.js",
        "npm:react@15.3.1/lib/ReactOwner.js",
        "npm:react@15.3.1/lib/ReactNodeTypes.js",
        "npm:react@15.3.1/lib/ReactInstanceMap.js",
        "npm:react@15.3.1/lib/ReactErrorUtils.js",
        "npm:react@15.3.1/lib/ReactComponentEnvironment.js",
        "npm:react@15.3.1/lib/ReactUpdates.js",
        "npm:react@15.3.1/lib/Transaction.js",
        "npm:react@15.3.1/lib/ReactFeatureFlags.js",
        "npm:react@15.3.1/lib/CallbackQueue.js",
        "npm:react@15.3.1/lib/ReactUpdateQueue.js",
        "npm:react@15.3.1/lib/ReactMarkupChecksum.js",
        "npm:react@15.3.1/lib/adler32.js",
        "npm:react@15.3.1/lib/ReactDOMFeatureFlags.js",
        "npm:react@15.3.1/lib/ReactDOMContainerInfo.js",
        "npm:react@15.3.1/lib/validateDOMNesting.js",
        "npm:react@15.3.1/lib/ReactDOMComponentTree.js",
        "npm:react@15.3.1/lib/ReactDOMComponentFlags.js",
        "npm:react@15.3.1/lib/ReactBrowserEventEmitter.js",
        "npm:react@15.3.1/lib/isEventSupported.js",
        "npm:react@15.3.1/lib/getVendorPrefixedEventName.js",
        "npm:react@15.3.1/lib/ViewportMetrics.js",
        "npm:react@15.3.1/lib/ReactEventEmitterMixin.js",
        "npm:react@15.3.1/lib/EventPluginHub.js",
        "npm:react@15.3.1/lib/forEachAccumulated.js",
        "npm:react@15.3.1/lib/accumulateInto.js",
        "npm:react@15.3.1/lib/EventPluginUtils.js",
        "npm:react@15.3.1/lib/EventConstants.js",
        "npm:react@15.3.1/lib/DOMLazyTree.js",
        "npm:react@15.3.1/lib/setTextContent.js",
        "npm:react@15.3.1/lib/escapeTextContentForBrowser.js",
        "npm:react@15.3.1/lib/getHostComponentFromComposite.js",
        "npm:react@15.3.1/lib/findDOMNode.js",
        "npm:react@15.3.1/lib/ReactDefaultInjection.js",
        "npm:react@15.3.1/lib/SimpleEventPlugin.js",
        "npm:react@15.3.1/lib/getEventCharCode.js",
        "npm:react@15.3.1/lib/SyntheticWheelEvent.js",
        "npm:react@15.3.1/lib/SyntheticMouseEvent.js",
        "npm:react@15.3.1/lib/getEventModifierState.js",
        "npm:react@15.3.1/lib/SyntheticUIEvent.js",
        "npm:react@15.3.1/lib/getEventTarget.js",
        "npm:react@15.3.1/lib/SyntheticEvent.js",
        "npm:react@15.3.1/lib/SyntheticTransitionEvent.js",
        "npm:react@15.3.1/lib/SyntheticTouchEvent.js",
        "npm:react@15.3.1/lib/SyntheticDragEvent.js",
        "npm:react@15.3.1/lib/SyntheticKeyboardEvent.js",
        "npm:react@15.3.1/lib/getEventKey.js",
        "npm:react@15.3.1/lib/SyntheticFocusEvent.js",
        "npm:react@15.3.1/lib/SyntheticClipboardEvent.js",
        "npm:react@15.3.1/lib/SyntheticAnimationEvent.js",
        "npm:react@15.3.1/lib/EventPropagators.js",
        "npm:fbjs@0.8.4/lib/EventListener.js",
        "npm:react@15.3.1/lib/SelectEventPlugin.js",
        "npm:react@15.3.1/lib/isTextInputElement.js",
        "npm:fbjs@0.8.4/lib/getActiveElement.js",
        "npm:react@15.3.1/lib/ReactInputSelection.js",
        "npm:fbjs@0.8.4/lib/focusNode.js",
        "npm:fbjs@0.8.4/lib/containsNode.js",
        "npm:fbjs@0.8.4/lib/isTextNode.js",
        "npm:fbjs@0.8.4/lib/isNode.js",
        "npm:react@15.3.1/lib/ReactDOMSelection.js",
        "npm:react@15.3.1/lib/getTextContentAccessor.js",
        "npm:react@15.3.1/lib/getNodeForCharacterOffset.js",
        "npm:react@15.3.1/lib/SVGDOMPropertyConfig.js",
        "npm:react@15.3.1/lib/ReactReconcileTransaction.js",
        "npm:react@15.3.1/lib/ReactInjection.js",
        "npm:react@15.3.1/lib/ReactEventListener.js",
        "npm:fbjs@0.8.4/lib/getUnboundedScrollPosition.js",
        "npm:react@15.3.1/lib/ReactDefaultBatchingStrategy.js",
        "npm:react@15.3.1/lib/ReactDOMTextComponent.js",
        "npm:react@15.3.1/lib/DOMChildrenOperations.js",
        "npm:react@15.3.1/lib/ReactMultiChildUpdateTypes.js",
        "npm:react@15.3.1/lib/Danger.js",
        "npm:fbjs@0.8.4/lib/createNodesFromMarkup.js",
        "npm:fbjs@0.8.4/lib/getMarkupWrap.js",
        "npm:fbjs@0.8.4/lib/createArrayFromMixed.js",
        "npm:react@15.3.1/lib/ReactDOMTreeTraversal.js",
        "npm:react@15.3.1/lib/ReactDOMEmptyComponent.js",
        "npm:react@15.3.1/lib/ReactDOMComponent.js",
        "npm:react@15.3.1/lib/ReactServerRenderingTransaction.js",
        "npm:react@15.3.1/lib/ReactServerUpdateQueue.js",
        "npm:react@15.3.1/lib/ReactMultiChild.js",
        "npm:react@15.3.1/lib/flattenChildren.js",
        "npm:react@15.3.1/lib/ReactChildReconciler.js",
        "npm:react@15.3.1/lib/ReactDOMTextarea.js",
        "npm:react@15.3.1/lib/LinkedValueUtils.js",
        "npm:react@15.3.1/lib/DisabledInputUtils.js",
        "npm:react@15.3.1/lib/ReactDOMSelect.js",
        "npm:react@15.3.1/lib/ReactDOMOption.js",
        "npm:react@15.3.1/lib/ReactDOMInput.js",
        "npm:react@15.3.1/lib/DOMPropertyOperations.js",
        "npm:react@15.3.1/lib/quoteAttributeValueForBrowser.js",
        "npm:react@15.3.1/lib/ReactDOMButton.js",
        "npm:react@15.3.1/lib/CSSPropertyOperations.js",
        "npm:fbjs@0.8.4/lib/memoizeStringOnly.js",
        "npm:fbjs@0.8.4/lib/hyphenateStyleName.js",
        "npm:fbjs@0.8.4/lib/hyphenate.js",
        "npm:react@15.3.1/lib/dangerousStyleValue.js",
        "npm:react@15.3.1/lib/CSSProperty.js",
        "npm:fbjs@0.8.4/lib/camelizeStyleName.js",
        "npm:fbjs@0.8.4/lib/camelize.js",
        "npm:react@15.3.1/lib/AutoFocusUtils.js",
        "npm:react@15.3.1/lib/ReactComponentBrowserEnvironment.js",
        "npm:react@15.3.1/lib/ReactDOMIDOperations.js",
        "npm:react@15.3.1/lib/HTMLDOMPropertyConfig.js",
        "npm:react@15.3.1/lib/EnterLeaveEventPlugin.js",
        "npm:react@15.3.1/lib/DefaultEventPluginOrder.js",
        "npm:react@15.3.1/lib/ChangeEventPlugin.js",
        "npm:react@15.3.1/lib/BeforeInputEventPlugin.js",
        "npm:react@15.3.1/lib/SyntheticInputEvent.js",
        "npm:react@15.3.1/lib/SyntheticCompositionEvent.js",
        "npm:react@15.3.1/lib/FallbackCompositionState.js",
        "npm:keycode@2.1.4/index.js",
        "npm:keycode@2.1.4.json",
        "npm:react-bootstrap@0.30.3/lib/TabPane.js",
        "npm:react-bootstrap@0.30.3/lib/Fade.js",
        "npm:react-overlays@0.6.6/lib/Transition.js",
        "npm:react-overlays@0.6.6.json",
        "npm:dom-helpers@2.4.0/events/on.js",
        "npm:dom-helpers@2.4.0.json",
        "npm:dom-helpers@2.4.0/util/inDOM.js",
        "npm:dom-helpers@2.4.0/transition/properties.js",
        "npm:react-bootstrap@0.30.3/lib/Table.js",
        "npm:react-bootstrap@0.30.3/lib/Tab.js",
        "npm:react-bootstrap@0.30.3/lib/SplitButton.js",
        "npm:react-bootstrap@0.30.3/lib/utils/splitComponentProps.js",
        "npm:react-bootstrap@0.30.3/lib/SplitToggle.js",
        "npm:react-bootstrap@0.30.3/lib/DropdownToggle.js",
        "npm:react-bootstrap@0.30.3/lib/Button.js",
        "npm:babel-runtime@6.11.6/core-js/object/values.js",
        "npm:core-js@2.4.1/library/fn/object/values.js",
        "npm:core-js@2.4.1/library/modules/es7.object.values.js",
        "npm:react-bootstrap@0.30.3/lib/Dropdown.js",
        "npm:react-bootstrap@0.30.3/lib/utils/PropTypes.js",
        "npm:react-bootstrap@0.30.3/lib/DropdownMenu.js",
        "npm:react-overlays@0.6.6/lib/RootCloseWrapper.js",
        "npm:react-overlays@0.6.6/lib/utils/ownerDocument.js",
        "npm:dom-helpers@2.4.0/ownerDocument.js",
        "npm:react-overlays@0.6.6/lib/utils/createChainedFunction.js",
        "npm:react-overlays@0.6.6/lib/utils/addEventListener.js",
        "npm:dom-helpers@2.4.0/events/off.js",
        "npm:babel-runtime@6.11.6/core-js/array/from.js",
        "npm:core-js@2.4.1/library/fn/array/from.js",
        "npm:core-js@2.4.1/library/modules/es6.array.from.js",
        "npm:core-js@2.4.1/library/modules/_iter-detect.js",
        "npm:core-js@2.4.1/library/modules/core.get-iterator-method.js",
        "npm:core-js@2.4.1/library/modules/_classof.js",
        "npm:core-js@2.4.1/library/modules/_create-property.js",
        "npm:core-js@2.4.1/library/modules/_is-array-iter.js",
        "npm:core-js@2.4.1/library/modules/_iter-call.js",
        "npm:react-bootstrap@0.30.3/lib/ButtonGroup.js",
        "npm:dom-helpers@2.4.0/query/contains.js",
        "npm:dom-helpers@2.4.0/activeElement.js",
        "npm:dom-helpers@2.4.0/util/babelHelpers.js",
        "npm:react-bootstrap@0.30.3/lib/Row.js",
        "npm:react-bootstrap@0.30.3/lib/ResponsiveEmbed.js",
        "npm:react-bootstrap@0.30.3/lib/Radio.js",
        "npm:react-bootstrap@0.30.3/lib/ProgressBar.js",
        "npm:react-bootstrap@0.30.3/lib/Popover.js",
        "npm:react-bootstrap@0.30.3/lib/PanelGroup.js",
        "npm:react-bootstrap@0.30.3/lib/Panel.js",
        "npm:react-bootstrap@0.30.3/lib/Collapse.js",
        "npm:react-bootstrap@0.30.3/lib/utils/capitalize.js",
        "npm:dom-helpers@2.4.0/style/index.js",
        "npm:dom-helpers@2.4.0/style/removeStyle.js",
        "npm:dom-helpers@2.4.0/style/getComputedStyle.js",
        "npm:dom-helpers@2.4.0/util/camelizeStyle.js",
        "npm:dom-helpers@2.4.0/util/camelize.js",
        "npm:dom-helpers@2.4.0/util/hyphenateStyle.js",
        "npm:dom-helpers@2.4.0/util/hyphenate.js",
        "npm:react-bootstrap@0.30.3/lib/Pagination.js",
        "npm:react-bootstrap@0.30.3/lib/PaginationButton.js",
        "npm:react-bootstrap@0.30.3/lib/Pager.js",
        "npm:react-bootstrap@0.30.3/lib/PagerItem.js",
        "npm:react-bootstrap@0.30.3/lib/PageItem.js",
        "npm:react-bootstrap@0.30.3/lib/utils/deprecationWarning.js",
        "npm:react-bootstrap@0.30.3/lib/PageHeader.js",
        "npm:react-bootstrap@0.30.3/lib/OverlayTrigger.js",
        "npm:react-bootstrap@0.30.3/lib/Overlay.js",
        "npm:react-overlays@0.6.6/lib/Overlay.js",
        "npm:react-overlays@0.6.6/lib/Position.js",
        "npm:react-overlays@0.6.6/lib/utils/getContainer.js",
        "npm:react-overlays@0.6.6/lib/utils/calculatePosition.js",
        "npm:dom-helpers@2.4.0/query/scrollTop.js",
        "npm:dom-helpers@2.4.0/query/isWindow.js",
        "npm:dom-helpers@2.4.0/query/position.js",
        "npm:dom-helpers@2.4.0/query/scrollLeft.js",
        "npm:dom-helpers@2.4.0/query/offsetParent.js",
        "npm:dom-helpers@2.4.0/query/offset.js",
        "npm:react-prop-types@0.4.0/lib/componentOrElement.js",
        "npm:react-overlays@0.6.6/lib/Portal.js",
        "npm:react-bootstrap@0.30.3/lib/NavDropdown.js",
        "npm:react-bootstrap@0.30.3/lib/NavbarBrand.js",
        "npm:react-bootstrap@0.30.3/lib/Navbar.js",
        "npm:react-bootstrap@0.30.3/lib/NavbarToggle.js",
        "npm:react-bootstrap@0.30.3/lib/NavbarHeader.js",
        "npm:react-bootstrap@0.30.3/lib/NavbarCollapse.js",
        "npm:react-bootstrap@0.30.3/lib/Grid.js",
        "npm:react-bootstrap@0.30.3/lib/ModalTitle.js",
        "npm:react-bootstrap@0.30.3/lib/ModalHeader.js",
        "npm:react-bootstrap@0.30.3/lib/ModalFooter.js",
        "npm:react-bootstrap@0.30.3/lib/ModalBody.js",
        "npm:react-bootstrap@0.30.3/lib/Modal.js",
        "npm:react-bootstrap@0.30.3/lib/ModalDialog.js",
        "npm:react-overlays@0.6.6/lib/utils/isOverflowing.js",
        "npm:react-overlays@0.6.6/lib/Modal.js",
        "npm:react-overlays@0.6.6/lib/utils/addFocusListener.js",
        "npm:react-overlays@0.6.6/lib/ModalManager.js",
        "npm:react-overlays@0.6.6/lib/utils/manageAriaHidden.js",
        "npm:dom-helpers@2.4.0/util/scrollbarSize.js",
        "npm:dom-helpers@2.4.0/class/index.js",
        "npm:dom-helpers@2.4.0/class/hasClass.js",
        "npm:dom-helpers@2.4.0/class/removeClass.js",
        "npm:dom-helpers@2.4.0/class/addClass.js",
        "npm:dom-helpers@2.4.0/events/index.js",
        "npm:dom-helpers@2.4.0/events/filter.js",
        "npm:dom-helpers@2.4.0/query/querySelectorAll.js",
        "npm:react-bootstrap@0.30.3/lib/MenuItem.js",
        "npm:react-bootstrap@0.30.3/lib/Media.js",
        "npm:react-bootstrap@0.30.3/lib/MediaRight.js",
        "npm:react-bootstrap@0.30.3/lib/MediaListItem.js",
        "npm:react-bootstrap@0.30.3/lib/MediaList.js",
        "npm:react-bootstrap@0.30.3/lib/MediaLeft.js",
        "npm:react-bootstrap@0.30.3/lib/MediaHeading.js",
        "npm:react-bootstrap@0.30.3/lib/MediaBody.js",
        "npm:react-bootstrap@0.30.3/lib/ListGroupItem.js",
        "npm:react-bootstrap@0.30.3/lib/ListGroup.js",
        "npm:react-bootstrap@0.30.3/lib/Label.js",
        "npm:react-bootstrap@0.30.3/lib/Jumbotron.js",
        "npm:react-bootstrap@0.30.3/lib/InputGroup.js",
        "npm:react-bootstrap@0.30.3/lib/InputGroupButton.js",
        "npm:react-bootstrap@0.30.3/lib/InputGroupAddon.js",
        "npm:react-bootstrap@0.30.3/lib/Image.js",
        "npm:react-bootstrap@0.30.3/lib/HelpBlock.js",
        "npm:react-bootstrap@0.30.3/lib/Glyphicon.js",
        "npm:react-bootstrap@0.30.3/lib/FormGroup.js",
        "npm:react-bootstrap@0.30.3/lib/FormControl.js",
        "npm:react-bootstrap@0.30.3/lib/FormControlStatic.js",
        "npm:react-bootstrap@0.30.3/lib/FormControlFeedback.js",
        "npm:react-bootstrap@0.30.3/lib/Form.js",
        "npm:react-bootstrap@0.30.3/lib/DropdownButton.js",
        "npm:react-bootstrap@0.30.3/lib/Col.js",
        "npm:react-bootstrap@0.30.3/lib/ControlLabel.js",
        "npm:react-bootstrap@0.30.3/lib/Clearfix.js",
        "npm:react-bootstrap@0.30.3/lib/Checkbox.js",
        "npm:react-bootstrap@0.30.3/lib/CarouselItem.js",
        "npm:react-bootstrap@0.30.3/lib/utils/TransitionEvents.js",
        "npm:react-bootstrap@0.30.3/lib/Carousel.js",
        "npm:react-bootstrap@0.30.3/lib/CarouselCaption.js",
        "npm:react-bootstrap@0.30.3/lib/ButtonToolbar.js",
        "npm:react-bootstrap@0.30.3/lib/BreadcrumbItem.js",
        "npm:react-bootstrap@0.30.3/lib/Breadcrumb.js",
        "npm:react-bootstrap@0.30.3/lib/Badge.js",
        "npm:react-bootstrap@0.30.3/lib/Alert.js",
        "npm:react-bootstrap@0.30.3/lib/Accordion.js",
        "github:3dmol/3Dmol.js@1.0.6/release/3Dmol.js",
        "github:3dmol/3Dmol.js@1.0.6.json",
        "npm:jquery@3.1.0/dist/jquery.js",
        "npm:jquery@3.1.0.json",
        "npm:@types/react-dom@0.14.15/index.d.ts!github:frankwallis/plugin-typescript@5.0.18/plugin.js",
        "npm:@types/react-dom@0.14.15.json",
        "npm:@types/react-dom@0.14.15/react-dom.server.d.ts!github:frankwallis/plugin-typescript@5.0.18/plugin.js"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@5.0.18",
      "@types/react": "npm:@types/react@0.14.32",
      "@types/react-dom": "npm:@types/react-dom@0.14.15",
      "@types/jquery": "npm:@types/jquery@1.10.30",
      "@types/react-bootstrap": "npm:@types/react-bootstrap@0.0.31"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@5.0.18": {
        "map": {
          "typescript": "npm:typescript@2.0.0"
        }
      },
      "npm:@types/react-dom@0.14.15": {
        "map": {
          "@types/react": "npm:@types/react@0.14.32"
        }
      },
      "npm:@types/react-bootstrap@0.0.31": {
        "map": {
          "@types/react": "npm:@types/react@0.14.32"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  typescriptOptions: {
    "module": "system",
    "typeCheck": "strict",
    "tsconfig": true,
    "types": [
      "react",
      "react-dom",
      "jquery",
      "react-bootstrap"
    ]
  },
  packages: {
    "molviewer": {
      "main": "molviewer.tsx",
      "defaultExtension": "tsx",
      "meta": {
        "*.tsx": {
          "loader": "plugin-typescript"
        },
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "3dmol/3Dmol.js": "github:3dmol/3Dmol.js@1.0.6",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "jquery": "npm:jquery@3.1.0",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.3.1",
    "react-bootstrap": "npm:react-bootstrap@0.30.3",
    "react-dom": "npm:react-dom@15.3.1",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "twbs/bootstrap": "github:twbs/bootstrap@4.0.0-alpha.3",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "inherits": "npm:inherits@2.0.1",
        "randombytes": "npm:randombytes@2.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.1",
        "elliptic": "npm:elliptic@6.3.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5",
        "cipher-base": "npm:cipher-base@1.0.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "des.js": "npm:des.js@1.0.0",
        "cipher-base": "npm:cipher-base@1.0.2"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.1",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "core-util-is": "npm:core-util-is@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:react@15.3.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "fbjs": "npm:fbjs@0.8.4",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:fbjs@0.8.4": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "core-js": "npm:core-js@1.2.7",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "promise": "npm:promise@7.1.1",
        "immutable": "npm:immutable@3.8.1"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.6.0",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:node-fetch@1.6.0": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.1"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:stream-http@2.3.1": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:react-bootstrap@0.30.3": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "keycode": "npm:keycode@2.1.4",
        "dom-helpers": "npm:dom-helpers@2.4.0",
        "react-prop-types": "npm:react-prop-types@0.4.0",
        "warning": "npm:warning@3.0.0",
        "invariant": "npm:invariant@2.2.1",
        "react-overlays": "npm:react-overlays@0.6.6",
        "classnames": "npm:classnames@2.2.5",
        "uncontrollable": "npm:uncontrollable@4.0.3"
      }
    },
    "npm:react-prop-types@0.4.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:react-overlays@0.6.6": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "dom-helpers": "npm:dom-helpers@2.4.0",
        "react-prop-types": "npm:react-prop-types@0.4.0",
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:uncontrollable@4.0.3": {
      "map": {
        "invariant": "npm:invariant@2.2.1"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:babel-runtime@6.11.6": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
    "github:twbs/bootstrap@4.0.0-alpha.3": {
      "map": {
        "jquery": "npm:jquery@2.2.4",
        "tether": "github:HubSpot/tether@1.3.4"
      }
    }
  }
});
