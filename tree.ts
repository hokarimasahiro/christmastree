namespace tree{
    /**
     * もみの木を表示する
     */
    //% blockID="もみの木" block="もみの木 木の色:%stem 葉の色:%leef 空の色:%sky"
    export function firTree(stem:number,leef:number,sky:number){
        strip.showColor(leef);
        let 幹 = [203,204,209,211,212,214,218,219,220,221,227,228,235,236,243,244,251,252];
        for (let neo of 幹) {
            strip.setPixelColor(neo, stem);
        }
        let 空 = [232,233,234,237,238,239,240,241,242,245,246,247,248,249,250,253,254,255];
        for (let neo of 空) {
            strip.setPixelColor(neo, sky);
        }
        空 = [0,1,2,3,4,5,6,7];
        for (let neo of 空) {
            strip.setPixelColor(neo, sky);
        }
        空 = [0,1,2,5,6,7];
        for (let neo of 空) {
            strip.setPixelColor(neo + 8, sky);
            strip.setPixelColor(neo + 16, sky);
            strip.setPixelColor(neo + 24, sky);
            strip.setPixelColor(neo + 32, sky);
            strip.setPixelColor(neo + 40, sky);
            strip.setPixelColor(neo + 48, sky);
            strip.setPixelColor(neo + 56, sky);
        }
        空 = [0,1,6,7];
        for (let neo of 空) {
            strip.setPixelColor(neo + 64, sky);
            strip.setPixelColor(neo + 72, sky);
            strip.setPixelColor(neo + 80, sky);
            strip.setPixelColor(neo + 88, sky);
            strip.setPixelColor(neo + 96, sky);
            strip.setPixelColor(neo + 104, sky);
            strip.setPixelColor(neo + 112, sky);
        }
        空 = [0, 7]
        for (let neo of 空) {
            strip.setPixelColor(neo + 120, sky);
            strip.setPixelColor(neo + 128, sky);
            strip.setPixelColor(neo + 136, sky);
            strip.setPixelColor(neo + 144, sky);
            strip.setPixelColor(neo + 152, sky);
            strip.setPixelColor(neo + 160, sky);
            strip.setPixelColor(neo + 168, sky);
        }
        strip.show()

    }
}