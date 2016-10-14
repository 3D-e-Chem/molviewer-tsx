/* import all html files as stings */
declare module '*.html' {
    const __html__: string;
    export default __html__;
}
