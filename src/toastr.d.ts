// Typings for react-redux-toaster@^5.0.0
declare module 'react-redux-toastr' {
    import * as React from "react";
    import * as Redux from "redux";

    interface ToastrProps {
        /**
         * Timeout in miliseconds.
         */
        timeOut?: number,
        /**
         * Show newest on top or bottom.
         */
        newestOnTop?: boolean,
        /**
         * Position of the toastr: top-left, top-center, top-right, bottom-left, bottom-center and bottom-right
         */
        position?: string,
        confirmText?: ConfirmText
    }

    interface ConfirmText {
        okText: string,
        cancelText: string
    }

    /**
     * Toastr react component.
     */
    export default class ReduxToastr extends React.Component<ToastrProps, {}>{

    }

    const reducer: Redux.Reducer<any>;

    interface ActionOptions {
        id?: string,
        type: 'light' | 'message' | 'info' | 'success' | 'warning' | 'error',
        title: string,
        message: string,
        options?: object
    }

    namespace actions {
        function add(toastr: ActionOptions): Redux.Action;
    }

}