export default Rassam;
export declare class Rassam {
    constructor(rassam_json: any);
    html_element: any;
    article_json: any;
    draw(): void;
    getRassamContainer() : HTMLDivElement;
    getRassamCanvas() : HTMLCanvasElement;
    getRassamFrontCanvasContext() : any;
    getRassamFrontCanvasContextPixels() : any;
    getRassamBackCanvasContext() : any;
    getRassamBackCanvasContextPixels() : any;
}
